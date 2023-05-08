# OpenAI Chat Stream with Langchain and Nextjs

Example code for an app that makes use of [Langchains](https://js.langchain.com/docs/) [OpenAIChat](https://js.langchain.com/docs/api/llms_openai/classes/OpenAIChat). The stream is managed by a [CallbackManager](https://js.langchain.com/docs/api/callbacks/classes/CallbackManager). And the prompt is a basic [HumanChatMessage](https://js.langchain.com/docs/api/schema/classes/HumanChatMessage).

This is part 1 of a Langchain+Nextjs series:

Part 2: https://github.com/DennisKo/langchain-2-emojify

Part 3: https://github.com/DennisKo/langchain-3-chat-ui

Disclaimer: The code in this series is not meant for production or be taken as an example for best practices. It is meant to be be a starting point and conceptual example of how to implement those kind of technologies. There are bugs and no tests! You have been warned! ;)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
