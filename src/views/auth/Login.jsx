import { Mail, Lock } from "lucide-react";

// import {
//   Mail,
//   Lock,
//   User,
//   ChevronRight,
//   ChevronLeft,
//   Facebook,
//   Apple,
// } from "lucide-react";

import SocialLogin from "../../components/auth/SocialLogin";
import InputField from "../../components/common/InputField";
import { Link } from "react-router-dom";

export default function LoginView() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-3xl font-black mb-2 tracking-tight">Log in</h1>
      <p className="text-sm text-gray-500 mb-10">
        New here?{" "}
        <Link
          to="/role-selection"
          className="font-bold underline text-gray-800"
        >
          Start your child's journey
        </Link>
      </p>
      <InputField icon={Mail} placeholder="Email" />
      <div className="w-full relative">
        <InputField icon={Lock} placeholder="Password" type="password" />
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-600 underline">
          Forget password?
        </button>
      </div>
      <button className="w-full bg-[#FFD147] hover:bg-[#ffc820] text-gray-800 font-bold py-4 rounded-full mt-6 shadow-sm transition-transform active:scale-[0.98]">
        Log in
      </button>
      <SocialLogin />
    </div>
  );
}
