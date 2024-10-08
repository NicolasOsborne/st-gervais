import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export interface ResponsiveMenuProps {
  className?: string;
}

const ResponsiveMenu: FC<ResponsiveMenuProps> = (props) => {
  const { className } = props;
  return (
    <div className={`uam_responsiveMenu ${props.className}`}>
      <div className="uam_responsiveMenu_container">
        <div className="uam_responsiveMenu_nav">
          <ul className="uam_responsiveMenu_nav_linkList">
            <li>
              <Link href="#" className="uam_responsiveMenuLink_forfait">
                {" "}
                Acheter mon forfait{" "}
              </Link>
            </li>
            <li>
              <Link href="#" className="uam_responsiveMenuLink">
                {" "}
                Domaine{" "}
              </Link>
            </li>
            <li>
              <Link href="#" className="uam_responsiveMenuLink">
                {" "}
                Infos Live{" "}
              </Link>
            </li>
            <li>
              <Link href="#" className="uam_responsiveMenuLink">
                {" "}
                Webcams{" "}
              </Link>
            </li>
            <li>
              <Link href="#" className="uam_responsiveMenuLink">
                {" "}
                Tarifs{" "}
              </Link>
            </li>
            <li>
              <Link href="#" className="uam_responsiveMenuLink">
                {" "}
                Débutants{" "}
              </Link>
            </li>
            <li>
              <Link href="#" className="uam_responsiveMenuLink">
                <Image
                  src="images/user.svg"
                  className="user_profile"
                  alt="user account"
                  width={25}
                  height={25}
                />{" "}
                Compte{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="uam_responsiveMenu_lang">
          <ul className="uam_responsiveMenu_langList">
            <li>
              <input
                type="radio"
                id="fr"
                name="lang"
                value="fr"
                defaultChecked
              />
              <label htmlFor="fr">
                <Image
                  src="images/ball-fr.svg"
                  className="lang_flag"
                  alt="fr"
                  width={25}
                  height={25}
                />{" "}
                Français{" "}
              </label>
            </li>
            <li>
              <input type="radio" id="en" name="lang" value="en" />
              <label htmlFor="en">
                <Image
                  src="images/ball-en.svg"
                  className="lang_flag"
                  alt="en"
                  width={25}
                  height={25}
                />{" "}
                Anglais{" "}
              </label>
            </li>
            <li>
              <input type="radio" id="es" name="lang" value="es" />
              <label htmlFor="es">
                <Image
                  src="images/ball-es.svg"
                  className="lang_flag"
                  alt="es"
                  width={25}
                  height={25}
                />{" "}
                Espagnol{" "}
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
