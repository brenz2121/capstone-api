const express = require("express");
const swaggerUi = require("swagger-ui-express");

const app = express();
const PORT = 3000;

app.use(express.json());

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "CAPSTONE API",
    version: "1.0.0",
    description: "API untuk project CAPSTONE"
  },
  servers: [
    {
      url: `http://localhost:${PORT}`
    }
  ],
  paths: {
    "/": {
      get: {
        summary: "Cek API",
        responses: {
          "200": {
            description: "API berjalan"
          }
        }
      }
    }
  }
};

app.get("/", (req, res) => {
  res.json({
    message: "API CAPSTONE berhasil berjalan!"
  });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server berjalan di port ${PORT}`);
});