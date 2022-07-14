import { useAuth } from '../../hook/useAuth';
import './styleUnauth.css';

function UnauthenticatedApp() {
	const { login } = useAuth();

	return (
		<>
			<h2 className='loginHeading'>Log in to join a chat room!</h2>
			<div>
				<button onClick={login} className='loginButton'>
					<img
						src={process.env.PUBLIC_URL + './google-logo.png'}
						alt='G'
					/>
					Login with Google
				</button>
			</div>
		</>
	);
}

export { UnauthenticatedApp };
