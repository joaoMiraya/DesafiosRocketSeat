
const path = require('path');

const homeController = {
    index: (req, res) =>{
       res.render('home')
       
    },
};

module.exports = homeController;