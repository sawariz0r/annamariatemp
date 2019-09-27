import React from "react";
import HeroSection from "./../../components/HeroSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <HeroSection
      color="white"
      size="medium"
      title="Temporarily down for maintenance"
      subtitle="Our website is temporarily down for maintenance. If you want to get in touch with us while our website is down, you can still send us an email at: info@annamariabeachcondo.com "
      buttonOnClick={() => {
        router.push("/pricing");
      }}
    />
  );
}

export default HomePage;
