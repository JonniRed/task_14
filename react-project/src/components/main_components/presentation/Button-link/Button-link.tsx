import style from "./btn-link.module.css";
import arr from "../../../../assets/marks/arrow.svg";
import { FC } from "react";

type Props = {
  str: string;
};

const ButtonLink: FC<Props> = ({ str }) => {
  return (
    <hgroup>
      <h2 className={style.h2}>
        {str}
        <a href="#" className={style["btn-link-a"]}>
          <img src={arr} alt="" className={style.img} />
        </a>
      </h2>
      {str ? <h2 className={style.h2}>Work Together</h2> : ""}
    </hgroup>
  );
};

export default ButtonLink;
