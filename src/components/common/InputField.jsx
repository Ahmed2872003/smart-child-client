export default function InputField({
  icon: Icon,
  placeholder,
  type = "text",
  ...props
}) {
  return (
    <div className="relative w-full mb-4">
      {Icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <Icon size={20} strokeWidth={1.5} />
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full ${Icon ? "pl-12" : "pl-6"} pr-4 py-3.5 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all text-gray-700 placeholder:text-gray-400`}
        {...props}
      />
    </div>
  );
}
