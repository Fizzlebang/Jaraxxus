import { MongoClient } from 'mongodb';

const {
  DB_PORT,
  DB_HOST_NAME,
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
  DB_NAME
} = process.env;

const url = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${DB_HOST_NAME}:${DB_PORT}?authMechanism=DEFAULT&maxPoolSize=10`;

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
let db = null;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function connectDatabase(n = 3) {
  try {
    const connected = await client.connect();
    db = connected;
  } catch (err) {
    if (n == 0) throw err;
    await sleep(5000);
    await connectDatabase(n - 1);
  }
}

export async function getDatabase() {
  if (!db) {
    await connectDatabase();
  }
  return db.db(DB_NAME);
}

export async function closeDatabase() {
  db.close();
}
