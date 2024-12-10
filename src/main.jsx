import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'
import ProfileCard from "./components/ProfileCard";
import "./Css/Card.css";

createRoot(document.getElementById("root")).render(
  <ProfileCard
    name="James"
    city="Chennai"
    designation="Designer"
    skills={["HTML", "CSS", "JavaScript", "React", "Node", "Express", "MongoDB"]}
    online ={true}  profile ="two.jpg"
  />
);
