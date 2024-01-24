import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { Button, Typography } from "@mui/material";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  //@ts-ignore
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <a href="home" style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="h1">Enigma</Typography>
        </a>
      </div>
      <div>
        <TextField
          id="search"
          type="search"
          label="Search"
          value={searchTerm}
          onChange={handleChange}
          sx={{ width: 600 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div>
        <Button variant="contained">Signup</Button>
        <Button variant="outlined">Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
