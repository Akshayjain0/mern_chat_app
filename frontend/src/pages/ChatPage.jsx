import axios from "axios";
import { useEffect, useState } from "react";

const ChatPage = () => {
	const [chat, setChat] = useState([]);
	const fetchChats = async () => {
		const { data } = await axios.get("/api/chat");
		setChat(data);
	};

	useEffect(() => {
		fetchChats();
	});
	return (
		<div>
			{chat.map((chat) => (
				<div key={chat._id}>{chat.chatName}</div>
			))}
		</div>
	);
};

export default ChatPage;
