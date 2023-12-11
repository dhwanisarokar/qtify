import React, { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Styles from "./Section.module.css";

export default function Section({ title, data, type }) {
  const [carouselToggle, SetCarouselToggle] = useState(true);

  const handleToggle = () => {
    SetCarouselToggle(!carouselToggle);
  };
  return (
    <div>
      <div className={Styles.header}>
        <h3 style={{ fontSize: "20px" }}>{title}</h3>
        <h4 className={Styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>

      {!data?.length ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className={Styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={Styles.wrapper}>
              {data.map((item) => (
                <Card key={item.id} data={item} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              componentRender={(ele) => <Card data={ele} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
}
