import bot from '../bot.js'

const onCourses = chatId => {
	bot.sendMessage(
		chatId,
		'🎓 Bizning o‘quv markazimizda quyidagi kurslar mavjud:\n\n1️⃣ Ingliz tili\n2️⃣ Rus tili\n3️⃣ Matematika\n4️⃣ Dasturlash (HTML, CSS va JavaScript)\n5️⃣ Grafik dizayn\n\n👇 Quyidagi kurslardan birini tanlang va batafsil ma’lumot oling:'
	)
}

export default onCourses
