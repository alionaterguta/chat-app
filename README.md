## Project description

A mobile chat application built with React Native. The app will provide users with a chat interface and options to share images and their location.

## Project Features

- Send and receive messages in real-time

- Share location

- Take a photo and share

- Choose a photo from library and share

- Customize theme

### Getting Started

- **Technologies**

  - React Native
  - Expo and Expo Go App
  - Google Firestore Database

- **Libraries**
  - Gifted Chat library
  - Expo ImagePicker
  - Expo MediaLibrary
  - Expo Location

To run this app locally, you'll need to follow these steps:

- Clone this repository.
- Set up Expo in your development environment:

  - Install Expo and Expo CLI, as this is the platform you’ll use to build your app;

    npm install -g expo-cli

  - Install Expo Go app on your mobile device, so that you can test your app on your own mobile device;

    Search for the Expo Go app in the relevant app store for your device (iOS or Android)

  - Create an Expo account.

### Prerequisites

Before installing Expo, ensure you have a suitable version of Node installed. At the time of writing, Expo only supports Node 16.. at max.

Node.js: Download and install Node.js. For this you can use the nvm tool https://github.com/nvm-sh/nvm

    nvm install 16.19.0
    nvm use 16.19.0
    nvm alias default 16.19.0

Navigate to the chat-app directory and install all dependencies:

    npm install

## Setting the Firestore Database

- Sign up into Google Firebase

- Click on Firestore Database and create or add new project.

      npm install firebase@9.13.0 --save

- Settings > Project Settings > General tab > Your Apps > Firestore for Web and generate project configurations

- Change Rules:

        allow read, write: if false;

        allow read, write: if true;

- In App.js file copy firebaseConfig variable:

      const firebaseConfig = {
      apiKey: "your-api-key",
      authDomain: "your-authdomain",
      projectId: "your-project-id",
      storageBucket: "your-storage-bucket",
      messagingSenderId: "your-messaging-sender-id",
      appId: "your-app-id",
       };

  - Initialize Firebase

        const app = initializeApp(firebaseConfig);

## Start the App

- Use the Expo Go App on your mobile device to check the UI

- Initialize the app in your terminal:

      npx expo start
