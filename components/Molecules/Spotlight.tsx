import Image from "next/image";
import { FC } from "react";
import Button from "~components/Atoms/Button";

export interface SpotlightProps {
  name: string;
  tag: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName: string;
  description: string;
}

const Spotlight: FC<SpotlightProps> = (props) => {
  const { name, tag, title, imageSrc, imageAlt, imageClassName, description } =
    props;
  return (
    <div className="uam_spotlight">
      <h4 className="uam_spotlight_name">{name}</h4>
      <div className="uam_spotlight_tag">{tag}</div>
      <h3 className="uam_spotlight_title">{title}</h3>
      <Image
        src={imageSrc}
        alt={imageAlt}
        className={imageClassName}
        width={360}
        height={209}
      />
      <p className="uam_spotlight_description">{description}</p>
      <div className="uam_spotlight_buttonContainer">
        <Button buttonText="Voir l'offre" buttonColor="offer_button" />
        <Button buttonText="Toutes nos promos" buttonColor="discount_button" />
      </div>
    </div>
  );
};

export default Spotlight;
