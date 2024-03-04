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
//import { useSpotifyAuth, useSpotifyTracks } from "./utils";
import { Themes } from "../assets/Themes";
import React from "react";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";
import { Ionicons } from "@expo/vector-icons";
import PlayButton from "../utils/playButton";
import { WebView } from "react-native-webview";
import { Link } from "expo-router";

const Song = ({
  onPlay,
  image,
  songTitle,
  artist,
  album,
  duration,
  previewUrl,
}) => {
  //console.log(previewUrl);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* <Link href={`/songScreen?url=${encodeURIComponent(previewUrl)}`}>
          <PlayButton />
        </Link> */}

        <Link
          href={{
            pathname: "/songPreview",
            params: { previewUrl: previewUrl },
          }}
        >
          <PlayButton />
        </Link>
      </View>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.nameArtist}>
        <Text style={styles.songTitle} numberOfLines={1}>
          {songTitle}
        </Text>
        <Text style={styles.artists} numberOfLines={1}>
          {artist}
        </Text>
      </View>
      <Text style={styles.album} numberOfLines={1}>
        {album}
      </Text>
      <Text style={styles.duration} numberOfLines={1}>
        {millisToMinutesAndSeconds(duration)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderColor: "white",
    // borderWidth: 1,
    backgroundColor: Themes.colors.background,
    //justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    //flex: 1,
    padding: 16,
    height: 70,
  },

  index: {
    color: Themes.colors.gray,
    fontSize: 16,
    padding: 10,

    // width: "5%",
  },

  songTitle: {
    color: Themes.colors.white,
    fontSize: 16,
    paddingHorizontal: 10,
  },

  album: {
    color: Themes.colors.white,
    fontSize: 16,
    width: "25%",
  },

  image: {
    //width: 70,
    height: "100%",
    width: "15%",
  },

  artists: {
    color: Themes.colors.gray,
    fontSize: 16,
    paddingHorizontal: 10,
  },

  duration: {
    color: Themes.colors.white,
    fontSize: 16,
  },

  nameArtist: {
    // borderColor: "white",
    // borderWidth: 1,
    width: "40%",
  },

  playButton: {
    padding: 10,
  },
});

export default Song;
