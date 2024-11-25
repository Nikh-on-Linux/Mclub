"use client"
import React from 'react'
import Cards from './Cards';
import Image from 'next/image';
import { useState, useEffect } from "react"
function Cmp(props) {
    const [shows, setShows] = useState([]);
    useEffect(() => {
        async function loadData() {
            const response = await fetch(props.fetchData);
            const data = await response.json();
            setShows(data);
        }
        loadData();
    }, [])
    return (
        <div className='my-[8.5rem] shrink-0'>
            <h1 className=' my-8 text-white fRegular text-2xl' >{props.title}</h1>
            <div className='flex flex-row items-baseline shrink-0' >
                {shows.map((content) => {
                    return (
                        <div className='overflow-hidden'>
                            {content.show.image ? <Cards src={content.show.image.medium} isCast={false} name={content.show.name} id={content.show.id} ></Cards> : <Cards src={'/noImage.jpg'} isCast={false} name={content.show.name} id={content.show.id} ></Cards>}
                            <h2 className='text-white text-xl fRegular' >{content.show.name}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cmp