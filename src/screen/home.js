import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import Icon from "react-native-vector-icons/Ionicons";
import frame from "../assets/icon/frame.png";
import locator from "../assets/icon/locator.png";
import location from "../assets/icon/location.png";
import cross from "../assets/icon/cross.png";
import search from "../assets/icon/search.png";
import droptodrop from "../assets/icon/droptodrop.png";
import notify from "../assets/icon/notification.png";
import menu from "../assets/icon/menu.png";
import filter from "../assets/icon/filter.png";
import reverse from "../assets/icon/reverse.png";
const Home = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const User_name = "User";

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "android");
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };
  return (
    <LinearGradient
      colors={["#FF7F00", "#F8E4D8", "#F8E4D8"]}
      className="flex-1 justify-between pt-8"
    >
    <View>
      <View className="w-full flex flex-row justify-between items-center bg-transparent px-6 pt-3">
        <Text className="text-white font-bold text-[24px]">
          Hello {User_name} !
        </Text>
        <View className="flex flex-row gap-2 items-center">
          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Image source={notify} alt="" className="w-[80px] h-[80px]" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Image source={menu} alt="" className="w-[30px] h-[30px]" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="px-6">
        <View className="bg-white p-4 rounded-[16px]">
          <Text className="text-center text-primary-btn font-semibold text-[18px]">
            Find Your Bus
          </Text>
          <View className="flex flex-row items-center gap-2 pt-4">
            <Image source={droptodrop} alt="" className="w-[25px] h-[90px]" />
            <View className="w-[80%]">
              <View className="flex flex-row items-center bg-primary-input rounded-[16px] py-3 pl-2 pr-3 mb-5">
                <View className="w-[30px] h-[30px] items-center justify-center">
                  <Image
                    source={locator}
                    alt=""
                    className="w-[22px] h-[16px]"
                  />
                </View>
                <TextInput
                  type="text"
                  placeholder="Your Location"
                  className="w-[80%] text-[16px] pl-2"
                />
                <View className="w-[30px] h-[30px] items-center justify-center">
                  <Image source={cross} alt="" className="w-[20px] h-[20px]" />
                </View>
              </View>
              <View className="flex flex-row items-center bg-primary-input rounded-[16px] py-3 pl-2 pr-3">
                <View className="w-[30px] h-[30px] items-center justify-center">
                  <Image
                    source={location}
                    alt=""
                    className="w-[22px] h-[18px]"
                  />
                </View>
                <TextInput
                  type="text"
                  placeholder="Drop Location"
                  className="w-[80%] text-[16px] pl-2"
                />
                <View className="w-[30px] h-[30px] items-center justify-center">
                  <Image source={search} alt="" className="w-[15px] h-[15px]" />
                </View>
              </View>
            </View>
            <View className="flex">
              <Image
                source={filter}
                alt=""
                className="w-[20px] h-[20px] mb-12"
              />
              <Image source={reverse} alt="" className="w-[15px] h-[25px]" />
            </View>
          </View>
        </View>
      </View>
      <Image source={frame} alt="" className="w-full h-[260px]" />
      <View className="w-full flex flex-row justify-between items-center py-4 bg-white px-6">
        <TouchableOpacity className="rounded-full active:bg-[#FF881135] focus:text-primary-btn w-[4rem] h-[4rem] flex items-center justify-center">
          {/* <Icon name="map-outline" size={30} color="#000" /> */}
        </TouchableOpacity>
        <TouchableOpacity className="rounded-full bg-[#FF881135] w-[4rem] h-[4rem] flex items-center justify-center">
          {/* <Icon name="home-outline" size={30} color="#FF8811" /> */}
        </TouchableOpacity>
        <TouchableOpacity className="rounded-full active:bg-[#FF881135] focus:text-primary-btn w-[4rem] h-[4rem] flex items-center justify-center">
          {/* <Icon name="person-outline" size={30} color="#000" /> */}
        </TouchableOpacity>
      </View>
      </View>
     </LinearGradient>
  );
};

export default Home;
