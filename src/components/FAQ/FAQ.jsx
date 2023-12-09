import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./FAQ.module.css";

const faqlist = [
  {
    summary: "Is QTify free to use?",
    details: "Yes, It is free to use!",
  },
  {
    summary: "Can I download and listen to songs offline?",
    details:
      "Sorry, unfortunately we don't provide the service to download any songs.",
  },
];

export default function FAQ() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>FAQ</h1>
      </div>
      <div className={styles.accordionWrapper}>
        {faqlist.map((item) => (
          <Accordion className={styles.faqAccordion}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon color="primary" style={{ fontSize: "40px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontSize: "1.1rem" }}>
                {item.summary}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              <Typography>{item.details}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
