// config/database.js
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://julian:julian@extra.rj0ctwm.mongodb.net/?retryWrites=true&w=majority&appName=extra";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connect() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error(error);
  }
}

export { client, connect };
