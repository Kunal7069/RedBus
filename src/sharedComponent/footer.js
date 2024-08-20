import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // You can choose any icon set you like

const Navbar = ({navigation}) => {
  return (
    <View className="w-full flex flex-row justify-between items-center py-4 bg-white px-6">
      <TouchableOpacity className="rounded-full active:bg-[#FF881135] focus:text-primary-btn w-[4rem] h-[4rem] flex items-center justify-center">
        <Icon name="map-outline" size={30} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity className="rounded-full bg-[#FF881135] w-[4rem] h-[4rem] flex items-center justify-center">
        <Icon name="home-outline" size={30} color="#FF8811" />
      </TouchableOpacity>
      <TouchableOpacity className="rounded-full active:bg-[#FF881135] focus:text-primary-btn w-[4rem] h-[4rem] flex items-center justify-center">
        <Icon name="person-outline" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};
export default Navbar;
