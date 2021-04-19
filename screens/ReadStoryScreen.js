import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { Header } from "react-native-elements";
import db from "../config";

export default class ReadStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      inputSearch: "",
      search: "",
      searchedTitle: "",
      searchedAuthor: "",
      searchedStory: "",
    };
  }
  searchStory = async () => {
    this.setState({ search: this.state.inputSearch });
    const storyRef = db
      .collection("stories")
      .where("title", "==", this.state.search)
      .get();
    var story = "";
    if (storyRef.docs.length === 0) {
      Alert.alert("", "There is no such story with that title");
      this.setState({ search: "" });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView>
        <View>
          <Header
            backgroundColor={"white"}
            centerComponent={{
              text: "Story Hub",
              style: {
                color: "blue",
                height: 50,
                borderColor: "red",

                fontWeight: "bold",
                fontSize: 40,
                textAlign: "center",
                alignSelf: "center",
                justifyContent: "center",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              },
            }}
          />
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <TextInput
              style={{
                width: "87%",
                height: 50,
                backgroundColor: "white",
                borderWidth: 8,
                borderColor: "green",
                color: "black",
                marginLeft: 30,
                marginTop: 100,
                fontSize: 18,
                borderRadius: 12,
                borderWidth: 2,
              }}
              placeholder="Search Here"
              autoCapitalize="none"
              onChangeText={(text) => this.setState({ inputSearch: text })}
              value={this.state.search}
            />
            <TouchableOpacity
              onPress={async () => {
                this.searchStory();
              }}
            ></TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
