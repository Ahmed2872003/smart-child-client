import { ChevronRight } from "lucide-react";

import Label from "./Label";

export default function SelectField({ label, options }) {
  return (
    <div className="flex-1 min-w-[80px]">
      {label && <Label content={label} />}
      <div className="relative">
        <select className="w-full pl-4 pr-8 py-3 bg-white border border-gray-200 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-amber-300 text-gray-600 text-sm">
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <ChevronRight size={14} className="rotate-90" />
        </div>
      </div>
    </div>
  );
}
