import React from "react";
import styled from "styled-components";
import map from "../../../public/assets/icons/Vector.svg";
import phoneandroid from "../../../public/assets/icons/phoneandroid.svg";

import twitter from "../../../public/assets/icons/twitter.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <Wrapper>
      <FooterWrapper>
        <FingertipsSection>
          <Head>Fingertips</Head>
          <Links>Home</Links>
          <Links>Example</Links>
          <Links>Pricing</Links>
          <Links>Update</Links>
        </FingertipsSection>
        <ResourcesSection>
          <Head>Resources</Head>
          <Links>Home</Links>
          <Links>Example</Links>
          <Links>Pricing</Links>
          <Links>Update</Links>
        </ResourcesSection>
        <AboutSection>
          <Head>About</Head>
          <Links>Home</Links>
          <Links>Example</Links>
          <Links>Pricing</Links>
          <Links>Update</Links>
        </AboutSection>
        <Section>
          <Location>
            <Icon>
              <Image
                src="/assets/icons/Vector.svg"
                alt=""
                width={0}
                height={0}
                layout="responsive"
                style={{ width: "100%" }}
              />
            </Icon>
            7480 Mockingbird Hill undefined
          </Location>
          <Location>
            <Icon>
              <Image
                src="/assets/icons/phoneandroid.svg"
                alt=""
                width={0}
                height={0}
                layout="responsive"
                style={{ width: "100%" }}
              />
            </Icon>{" "}
            (239) 555-0108
          </Location>
          <SocialIcons>
            <Icons>
              <Image
                src="/assets/icons/facebook.svg"
                alt=""
                width={0}
                height={0}
                layout="responsive"
                style={{ width: "100%" }}
              />
            </Icons>
            <Icons>
              <Image
                src="/assets/icons/inkedin.svg"
                alt=""
                width={0}
                height={0}
                layout="responsive"
                style={{ width: "100%" }}
              />
            </Icons>
            <Icons>
              <Image
                src="/assets/icons/twitter.svg"
                alt=""
                width={0}
                height={0}
                layout="responsive"
                style={{ width: "100%" }}
              />
            </Icons>
          </SocialIcons>
        </Section>
      </FooterWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const FooterWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 100px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;

  @media only screen and (max-width: 720px){
      
  grid-template-columns: repeat(2, 1fr);
    place-items: unset;
   
  }
  /* @media only screen and (max-width: 500px){
      
  grid-template-columns: 1fr;
    place-items: unset;
     padding: 0 100px;
  } */
}
`;
const FingertipsSection = styled.div`
  margin: 30px 0 0;
`;
const Head = styled.p`
  font-size: 20px;
  margin: 0 0 40px;
`;
const Links = styled.p`
  font-size: 16px;
  margin: 20px 0;
  cursor: pointer;
`;
const ResourcesSection = styled.div`
  margin: 30px 0 0;
`;
const AboutSection = styled.div`
  margin: 30px 0 0;
`;
const Section = styled.div`
  margin: 30px 0 0;
`;
const Location = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px;
`;
const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.div`
  margin-right: 10px;
`;
const Icons = styled.div`
  width: 40px;
  margin-right: 20px;
  cursor: pointer;
`;
export default Footer;
