import css from '../Header/DropDownCity.module.css';
import sprite from '../../assets/symbol-defs.svg';
import { useState } from 'react';

export const DropDownCity = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropDown = () => {
    setIsOpen(!isOpen);

    console.log(isOpen);
    // console.log('object');
    // const x = document.getElementById('cityDropDown');
    // console.log(x);
    // document.getElementById('cityDropDown').classList.toggle('show');
  };

  return (
    <div>
      <button type="button" className={css.btn} onClick={handleDropDown}>
        <svg width="10px" height="10px">
          <use xlinkHref={sprite + '#icon-Group-3'}></use>
        </svg>
      </button>
      <ul
        id="cityDropDown"
        className={isOpen === true ? css.show : css.dropDownList}
      >
        <li className={css.dropdownContent}>Dubai</li>
        <li className={css.dropdownContent}>Paris</li>
        <li className={css.dropdownContent}>Budapest</li>
        <li className={css.dropdownContent}>Berlin</li>
      </ul>
    </div>
  );
};
