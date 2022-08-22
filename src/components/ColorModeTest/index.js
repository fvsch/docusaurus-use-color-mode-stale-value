import { useColorMode } from "@docusaurus/theme-common";
import React from "react";

const darkBg = {
  margin: 10,
  padding: 10,
  color: "white",
  backgroundColor: "black",
};

const lightBg = {
  margin: 10,
  padding: 10,
  color: "black",
  backgroundColor: "white",
};

export default function ColorModeTest() {
  const { colorMode } = useColorMode();
  const invertMode = colorMode === "dark" ? "light" : "dark";

  return (
    <section style={{ marginBlock: 50 }}>
      <div className="container">
        <p style={{ margin: 10, padding: 10 }}>colorMode: {colorMode}</p>
        <p title={colorMode} style={colorMode === "dark" ? darkBg : lightBg}>
          My background should be {colorMode}
        </p>
        <p title={invertMode} style={invertMode === "dark" ? darkBg : lightBg}>
          My background should be {invertMode}
        </p>
      </div>
    </section>
  );
}
