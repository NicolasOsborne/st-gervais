import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

export interface MenuProps {}

const Menu: FC<MenuProps> = (props) => {
  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false);

  const handleResponsiveMenuClick = () => {
    setIsResponsiveMenuOpen(!isResponsiveMenuOpen);
  };

  return (
    <>
      <header className="uam_header">
        <div className="uam_header_nav">
          <div className="uam_header_burger">
            <div
              className="uam_headerMenuIcon toggle-menu"
              onClick={handleResponsiveMenuClick}
            >
              {isResponsiveMenuOpen ? (
                <i className="site-cross"></i>
              ) : (
                <i className="site-menu"></i>
              )}
            </div>
          </div>
          <div className="uam_header_logo">
            <Link className="uam_headerLogo" href="#">
              <Image
                src="/images/Logo.svg"
                alt="logo"
                className="img-responsive"
                width={116}
                height={50}
              />
            </Link>
          </div>
          <div className="uam_header_menu">
            <div className="uam_headerMenu">
              <div className="uam_headerMenu_linkList">
                <ul className="uam_headerMenu_mainLink">
                  <li>
                    <Link href="#" className="uam_headerMenuLink">
                      {" "}
                      Domaine{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="uam_headerMenuLink">
                      {" "}
                      Infos Live{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="uam_headerMenuLink">
                      {" "}
                      Webcams{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="uam_headerMenuLink">
                      {" "}
                      Tarifs{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="uam_headerMenuLink">
                      {" "}
                      Débutants{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="uam_header_userLink">
            <div className="uam_header_local">
              <Image
                src="images/ball-fr.svg"
                className="lang_flag"
                alt="fr"
                width={25}
                height={25}
              />
              <span className="label_name">Langue</span>
            </div>
            <div className="uam_header_account">
              <Image
                src="images/user.svg"
                className="lang_flag"
                alt="user account"
                width={25}
                height={25}
              />
              <span className="label_name"> Compte </span>
            </div>
            <div className="uam_header_cart">
              <span className="icon"></span>
              <div className="cart_badge">4</div>
              <span className="label_name"> Panier </span>
            </div>
          </div>
        </div>
      </header>
      {isResponsiveMenuOpen && <ResponsiveMenu className="show" />}
    </>
  );
};

export default Menu;
