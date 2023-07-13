import { Route, Routes } from "react-router";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import EventDetailsPage from "./pages/EventDetailsPage";

function App() {
  return (
    <div className="flex flex-col gap-2 min-h-screen bg-gray-100">
      <NavigationBar />
      <div className="container mx-auto p-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:eventID" element={<EventDetailsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
