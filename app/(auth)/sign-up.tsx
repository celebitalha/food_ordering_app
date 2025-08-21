import {View, Text, Button, Alert} from 'react-native'
import {Link, router} from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import React, {useState} from "react";
import {Router} from "expo-router/build/rsc/router/client";

const SignUp = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [form, setForm] = useState({name:'',email:'',password:''})

    const submit = async () => {
        if(!form.name || !form.email || !form.password) return Alert.alert("Error","Please enter your email and password");
        setIsSubmitting(true)

        try{
            //Appwrite fonksiyonu gelecek
            Alert.alert("Success", "User is signed up successfully")
            router.replace('/')

        }catch(error:any){
            Alert.alert("Error",error.message)
        }finally{
            setIsSubmitting(false)
        }
    }
    return (
        <View className="gap-8 bg-white rounded-lg p-5 mt-20 ">
            <CustomInput
                placeholder="Enter your full name"
                value = {form.name}
                onChangeText={(text) => setForm((prev) => ({...prev, name:text}))}
                label = "Full Name"
                secureTextEntry={false}
                keyboardType="default"
            />
            <CustomInput
                placeholder="Enter your e-mail"
                value = {form.email}
                onChangeText={(text) => setForm((prev) => ({...prev, email:text}))}
                label = "Email"
                secureTextEntry={false}
                keyboardType="email-address"
            />
            <CustomInput
                placeholder="Enter your password"
                value = {form.password}
                onChangeText={(text) => setForm((prev) => ({...prev, password:text}))}
                label = "Password"
                secureTextEntry={true}
            />
            <CustomButton
                title="Sign Up"
                isLoading={isSubmitting}
                onPress={submit}
            />
            <View className="flex justify-center mt-0 flex-row gap-2">
                <Text className="base-regular text-gray-100">
                    Already have an account?
                </Text>
                <Link href={"/sign-in"} className="base-bold text-primary">
                    Sign In
                </Link>
            </View>
        </View>
    )
}
export default SignUp
