import { players, Player } from "./player_data/player_data.js"

function App() {
  // components:
  //
  //
  //  player card
  //  team header
  //  drop area
  return (
    <main className="flex flex-col pt-10 items-center">
      <h1 className="text-4xl max-sm:text-3xl font-light font-mono text-gray-100">
        NBA Allstar 2023
      </h1>
      <PlayerList players={players} />
    </main>
  )

}

/** Returns list of players available to pick. */
interface PlayerListProps {
  players: Player[]
}
function PlayerList({ players }: PlayerListProps) {

  return (
    <ul>
      {players.map((player) => {
        return <PlayerCard player={player} />;
      })}
    </ul>
  )
   
}



interface PlayerCardProps {
  player: Player;
}
function PlayerCard({player}: PlayerCardProps) {
  const { firstName, lastName, team } = player;
  return (
    <div className="flex flex-row gap-3 items-center justify-between px-2 py-1 border-2 border-slate-500 hover:border-sky-500 rounded bg-opacity-1 bg-slate-700">
      <div className="flex flex-row gap-3 items-center">
        <Headshot espnId={1}/>
        <span className="text-white font-semibold">{`${firstName[0]}. ${lastName}`}</span>
      </div>
      <span className="text-gray-400">{team.toUpperCase()}</span>
    </div>
  )
}


const IMG = "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png"
const SCALE = 0.4
const W = Math.floor(350 * SCALE)
const H = Math.floor(254 * SCALE)
interface HeadshotProps {
  espnId: number;
}
function Headshot({ espnId }: HeadshotProps) {
  const img_url = "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png"

  return (
      <figure className="rounded-full overflow-hidden border-slate-500 border-2">
      <img src={`${img_url}&w=${W}&h=${H}`} className="bg-gray-200 object-cover bg-opacity-1 w-12 h-12" />
    </figure>
  )
}

export default App
