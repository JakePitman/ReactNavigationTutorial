import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  NavigationContainer,
  StackActionHelpers,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const HomeScreen = ({ navigation, route }: { navigation: any; route: any }) => {
  const selectedOption = route.params?.option;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Text>
        {selectedOption
          ? `You selected ${selectedOption}`
          : "You haven't made a selection yet"}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.setOptions({ title: "Home Screen" })}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Reset screen title</Text>
      </TouchableOpacity>
    </View>
  );
};

const DetailsScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      {["1", "2", "3"].map((option) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Home", { option })}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ route }) => ({ title: route.params?.option })}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 100,
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  buttonText: {
    color: "white",
  },
});
