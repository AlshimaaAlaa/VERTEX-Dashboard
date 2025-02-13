import { Formik, Form, Field } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import MainBtn from "../../Components/Main Button/MainBtn";
import "./VerifayPassword.scss";
import { ClipLoader } from "react-spinners";
import { Helmet } from "react-helmet";
import { VerifayPasswordService } from "../../ApiServices/VerifayPasswordService";
import ResendCode from "../Resend Code/ResendCode";
import { useNavigate } from "react-router-dom";
function VerifayPassword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  };
  const handleSubmit = async (values) => {
    setLoading(true);
    const email = localStorage.getItem("Email Admin");
    const otp =
      values.otp1 +
      values.otp2 +
      values.otp3 +
      values.otp4 +
      values.otp5 +
      values.otp6;

    try {
      await VerifayPasswordService(otp, email);
      console.log("OTP verified successfully!");
      navigate("/CreateNewPassword");
    } catch (error) {
      console.error("Error: OTP Verification", error);
      if (error.message.includes("404")) {
        alert("Endpoint not found. Please contact support.");
      } else {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const validationSchema = Yup.object().shape({
    otp1: Yup.string().required("Required"),
    otp2: Yup.string().required("Required"),
    otp3: Yup.string().required("Required"),
    otp4: Yup.string().required("Required"),
    otp5: Yup.string().required("Required"),
    otp6: Yup.string().required("Required"),
  });

  const handleKeyUp = (event) => {
    if (event.target.value.length === 1) {
      const nextField = event.target.nextElementSibling;
      if (nextField && nextField.tagName === "INPUT") {
        nextField.focus();
      }
    }
  };
  return (
    <div className="bg-gradient-to-r from-customBlue-mediumBlue via-customOrange-mediumOrange to-customOrange-mediumOrange min-h-screen flex items-center justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Verifay Password</title>
      </Helmet>
      <div className="verivayContainer lg:w-450 md:w-450 sm:w-450 xs:w-450 s:w-450 bg-white rounded-md">
        <div className="flex justify-center">
          <img src="/assets/images/logo (2).png" alt="logo" />
        </div>
        <h1 className="font-bold text-xl mt-10">Verification Code</h1>
        <p className="text-secondary mt-3 text-16">
          Enter the verification code we just sent on your email address.
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="mt-5 flex flex-col items-center">
              <div className="flex gap-2">
                {Array(6)
                  .fill("")
                  .map((_, index) => (
                    <Field
                      key={index}
                      name={`otp${index + 1}`}
                      maxLength="1"
                      className={`enterCode text-center font-bold w-12 lg:w-60 md:w-60 ${
                        errors[`otp${index + 1}`] && touched[`otp${index + 1}`]
                          ? "border-red-500"
                          : ""
                      }`}
                      onKeyUp={handleKeyUp}
                    />
                  ))}
              </div>
              <p
                className="text-darkGray mt-4 mb-3 flex"
                style={{ fontSize: "16px" }}
              >
                Didn’t Get Code ?
                <ResendCode />
              </p>
              <MainBtn
                text={loading ? <ClipLoader color="#fff" /> : "Verify"}
                btnType="submit"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default VerifayPassword;