"use strict";

var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: function required() {
      return this.provider === "local";
    }
  },
  avatar: {
    type: String,
    "default": ""
  },
  isAdmin: {
    type: Boolean,
    "default": false
  },
  isVerified: {
    type: Boolean,
    "default": false
  },
  address: {
    type: String,
    "default": ""
  },
  phone: {
    type: String,
    "default": ""
  },
  // ➕ Thêm các trường hỗ trợ social login
  provider: {
    type: String,
    "enum": ["local", "google", "facebook"],
    "default": "local"
  },
  providerId: {
    type: String,
    "default": null
  }
}, {
  timestamps: true
});
var User = mongoose.model("User", userSchema);
module.exports = User;