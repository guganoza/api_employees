const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date },
    position: { type: String },
    salary: { type: Number },
    employeeCode: { type: String, required: true, unique: true },
    departments: [
      {
        code: { type: String },
        name: { type: String },
      },
    ],
  },
  {
    collection: 'employees', // Set collection name to 'employees'
    timestamps: true, // Adds createdAt and updatedAt fields automatically
    read: 'nearest', // Read concern option
    writeConcern: {
      w: 'majority', // Write concern w option
      j: true, // Write concern j option
      wtimeoutMS: 30000, // Write concern wtimeoutMS option
    },
  },
);

const EmployeeModel = mongoose.model('Employee', employeeSchema);
module.exports = EmployeeModel;
