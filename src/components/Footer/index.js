import React from 'react';
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const FooterSection = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About Us
                            </FooterLinkTitle>                               
                                <FooterLink to="/signin">
                                    How it works?
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Testimonials
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Careers
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Investor
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Terms of Service
                                </FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Contact Us
                            </FooterLinkTitle>                               
                                <FooterLink to="/signin">
                                    Contact
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Support
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Destinations
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Sponsorships
                                </FooterLink>

                        </FooterLinkItems>

                        
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Videos
                            </FooterLinkTitle>                               
                                <FooterLink to="/signin">
                                    Submit Video
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Ambassadors
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Agency
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Influencer
                                </FooterLink>

                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Business
                            </FooterLinkTitle>                               
                                <FooterLink to="/signin">
                                    Operation
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Engineers
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Managers
                                </FooterLink>
                        </FooterLinkItems>

                        
                    </FooterLinksWrapper>

                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>
                            Lamin'n
                        </SocialLogo>
                        <WebsiteRights>
                            Lamin'n &copy; {new Date().getFullYear()} <br></br>
                            All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default FooterSection
