// Require the Client object from the Notion JS SDK
const {Client, LogLevel} = require('@notionhq/client');
require('dotenv').config();

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_API_DATABASE = process.env.NOTION_API_DATABASE;

// Create a notion client
// const notion = new Client({auth: NOTION_API_KEY, logLevel: LogLevel.DEBUG});
const notion = new Client({auth: NOTION_API_KEY});

// get a list of databases
(async () => {
  // works
  const databaseId = NOTION_API_DATABASE;
  // Call `retrieve` on `databases` to retrieve a database object.
  const response = await notion.databases.retrieve({database_id: databaseId});
  console.log('\n=== databases response:\n', response);
})();

/*
// WORKS
// get a list of all pages in a database
(async () => {
  const databaseId = NOTION_API_DATABASE;
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  console.log('\n=== databases query response:\n', response);
})();

// WORKS
// get a list of blocks
(async () => {
  const databaseId = NOTION_API_DATABASE;
  const response = await notion.blocks.children.list({
    block_id: databaseId,
  });
  console.log('\n=== blocks response:\n', response);
})();
*/

/*
// FAILS, message: 'Insufficient permissions for this endpoint.'
// get a list of users
(async () => {
  const response = await notion.users.list();
  console.log('\n=== users response:\n', response);
})();
*/
