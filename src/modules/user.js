import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	telegramId: {
		type: String,
		require: true,
		unique: true,
	},
	firstName: {
		type: String,
	},
	balance: {
		type: Number,
		default: 100,
	},
	active: {
		type: Boolean,
		default: true,
	},
})

const user = new mongoose('User', userSchema)

export default user
