import { players, Player } from "./player_data/player_data.js"

function App() {
  // components:
  //
  //
  //  player card
  //  team header
  //  drop area
  const [cap1, cap2] = players.filter((p) => p.role === "captain")
  const availablePlayers = players.filter((p) => p.role !== "captain")

  const teamOne = Array(11).fill(null)
  const teamTwo = Array(11).fill(null)
  
  return (
    <main className="flex flex-col pt-10 items-center">
      <h1 className="text-4xl max-sm:text-3xl font-light font-mono text-gray-100">
        NBA Allstar 2023
      </h1>


      <section className="flex flex-row gap-10">
        <PlayerList players={availablePlayers} />
        <Team captain={cap1} roster={teamOne} picksFirst={true}/>
        <Team captain={cap2} roster={teamTwo} />
      </section>
    </main>
  )

}

interface TeamSlotProps {
  player: Player | null;
  pickNumber: number;
}
function TeamSlot({player, pickNumber}: TeamSlotProps) {
  
  return (
    player ? <PlayerCard player={player}/> : <div className="text-white font-bold">{pickNumber}</div>
  )
}

interface TeamProps {
  captain: Player
  roster: Player[]  
  picksFirst?: boolean 
}
function Team({captain, roster, picksFirst = false}: TeamProps){
  return (
    <ul>
      <PlayerCard player={captain}/>
      {roster.map((player, index) => {
        const pickNumber = 2*index + Number(!picksFirst) + 1
        return <TeamSlot player={player} pickNumber={pickNumber}/>
      })}
    </ul>
  );
}

/** Returns list of players available to pick. */
interface PlayerListProps {
  players: Player[]
}
function PlayerList({ players }: PlayerListProps) {

  return (
    <ul>
      {players.map((player) => {
        return <PlayerCard key={player.espnId} player={player} />;
      })}
    </ul>
  )
   
}



interface PlayerCardProps {
  player: Player;
}
function PlayerCard({ player }: PlayerCardProps) {
  const { firstName, lastName, team, espnId } = player;
  console.log(espnId);
  return (
    <div className="flex flex-row gap-3 items-center justify-between px-2 py-1 border-2 border-slate-500 hover:border-sky-500 rounded bg-opacity-1 bg-slate-700">
      <div className="flex flex-row gap-3 items-center">
        <Headshot espnId={espnId}/>
        <span className="text-white font-semibold">{`${firstName[0]}. ${lastName}`}</span>
      </div>
      <span className="text-gray-400">{team.toUpperCase()}</span>
    </div>
  )
}


const SCALE = 0.4
const W = Math.floor(350 * SCALE)
const H = Math.floor(254 * SCALE)
interface HeadshotProps {
  espnId: number;
}
function Headshot({ espnId }: HeadshotProps) {
  const img_url = `https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/${espnId}.png`

  return (
      <figure className="rounded-full overflow-hidden border-slate-500 border-2">
      <img src={`${img_url}&w=${W}&h=${H}`} className="bg-gray-300 object-cover bg-opacity-1 w-12 h-12" />
    </figure>
  )
}

export default App
