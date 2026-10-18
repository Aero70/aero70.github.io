
export type GetGameProps = {
  title: string;
  platform: string;
  note:string;
  container:string;
  description: string;
  Last_Update:string;
  tags: string[];
  url:Record <'gameUrl' | 'previewSrc',string>;
}[];

export const GetGameData: GetGameProps = [{
  title: "Snake",
  platform:"web",
  note:"Arcade",
  container:"phone",
  description:
    `A growing little snake is chasing food in a limited space. With each bite, its body lengthens and its speed gradually increases. Avoiding the walls and its own body, see how long you can last.`,
  Last_Update:"2024-12-05",
  tags: ["TS", "React"],
  url :{
    gameUrl : "https://aero70.github.io/snake/",
    previewSrc : "/images/games/snake-preview.png",
  }
},
{
  title: "Heroes3",
  platform:"web",
  note:"strategy",
  container:"browser",
  description: `A Heroes3 game that runs on the web using WebAssembly and vcmi, and includes two mods: Horn of the Abyss and In the Wake of Gods.`,
  Last_Update:"2026-6-14",
  tags: ["VCMI", "WebAssembly"],
  url :{
    gameUrl : "https://aero70.github.io/Heroes3_Web/",
    previewSrc : "/images/games/Heroes3_preview.png",
  }
}];