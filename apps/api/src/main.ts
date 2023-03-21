import APIBootstrap from './app/infrastructure/webserver/server';

// Load Env
import dotenv from 'dotenv'

dotenv.config();

const start = async () => {
  try {
    await APIBootstrap.createServer();

  } catch (err) {

    console.log(err);
    process.exit(1);
  }
}

start();
