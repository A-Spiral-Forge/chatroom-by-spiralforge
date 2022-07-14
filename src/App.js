import { AuthenticatedApp } from './components/authenticatedApp/indexAuth';
import { UnauthenticatedApp } from './components/unauthenticatedApp/indexUnauth';
import { useAuth } from './hook/useAuth';
import './App.css';

function App() {
	const { user } = useAuth();

	return (
		<div className='container'>
			<h1>💬 Chat Room | SpiralForge</h1>
			<h4>Chat with anybody globally</h4>
			<div className='chatroom'>
				{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
			</div>
		</div>
	);
}

export default App;
