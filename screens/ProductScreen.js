import { View, Text, TouchableOpacity, Image, Dimensions, Platform, ScrollView, Linking  } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftCircleIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
import { HeartIcon, StarIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { ShoppingBag } from 'react-native-feather';
const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const handleButtonPress = async () => {
  const url = 'https://www.filma24.li/';

  // Check if the device supports opening the URL
  const isSupported = await Linking.canOpenURL(url);

  if (isSupported) {
    // Open the URL
    await Linking.openURL(url);
  } else {
    console.log('URL opening not supported');
  }
};

const handleButtonPress1 = async () => {
  const url = 'https://www.filma24.li/in-time/';

  // Check if the device supports opening the URL
  const isSupported = await Linking.canOpenURL(url);

  if (isSupported) {
    // Open the URL
    await Linking.openURL(url);
  } else {
    console.log('URL opening not supported');
  }
};

const handleButtonPress2 = async () => {
  const url = 'https://www.filma24.li/orphan/';

  // Check if the device supports opening the URL
  const isSupported = await Linking.canOpenURL(url);

  if (isSupported) {
    // Open the URL
    await Linking.openURL(url);
  } else {
    console.log('URL opening not supported');
  }
};

const handleButtonPress3 = async () => {
  const url = 'https://www.filma24.li/goodfellas/';

  // Check if the device supports opening the URL
  const isSupported = await Linking.canOpenURL(url);

  if (isSupported) {
    // Open the URL
    await Linking.openURL(url);
  } else {
    console.log('URL opening not supported');
  }
};

export default function FavouriteScreen(props) {
  const item = props.route.params;
  const [size, setSize] = useState('small');
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <Image 
        source={require('../assets/images/2.jpg')} 
        style={{height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} 
        className="w-full absolute" />
      <SafeAreaView className="space-y-4 flex-1">
        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity className=" rounded-full " onPress={()=> navigation.goBack()}>
            <ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white" />
          </TouchableOpacity>

          <TouchableOpacity className=" rounded-full border-2 border-white p-2">
            <HeartIcon size="24" color="white" />
          </TouchableOpacity>
        </View>
        <View 
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOffset: {width: 0, height: 30},
            shadowOpacity: 0.9,
          }}
          className="flex-row justify-center">
          <Image source={item.image} className="h-60 w-60" style={{marginTop: ios? 0:40}} />
        </View>
       
        <View 
          style={{backgroundColor: themeColors.bgLight}} 
          className="flex-row justify-center items-center mx-4 rounded-3xl p-1 px-2 space-x-1 opacity-90 w-16">
          <StarIcon size="15" color="white" />
          <Text className="text-base font-semibold text-white">{item.stars}</Text>
        </View>
        <View className="px-4 flex-row justify-between items-center">
            <Text style={{color: themeColors.text}} className="text-3xl font-semibold">
              {item.name}
            </Text>
            
            
        </View>
       
        <View className="px-4 space-y-2">
          <Text style={{color: themeColors.text}} className="text-lg font-bold">Movies&TV Shows</Text>
          <View className="flex-row justify-between">
          <TouchableOpacity
            onPress={handleButtonPress1}
            style={{
            backgroundColor: size === 'small' ? themeColors.bgLight : 'rgba(0,0,0,0.07)',
            padding: 8,
             borderRadius: 999,
           }}
          >
            <Text style={{ color: size === 'small' ? 'white' : 'gray' }}>{item.moviee}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleButtonPress2}
             style={{
               backgroundColor: size === 'medium' ? themeColors.bgLight : 'rgba(0,0,0,0.07)',
                padding: 8,
               borderRadius: 999,
              }}
            >
             <Text style={{ color: size === 'medium' ? 'white' : 'gray' }}>{item.movie}</Text>
            </TouchableOpacity>


            <TouchableOpacity
              onPress={handleButtonPress}
              style={{
                backgroundColor: size === 'large' ? themeColors.bgLight : 'rgba(0,0,0,0.07)',
                padding: 8,
                borderRadius: 999,
              }}
            >
          <Text style={{ color: size === 'large' ? 'white' : 'gray' }}>{item.movieee}</Text>
        </TouchableOpacity>

        <TouchableOpacity
              onPress={handleButtonPress}
              style={{
                backgroundColor: size === 'large' ? themeColors.bgLight : 'rgba(0,0,0,0.07)',
                padding: 8,
                borderRadius: 999,
              }}
            >
          <Text style={{ color: size === 'large' ? 'white' : 'gray' }}>{item.movieeee}</Text>
        </TouchableOpacity>

          </View>
        </View>

        <View className="px-4 space-y-2">
          <Text style={{color: themeColors.text}} className="text-lg font-bold">About</Text>
          <Text className="text-gray-600">
            {item.desc}
          </Text>
        </View>
        
        

        
      </SafeAreaView>
      <View className={`space-y-3 ${ios? 'mb-6': 'mb-3'}`}>
          <View className="flex-row justify-between items-center px-4 mb-2">
            
             
          </View>
          {/* buy now button */}
          <View className="flex-row justify-between px-4">
           
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgLight }}
            className="p-4 rounded-full flex-1 ml-4"
            onPress={handleButtonPress}
          >
            <Text className="text-center text-white text-base font-semibold">Watch</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      
    </View>
  )
}