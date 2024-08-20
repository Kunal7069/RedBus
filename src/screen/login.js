import React, { useState, useRef, useEffect } from "react";
import { View, TouchableOpacity, Text, Image, TextInput } from "react-native";
import map_mask from "../assets/map_mask.png";

const Login = ({ navigation }) => {
  return (
    <View className="flex-1 bg-primary-bg justify-between py-10">
      {/* <Image source={map_mask} className="w-full h-[300px] absolute" /> */}
      <View className="flex gap-[3rem] px-6">
        <Text className="text-black text-[30px] font-semibold pt-10">
          Enter Mobile Number
        </Text>
        <Text className="text-black text-[16px] font-semibold pt-4">
          We will send a confirmation code to your phone number
        </Text>
        <View className="flex pt-10">
          <TextInput
            type="tel"
            placeholder="Enter Mobile Number"
            keyboardType="phone-pad"
            className=" bg-primary-input w-full py-4 px-4 rounded-[16px] text-[20px]"
            maxLength={10}
          />
        </View>
      </View>
      <View className="flex px-6">
        <Text className="text-primary-para pb-8">
          By clicking continue, you are accepting our{" "}
          <Text className="text-black font-semibold underline">
            Terms & Conditions
          </Text>{" "}
          and{" "}
          <Text className="text-black font-semibold underline ">
            Privacy Policy
          </Text>
          .
        </Text>
        <TouchableOpacity
          variant="solid"
          action="primary"
          className="bg-primary-btn w-full py-3 rounded-[16px] text-white items-center"
          onPress={() => navigation.navigate("verify_otp")}
        >
          <Text className="text-white text-[20px] font-semibold">Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;
