import { Link } from 'react-router-dom';

export default function Navbar({setPage}) {
  return <div className="nav">
      <Link to="/planets">Planets</Link>
      <Link to="/starships">Starships</Link>
      <Link to="/people">People</Link>
  </div>;
}
