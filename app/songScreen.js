import {
  Button,
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  View,
  Image,
  Dimensions,
} from "react-native";
import { WebView } from "react-native-webview";
import { useLocalSearchParams } from "expo-router";
import { setStatusBarStyle } from "expo-status-bar";
import { useEffect } from "react";

const songScreen = ({ route }) => {
  const params = useLocalSearchParams();
  console.log(params.url);
  //return <WebView source={{ uri: params.url }} />;

  // return (
  //   <>
  //     <StatusBar style="dark" />
  //     <WebView source={{ uri: params.url }} />
  //   </>
  // );

  useEffect(() => {
    setStatusBarStyle("light"); // Set the status bar style to 'dark'
    // You can change 'dark' to 'light' or 'auto' as needed
  }, []);

  return <WebView source={{ uri: params.url }} />;
};

export default songScreen;
