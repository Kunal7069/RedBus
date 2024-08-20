import "nativewind";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import notify from "../assets/icon/notification.png";
import menu from "../assets/icon/menu.png";

const Header = ({ navigation }) => {
  const User_name = "User";

  return (
    <View className="w-full flex flex-row justify-between items-center py-6 bg-transparent px-6">
      <Text className="text-white font-bold text-[24px]">
        Hello {User_name} !
      </Text>
      <View className="flex flex-row gap-4 items-center">
        <TouchableOpacity onPress={() => navigation.navigate("")}>
          <Image source={notify} alt="" className="w-[20px] h-[20px]" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("")}>
          <Image source={menu} alt="" className="w-[20px] h-[20px]" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;
