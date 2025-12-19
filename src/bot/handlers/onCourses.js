import bot from '../bot.js'

const onCourses = chatId => {
	bot.sendMessage(
		chatId,
		'🎓 Bizning o‘quv markazimizda quyidagi kurslar mavjud:\n\n1️⃣ Ingliz tili\n2️⃣ Rus tili\n3️⃣ Matematika\n4️⃣ Dasturlash (HTML, CSS va JavaScript)\n5️⃣ Grafik dizayn\n\n👇 Quyidagi kurslardan birini tanlang va batafsil ma’lumot oling:',
		{
			reply_markup: {
				inline_keyboard: [
					[
						{ text: '🇬🇧 Ingliz tili', callback_data: 'course_english' },
						{ text: '🇷🇺 Rus tili', callback_data: 'course_russian' },
					],
					[
						{ text: '🧮 Matematika', callback_data: 'course_math' },
						{ text: '💻 Dasturlash', callback_data: 'course_programming' },
					],
					[{ text: '🎨 Grafik dizayn', callback_data: 'course_design' }],
				],
			},
		}
	)
}

export default onCourses
