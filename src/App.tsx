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
      <PlayerCard />
    </main>
  )

}

const IMG = "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png"
const SCALE = 0.25
const W = Math.floor(350 * SCALE)
const H = Math.floor(254 * SCALE)

function PlayerCard() {
  return (
    <div className="flex flex-row gap-3 items-center px-2 py-1 border-2 border-slate-500 hover:border-sky-500 rounded bg-opacity-1 bg-slate-700">
      <figure className="rounded-full overflow-hidden border-slate-500 border-2">
        <img src={`${IMG}&w=${W}&h=${H}`} className="bg-gray-200 h-12 w-12 object-cover bg-opacity-1"/>
      </figure>
      <span className="text-white font-semibold">Player Name</span>
      <span className="text-gray-400">PTM</span>
    </div>
  )
}

export default App
