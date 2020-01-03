module.exports = (app) => {
    const customers = require('../controllers/customer.controller.js');

    // Create New Customer
    app.post('/customers', customers.create);


    // Retrieve all Customers
    app.get('/customers', customers.findAll);


    // Retrieve a single Customer with CustomerId
    app.get('/customers/:customerId', customers.findOne);


    // Update a Customer with CustomerId
    app.put('/customers/:customerId', customers.update);


    // Delete a Customer with CustomerId
    app.delete('/customers/:customerId', customers.delete);

}