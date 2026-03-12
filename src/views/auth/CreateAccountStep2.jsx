import { Link, useNavigate } from "react-router-dom";

import { ChevronLeft, Mail, Lock } from "lucide-react";

import StepIndicator from "../../components/common/StepIndicator";

import InputField from "../../components/common/InputField";

import SocialLogin from "../../components/auth/SocialLogin";

export default function CreateStep2View() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-3xl font-black mb-2 tracking-tight text-center">
        Create Account
      </h1>
      <p className="text-sm text-gray-500 mb-8 text-center">
        Exist User ?{" "}
        <Link to="/" className="font-bold underline text-gray-800">
          Sign in
        </Link>
      </p>
      <StepIndicator currentStep={2} />
      <InputField icon={Mail} placeholder="Parent Email" />
      <InputField icon={Lock} placeholder="Confirm Password" type="password" />
      <InputField icon={Lock} placeholder="Password" type="password" />
      <div className="flex items-center justify-between w-full mt-10">
        <button
          onClick={() => navigate("/create-1")}
          className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-500"
        >
          <ChevronLeft size={24} />
        </button>
        <button className="px-12 py-4 bg-[#FFD147] text-gray-800 font-bold rounded-full shadow-sm">
          Log in
        </button>
      </div>
      <SocialLogin />
    </div>
  );
}
