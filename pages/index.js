import Head from "next/head";
import { useEffect } from "react";
import { initGA, logPageView } from "@/utils/analytics";
import { info } from "@/data";
import { SpeedInsights } from "@vercel/speed-insights/next"

import Header from "@/components/Header";
import LinkList from "@/components/LinkList";
import Footer from "@/components/Footer";

function IndexPage() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);


  return (
    <div className="flex flex-col justify-between min-h-screen py-10 px-6 sm:px-0 bg-[#ee2324]">
      <SpeedInsights />
      <Head>
        <title>{info.name}</title>
        <meta
          name="description"
          content="Hanky Lanky | DJ and producer"
        />
      </Head>
     <div>
       <Header />
      <LinkList />
     </div>
      <Footer />
    </div>
  );
}

export default IndexPage;
