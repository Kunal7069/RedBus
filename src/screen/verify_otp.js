import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import map_mask from "../assets/map_mask.png";

const Verify_otp = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]);

  return (
    <View className="flex-1 bg-primary-bg justify-between py-10">
      <Image source={map_mask} className="w-full h-[300px] absolute" />
      <View className="flex gap-[3rem] px-6 pt-10">
        <Text className="text-black text-[34px] font-semibold text-center pt-10">
          Enter the Code
        </Text>
        <Text className="text-black text-[16px] font-semibold text-center pt-4">
          A confirmation code has been sent to your phone number: +91 9898989898
        </Text>
        <View className="flex flex-row justify-between items-center pt-10 pb-4">
          {otp.map((digit, index) => (
            <TextInput
              ref={(el) => (inputRefs.current[index] = el)}
              type="tel"
              keyboardType="phone-pad"
              className="bg-primary-input py-4 w-[17%] border-[1px] border-black rounded-[16px] text-center text-[20px]"
              maxLength={1}
            />
          ))}
        </View>
        <Text className="text-primary-para text-center">
          Didn't you receive the OTP?{" "}
          <Text className="text-black font-semibold">Resend OTP</Text>
        </Text>
      </View>
      <View className="flex px-6 items-center">
        <TouchableOpacity
          variant="solid"
          action="primary"
          className="bg-primary-btn w-full py-4 rounded-[10px] text-white items-center"
          onPress={() => navigation.navigate("home")}
        >
          <Text className="text-white text-[20px] font-semibold">Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Verify_otp;
