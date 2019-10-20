const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Grid = mongoose.model('grids');


module.exports = app => {
    app.post('/api/grids', requireLogin, (req, res) => {
        const {rows} = req.body;

        const grid = new Grid ({
            rows: rows,
            _user: req.user.id,
            creationDate: Date.now()
        });

        try{
            grid.save();
            res.send(grid);
        } catch(err) {
            res.status(422).send(err);
        }
        

    });
};