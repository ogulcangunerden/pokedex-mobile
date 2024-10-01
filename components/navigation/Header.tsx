import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";

// Expo
import { useNavigation } from "expo-router";

// UI
import { Text } from "~/components/ui/text";
// import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

// Hooks
// import useUser from "~/hooks/useUser";

// Components
// import UserBalance from "../UserBalance";

// Icons
import { ChevronLeft as ChevronLeftIcon } from "~/lib/icons/ChevronLeft";
// import { UserCircle as UserCircleIcon } from "~/lib/icons/UserCircle";

// Props
type Props = {
  hideBack?: boolean;
} & any;

const Header = ({ hideBack }: Props) => {
  // const { user, avatarURL } = useUser();
  const { canGoBack, goBack } = useNavigation();

  const handlePress = () => {
    // router.push(user ? "/profile" : "/auth/login");
  };

  return (
    <SafeAreaView className="bg-background mt-16">
      <View className="flex flex-col items-start gap-y-2 bg-background w-full pt-2 px-4">
        {canGoBack() && !hideBack && (
          <TouchableOpacity onPress={goBack} className="flex flex-row items-center p-1 rounded-md">
            <ChevronLeftIcon className="stroke-foreground" height={30} width={30} />
            <Text className="text-xl">Back</Text>
          </TouchableOpacity>
        )}
        <View className="flex flex-row items-center justify-between gap-x-8 bg-background w-full">
          <Text className="text-4xl font-bold">Header</Text>
          {/* {user ? (
            <View className="flex flex-row items-center">
              <UserBalance />
              <TouchableOpacity onPress={handlePress} className="ml-2">
                <Avatar
                  className="w-10 h-10 bg-gray-300"
                  alt={user.displayName || user.email || user.uid}
                >
                  <AvatarImage source={{ uri: avatarURL }} />
                  <AvatarFallback>
                    <Text>
                      {user.displayName
                        ? `${user.displayName[0]}${user.displayName[1]}`.toUpperCase()
                        : `?`}
                    </Text>
                  </AvatarFallback>
                </Avatar>
              </TouchableOpacity>
            </View>
          ) : (
            <UserCircleIcon
              onPress={handlePress}
              width={36}
              height={36}
              className="stroke-foreground"
            />
          )} */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
