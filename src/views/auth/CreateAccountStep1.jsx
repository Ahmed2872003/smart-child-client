import { Link, useNavigate } from "react-router-dom";

import { Mail, User, ChevronRight, Calendar } from "lucide-react";

import StepIndicator from "../../components/common/StepIndicator";

import InputField from "../../components/common/InputField";

import SelectField from "../../components/common/SelectField";

import SocialLogin from "../../components/auth/SocialLogin";

import Label from "../../components/common/Label";

export default function CreateStep1View() {
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
      <StepIndicator currentStep={1} />
      <InputField icon={User} placeholder="Name" />
      <InputField icon={Mail} placeholder="Email" />
      <div className="w-full mb-4">
        <label className="block text-xs text-gray-400 mb-1 ml-4">
          Birthday
        </label>
        <InputField icon={Calendar} type="date" placeholder="Birthday" />
      </div>
      <div className="mb-10 self-start">
        <SelectField label="Gender" options={["Gender", "Male", "Female"]} />
      </div>
      <div className="flex justify-end w-full">
        <button
          onClick={() => navigate("/create-2")}
          className="w-14 h-14 bg-amber-400 rounded-full flex items-center justify-center text-white shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <SocialLogin />
    </div>
  );
}
