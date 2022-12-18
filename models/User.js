const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please enter a valid email address",
        ],
      },
    },
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },
      id: false,
    }
  );

  
  // create the user model using userSchema
  const User = model("User", userSchema);
  
  // export the model
  module.exports = User;
  