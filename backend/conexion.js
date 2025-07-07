const mongoose = require("mongoose");

const conectarDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/gestion_academica", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Conexión a MongoDB exitosa");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB", error);
  }
};

module.exports = conectarDB;
