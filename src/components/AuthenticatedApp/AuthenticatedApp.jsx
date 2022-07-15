import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from '../Landing/Landing';
import { ChatRoom } from '../ChatRoom/ChatRoom';

function AuthenticatedApp() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/room/:id' element={<ChatRoom />} />
			</Routes>
		</BrowserRouter>
	);
}

export { AuthenticatedApp };
