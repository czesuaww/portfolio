import style from "./Mobilenav.module.css";

const Mobilenav = ({ isOpen }) => {
  return (
    <div className={`${style.container} ${isOpen ? style.visible : style.hidden}`}>
      {console.log(isOpen)}
      <div className={style.background}>
        <ul className={style.ulList}>
          <li className={style.liElement}>home</li>
          <li className={style.liElement}>about me</li>
          <li className={style.liElement}>skills</li>
          <li className={style.liElement}>projects</li>
          <li className={style.liElement}>contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Mobilenav;
