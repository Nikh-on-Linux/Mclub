import Image from 'next/image'
import Link from 'next/link'

function Cards(props) {
    return (
        <div className='' >
            <div className="image mr-8 rounded-xl w-fit overflow-hidden  cursor-pointer border-[#022A37] border-2 hover:shadow-xl hover:shadow-[#0A88AF] transition-all hover:border-[#0A88AF]">
                <Link href={`/shows/${props.id}`} style={{ pointerEvents: (props.isCast) ? "none" : 'pointer' }} >
                    <Image
                        key={props.id}
                        src={props.src}
                        alt={props.name}
                        width={180}
                        height={180}
                    ></Image>
                </Link>
            </div>
        </div>
    )

}

export default Cards