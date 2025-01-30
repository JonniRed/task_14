import style from "./title-link.module.css";
import groupPict from "../../../../assets/main_pict/Group_icons_presentation.svg";
import ButtonLink from "../Button-link/Button-link";

const TitleLink = () => {
  return (
    <div className={style["title-link__container"]}>
      <hgroup>
        <h1 className={style.h1}>joil paderina</h1>
        <h4 className="h4">Frontend developer</h4>
      </hgroup>
      <div className="icon-skill">
        <img src={groupPict} alt="Иконки" />
      </div>
      <ButtonLink str="let's" />
    </div>
  );
};

export default TitleLink;
