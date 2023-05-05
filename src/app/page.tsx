"use client";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const promptInput = useRef<HTMLInputElement>(null);

  const handlePrompt = () => {
    if (promptInput && promptInput.current) {
      const prompt = promptInput.current.value;
      setLoading(true);
      fetchEventSource("http://localhost:3000/api", {
        method: "POST",
        body: JSON.stringify({ prompt }),
        onmessage: (event) => {
          setLoading(false);
          if (event.data === "DONE") {
          } else {
            setAnswer((prev) => prev + event.data);
          }
        },
      });
    }
  };

  // focus input on page load
  useEffect(() => {
    if (promptInput && promptInput.current) {
      promptInput.current.focus();
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen w-[500px] ml-auto mr-auto">
      <div className="flex items-center justify-center w-full">
        <div className="mr-4">
          <label htmlFor="prompt" className="sr-only">
            Prompt
          </label>
          <input
            ref={promptInput}
            type="text"
            name="prompt"
            id="prompt"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handlePrompt();
              }
            }}
            className="block rounded-md border-0 w-[300px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Write a poem about trees"
          />
        </div>
        <div>
          <button
            onClick={handlePrompt}
            type="button"
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Prompt it!
          </button>
        </div>
      </div>
      <div className="bg-gray-800 p-4 w-full mt-8 min-h-[300px] text-gray-50 rounded-md">
        {loading ? "..." : answer}
      </div>
    </main>
  );
}
