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

exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id
        const response = await Todo.findById({_id:id});

        if(!response) {
            return res.status(404).json({
                success: false,
                data: "Not found",
                message: "Entry not found"
            })
        }

        res.status(200).json({
            success: true,
            data: response,
            message: "Entry retrieved successfully"
        })
    } catch(err) {
        console.log("error", err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message
        })
    }
}