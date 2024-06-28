import Image from "next/image";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Screens from "@/components/Screens";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col justify-between p-10 bg-light ${montserrat.variable}`}
    >
      <Header/>
      <Screens/>
    </main>
  );
}
