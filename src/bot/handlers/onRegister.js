import bot from '../bot.js'

const onRegister = chatId => {
	bot.sendMessage(chatId, "Ro'yxatdan o'tish.")
}

export default onRegister
