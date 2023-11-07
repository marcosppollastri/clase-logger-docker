import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
const mongoUsername = process.env.MONGO_INITDB_ROOT_USERNAME || 'default_username';
const mongoPassword = process.env.MONGO_INITDB_ROOT_PASSWORD || 'default_password';
const mongoHost = process.env.MONGO_HOST || 'local_mongodb';
const mongoPort = process.env.MONGO_PORT || '27017';
const mongoDatabase = process.env.MONGO_DATABASE || 'your_database_name';

export const mongoUri = `mongodb://${mongoUsername}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDatabase}?authSource=admin`;

export default {
  mongoUri
};
