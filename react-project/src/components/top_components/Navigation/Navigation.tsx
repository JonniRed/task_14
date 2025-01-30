import style from "./style.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={style.navigation}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="">About Me</a>
        </li>
        <li>
          <a href="">Project</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
