import '../GlobalColors.css'
import './Header.css'

export function Header() {
  const numberOfButtons = 2;
  const buttonWidth = window.innerWidth/(numberOfButtons*2);
  return (
    <nav>
      <ul>
        <li style={{width: `${buttonWidth}px`}}><a href="/">Home</a></li>
        <li style={{width: `${buttonWidth}px`}}><a href="/gallery">Gallery</a></li>
        <li style={{width: `${buttonWidth}px`}}><a href="/card-testing">Card Testing</a></li>
      </ul>
    </nav>
  );
}