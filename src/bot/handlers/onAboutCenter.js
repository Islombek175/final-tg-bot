import bot from '../bot.js'

const onAboutUs = chatId => {
	bot.sendMessage(
		chatId,
		'🏫 100X o‘quv markazi\n\nBiz 2026 yildan beri sifatli ta’lim berib kelayotgan zamonaviy o‘quv markazimiz.\n\n📚 Yo‘nalishlar:\n• Ingliz va rus tillari\n• Matematika\n• Dasturlash (HTML, CSS va JavaScript)\n• Grafik dizayn\n\n👨‍🏫 Tajribali ustozlar\n🧑‍🎓 Natijaga yo‘naltirilgan darslar\n📈 Zamonaviy o‘quv metodikasi\n📍 Manzil: Xiva shahar IT Park binosi\n⏰ Ish vaqti: Dushanba – Shanba, 9:00 – 18:00\n📞 Aloqa: +998 XX XXX XX XX\n\n👇 Quyidagi tugmalardan foydalanishingiz mumkin'
	)
}

export default onAboutUs
