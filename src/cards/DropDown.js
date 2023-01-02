import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DropDown = (props) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    props.passFun(event.target.value);
    

    // console.log(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Months</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value= {'value'}
          label="Chhose Duration"
          onChange={handleChange}
        >
          <MenuItem value={["January", "Feburary", "March", "April"]}>
            {props.duration[0]}
          </MenuItem>
          <MenuItem value={["May", "June", "July", "August"]}>
            {props.duration[1]}
          </MenuItem>
          <MenuItem value={["September", "October", "November", "December"]}>
            {props.duration[2]}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default DropDown;
