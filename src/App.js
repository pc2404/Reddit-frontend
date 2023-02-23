import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";

// import AddPosts from "./components/AddPosts";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/addPost" element={<AddPosts />} /> */}
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
