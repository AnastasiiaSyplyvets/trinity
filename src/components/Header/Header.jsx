import css from '../Header/Header.module.css';
import { Logo } from './Logo';
import { DropDownCity } from '../Header/DropDownCity';
const Header = () => {
  return (
    <div className={css.headerBox}>
      {/* <Menue /> */}
      <p className={css.menueText}>Car List</p>
      <p className={css.menueText}>Yacht List</p>
      <p className={css.menueText}>Chauffeur</p>
      <Logo />
      <p>+971 58 590 7875</p>
      <DropDownCity />
    </div>
  );
};

export default Header;
