const taxController = require('../controllers/taxController');

const taxRoutes = (app)=>{
   app.post('/getTaxDetails',taxController.getTaxDetails);
   
}

module.exports = taxRoutes;