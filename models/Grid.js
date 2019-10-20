const mongoose = require('mongoose');
const { Schema } = mongoose;

const gridSchema = new Schema ({
    rows: [Object],
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    creationDate: Date
});

mongoose.model('grids', gridSchema);