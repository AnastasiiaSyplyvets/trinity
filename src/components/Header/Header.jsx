import css from '../Header/Header.module.css';
import { Logo } from './Logo';
const Header = () => {
  return (
    <div className={css.headerBox}>
      {/* <Menue /> */}
      <p className={css.menueText}>Car List</p>
      <p className={css.menueText}>Yacht List</p>
      <p className={css.menueText}>Chauffeur</p>
      <Logo />
    </div>
  );
};

export default Header;
