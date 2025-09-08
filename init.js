const mongoose = require("mongoose");
const Chat = require("./models/chat");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/instagram");
    console.log("✅ Connection Successfully");

    let allchats = [
      {
        from: "neha",
        to: "preeti",
        message: "send me notes for the exam",
        created: new Date(),
      },
      {
        from: "ravi",
        to: "aman",
        message: "let's meet tomorrow",
        created: new Date(),
      },
      {
        from: "riya",
        to: "ayush",
        message: "good luck for your interview",
        created: new Date(),
      },
    ];

    // Insert chats
    await Chat.insertMany(allchats);
    console.log("✅ Chats inserted successfully");

    mongoose.connection.close(); // close connection after insert
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
