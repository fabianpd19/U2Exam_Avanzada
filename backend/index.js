const express = require("express");
const cors = require("cors");
const conectarDB = require("./conexion");
const estudiantesRoutes = require("./routes/estudiantes");

const app = express();
const PORT = 3000;

conectarDB();

app.use(cors());
app.use(express.json());
app.use("/api/estudiantes", estudiantesRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});
