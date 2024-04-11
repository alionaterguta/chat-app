import Start from "./components/start";
import Chat from "./components/chat";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";

import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";
import { LogBox, Alert } from "react-native";
import { getStorage } from "firebase/storage";

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

const Stack = createNativeStackNavigator();

const App = () => {
  // Define a new state that represents the network connectivity status
  const connectionStatus = useNetInfo();

  // useEffect to display an alert popup if no internet connection
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  // The web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBbGBqyhFhukNqlRwDvuzK0D7ySSIp8T-Q",
    authDomain: "chatapp-aaafb.firebaseapp.com",
    projectId: "chatapp-aaafb",
    storageBucket: "chatapp-aaafb.appspot.com",
    messagingSenderId: "1050968563314",
    appId: "1:1050968563314:web:10b701bfbf8cf8a9e16ceb",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  // Initialize Firebase Storage handler
  const storage = getStorage(app);

  return (
    /* Wrap the app with NavigationContainer */
    <NavigationContainer>
      {/* Create a stack navigator with initial route Start  */}
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              isConnected={connectionStatus.isConnected}
              db={db}
              storage={storage}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
