const app = require('./server')
const db = require('./db');
const taxRoute = require('./routes/taxRoutes');

// const router = express.Router();


taxRoute(app);