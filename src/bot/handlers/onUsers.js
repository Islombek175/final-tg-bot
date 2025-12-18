import User from '../../modules/user.js'
import bot from '../bot.js'

async function onUsers(chatId) {
	console.log(`onUsers...`)

	const userSoni = await User.countDocuments()

	if (chatId === 6480933576) {
		bot.sendMessage(chatId, `Foydalanuvchilar soni: ${userSoni}`)
	} else {
		bot.sendMessage(chatId, `Faqat adminlar uchun.`)
	}
}

export default onUsers
