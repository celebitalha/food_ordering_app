import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { images } from "@/constants";
import React from 'react';
import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import {Slot} from "expo-router";

export default function _Layout() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? 'padding' : 'height'}>
            <ScrollView className="h-full bg-white" keyboardShouldPersistTaps="handled">
                <View className="w-full relative" style={{height: Dimensions.get('screen').height / 2.25}}>
                    <ImageBackground source={images.cover} className="size-full rounded-b-lg" resizeMode="stretch"/>
                    <Image source={images.newlogo} className="self-center size-32 absolute -bottom-16 z-12 rounded-xl"/>
                </View>
                <Slot/>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
