const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const { connect } = require('mongoose');
const { Tour } = require('../../src/models/tourModel');
dotenv.config({ path: 'config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
connect(DB).then((con) => {
  console.log('DB was successfully connected');
});

const insertData = async () => {
  try {
    const tours = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'tours-simple.json'), 'utf-8')
    );
    await Tour.create(tours);
    console.log('DB was successfully added');
  } catch (error) {
    console.log(error);
  }

  process.exit();
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('DB was successfully deleted');
  } catch (error) {
    console.log(error);
  }

  process.exit();
};

console.log(process.argv);
if (process.argv[2] === '--insert') {
  insertData();
} else if (process.argv[2] === '--delete') {
  deleteData();
} else {
  process.exit();
}
