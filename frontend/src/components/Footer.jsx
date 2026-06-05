function Footer() {
  return (
    <footer
      className="
      border-t
      border-slate-800
      py-8
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          "
        >
          <h2 className="font-bold text-xl">
            Khit Thiri
          </h2>

          <p className="text-slate-500">
            © 2026 All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;