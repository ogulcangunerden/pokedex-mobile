import React from "react";
import { SafeAreaView } from "react-native";

// Use Cases
// import useSendVerificationEmailUseCase from "~/use-cases/auth/sendVerificationEmailUseCase";
// import useDeleteAccountUseCase from "~/use-cases/auth/deleteAccountUseCase";
// import useLogoutUseCase from "~/use-cases/auth/logoutUseCase";

// UI
// import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
// import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
// import { CheckCircle as CheckIcon } from "~/lib/icons/Check";

// Hooks
// import useUser from "~/hooks/useUser";

const Profile = () => {
  // const { user, avatarURL } = useUser();
  // const { isLoggingOut, logout } = useLogoutUseCase();
  // const { deleteAccount, isDeletingAccount } = useDeleteAccountUseCase();
  // const { sendVerificationEmail, isVerifyingEmail } = useSendVerificationEmailUseCase();

  // if (isLoggingOut || isDeletingAccount) {
  //   return (
  //     <SafeAreaView className="flex-1 items-center justify-center">
  //       <ActivityIndicator size="large" />
  //     </SafeAreaView>
  //   );
  // }

  // if (!user) {
  //   return null;
  // }

  return (
    <SafeAreaView className="flex-1 m-5">
      <Text className="text-4xl font-bold">Profile</Text>
      {/* <View className="flex flex-row items-center gap-x-4 mt-4">
        <Avatar className="size-20 bg-gray-300" alt={user.displayName || user.email || user.uid}>
          <AvatarImage
            source={{
              uri: avatarURL,
            }}
          />
          <AvatarFallback>
            <Text style={{ fontSize: 20 }}>
              {user.displayName
                ? `${user.displayName[0]}${user.displayName[1]}`.toUpperCase()
                : `?`}
            </Text>
          </AvatarFallback>
        </Avatar>
        <Text className="text-lg font-semibold flex-shrink">
          {user.displayName || user.email || user.uid}
        </Text>
      </View>
      {user.emailVerified ? (
        <View className="flex flex-row gap-x-2 items-center bg-green-100 p-4 mt-8 rounded-md">
          <CheckIcon className="stroke-green-700" />
          <Text className="text-green-700 font-bold">Email Verified</Text>
        </View>
      ) : (
        <View className="flex flex-col bg-orange-100 p-4 mt-8 rounded-md">
          <Text className="text-orange-700 font-bold">Warning</Text>
          <Text className="text-orange-700 mt-2">
            Your email is not verified. Please check your inbox for a verification email
          </Text>
          <Button
            className="mt-4"
            variant="outline"
            size="sm"
            disabled={isVerifyingEmail}
            onPress={sendVerificationEmail}
          >
            {isVerifyingEmail ? <ActivityIndicator /> : <Text>Resend Verification Email</Text>}
          </Button>
        </View>
      )}
      <View className="flex-1"></View>
      <View className="flex flex-col gap-y-4">
        <Button disabled={isLoggingOut} variant="outline" onPress={logout}>
          {isLoggingOut ? <ActivityIndicator /> : <Text>Logout</Text>}
        </Button>
        <Button disabled={isDeletingAccount} variant="destructive" onPress={deleteAccount}>
          {isDeletingAccount ? <ActivityIndicator /> : <Text>Delete Account</Text>}
        </Button>
      </View> */}
    </SafeAreaView>
  );
};

export default Profile;
