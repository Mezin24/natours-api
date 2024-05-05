import dotenv from 'dotenv';
import { connect } from 'mongoose';
dotenv.config({ path: 'config.env' });

import { app } from './app';

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
connect(DB).then((con) => {
  console.log('DB was successfully connected');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
