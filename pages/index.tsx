import Features from "../components/ServicesDesktop";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutEngineer from "../components/Ads/AboutEngineer";
import Advantages from "../components/Ads/SolarAdvantages";
import WorkNumbers from "../components/Ads/WorkNumbers";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { KnownBrands } from "../components/KnownBrands";
import { Hero2 } from "../components/Hero2";
import { MobileWelcome } from "../components/MobileWelcome";

// import SolarDiagram from "../components/SolarDiagram";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Fótum Engenharia</title>
                {/* <meta name="description" content="Generated by create next app" /> */}
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <div className="flex flex-col w-full">
                {/* <div className="flex w-full items-center justify-center"> */}
                {/* <div className="flex w-full h-[12vh] bg-white"></div> */}
                <Header />
                {/* </div> */}

                <div className="sm:hidden flex">
                    <MobileWelcome />
                </div>

                <div className="flex flex-col mt-20">
                    <div className="md:grid md:grid-rows-2  ">
                        <div className="relative ">
                            <Hero />
                        </div>
                        <div className="relative">
                            <Hero2 />
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <Features />
                    </div>

                    {/* <Advantages /> */}
                    <div className="md:hidden">
                        <Services />
                    </div>

                    <KnownBrands />

                    {/* <SolarDiagram /> */}
                    <div className="pt-48 pb-10">
                        <AboutEngineer />
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Home;
