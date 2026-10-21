import { Link } from "react-router";

function Ornament () {
    const mount = Array(3);
    return (
        <div className="flex gap-2">
            {
                Array.from({ length: 3 }).map(item => (
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                ))
            }
        </div>
    )
}

export default function BrowserMockup ({
    screenSrc,
    preview
}:{
    screenSrc:string
    preview:string
}) {
    return (
        <div className="px-1 max-w-xl w-full flex flex-col border border-gray-300 bg-(--palette-bg-light-black)/80 dark:bg-(--palette-bg-dark-black)/80 rounded-xl">
            <div className="p-2 grid grid-cols-3 pointer-events-none">
                <Ornament />
                <input className="text-[.7rem] text-black/400 w-full" name="Website" type="url" value="aero70.github.io/Heroes3_Web/"  />
            </div>
            
            <Link to={screenSrc} target="_blank" className="w-full">
                <img className="max-w-2xl w-full rounded-b-xl pb-1" src={preview} />
            </Link>
        </div>
    )
}