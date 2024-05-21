import sprite from '../../assets/symbol-defs.svg';
import css from '../Header/Logo.module.css';
export const Logo = () => {
  return (
    <div className={css.logoGroupe}>
      <svg width="71px" height="67px">
        <use xlinkHref={sprite + '#icon-Group'}></use>
      </svg>
      <svg width="147px" height="60px">
        <use xlinkHref={sprite + '#icon-TRINITY-LOGO-2'}></use>
      </svg>
      <svg width="147px" height="11px">
        <use xlinkHref={sprite + '#icon-Vector-1'}></use>
      </svg>
    </div>
  );
};
