import { Route, Routes } from "react-router-dom";
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home'
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import NoPage from './components/NoPage';

function App() {
  
  return (
		<Routes>
			<Route path="/" element={<Layout />}>
        <Route index element={<Home />} />        
        <Route path='destinations' element={<Destination />} />
        <Route path='crew' element={<Crew />} />
        <Route path='technology' element={<Technology />} />
        <Route path='*' element={<NoPage />} />
      </Route>
		</Routes>
	);
}

export default App;
