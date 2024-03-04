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

import { StatusBar } from "expo-status-bar";
import { WebView } from "react-native-webview";
import { useLocalSearchParams } from "expo-router";

const songPreview = ({ route }) => {
  const params = useLocalSearchParams();
  console.log(params);
  return <WebView source={{ uri: params.previewUrl }} />;
};

export default songPreview;
