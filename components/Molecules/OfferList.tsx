import { FC } from 'react';
import OfferCard from '~components/Atoms/OfferCard';

const OfferList: FC = () => {
  return (
    <div className='uam_seasonPass_offers'>
        <OfferCard
        title="Evasion Mont Revait"
        subtitle="Forfait 7 jours consécutifs"
        condition="Tarif adulte à partir de 13 ans"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida nulla interdum orci nec penatibus nisl praesent."
        newPrice="69,20 €"
        oldPrice="81,50 €"
        imageSrc="/images/produit3.png"
        imageAlt="Skieur"
        />
        <OfferCard
            title="Evasion Mont Revait"
            subtitle="Forfait 7 jours consécutifs"
            condition="Tarif adulte à partir de 13 ans"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque facilisi in in aenean erat. "
            newPrice="165,00 €"
            imageSrc="/images/produit2.png"
            imageAlt="Skieurs sur un télésiège"
        />
        <OfferCard
            title="Famille"
            subtitle="Forfait 7 jours consécutifs"
            condition="Tarif adulte à partir de 13 ans"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus vel at pellentesque molestie."
            newPrice="10% de remise"
            imageSrc="/images/produit4.png"
            imageAlt="Un couple heureux sur les pistes"
        />
  </div>
  );
};

export default OfferList;
