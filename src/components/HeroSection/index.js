import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import "./styles.scss";

function HeroSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={1}
        />
      </div>
    </Section>
  );
}

export default HeroSection;