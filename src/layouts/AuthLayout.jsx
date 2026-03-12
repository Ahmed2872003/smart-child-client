import blocksImg from "../assets/images/blocks.avif";
import buzzleImg from "../assets/images/puzzle.png";

export default function AuthLayout({ children }) {
  return (
    <div className="flex h-screen w-full bg-[#FAF7F2] font-sans text-gray-800 overflow-hidden">
      <div className="hidden md:block md:w-1/2 relative">
        <img
          src={blocksImg}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-8 left-8 bg-white p-3 rounded-full shadow-lg flex items-center justify-center">
          <img src={buzzleImg} alt="Logo" className="w-10 h-10" />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 overflow-y-auto">
        <div className="w-full max-w-md bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100 min-h-[600px] flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
