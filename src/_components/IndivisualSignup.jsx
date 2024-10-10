"use client"
import CommonTextInput from "@/_form-fields/CommonTextInput";
import { IndivisualSignupValidations } from "@/_validations/authValidations";
import React from "react";
import { useForm } from "react-hook-form";
import PasswordSection from "./_common/PasswordSection";
import LocationField from "./_common/LocationField";
import AuthRedirectSection from "./_common/AuthRedirectSection";
import TermsAndConditionsText from "./TermsAndConditionsText";
import { useRouter } from "next/navigation";

const IndivisualSignup = () => {
  const router = useRouter();
  const formConfig = useForm();
  const { handleSubmit, watch, register, setValue } = formConfig;
  const onSubmit = (values) => {
    console.log(values);
    router.push("/login");
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto space-y-4 font-[sans-serif] text-[#333] mt-4"
      >
        <h2>Sign Up!</h2>
        {/* section1 */}
        <CommonTextInput
          fieldName="first_name"
          formConfig={formConfig}
          type="text"
          placeholder="Enter first name"
          rules={IndivisualSignupValidations["first_name"]}
          label="First Name"
        />
        <CommonTextInput
          fieldName="last_name"
          formConfig={formConfig}
          type="text"
          placeholder="Enter last name"
          rules={IndivisualSignupValidations["last_name"]}
          label="Last Name"
        />
        {/* section1 */}
        {/* section2 */}
        <CommonTextInput
          fieldName="email"
          formConfig={formConfig}
          type="text"
          placeholder="Enter your email"
          rules={IndivisualSignupValidations["email"]}
          label="Email Address"
        />
        <CommonTextInput
          fieldName="phone_number"
          formConfig={formConfig}
          type="text"
          placeholder="Enter your phone number"
          rules={IndivisualSignupValidations["phone_number"]}
          label="Phone Number"
          isNumberOnly={true}
        />
        {/* section2 */}
        {/* password section */}
        <PasswordSection
          formConfig={formConfig}
          fieldOneName={"password"}
          fieldTwoName={"confirm_password"}
        />
        {/* password section */}
        <LocationField
          fieldName="address"
          formConfig={formConfig}
          placeholder="Enter Delivery Address"
          label="Delivery Address"
          rules={IndivisualSignupValidations["address"]}
        />
        <CommonTextInput
          fieldName="zip_code"
          formConfig={formConfig}
          type="text"
          placeholder="Enter your zip code"
          rules={IndivisualSignupValidations["zip_code"]}
          label="ZIP code"
          isNumberOnly={true}
        />
        <CommonTextInput
          fieldName="contact_method"
          formConfig={formConfig}
          type="text"
          placeholder="Enter your prefered contact code"
          rules={IndivisualSignupValidations["contact_method"]}
          label="Preferred Contact Method"
        />
        <div className="terms-and-conditions">
          <TermsAndConditionsText register={register} fieldName ="terms_and_conditions" />{" "}
        </div>
        <button
          type="submit"
          className="px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-[#e5e5e5]  active:bg-[#333]"
        >
          Create an account
        </button>
        <AuthRedirectSection
          text="Have an account?"
          linkText="Log in"
          linkUrl="/login"
          className="text-right"
        />{" "}
      </form>
    </div>
  );
};

export default IndivisualSignup;
