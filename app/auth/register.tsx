import React, { useState } from "react";
import { View, SafeAreaView, Alert, ActivityIndicator, Pressable } from "react-native";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
// import Purchases from "react-native-purchases";

// Expo
import { router, useLocalSearchParams } from "expo-router";

// Firebase
// import auth from "@react-native-firebase/auth";

// UI
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Text } from "~/components/ui/text";

// Components
// import SignInWithApple from "~/components/SignInWithApple";
// import SignInWithGoogle from "~/components/SignInWithGoogle";

// Helpers
import { getRegisterErrorMessage } from "~/helpers/firebase";

type SearchParams = {
  redirect?: string;
};

const RegisterScreen = () => {
  const { redirect } = useLocalSearchParams<SearchParams>();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      setIsLoading(true);

      // const { user, additionalUserInfo } = await auth().createUserWithEmailAndPassword(
      //   email,
      //   password
      // );
      // await Purchases.logIn(user.uid);

      router.navigate(redirect ?? "/");
    } catch (error: any) {
      Alert.alert("Error", getRegisterErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  const isLoginDisabled = isLoading;

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingScrollView>
        <View className="flex-1 items-start pt-8 w-full px-4">
          <Text className="text-3xl font-bold">Sign Up 🚀</Text>
          <Text className="mt-2 text-gray-500">Create an account to get started.</Text>
          <View className="w-full mt-4">
            <Label nativeID="email">Email</Label>
            <Input
              placeholder="Email"
              nativeID="email"
              keyboardType="email-address"
              value={email}
              autoCapitalize="none"
              onChangeText={setEmail}
            />
          </View>
          <View className="w-full mt-4">
            <Label nativeID="password">Password</Label>
            <Input
              placeholder="Password"
              nativeID="password"
              secureTextEntry
              autoCapitalize="none"
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <Button disabled={isLoginDisabled} onPress={handleRegister} className="mt-4 w-full">
            {isLoading ? <ActivityIndicator /> : <Text>Sign Up</Text>}
          </Button>

          <View className="flex flex-row items-center justify-center w-full mt-2">
            <Text className="text-sm text-gray-500">Already have an account?</Text>
            <Pressable onPress={() => router.navigate("/auth/login")}>
              <Text className="text-sm underline text-blue-500 ml-2">Log in here</Text>
            </Pressable>
          </View>

          <View className="flex flex-row items-center gap-x-4 mt-8">
            <View className="flex-1 border-t border-gray-200"></View>
            <Text className="mx-2 text-gray-500">Or</Text>
            <View className="flex-1 border-t border-gray-200"></View>
          </View>

          {/* <View className="flex flex-col w-full mt-8 gap-y-2">
            {Platform.OS === "ios" && <SignInWithApple setIsLoading={setIsLoading} />}
            <SignInWithGoogle />
          </View> */}
        </View>
      </KeyboardAvoidingScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
