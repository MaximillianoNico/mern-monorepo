import mongoose from 'mongoose';

const DatabaseName = process.env.MONGO_INITDB_DATABASE || 'root-db';

const initialize = async () => {
  const DatabaseURL = process.env.NOSQL_URL || `${process.env.MONGO_URL}`;

  console.log('Initialize Database: ', DatabaseName, DatabaseURL)
  try {
    await mongoose.connect(DatabaseURL, { dbName: DatabaseName })
  } catch (err) {
    console.log('Connection Failed to ', DatabaseURL, err)
  }

  console.log('Success connect to ', DatabaseURL)
}

export default {
  initialize
}
