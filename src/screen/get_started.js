import "nativewind";
import { Text, TouchableOpacity, View, Image } from "react-native";
import icon from "../assets/favicon.png";
import map from "../assets/map.png";

export default function Get_started({ navigation }) {
  return (
    <View className="flex-1 bg-primary-bg pb-10">
      <View className="w-full h-[60%] justify-center items-center">
        <Image source={map} alt="" className="w-full h-full" />
        <Image source={icon} className="w-[40%] h-[40%] absolute" alt="" />
      </View>
      <View className="flex px-6 gap-3">
        <View className="flex pb-6 py-10">
          <Text className="text-black text-[34px] font-semibold text-center">
            Welcome to
          </Text>
          <Text className="text-primary-btn text-[34px] font-semibold text-center">
            My Bus
          </Text>
        </View>
        <TouchableOpacity
          variant="solid"
          action="primary"
          className="bg-primary-btn w-full py-3 rounded-[16px] text-white items-center"
          onPress={() => navigation.navigate("login")}
        >
          <Text className="text-white text-[20px] font-semibold">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          variant="solid"
          action="primary"
          className="bg-white w-full py-3 rounded-[16px] border-[1px] border-primary-btn items-center"
          onPress={() => navigation.navigate("create_account")}
        >
          <Text className="text-primary-btn text-[20px] font-semibold">
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
