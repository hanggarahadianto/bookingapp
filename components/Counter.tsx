import { useState } from "react";

interface CounterIconItemsProps {
  onClick: () => void;
  icon: string;
}
const CountIcon: React.FC<CounterIconItemsProps> = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border rounded-full w-5 h-5 flex justify-center items-center"
    >
      <span className="text-slate-900">{icon}</span>
    </button>
  );
};

interface CounterItemsProps {
  onClick: () => void;
  label: string;
}

const Counter: React.FC<CounterItemsProps> = ({ label }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-between">
      <p className="font-bold">{label}</p>
      <div className="flex items-center gap-x-1">
        {count > 0 && (
          <CountIcon
            icon="-"
            onClick={() => setCount((prevCount) => prevCount - 1)}
          />
        )}
        <span>{count}</span>
        <CountIcon
          icon="+"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        />
      </div>
    </div>
  );
};

export default Counter;
