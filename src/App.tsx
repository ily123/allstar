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
    <div className="flex flex-row justify-between gap-3 items-center px-5 border-solid border-2 border-red-300">
      <img src={`${IMG}&w=${W}&h=${H}`}/>
      <span>Player Name</span>
      <span>PTM</span>
    </div>
  )
}

export default App
