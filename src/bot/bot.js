import { config } from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'
config()

const token = process.env.BOT_TOKEN
const bot = new TelegramBot(token, { polling: true })

bot.on('message', msg => {
	const chatId = msg.chat.id
	const text = msg.text

	switch (text) {
		case '/start':
			bot.sendMessage(chatId, 'Salom!')
			break
		default:
			break
	}
})

console.log('Bot ishga tushdi')
