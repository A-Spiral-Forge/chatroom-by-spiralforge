import { Link } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import './Landing.css';

function Landing() {
	return (
		<>
			<h2>Choose a Chat Room</h2>
			<ul className='chat-room-list'>
				{chatRooms.map((room) => (
					<li key={room.id}>
						<Link to={`/room/${room.id}`}>
							<img
								src={
									process.env.PUBLIC_URL +
									`./chatRooms/${room.logo}`
								}
								alt={room.title[0]}
							/>
							{room.title}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export { Landing };
