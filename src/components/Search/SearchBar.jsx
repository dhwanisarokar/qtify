import styles from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";

export default function SearchBar() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;

    setValue(val);
  };

  return (
    <TextField
      style={{
        backgroundColor: "white",
        borderRadius: "4px",
      }}
      value={value}
      size="small"
      InputProps={{
        className: styles.search,
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      placeholder="Search for songs"
      name="search"
      fullWidth
      onChange={handleChange}
    />
  );
}
