import User from '../../modules/user.js'
import bot from '../bot.js'

async function onUsers(chatId) {
	console.log(`onUsers...`)

	const userSoni = await User.countDocuments()

	bot.sendMessage(chatId, `Foydalanuvchilar soni: ${userSoni}`)
}

export default onUsers
