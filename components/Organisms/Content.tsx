import { FC } from "react";
import Spotlight from "~components/Molecules/Spotlight";

export interface ContentProps {}

const Content: FC<ContentProps> = (props) => {
  return (
    <>
      <div className="uam_contentWrapper">
        <Spotlight
          name="Promo avant-saison"
          tag="-25% forfait saison avant le 30/11"
          title="Promotions d'avant saison : forfait saison"
          imageSrc="/images/produit1.png"
          imageAlt="Vue du haut de la station"
          imageClassName="uam_spotlight_image_alignRight"
          description="Le forfait Evasion vous permet d'accéder à 109 remontées mécaniques et 400km de pistes, pour tous les niveaux, débutants comme confirmés ! Forfait Evasion saison ou année jusqu'à -25% : skiez en illimité !"
        />
        <Spotlight
          name="Idée cadeau"
          tag="Forfait ski 4h & Spa Thermal"
          title="Glissez dans un écrin de bien-être"
          description="Une journée d'escapade entre grands espaces de glisse et eau thermale à 39°C du Mont Revait. Tous les bienfaits de Saint-Michel dans un seul forfait. Le nouvel espace bien être des Thermes de Saint-Michel vous invite à une expérience..."
          imageSrc="/images/produit5.jpg"
          imageAlt="Femme profitant de l'eau thermale"
          imageClassName="uam_spotlight_image_alignLeft"
        />
      </div>
    </>
  );
};

export default Content;
