import bot from '../bot.js'

const onStart = msg => {
	const chatId = msg.chat.id
	const firstName = msg.chat.first_name
	bot.sendMessage(
		chatId,
		`Assolomu aleykum ${firstName}, botimizga xush kelibsiz.`
	)
}

export default onStart
