import { useEffect, useState } from "react";

export default function Loader() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 2;
      setWidth(start);
      if (start >= 100) clearInterval(interval);
    }, 100); // 5 sec total

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-green-400 font-mono">
      
      <h1 className="text-2xl md:text-4xl mb-6">
        Initializing SwasthyaSetu...
      </h1>

      <div className="w-64 h-2 bg-gray-800 rounded overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all"
          style={{ width: `${width}%` }}
        ></div>
      </div>

      <p className="mt-4 text-sm text-gray-400">
        Loading health awareness modules...
      </p>
    </div>
  );
}