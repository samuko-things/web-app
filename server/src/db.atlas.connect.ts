import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { afterAtlasDBconnectSuccessful, connectToDBunsuccessful } from '../node-mongo-helpers';
import { createAdmin } from './helpers/methods';

dotenv.config();

const mongooseAtlasConnect = async (port: number | string) => {
  try {
    await mongoose.connect(`${process.env.MONGODB_ATLAS_URI}`);
    afterAtlasDBconnectSuccessful(port);
    createAdmin();
  } catch (err) {
    connectToDBunsuccessful(err);
  }
}

export default mongooseAtlasConnect;
