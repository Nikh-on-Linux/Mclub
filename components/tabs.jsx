import React from 'react'

function Tab(props) {
    return (
        <div className={`px-8 py-2 rounded-lg border-2 border-[#022A37] bg-[#07171D] mr-4 cursor-pointer ${props.active? "bg-[#0A88AF]" : ""}`}>
            <h1 className={`fMedium text-sm ${props.active? "text-white" : "text-gray-500"}`} >{props.genre}</h1>
        </div>
    )
}

export default Tab