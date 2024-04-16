const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
    try{
        const response = await Todo.find({});
        res.status(200).json({
            success: true,
            data: response,
            message: "Entries retrieved successfully"
        });
    } catch(err) {
        console.log("Error: ", err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message
        });
    }
}