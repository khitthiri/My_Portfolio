import Message from "../models/Message.js";
import sendEmail from "../utils/sendEmail.js";

export const sendMessage =
  async (req, res) => {
    try {
      const {
        name,
        email,
        message,
      } = req.body;

      const newMessage =
        await Message.create({
          name,
          email,
          message,
        });

      await sendEmail({
        name,
        email,
        message,
      });

      res.status(201).json({
        message:
          "Message sent successfully",
      });

    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const getMessages =
  async (req, res) => {
    const messages =
      await Message.find().sort({
        createdAt: -1,
      });

    res.json(messages);
  };