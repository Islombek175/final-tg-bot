import bot from '../bot.js'

const onRegister = msg => {
	const chatId = msg.chat.id

	bot.sendMessage(chatId, "Ro'yxatdan o'tish.")
}

export default onRegister
