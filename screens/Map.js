import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Button,
} from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import LottieView from "lottie-react-native";
import { RoundedButton } from "../components/common/Button";

export const MapScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const _mapView = useRef(null);
  if (location) {
    console.log(location.coords.latitude);
  }
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (!location) {
    return (
      <LottieView
        autoPlay
        style={{
          alignSelf: "center",
        }}
        source={require("../assets/loading.json")}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <MapView
          ref={_mapView}
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsMyLocationButton={true}
          showsUserLocation={true}
        >
          <RoundedButton
            text={"Current Location"}
            color="blue"
            buttonStyle={styles.button}
            onPress={() => {
              _mapView.current?.animateToRegion(
                {
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                },
                1000
              );
            }}
          />
        </MapView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flex: 1,
  },
  button: {
    position: "absolute", //use absolute position to show button on top of the map
    bottom: "20%", //for center align
    alignItems: "flex-end", //for align to right
    backgroundColor: "#DDDDDD",
    height: 35,
    borderRadius: 20,
    width: 150,
    marginLeft: 190,
  },
  text: {
    alignSelf: "center",
  },
});
