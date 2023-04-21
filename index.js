// Require the Client object from the Notion JS SDK
const {Client, LogLevel} = require('@notionhq/client');
require('dotenv').config();

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_API_DATABASE = process.env.NOTION_API_DATABASE;

// Create a notion client
const notion = new Client({auth: NOTION_API_KEY, logLevel: LogLevel.DEBUG});

(async () => {
  const databaseId = NOTION_API_DATABASE;
  // Call `retrieve` on `databases` to retrieve a database object.
  const response = await notion.databases.retrieve({database_id: databaseId});
  console.log(response);
})();
