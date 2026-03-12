import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import parentImg from "../../assets/images/parent.jfif";
import childImg from "../../assets/images/child.jfif";

export default function RoleSelectionView() {
  const navigate = useNavigate();

  const [role, setRole] = useState("parent");

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-3xl font-black mb-2 tracking-tight text-center">
        Create Account
      </h1>
      <p className="text-sm text-gray-500 mb-10 text-center">
        Exist User ?{" "}
        <Link to="/" className="font-bold underline text-gray-800">
          Sign in
        </Link>
      </p>
      <div className="space-y-6 w-full mb-12">
        <div>
          <button
            className={`w-full flex items-center p-4  border-2  ${role === "parent" ? "border-amber-400 bg-gray-50" : "border-transparent hover:border-gray-200 bg-white"} rounded-3xl transition-all  text-left`}
            onClick={() => setRole("parent")}
          >
            <img
              src={parentImg}
              className="w-16 h-16 rounded-2xl object-cover mr-6"
              alt="Parent"
            />
            <span className="text-xl font-bold">Parent</span>
          </button>
        </div>
        <div className="mb-3">
          <button
            className={`w-full  flex items-center p-4  border-2  ${role === "child" ? "border-amber-400 bg-gray-50" : "border-transparent hover:border-gray-200 bg-white"}  border-black-50 rounded-3xl transition-all text-left`}
            onClick={() => setRole("child")}
          >
            <img
              src={childImg}
              className="w-16 h-16 rounded-2xl object-cover mr-6"
              alt="Child"
            />
            <span className="text-xl font-bold">Child</span>
          </button>
        </div>
      </div>
      <button
        onClick={() => navigate("/create-1")}
        className="w-full bg-[#FFD147] font-bold py-4 rounded-full shadow-sm"
      >
        Next
      </button>
    </div>
  );
}
