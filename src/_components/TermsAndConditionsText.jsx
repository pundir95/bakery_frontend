import React from "react";

const TermsAndConditionsText = ({ fieldName, register }) => {
  return (
    <div>
      <div className="terms_and_condition_text">
        I want to receive emails about the product,feature updates,events, and
        marketing promotions.By creating an account you agree to the{" "}
        <a>Terms of use </a>and<a>Privacy Policy</a>
      </div>
      <input type="checkbox" {...register(fieldName)} />
    </div>
  );
};

export default TermsAndConditionsText;
