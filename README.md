# Cat Facts Image Generator 🐱

## Overview 📋

This project fetches a random cat fact and generates a custom cat image based on the first three words of the fact. The generated cat image is personalized with the words extracted from the fact.

## Features 🌟

- Fetches random cat facts.
- Generates cat images based on the first three words of a fact.
- Uses the [Cataas API](https://cataas.com) to generate fun cat images.

## Tech Stack 💻

- **TypeScript:** For type-safe JavaScript code.
- **React:** User interface framework.
- **Fetch API:** For making HTTP requests to the Cataas service.

## Project Structure 🗂️

```plaintext


src/
├── hooks/
│   ├── useCatImg.ts        # Custom hook to fetch and manage the cat image URL
│   └── useFact.ts          # Custom hook to fetch and manage the cat facts
├── services/
│   ├── catImage.ts         # Service function to handle the cat image API request
│   └── facts.ts            # Service function to handle the cat facts API request
├── components/
│   └── CatFact.tsx         # Main component that displays the cat fact and image
└── App.tsx                 # Root component of the React application

```

## Getting Started 🚀
