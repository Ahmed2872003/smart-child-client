export default function StepIndicator({ currentStep }) {
  return (
    <div className="flex gap-4 mb-8">
      {[1, 2].map((num) => (
        <div
          key={num}
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
            currentStep >= num
              ? "bg-amber-400 text-white"
              : "bg-gray-200 text-gray-400"
          }`}
        >
          {num}
        </div>
      ))}
    </div>
  );
}
