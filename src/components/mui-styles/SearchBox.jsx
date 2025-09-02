import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

/**
 * SearchBox Component
 * @param {string} label - Input label text
 * @param {string} value - Input value
 * @param {function} onChange - Change handler
 * @param {string|number} width - Width of the search box
 * @param {string|number} height - Height of the search box
 * @param {ReactNode} icon - Custom icon (default: SearchIcon)
 * @param {string} size - "small" or "medium"
 */
export default function SearchBox({
  label = "Search",
  value = "",
  onChange,
  width = 300,
  height = 45,
  icon = <SearchIcon />,
  size = "small",
  ...props
}) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      size={size}
      variant="outlined"
      sx={{
        width,
        "& .MuiOutlinedInput-root": {
          height,
        },
        "& .MuiInputLabel-root": {
          fontSize: size === "small" ? "14px" : "16px",
        },
      }}
      slotProps={{
        input:{
            endAdornment: (
          <InputAdornment position="end">
            {icon}
          </InputAdornment>
        ),
        }
        
      }}
      {...props}
    />
  );
}
