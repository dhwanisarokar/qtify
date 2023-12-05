import { useEffect, useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { CircularProgress, Tab, Box } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import { sortByGenre } from "../../utils/sortByGenre";
import styles from "./GenresSection.module.css";

export default function BasicTabs({ data, title, genreLists }) {
  const [value, setValue] = useState("all");
  const [songsData, setSongsData] = useState([]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setSongsData(sortByGenre(data, value));
  }, [value, data]);

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
      </div>
      <TabContext value={value}>
        <Box sx={{ width: "100%" }} className={styles.tabWrapper}>
          <TabList
            onChange={handleChange}
            aria-label="Genre Tab"
            TabIndicatorProps={{ className: styles.indicator }}
          >
            {genreLists?.map((genre) => (
              <Tab
                className={
                  genre.key === value ? styles.selectedTab : styles.genreTab
                }
                key={genre.key}
                label={genre.label}
                value={genre.key}
              />
            ))}
          </TabList>
          <TabPanel value={value}>
            {!songsData?.length ? (
              <CircularProgress />
            ) : (
              <div className={styles.cardWrapper}>
                <Carousel
                  data={songsData}
                  componentRender={(ele) => <Card data={ele} type="songs" />}
                />
              </div>
            )}
          </TabPanel>
        </Box>
      </TabContext>
    </div>
  );
}
