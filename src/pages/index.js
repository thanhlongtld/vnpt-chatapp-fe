import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { socket } from "@/socket";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <h1>Hello</h1>;
}
