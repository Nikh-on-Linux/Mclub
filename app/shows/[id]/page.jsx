"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Tab from '@/components/tabs'
import Cards from '@/components/Cards'
import Link from 'next/link'

function Page({ params }) {
  const [data, setData] = useState([])
  const [castData, setCastData] = useState([])
  const [image, setImage] = useState('')
  const [url, setUrl] = useState('')
  const [dataRating, setSataRating] = useState('')
  const [tabActNot, setTabActNot] = useState(false)
  const [tabAct, setTabAct] = useState(true)
  const [gens, setGen] = useState([])
  useEffect(() => {
    async function loadData() {
      const response = await fetch(`https://api.tvmaze.com/shows/${params.id}`)
      const data = await response.json()
      setData(data)
      console.log(data)
      setImage(data.image.original);
      setUrl(!data.network ? data.network.officialSite : data.network.officialSite);
      if (data.rating.average != null) { setSataRating(data.rating.average) }
      else {
        setSataRating('No rating')
      }
      if(data.genres != null){
        setGen(data.genres.map((gen)=>{return <Tab genre={gen} ></Tab>}))
      }else{
        setGen(<h1 className='text-gray-200' >No data available</h1>)
      }
    }

    async function loadCast(){
      const response = await fetch(`https://api.tvmaze.com/shows/${params.id}/cast`);
      const data = await response.json();
      setCastData(data)
    }

    loadData();
    loadCast();
  }, [])


  return (
    <main className='p-8' >
      <h1 className='text-white fMedium text-4xl' >{data.name}</h1>
      <div className="show py-5 my-16 flex flex-row">
        <div className="show_p w-fit flex flex-col">
          <img src={image} alt="show" className='rounded-xl shadow-xl shadow-[#012936] max-w-[22.5rem]' />
          <button className='transition-all hover:border-[#0A88AF] rounded-lg outline-none border-2 border-[#022A37] mt-9 fRegular text-white text-lg bg-[#07171D] w-full px-8 py-2' >Add to wish list</button>
          <a href={url} target='_blank' className='transition-all hover:bg-[#07171D] hover:text-[#0A88AF] rounded-lg outline-none border-2 border-[#022A37] mt-5 fRegular text-white text-lg bg-[#0A88AF] w-full px-8 py-2 text-center' >Watch now</a>
        </div>
        <div className="desc mx-12 max-h-[80vh] overflow-scroll">
          <h1 className='text-white fMedium text-2xl my-2' >Desription</h1>
          <p className='text-white fRegular' >{data.summary}</p>
          <div className="genre my-5">
            <h3 className='text-white fRegular my-2' >Genre</h3>
            <div className='flex flex-row items-center' >
            {gens}
            </div>
          </div>
          <div className='my-12 flex flex-row items-center'>
            <h2 className='text-green-300 fRegular mr-5' >Rating:</h2>
            <p className='text-yellow-300 fRegular' >{dataRating}</p>
          </div>
          <hr />
          <div className="cast my-8 py-2">
            <h2 className='fMedium text-white text-xl' >Cast</h2>
            <div className='flex flex-row items-baseline py-5 overflow-x-scroll w-[95%] flex-shrink-0'>
              {
                castData.map((data)=>{
                  return(
                    <div className='w-[12rem] shrink-0' >
                      { data.person.image ? <Cards id={data.person.id} isCast={true} src={data.person.image.medium} name={data.person.name}> </Cards> : <Cards id={data.person.id} isCast={true} src={'/person.jpg'} name={data.person.name}> </Cards>}
                      <h2 className='text-white fMedium text-xl text-pretty' >{data.person.name}</h2>
                      <h2 className='text-gray-200 fRegular italic text-xl text-wrap' >{data.character.name}</h2>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page