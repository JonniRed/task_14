import Navigation from "../Navigation/Navigation.tsx";
import style from "./style.module.css";
import logo_img from "../../../assets/marks/logo.svg";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="logo__wrap">
        <a href="#">
          <img src={logo_img} alt="Logo" />
        </a>
      </div>
      <Navigation />
      <div>
        <a href="" className={style.contact__link}>
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
