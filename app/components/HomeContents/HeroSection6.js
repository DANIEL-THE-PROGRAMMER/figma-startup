
import { mediumText, smallBold, smallText } from "../styles/GlobalStyles";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
const HeroSection6 = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <TopSection>
          <Feat>Testimonials</Feat>
        </TopSection>
        <BottomSection>
          <Test>
            <Testimonial>
              <Top>
                <Icon>
                  <Image
                    src="/assets/icons/avatar1.svg"
                    alt=""
                    layout="responsive"
                    width={0}
                    height={0}
                    style={{
                      width: "100%",
                    }}
                  />
                </Icon>
                <Txt>
                  {" "}
                  <Name>Claire Bell</Name>
                  <Role>Designer</Role>
                </Txt>
              </Top>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year. Slate helps you see
              how many more days you need to work to reach your financial goal
              for the month and year.your financial goal for the month and year.
            </Testimonial>
            <Testimonial>
              <Top>
                <Icon>
                  <Image
                    src="/assets/icons/avatar2.svg"
                    alt=""
                    layout="responsive"
                    width={0}
                    height={0}
                    style={{
                      width: "100%",
                    }}
                  />
                </Icon>
                <Txt>
                  {" "}
                  <Name>Francisco Lane</Name>
                  <Role>Designer</Role>
                </Txt>
              </Top>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year. Slate helps you see
              how many more days you need to work to reach your financial goal
              for the month and year.your financial goal for the month and year.
            </Testimonial>
          </Test>

          <Test>
            <Testimonial>
              <Top>
                <Icon>
                  <Image
                    src="/assets/icons/avatar1.svg"
                    alt=""
                    layout="responsive"
                    width={0}
                    height={0}
                    style={{
                      width: "100%",
                    }}
                  />
                </Icon>
                <Txt>
                  {" "}
                  <Name>Claire Bell</Name>
                  <Role>Designer</Role>
                </Txt>
              </Top>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year. Slate helps you see
              how many more days you need to work to reach your financial goal
              for the month and year.your financial goal for the month and year.
            </Testimonial>
            <Testimonial>
              <Top>
                <Icon>
                  <Image
                    src="/assets/icons/avatar1.svg"
                    alt=""
                    layout="responsive"
                    width={0}
                    height={0}
                    style={{
                      width: "100%",
                    }}
                  />
                </Icon>
                <Txt>
                  {" "}
                  <Name>Francisco Lane</Name>
                  <Role>Designer</Role>
                </Txt>
              </Top>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year. Slate helps you see
              how many more days you need to work to reach your financial goal
              for the month and year.your financial goal for the month and year.
            </Testimonial>
          </Test>
        </BottomSection>
      </HeroWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const HeroWrapper = styled.div`
  margin: 150px 0;
`;
const TopSection = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
`;
const Feat = styled(mediumText)`
  text-align: center;
  margin: 0 0 30px;
`;

const BottomSection = styled.div`
  max-width: 1100px;
  width: 100%;

  margin: 0 auto;
  padding: 0 20px;
  @media only screen and (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const Test = styled.div`
  max-width: 883px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin: 30px auto;
  place-items: center;
  @media only screen and (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 35px;
  max-width: 430px;
  width: 100%;
  height: 100%;
  background: #181818;
  border: 1px solid #dedede;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 20px 0px;
  font-size: 16px;
  font-weight: 400;
`;
const Top = styled.div`
  display: flex;
  align-items:center;
  margin: 0 0 20px;
`;
const Txt = styled.div``;
const Icon = styled.div`
  margin-right: 20px;
`;
const Name = styled(smallBold)``;
const Role = styled(smallText)`
  font-size: 16px;
`;
export default HeroSection6;
