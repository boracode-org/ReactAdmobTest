import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AdMobInterstitial, AdMobBanner } from "expo-ads-admob";

export default class App extends React.Component {
  bannerError = () => {
    console.log("Banner is not properly loading");
  };

  bannerAdRecieved = () => {
    console.log("Success, you were wow");
  };

  showInterstitial = async () => {
    AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/1033173712"); // Test ID, Replace with your-admob-unit-id

    await AdMobInterstitial.requestAdAsync()
      .then(() => {
        return new Promise(resolve => {
          setTimeout(async function() {
            resolve("First Add");
            await AdMobInterstitial.showAdAsync();
          }, 5000);
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
  bannerAdReceived = () => {
    console.log("Nah wawooo, you did it..");
  };
  componentDidMount() {
    this.showInterstitial();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>InterstialAdd One</Text>
        <Text></Text>
        <Text></Text>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          onDidFailToReceiveAdWithError={this.bannerError}
          onAdViewDidReceiveAd={this.bannerAdReceived}
          style={styles.staticBanner}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  staticBanner: {
    paddingTop: 100
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
