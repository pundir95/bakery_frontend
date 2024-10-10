// regex
export const PASSWORD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{6,}$/g;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INVALID_EMAIL_MESSAGE = "Please enter a valid email";

// login validations
export const LoginValidations = {
  userName: {
    required: "Username is required",
  },
  password: {
    required: "Password is required",
  },
};

export const IndivisualSignupValidations = {
  first_name: {
    required: "First name is required",
  },
  last_name: {
    required: "Last name is required",
  },
  phone_number: {
    required: "Phone number is required",
    minLength: {
      value: 10,
      message: "Phone number must be exactly 10 digits",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: EMAIL_REGEX,
      message: INVALID_EMAIL_MESSAGE,
    },
  },
  password: {
    required: "Password is required",
    pattern: {
      value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{6,}$/g,
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
    },
  },
  address: {
    required: "Delivery address is required",
  },
  zip_code: {
    required: "ZIP code is required",
  },
  contact_method: "Contact method is required",
};

export const CompanySignupValidations = {
  company_name: {
    required: "Company name is required",
  },
  first_name: {
    required: "Contact person's first name is required",
  },
  last_name: {
    required: "Contact person's last name is required",
  },
  email: {
    required: "Email address is required",
    pattern: {
      value: EMAIL_REGEX,
      message: INVALID_EMAIL_MESSAGE,
    },
  },

  phone_number: {
    required: "Phone number is required",
    minLength: {
      value: 10,
      message: "Phone number must be exactly 10 digits",
    },
  },
  company_address: {
    required: "Company address is required",
  },
  zip_code: {
    required: "ZIP code is required",
  },
  business_type: {
    required: "Business type is required",
  },
};
