import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { sendMessage } from "../services/contactService";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await sendMessage(formData);

      setSuccess(
        "Thanks! Your message has been sent."
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setLoading(false);
    } catch (err) {
      console.log(err);

      setError(
        err?.response?.data?.message ||
          "Failed to send message."
      );

      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
      min-h-screen
      flex
      items-center
      py-20
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
        max-w-7xl
        mx-auto
        px-6
        w-full
        "
      >
        <p className="text-blue-400 mb-3">
          Contact
        </p>

        <h2
          className="
          text-4xl
          md:text-6xl
          font-bold
          mb-6
          "
        >
          Let's Work Together
        </h2>

        <div className="w-24 h-1 bg-blue-500 rounded-full mb-10" />

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Get In Touch
            </h3>

            <p className="text-slate-400 leading-8">
              Feel free to reach out for
              collaborations, internships,
              freelance projects, or job
              opportunities.
            </p>

            <div className="flex gap-5 mt-8">

              {/* GitHub */}

              <a
                href="https://github.com/khitthiri"
                target="_blank"
                rel="noreferrer"
                className="
                glass
                p-4
                rounded-xl
                hover:scale-110
                transition
                duration-300
                "
              >
                <FaGithub size={24} />
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/khit-thiri-b94287292"
                target="_blank"
                rel="noreferrer"
                className="
                glass
                p-4
                rounded-xl
                hover:scale-110
                transition
                duration-300
                "
              >
                <FaLinkedin size={24} />
              </a>

              {/* Email */}

              <a
                onClick={() => {
                  navigator.clipboard.writeText(
                    "khitthiri.mw@gmail.com"
                  );

                  alert("Email copied!");
                }}
                className="
                glass
                p-4
                rounded-xl
                cursor-pointer
                hover:scale-110
                transition
                duration-300
                "
              >
                <FaEnvelope size={24} />
              </a>

            </div>
          </div>

          {/* Right Side */}

          <form
            onSubmit={handleSubmit}
            className="
            glass
            rounded-2xl
            p-8
            space-y-5
            "
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="
              w-full
              p-4
              rounded-xl
              bg-slate-900
              border
              border-slate-700
              outline-none
              "
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="
              w-full
              p-4
              rounded-xl
              bg-slate-900
              border
              border-slate-700
              outline-none
              "
              required
            />

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="
              w-full
              p-4
              rounded-xl
              bg-slate-900
              border
              border-slate-700
              outline-none
              "
              required
            />

            <button
              type="submit"
              className="
              w-full
              py-4
              rounded-xl
              bg-blue-500
              hover:bg-blue-600
              transition
              duration-300
              font-semibold
              "
            >
              {loading
                ? "Sending..."
                : "Send Message"}
            </button>

            {success && (
              <p className="text-green-500">
                {success}
              </p>
            )}

            {error && (
              <p className="text-red-500">
                {error}
              </p>
            )}
          </form>

        </div>
      </motion.div>
    </section>
  );
}

export default Contact;