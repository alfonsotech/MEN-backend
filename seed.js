const mongoose = require("mongoose");
const Book = require("./models/book");
const mongoURI = "mongodb://localhost:27017/my-books-db";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });

const seedBooks = [
  {
    title: "Book 5",
    author: "Author 5",
    published: new Date(2021, 0, 1), // January 1, 2021
  },
  {
    title: "Book 6",
    author: "Author 6",
    published: new Date(2022, 5, 15), // June 15, 2022
  },
  // Add more book objects as needed
];

const seedDB = async () => {
  try {
    // Check if there are any existing books
    const existingBooks = await Book.countDocuments();

    // Remove all existing books if there are any
    if (existingBooks > 0) {
      await Book.deleteMany({});
    }

    // Insert seed books
    await Book.insertMany(seedBooks);
    console.log("Database seeded successfully");
  } catch (err) {
    console.error("Error seeding database", err);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
