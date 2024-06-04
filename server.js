const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const mongoURI = "mongodb://localhost:27017/my-books-db";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });

app.use(cors());
app.use(express.json());

const Book = require("./models/book");

// Get all books READ
app.get("/api/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Create a new book //CREATING
app.post("/api/books", async (req, res) => {
  console.log("req.body>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", req.body);
  const { title, author, published } = req.body;
  const book = new Book({ title, author, published });
  try {
    await book.save();
    res.status(201).send(book);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get a specific book
app.get("/api/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send();
    res.send(book);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a book
app.patch("/api/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) return res.status(404).send();
    res.send(book);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a book
app.delete("/api/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).send();
    res.send(book);
  } catch (err) {
    res.status(500).send(err);
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
