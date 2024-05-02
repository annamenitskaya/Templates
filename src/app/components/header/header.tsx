import Link from 'next/link';
import './header.scss'

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/template1">Template1</Link>
          </li>
          <li>
            <Link href="/template2">Template2</Link>
          </li>
          <li>
            <Link href="/template3">Template3</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;