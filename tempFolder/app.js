const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://hp8668648230:Hemant6558@hemantcluster.wzzmkgc.mongodb.net/")
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

// Model
const User = mongoose.model('User', userSchema);

// Async Function
async function runQuery() {
  try {
    const user1 = await User.create({
      name: 'Hemant Pawar',
      email: 'hpawar1010@gmail.com',
      age: 30,
      isActive: true,
      tags: ['developer', 'engineer', 'associate']
    });

    console.log(`New user created:`, user1);
  } catch (err) {
    console.log(`Error is: ${err.message}`);
  } finally {
    await mongoose.connection.close();
    console.log("Database connection closed");
  }
}

runQuery();
