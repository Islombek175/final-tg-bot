import bot from '../bot.js'

const onStart = (chatId, firstName) => {
	bot.sendMessage(
		chatId,
		`Assolomu aleykum ${firstName}, botimizga xush kelibsiz.`
	)
}

export default onStart
