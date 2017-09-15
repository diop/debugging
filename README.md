# Contacts Snapshot starter project

## Dev Setup

1. Create your database: `createdb contacts_development`
1. Load your database with the schema: `npm run load_schema`
1. Install your dependencies: `npm install`
1. Run the server: `nodemon`


## Features which are broken, and need to be fixed

- Going to the Home Page (`http://localhost:3000/`) should let you see  all the contacts
- Going to a contact detail page should show the full name of the contact
- Adding a contact should add a new contact in the database, and redirect to the created contact
- Clicking on the `Delete` link for a contact should delete the contact
- Searching for a contact should list all the contacts which match the search string
