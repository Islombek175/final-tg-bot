import { config } from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'
import onRegister from './handlers/onRegister.js'
import onStart from './handlers/onStart.js'
config()

const token = process.env.BOT_TOKEN
const bot = new TelegramBot(token, { polling: true })
const CHANNEL_ID = '@test_channel_islombek'

const checkIfUserSubscribed = async chatId => {
	try {
		console.log('TRY++++++++++++')

		const chatMember = await bot.getChatMember(CHANNEL_ID, chatId)
		console.log('---------------------')
		console.log(chatMember.status)

		if (chatMember.status == 'left' || chatMember.status == 'kicked') {
			return false
		} else {
			return true
		}
	} catch {
		console.log('CATCH--------------')
	}
}

bot.on('message', async msg => {
	const chatId = msg.chat.id
	const text = msg.text
	const firstName = msg.chat.first_name

	const subscription = await checkIfUserSubscribed(chatId)

	console.log(subscription)

	// false -> kanalda yoq
	// true -> kanalda bor

	if (subscription == false) {
		return bot.sendMessage(
			chatId,
			`Hurmatli ${firstname}\n Siz botdan foydalanishingiz uchun oldin quyidagi kanalga obuna bolishingiz kerak... 👇`,
			{
				reply_markup: {
					inline_keyboard: [
						[
							{
								text: '100x Academy Xiva',
								url: `https://t.me/academy_100x_uz`,
							},
						],
						[
							{
								text: 'Obunani tekshirish ✅',
								callback_data: `confirm_subscribtion`,
							},
						],
					],
				},
			}
		)
	}

	console.log(subscription)

	switch (text) {
		case '/start':
			onStart(chatId, firstName)
			break
		case '/register':
			onRegister(chatId)
		default:
			break
	}
})

console.log('Bot ishga tushdi')

export default bot
