import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import "./App.css";
import Suggestions from "./components/Suggestions";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Suggestions />
    </div>
  );
}