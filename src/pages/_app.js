import { socket } from "@/socket";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const socketConnected = () => {
    console.log("socket connected");
  };

  const socketDisconnected = () => {
    console.log("disconnected");
  };

  useEffect(() => {
    socket.on("connect", socketConnected);
    socket.on("disconnect", socketDisconnected);

    return () => {
      socket.off("connect", socketConnected);
      socket.off("disconnect", socketDisconnected);
    };
  }, []);

  return <Component {...pageProps} />;
}
