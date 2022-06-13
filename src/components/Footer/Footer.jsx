import {
  FooterLinkItems,
  FooterWrap,
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLink,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import { Image } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import classes from "./Footer.module.css";

const isteLogo = require("../../assets/iste.png"); // eslint-disable-line

const Footer = () => {
  return (
    //  FooterContainer
    //Column 1
    <FooterContainer>
      {/* FooterWrap */}
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink as="a" href="#">
                Team
              </FooterLink>
              <FooterLink as="a" href="#">
                Gallery
              </FooterLink>
              <FooterLink as="a" href="#">
                Blogs
              </FooterLink>
              <FooterLink as="a" href="#">
                Events
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Services</FooterLinkTitle>
              <FooterLink as="a" href="#">
                Testimonials
              </FooterLink>
              <FooterLink as="a" href="#">
                Domains
              </FooterLink>
              <FooterLink as="a" href="#">
                Team
              </FooterLink>
              <FooterLink as="a" href="#">
                Image Gallery
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          {/* Column 2 */}
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Socials</FooterLinkTitle>
              <FooterLink as="a" href="#">
                Facebook
              </FooterLink>
              <FooterLink
                as="a"
                href="https://www.instagram.com/iste_rait/?hl=en"
              >
                Instagram
              </FooterLink>
              <FooterLink as="a" href="#">
                Twitter
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          {/* Map iframe */}
          <FooterLinksWrapper>
            <FooterLinkItems>
              <iframe
                title="map embed"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15085.759815185045!2d73.0257006!3d19.0443847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x95e9ca007676b993!2sRamrao%20Adik%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1655115872096!5m2!1sen!2sin"
                width="400"
                height="300"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo as="a" href="#">
              <Image
                src={isteLogo}
                alt="ISTE Logo"
                style={{ width: "50px", height: "50px", marginRight: "10px" }}
              />{" "}
              ISTE-RAIT
            </SocialLogo>
            <WebsiteRights>
              ISTE-RAIT &copy; {new Date().getFullYear()}. All Rights Reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="#" target="_blank" aria-label="Facebook">
                <FaFacebook className={classes.footer__social__fb} />
              </SocialIconLink>
              <SocialIconLink href="#" target="_blank" aria-label="Instagram">
                <FaInstagram className={classes.footer__social__insta} />
              </SocialIconLink>
              <SocialIconLink href="#" target="_blank" aria-label="Twitter">
                <FaTwitter className={classes.footer__social__twitter} />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};
export default Footer;
