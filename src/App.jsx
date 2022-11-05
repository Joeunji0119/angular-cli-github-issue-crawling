import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorProvider, IssueProvider, LoadingProvider } from "./contexts/issueContext";

// import Detail from "./components/Detail";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <ErrorProvider>
      <LoadingProvider>
        <IssueProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<DetailPage />} />
            </Routes>
          </BrowserRouter>
        </IssueProvider>
      </LoadingProvider>
    </ErrorProvider>
  );
}

export default App;
