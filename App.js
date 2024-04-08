import Start from "./components/start";
import Chat from "./components/chat";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "[2024-04-07T20:44:48.130Z]  @firebase/auth: Auth (10.3.1)",
]);

const Stack = createNativeStackNavigator();

const App = () => {
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

  return (
    /* Wrap the app with NavigationContainer */
    <NavigationContainer>
      {/* Create a stack navigator with initial route Start  */}
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat {...props} db={db} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
