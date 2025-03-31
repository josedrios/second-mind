import { Link } from "react-router-dom";
import { TerminalContainer } from "../layout/TerminalContainer";

export default function Nav() {
  return (
    <TerminalContainer id="navbar-container" labels={["Nav"]} color='green'>
      <NavBody />
    </TerminalContainer>
  );
}

function NavBody() {
  return (
    <nav>
      <Link to="/todo">TODO</Link>
      <Link to="/calendar">CALENDAR</Link>
      <Link to="/thoughts">THOUGHTS</Link>
      <Link to="/other">OTHER</Link>
    </nav>
  );
}
