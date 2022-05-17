import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import HotelList from './pages/Hotels/HotelList';
import HotelsOutlet from './pages/Hotels/HotelsOutlet';
import Hotel from './pages/Hotels/Hotel';
import Master from './Layouts/Master';

const App = () => {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Master />}>
						<Route index element={<Home />} />
						<Route path='hotels' element={<HotelsOutlet />}>
							<Route index element={<HotelList />} />
							<Route path=':hotelId' element={<Hotel />} />
						</Route>
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
