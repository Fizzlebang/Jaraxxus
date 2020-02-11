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

/**
 * Connects to the database
 * @function connectDatabase
 * @param {number} retries - Number of retries left
 */
export async function connectDatabase(retries = 3) {
  try {
    const connected = await client.connect();
    db = connected;
  } catch (err) {
    if (retries == 0) throw err;
    await sleep(5000);
    await connectDatabase(retries - 1);
  }
}

/**
 * Gets a database connection instance
 * @function getDatabase
 */
export async function getDatabase() {
  if (!db) {
    await connectDatabase();
  }
  return db.db(DB_NAME);
}

/**
 * Closes the database connection instance
 * @function closeDatabase
 */
export async function closeDatabase() {
  db.close();
}
