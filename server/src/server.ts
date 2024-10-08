import cors from "cors";
import express from "express";
import bookingRoutes from "./routes/booking.route";
import roomRoutes from "./routes/room.route";
import userRoutes from "./routes/user.route";

const server = express();

server.use(cors());

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.use("/users", userRoutes);
server.use("/bookings", bookingRoutes);
server.use("/rooms", roomRoutes);

export default server;
