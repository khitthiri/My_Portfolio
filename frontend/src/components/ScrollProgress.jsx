import { useEffect, useState } from "react";

function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        (window.scrollY / total) * 100;

      setScroll(progress);
    };

    window.addEventListener(
      "scroll",
      updateScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateScroll
      );
  }, []);

  return (
    <div
      className="
      fixed
      top-0
      left-0
      h-1
      bg-blue-500
      z-100
      "
      style={{
        width: `${scroll}%`,
      }}
    />
  );
}

export default ScrollProgress;