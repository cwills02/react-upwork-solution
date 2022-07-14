import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";

export default function CategoryMenu() {
  return (
    <MenuList>
      <MenuItem dense disableGutters>
        <ListItemText>Front End</ListItemText>
      </MenuItem>
      <MenuItem dense disableGutters>
        <ListItemText>Design</ListItemText>
      </MenuItem>
      <MenuItem dense disableGutters>
        <ListItemText>E-Commerce</ListItemText>
      </MenuItem>
    </MenuList>
  );
}
