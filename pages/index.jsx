import Head from "next/head";
import Image from "next/image";
import Header from "../molecules/Header";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Stats from "../components/Stats";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Stats />
      <Content />
    </div>
  );
};

export default Home;
