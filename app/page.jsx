"use client"
import Image from "next/image";
import Head from "next/head";
import Cmp from "@/components/cmp";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [string, changeString] = useState('');
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </Head>
      <main className="p-8" >
        <div className="topSegment my-8 flex flex-row items-center justify-between">
          <div className="branding">
            <h3 className="text-2xl text-white fRegular" >The</h3>
            <h1 className="text-7xl text-white font-bold fMedium" >MClub</h1>
            <p className="text-white text-xl font-light fLight " >Join the biggest club of movie freaks </p>
          </div>
          <div className="searchDom relative w-fit">
            <form onSubmit={(e) => { e.preventDefault() ; router.push(`/api/search/${string}`)}} >
              <input type="text" name="search" placeholder="Search" className="text-white bg-[#07171D] border-[#053B4B] border-2 px-5 py-2 rounded-lg fRegular outline-none" value={string} onChange={(e) => { changeString(e.target.value) }} />
              <svg className="absolute top-[1rem] right-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </form>
          </div>
        </div>
        <div className="compos">
          <Cmp title="Hot pick" fetchData={'https://api.tvmaze.com/search/shows?q=trending'} ></Cmp>
          <Cmp title="Romance for you" fetchData={'https://api.tvmaze.com/search/shows?q=romance'} ></Cmp>
          <Cmp title="Intense drama era" fetchData={'https://api.tvmaze.com/search/shows?q=drama'} ></Cmp>
          <Cmp title="Korean shows" fetchData={'https://api.tvmaze.com/search/shows?q=korean'} ></Cmp>
        </div>

      </main>
    </>
  );
}
