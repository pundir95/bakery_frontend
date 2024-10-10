"use client";
import AuthRedirectSection from "@/_components/_common/AuthRedirectSection";
import CommonTextInput from "@/_form-fields/CommonTextInput";
import { useGoogleLogin } from "@react-oauth/google";
import { LoginValidations } from "@/_validations/authValidations";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

const Login = () => {
  const formConfig = useForm();
  const { handleSubmit } = formConfig;
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const handleLoginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const url = "/accounts/google-login/";
        handleSocialAppLogin(tokenResponse.access_token, url);
      } catch (error) {
        console.error("Google error:", error);
        toast.error(error);
      }
    },
  });
  const handleSocialAppLogin = (token, url) => {};
  return (
    <>
      <AuthRedirectSection
        text="Don't have an account? "
        linkText="Sign up"
        linkUrl="/sign-up"
        className="text-right"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto space-y-4 font-[sans-serif] text-[#333] mt-4"
      >
        <h2>Login!</h2>
        <CommonTextInput
          fieldName="username"
          formConfig={formConfig}
          type="text"
          placeholder="Enter Username"
          rules={LoginValidations["userName"]}
          label="Username or email address"
        />
        <CommonTextInput
          fieldName="password"
          formConfig={formConfig}
          placeholder="Enter Password"
          rules={LoginValidations["password"]}
          label="Your password"
          type={showPassword ? "text" : "password"}
          //   for adding icons
          onIconClick={toggleShowPassword}
          icon={
            <Image
              src={showPassword ? "/icons/closedEye.svg" : "/icons/openEye.svg"}
              alt="Toggle Password Visibility Icon"
              width={24}
              height={24}
            />
          }
        />
        <AuthRedirectSection
          text=""
          linkText="Forgot your password"
          linkUrl="/forgot-password"
          className="text-right"
        />
        <button
          type="submit"
          className="px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-[#e5e5e5]  active:bg-[#333]"
        >
          Sign in
        </button>
        <AuthRedirectSection
          text="Don't have an acount? "
          linkText="Sign up"
          linkUrl="/sign-up"
        />
      </form>
      {/* <div className="social-login-section">
        <div className="or">Or</div>
        <button
          type="submit"
          onClick={handleLoginWithGoogle}
          className="social-login-button text-center px-5 py-2.5 rounded-full text-black text-sm tracking-wider font-medium border border-current outline-none bg-transparent  active:bg-[#333]"
        >
         <Image
            src="/icons/google-icon.svg"
            alt="Google Icon"
            width={24}
            height={24}
          />
          <div className="text">Continue with Google</div>
        </button>
      </div> */}
    </>
  );
};

export default Login;
