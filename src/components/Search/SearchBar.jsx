import styles from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";

export default function SearchBar({ data }) {
  const [value, setValue] = useState(null);
  // const [filterdSongs, setFilterdSongs] = useState([]);

  const handleChange = (e) => {
    const val = e.target.value;

    setValue(val);
  };

  return (
    <div>
      <TextField
        style={{
          backgroundColor: "white",
          borderRadius: "4px",
        }}
        value={value}
        size="small"
        on
        InputProps={{
          className: styles.search,
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
        }}
        placeholder="Search for songs"
        name="search"
        fullWidth
        onChange={handleChange}
      />
      {value ? <div>{/* {filterdSongs.map((song) => )} */}</div> : null}
    </div>
  );
}
