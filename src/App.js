import { GlobalStorage } from './GlobalContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import QuestionPage from './components/questionsPage/QuestionPage';
import Resume from './components/resume/Resume';

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perguntas" element={<QuestionPage />} />
          <Route path="/resumo" element={<Resume />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;