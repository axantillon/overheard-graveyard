import { QuoteType } from "@/utils/types/base"
import moment from "moment";
import Image from "next/image"
import { FC, useState } from "react"

export const Quote: FC<{quote: QuoteType}> = ({quote}) => {

    const [src, setSrc] = useState(quote.pfp);

    return (
        <div className="flex flex-col w-full px-8 py-4 space-y-6 bg-white rounded-xl">
            <div className="flex items-start justify-between w-full">
                <span className="text-xxs md:text-xs text-stone-400 italic"><b>@{quote.author}</b> overheard</span>
                <span className="text-xxs md:text-xs text-stone-400">{moment(quote.date_created).format("MMM D YYYY")}</span>
            </div>
            <div className="flex items-center min-h-[4rem] w-full">
                <div className="relative flex items-center justify-center h-10 md:h-12 w-10 md:w-12">
                    <Image onError={() => setSrc("/default_user.png")} className="rounded-full h-12 w-12" src={src} fill object-fit="cover" alt=''/>
                </div>
                <div className="flex flex-col justify-around w-full pr-6 space-y-2">
                    <span className="text-xs md:text-base font-semibold">{`"${quote.content}"`}</span>
                    <span className="text-xs md:text-base text-stone-400">{`-${quote.signature} @${quote.quotee}`}</span>
                </div>
            </div>
            <div className="w-full h-1/4">
                <div className="flex flex-wrap"><span className="text-xs md:text-sm">Liked by:</span> {quote.likes.map((u, index) => (<span key={index} className="text-xs mx-2">{u}</span>))}</div>
            </div>
        </div>
    )
}