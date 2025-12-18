import bot from '../bot.js'

const onStart = msg => {
	const chatId = msg.chat.id
	const firstName = msg.chat.first_name

	bot.sendMessage(
		chatId,
		`👋 Assalomu alaykum, ${firstName}!

📚 100x o'quv markazining rasmiy botiga xush kelibsiz!

Bu bot orqali siz:
• Kurslarimiz haqida batafsil ma'lumot olasiz  
• Kurslarga onlayn ro‘yxatdan o'tishingiz mumkin  
• Jadval va to'lovlar haqida ma'lumot olasiz  

Quyidagi menyudan kerakli bo'limni tanlang 👇`,
		{
			reply_markup: {
				keyboard: [
					[{ text: '📚 Kurslar' }, { text: '✍️ Ro‘yxatdan o‘tish' }],
					[{ text: 'ℹ️ Markaz haqida' }, { text: '💬 Fikr bildirish' }],
					[{ text: '❓ Yordam' }],
				],
			},
		}
	)
}

export default onStart
