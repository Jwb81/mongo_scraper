var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    // username of the poster
    username: {
        type: String,
        required: true
    },

    body: {
        type: String,
        require: true
    },

    // each comment will belong to an article, so link to the article here
    article: {
        type: Schema.Types.ObjectId,
        ref: "Article"
    },

});

// This creates our model from the above schema, using mongoose's model method
var Comment = mongoose.model("Comment", CommentSchema);

// Export the Article model
module.exports = Comment;