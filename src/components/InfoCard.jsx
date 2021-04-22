import React from "react";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: "center", padding: "0 10%" }}>
      Şunu söyleyin: <br />
      {isIncome ? "Pazartesi " : "Perşembe "} ye{" "}
      {isIncome ? "Maaş " : "Seyahat "} kategorisine{" "}
      {isIncome ? "100₺ " : "50₺ "} {isIncome ? "Gelir " : "Gider "} ekle
    </div>

    //pazartesiye maaş kategorisine 100 tl gelir ekle
  );
};

export default InfoCard;
