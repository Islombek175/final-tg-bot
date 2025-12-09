import { config } from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'
import onRegister from './handlers/onRegister.js'
import onStart from './handlers/onStart.js'
config()

const token = process.env.BOT_TOKEN
const bot = new TelegramBot(token, { polling: true })

bot.on('message', msg => {
	const chatId = msg.chat.id
	const text = msg.text

	switch (text) {
		case '/start':
			onStart(msg)
			break
		case '/register':
			onRegister(msg)
		default:
			break
	}
})

console.log('Bot ishga tushdi')

export default bot
