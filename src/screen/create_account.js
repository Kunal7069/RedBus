import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import map_mask from "../assets/map_mask.png";
import name from "../assets/icon/name.png";
import phone from "../assets/icon/phone.png";
import mail from "../assets/icon/mail.png";
import gender from "../assets/icon/gender.png";

const Create_account = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState("");

  return (
    <View className="flex-1 bg-primary-bg justify-between py-10">
      <Image source={map_mask} className="w-full h-[300px] absolute" />
      <View className="flex gap-[3rem] px-6">
        <Text className="text-black text-[34px] font-semibold pt-6 text-center">
          Let's Get Started
        </Text>
        <Text className="text-black text-[16px] font-semibold pt-4 text-center">
          Tell us a bit about yourself to finish creating your account.
        </Text>
        <View className="flex pt-6 gap-2">
          <Text className="text-primary-para text-[16px]">Name</Text>
          <View className="flex flex-row items-center bg-primary-input rounded-[16px] py-3 px-4">
            <Image source={name} alt="" className="w-[30px] h-[30px]" />
            <TextInput
              type="text"
              placeholder="Enter Name"
              className="w-full text-[16px] pl-4"
              maxLength={26}
            />
          </View>
        </View>
        <View className="flex pt-5 gap-2">
          <Text className="text-primary-para text-[16px]">Phone Number</Text>
          <View className="flex flex-row items-center bg-primary-input rounded-[16px] py-3 px-4">
            <Image source={phone} alt="" className="w-[30px] h-[30px]" />
            <TextInput
              type="text"
              placeholder="Enter Phone Number"
              className="w-full text-[16px] pl-4"
              maxLength={10}
            />
          </View>
        </View>
        <View className="flex pt-5 gap-2">
          <Text className="text-primary-para text-[16px]">Email</Text>
          <View className="flex flex-row items-center bg-primary-input rounded-[16px] py-3 px-4">
            <View className="w-[30px] h-[30px] items-center justify-center">
              <Image source={mail} alt="" className="w-[22px] h-[16px]" />
            </View>
            <TextInput
              type="text"
              placeholder="Enter Email"
              className="w-full text-[16px] pl-4"
              maxLength={26}
            />
          </View>
        </View>
        <View className="flex pt-5 gap-2">
          <Text className="text-primary-para text-[16px]">Gender</Text>
          <View className="flex flex-row items-center bg-primary-input rounded-[16px] px-4">
            <View className="w-[30px] h-[30px] items-center justify-center">
              <Image source={gender} alt="" className="w-[20px] h-[20px]" />
            </View>
            <Picker
              selectedValue={selectedGender}
              className=""
              style={{ flex: 1 }}
              onValueChange={(itemValue) => setSelectedGender(itemValue)}
            >
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>
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
export default Create_account;
