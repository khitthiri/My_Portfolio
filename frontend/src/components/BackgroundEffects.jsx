function BackgroundEffects() {
  return (
    <>
      <div
        className="
        fixed
        top-0
        left-0
        -z-10
        h-full
        w-full
        overflow-hidden
        "
      >
        <div
          className="
          absolute
          top-20
          left-20
          w-96
          h-96
          bg-blue-500/20
          blur-[120px]
          rounded-full
          "
        />

        <div
          className="
          absolute
          bottom-20
          right-20
          w-96
          h-96
          bg-purple-500/20
          blur-[120px]
          rounded-full
          "
        />

        <div
          className="
          absolute
          top-1/2
          left-1/2
          w-80
          h-80
          bg-cyan-500/10
          blur-[120px]
          rounded-full
          "
        />
      </div>
    </>
  );
}

export default BackgroundEffects;