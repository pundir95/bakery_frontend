"use client";
import React from "react";
import ErrorMessage from "./ErrorMessage";
import Autocomplete from "react-google-autocomplete";
const GOOGLE_MAP_API_KEY = "AIzaSyCA-pKaniZ4oeXOpk34WX5CMZ116zBvy-g";
const DEFAULT_CLASS =
  "px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm outline-[#333] rounded-sm transition-all";
const LocationField = ({
  fieldName,
  formConfig,
  type = "text",
  label,
  className = DEFAULT_CLASS,
  placeholder,
  rules,
}) => {
  const {
    register,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = formConfig;

  return (
    <div>
      <div className="label">{label}</div>
      <Autocomplete
        {...register(fieldName, {
          ...rules,
          onChange: (e) => {
            setValue(fieldName, e.target.value);
            clearErrors(fieldName);
          },
        })}
        apiKey={GOOGLE_MAP_API_KEY}
        onPlaceSelected={(place) => {
          setValue(fieldName, place?.formatted_address);
        }}
        options={{
          types: ["establishment", "geocode"],
        }}
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        className={className}
      />
      <ErrorMessage fieldName={fieldName} errors={errors} />
    </div>
  );
};

export default LocationField;
