export default function Navbar({setPage}) {
  return <div className="nav">
      <button onClick={e => setPage("Planets")}>Planets</button>
      <button onClick={e => setPage("Starships")}>Starships</button>
      <button onClick={e => setPage("People")}>People</button>
  </div>;
}
