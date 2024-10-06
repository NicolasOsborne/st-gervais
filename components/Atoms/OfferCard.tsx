import Image from 'next/image';
import { FC } from 'react';

export interface OfferCardProps {
  title: string,
  subtitle: string,
  condition: string,
  description: string,
  newPrice: string,
  oldPrice?: string,
  imageSrc: string,
  imageAlt: string,
}

const OfferCard: FC<OfferCardProps> = (props) => {
  const { title, subtitle, condition, description, newPrice, oldPrice, imageSrc, imageAlt } = props;
  return (
    <div className='uam_offerCard'>
      <div className='uam_offerCard_titleWrapper'>
        <h5 className='uam_offerCard_titleWrapper_title'>
          {title}
        </h5>
        <p className='uam_offerCard_titleWrapper_subtitle'>
          {subtitle}
        </p>
        <em>
          {condition}
        </em>        
      </div>
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="img-offerCard"
          width={253}
          height={270}
          />
        <button className="uam_offerCard_button">
          <span className="site-icon"></span>
          <span className="button_label"> Acheter </span>
        </button>
        <div className='uam_offerCard_descriptionContainer'>
          <p className='uam_offerCard_descriptionContainer_description'>{description}</p>
          <div className='uam_offerCard_descriptionContainer_price'>
            <div className='prices'>
              <strong className='new-price'>{newPrice}</strong>
              <span className='old-price'>{oldPrice}</span>
            </div>         
            <a href='#' className='site-icon'></a>
          </div>
        </div>
    </div>
  );
};

export default OfferCard;
