import React, { useState } from "react";
import Navbar from "./components/Navbar";
import {
  Container,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [color, setColor] = useState(true);

  const theme = createTheme({
    typography: {
      h3: {
        fontFamily: "cursive",
      },
    },
    palette: {
      primary: {
        main: color ? "#ff80ab" : "#070F2B",
      },
      secondary: {
        main: color ? "#9195F6" : "#FF407D",
      },
      warning: {
        main: color ? "#FF9800" : "#1de9b6",
      },
      error: {
        main: color ? "#D04848" : "#1D5B79",
      },
      info: {
        main: color ? "#37B5B6" : "#AED8CC",
      },
      success: {
        main: color ? "#43a047" : "#aeea00",
      },
    },
  });

  const handleTheme = () => {
    if (color) {
      setColor(false);
    } else {
      setColor(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={
          color
            ? { backgroundColor: "HighlightText" }
            : { backgroundColor: "slategray" }
        }
      >
        <Navbar color={color} handleTheme={handleTheme} />
        <Container sx={{ padding: "107px 0px" }}>
          <Typography variant="h3" align="center" sx={{ marginBottom: "20px" }}>
            CRUD Function
          </Typography>
          <Form />
          <ListGroup />
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
