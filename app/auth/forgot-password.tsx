import React, { useState } from "react";
import { View, SafeAreaView, ActivityIndicator } from "react-native";
// import { router } from "expo-router";

// Firebase
// import auth from "@react-native-firebase/auth";

// UI
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

// Helpers
// import { getPasswordResetErrorMessage } from "~/helpers/firebase";

const ForgotPasswordScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleResetPassword = async () => {
    setIsLoading(true);

    // auth()
    //   .sendPasswordResetEmail(email)
    //   .then(() => {
    //     Alert.alert("Success", "Password reset email sent successfully. Please follow the instructions in the email to reset your password.");
    //     router.navigate('/');
    //   })
    //   .catch((error) => {
    //     Alert.alert("Error", getPasswordResetErrorMessage(error));
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-start pt-8 w-full px-4">
        <Text className="text-3xl font-bold">Forgot Password? 🤔</Text>
        <Text className="mt-2 text-gray-500">Enter your email to reset your password.</Text>
        <View className="w-full mt-4">
          <Label nativeID="email">Email</Label>
          <Input
            placeholder="Email"
            nativeID="email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Button
          onPress={handleResetPassword}
          className="mt-4 w-full"
          disabled={!email || isLoading}
        >
          {isLoading ? <ActivityIndicator /> : <Text>Reset Password</Text>}
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
