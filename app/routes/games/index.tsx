import { useState } from "react";
import { createMeta } from "../../utils/Meta";
import { GetGameData } from "../../data/game/getGame";
import { Link, useParams } from "react-router";
import { H1 } from "../../components/Typography";

import TextSVG from "../../components/Text/TextSvg"
import PhoneMockup from "../../components/mockup/PhoneMockup/PhoneMockup"
import BrowserMockup from "../../components/mockup/BrowserMockup/BrowserMockup"
import SkipIcon from "../../components/icon/top_right"


export const meta = () => {
  return createMeta({
    title: "Games - Aero",
    description: "Game Production and Learning.",
    url: "https://Aero/games",
  });
};


export default function Games() {
  const [isMockupExpanded, setIsMockupExpanded] = useState(false);
  const { game } = useParams();

  const currentGame = game ? GetGameData.findIndex((item) => item.title.toLowerCase() === game) : 0;
  const gameData = GetGameData[currentGame];

  if (!gameData) {
    return <p>Game not found.</p>;
  }

  const gameUrl = gameData.url['gameUrl'];
  const previewSrc = gameData.url['previewSrc'];

  return (
    <>
      <h1 className={`text-[1.6rem] text-(--palette-main-color) leading-2`}>
        <span
          style={{ viewTransitionName: `hero-title` }}
          className="[view-transition-class:herotitle]"
        >Games</span>
      </h1>
      <span className="text-[1rem] text-neutral-400 tracking-widest dark:text-neutral-500 -mt-2">
        Start the game with a small experiment.
      </span>
      
      <section className="relative isolate w-full mt-4">
        <TextSVG text="PLAY" position={{x:205,y:230}} className="stroke-4 lg:stroke-2 stroke-[#000000]/5 dark:stroke-[#fff]/15" />
        <TextSVG text="HERE" position={{x:215,y:230}} className="stroke-4 lg:stroke-2 lg:hidden mt-32 stroke-[#000000]/5 dark:stroke-[#fff]/15" />
        
        <div style={{ viewTransitionName: `Games-note-${currentGame}` }} 
          className={['flex flex-col mt-78 lg:mt-38 gap-4','[view-transition-class:herotitle]'].join(' ')}
        >
          <span className={`text-[1rem] text-(--palette-main-color) leading-2`}>
            <span>{gameData.tags.join(" · ")}</span>
          </span>
          <H1 id={gameData.title} className="text-[3.4rem] font-bold leading-12" >
              {gameData.title}
          </H1>
          <span className="text-[1rem] w-full lg:w-[31rem] text-neutral-400 dark:text-(--palette-text-light-black)/50 leading-5 lg:leading-6">
            {gameData.description}
          </span> 

          <div className="flex gap-12">
            <Link 
              to={gameUrl} 
              target="_blank"
              className=" mt-4 w-fit cursor-pointer flex "
            >
              OPEN GAME
              <SkipIcon className="fill-(--palette-main-color)"></SkipIcon>
            </Link>

          </div>
        </div>

        <div style={{ viewTransitionName: `Games-note-${currentGame}-Mockup` }} 
          className={['absolute w-full right-1/2 translate-x-1/2 top-6 ',
          '[view-transition-class:hero-area]'].join(" ")}>
          {
            gameData.container === "phone" && 
            <div className="absolute right-1/2 translate-x-1/2 -top-40 scale-60 lg:scale-100 lg:-top-36 lg:right-16">
              <PhoneMockup 
                isExpanded={isMockupExpanded} 
                setIsExpanded={setIsMockupExpanded} 
                screenSrc={gameUrl} 
                preview={previewSrc} 
              />
            </div>
          }

          {
            gameData.container === "browser" && 
            <div className="relative w-full lg:-right-78 lg:-top-32 flex justify-end">
              <BrowserMockup 
                screenSrc={gameUrl} 
                preview={previewSrc} 
              />
            </div>
          }
        </div>
        
        {/* 选择 */}
        <div className="sm:flex flex-col justify-center absolute w-full mt-6 lg:mt-9 border-t border-black/10 text-black/50 dark:text-gray-500 pb-14">
          <div className="w-full leading-12 lg:leading-16">
            <span className="tracking-[.2rem]">{`0${currentGame + 1}/0${GetGameData.length}`}</span>
          </div>

          <div className="grid grid-cols-2">
            {
              GetGameData && GetGameData.map((item,index) => 
              {
                const game = item.title.toLowerCase();
                return (
                  <div className="flex gap-2 lg:gap-4 w-full ">
                    <div className="flex flex-col items-center tracking-[.15rem] text-black/50 dark:text-gray-500">
                      <span>0{index + 1}</span>
                      <span className="w-full h-px bg-black/50 dark:bg-gray-500"></span>
                    </div>
                    <div className="flex flex-col">
                      <Link to={`/games/${game}`} className="text-[1.2rem] lg:text-[1.5rem] leading-7" viewTransition >
                        {item.title}
                      </Link>
                      <span className="text-[.8rem]">{item.note} - {item.platform}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}