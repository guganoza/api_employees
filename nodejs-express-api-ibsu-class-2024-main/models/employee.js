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
    collection: 'employees',
    timestamps: true,
    read: 'nearest',
    writeConcern: {
      w: 'majority',
      j: true,
      wtimeoutMS: 30000,
    },
  },
);

const EmployeeModel = mongoose.model('Employee', employeeSchema);
module.exports = EmployeeModel;
