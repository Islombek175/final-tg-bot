import { config } from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'
import onAboutUs from './handlers/onAboutCenter.js'
import onCourses from './handlers/onCourses.js'
import onRegister from './handlers/onRegister.js'
import onStart from './handlers/onStart.js'
import onUsers from './handlers/onUsers.js'
config()

const token = process.env.BOT_TOKEN
const bot = new TelegramBot(token, { polling: true })
const CHANNEL_ID = '@group_IT101'

const checkIfUserSubscribed = async chatId => {
	try {
		const chatMember = await bot.getChatMember(CHANNEL_ID, chatId)
		console.log(chatMember.status)

		if (chatMember.status == 'left' || chatMember.status == 'kicked') {
			return false
		} else {
			return true
		}
	} catch {
		console.log('error: chatMember checking')
	}
}

bot.on('message', async msg => {
	const chatId = msg.chat.id
	const text = msg.text
	const firstName = msg.chat.first_name

	const user_subscribed = await checkIfUserSubscribed(chatId)

	console.log(user_subscribed)

	if (user_subscribed == false) {
		return bot.sendMessage(
			chatId,
			`Hurmatli ${firstName}, \nSiz botimizdan foydalanishingiz uchun oldin quyidagi kanalga obuna bo'lishing garak... 👇`,
			{
				reply_markup: {
					inline_keyboard: [
						[
							{
								text: `Our channel`,
								url: 'https://t.me/group_IT101',
							},
						],
						[
							{
								text: `Obunani tekshirish ✅`,
								callback_data: 'confirm_subscribtion',
							},
						],
					],
				},
			}
		)
	}

	switch (text) {
		case '/start':
			onStart(msg)
			break
		case '✍️ Ro‘yxatdan o‘tish':
			onRegister(chatId)
			break
		case '/users':
			onUsers(chatId)
			break
		case '📚 Kurslar':
			onCourses(chatId)
			break
		case 'ℹ️ Markaz haqida':
			onAboutUs(chatId)
			break
		default:
			bot.sendMessage(
				chatId,
				'⚠️ Kechirasiz, men sizning xabaringizni tushunmadim.\n\nIltimos, quyidagi tugmani bosing 👇\n/start'
			)
			break
	}
})

bot.on('callback_query', async query => {
	const msg = query.message
	const chatId = msg.chat.id
	const data = query.data
	const queryId = query.id

	if (data == 'confirm_subscribtion') {
		console.log('TUGMA BOSILDI')
		const user_subscribed = await checkIfUserSubscribed(chatId)

		if (user_subscribed == false) {
			return bot.answerCallbackQuery(queryId, {
				text: "Siz hali obuna bo'lmadingiz... ❌",
			})
		} else {
			bot.deleteMessage(chatId, msg.message_id)
			return onStart(msg)
		}
	}
})

export default bot
