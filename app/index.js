import {
  Button,
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  View,
  Image,
  FlatList,
} from "react-native";
import { useSpotifyAuth, useSpotifyTracks } from "../utils";
import { Themes, Images } from "../assets/Themes";
import Song from "./song";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router/stack";
import { Link } from "expo-router";
import PlayButton from "../utils/playButton";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const { token, getSpotifyAuth } = useSpotifyAuth(); //if null - return auth button; else return list of tracks
  const tracks = useSpotifyTracks(token);
  if (tracks) {
    //console.log(tracks[0]);
  }

  const renderItem = ({ item, index }) => {
    // const playButton = (
    //   <Link href={{ pathname: "songScreen", params: { url: item.previewUrl } }}>
    //     <View style={styles.playButton}>
    //       <PlayButton />
    //     </View>
    //   </Link>
    // );

    return (
      <Link
        href={{ pathname: "songScreen", params: { url: item.externalUrl } }}
      >
        <Song
          index={index + 1}
          image={item.imageUrl}
          songTitle={item.songTitle}
          artist={item.songArtists[0].name}
          album={item.albumName}
          duration={item.duration}
          externalUrl={item.externalUrl}
          previewUrl={item.previewUrl}
          // previewUrl={item}
          //playButton={playButton}
        />
      </Link>
    );
  };

  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={styles.container}>
        {!token && (
          <Pressable
            style={styles.connectButton}
            onPress={() => getSpotifyAuth()} // Call getSpotifyAuth when pressed.
          >
            <Image source={Images.spotify} style={styles.logo} />
            <Text style={styles.connectText}>CONNECT WITH SPOTIFY</Text>
          </Pressable>
        )}

        {token && (
          <>
            <View style={styles.header}>
              <Image source={Images.spotify} style={styles.headerLogo} />

              <Text style={styles.headerText}> My Top Tracks </Text>
            </View>

            <FlatList
              style={styles.FlatListStyle}
              data={tracks}
              //renderItem={({ item }) => renderItem(item)}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </>
        )}
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    //flexDirection: 'row',
    flex: 1,
  },

  connectButton: {
    backgroundColor: Themes.colors.spotify,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 40,
    height: 50,
    padding: 10,
    width: "60%",
    alignSelf: "center",
  },

  connectText: {
    fontSize: 16,
    color: Themes.colors.white,
    marginHorizontal: 10,
  },
  textStyle: {
    color: Themes.colors.white,
  },
  logo: {
    height: 18,
    width: 18,
  },
  sampleText: {
    color: "white",
    fontSize: 16,
  },

  FlatListStyle: {
    width: "100%",
  },

  header: {
    height: "10%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  headerLogo: {
    height: 30,
    width: 30,
  },

  headerText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: "2%",
  },
});
