import axios from "axios";

const API_URL =
  "https://my-portfolio-u7mk.onrender.com/api/contact";

export const sendMessage = async (
  formData
) => {
  const response = await axios.post(
    API_URL,
    formData
  );

  return response.data;
};