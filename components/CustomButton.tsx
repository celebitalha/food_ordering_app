import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import React from 'react'
const CustomButton = ({
                          onPress,
                          title = "Click me",
                          style,
                          textStyle,
                          leftIcon,
                          isLoading = false,
                      }:CustomButtonProps) => {
    return (
        <TouchableOpacity className={cn("custom-btn",style)} onPress={onPress}>
            {leftIcon}

                {isLoading ? (
                    <ActivityIndicator size="small" color="white" />
                ) : (
                    <Text className={cn("text-white-100 paragraph-semibold",textStyle)}>
                        {title}
                    </Text>
                )}

        </TouchableOpacity>


)
}

import {CustomButtonProps} from "@/type";
import cn from "clsx";
import {text} from "node:stream/consumers";
export default CustomButton
