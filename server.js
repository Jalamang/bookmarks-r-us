const app = require("./app");
const dotenv = require("dotenv")

// Configuration
dotenv.config()

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));