![example workflow](https://github.com/rzgry/Express-REST-API-Template/actions/workflows/node.js.yml/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# Express-REST-API-Template

Simple express boilerplate based off of [express-generator](https://expressjs.com/en/starter/generator.html). Includes [eslint](https://eslint.org) and [prettier](https://prettier.io) for linting/code formatting, [nodemon](https://github.com/remy/nodemon) for automatic server restarting, and [Jest](https://jestjs.io) for testing.

## Getting Started

### Install dependencies

```
npm install
```

### Running in development

```
npm run dev
```

### Running in production

```
npm start
```

Runs on localhost:3000 by default but can be configured using the `PORT` environment variable.

### Running tests

```
npm test

# Watch repo
npm run test:watch
```

### Linting

```
npm run lint

# fix issues
npm run lint:fix
```


<br><br>
Build a Spotify-like app with these endpoints

1. User authentication:
    * Users should be able to sign up with a unique email and password.
    * Users should be able to log in with their email and password.
    * Passwords should be hashed and salted before storing them in the database.
    * Users should be able to log out.
    * After successful signup and login user should receive a JSON web token (JWT) for authentication.
    * Every request to private routes should be checked for authentication.
    * Implement forgot password functionality as well.
    * You can also use any other third-party authentication service like auth0 or firebase.
2. Playlists:
    * Users should be able to create, read, update and delete (CRUD) their own playlists.
    * Playlists should have a name and a description.
    * Users should be able to add songs to their playlists.
    * Users should be able to remove songs from their playlists.
    * Create RESTful API endpoints for each CRUD operation, such as:
        * POST /api/playlists: Accepts a JSON payload with a name and description, creates a new playlist for the authenticated user
        * GET /api/playlists: Returns a list of all playlists created by the authenticated user
        * GET /api/playlists/:id : Returns the playlist with the specified ID
        * PUT /api/playlists/:id :  Accepts a JSON payload with an updated name and description, updates the playlist with the specified ID
        * DELETE /api/playlists/:id : Deletes the playlist with the specified ID
        * POST /api/playlists/:id/songs: Accepts a JSON payload with song_id and adds the song to the playlist with the specified ID
        * DELETE /api/playlists/:id/songs: Accepts a JSON payload with song_id and removes the song from the playlist with the specified ID
 * Store the playlist data in a database, such as MongoDB, MySQL, or PostgreSQL.
 * Provide a way to return the playlists of the authenticated user only.
 * For adding and removing songs from the playlist, you need to have song_id and playlist_id in the payload.
3. Songs:
    * Use any of the existing music streaming APIs from Spotify API.
    * Users should be able to search and retrieve songs from an external API, such as:
        * GET /api/songs: Returns a list of all songs available from the external API
        * GET /api/songs/:id : Returns the song with the specified ID
        * GET /api/songs/search: Accepts a query parameter for the search term and returns a list of songs that match the search term
    * Users should be able to view the song's details like artist name, album, duration, etc.
    * Store the song's data in a database, such as MongoDB, MySQL, or PostgreSQL.
    * Provide a way to return the songs based on the search query.

4. Deployment:
* The application should be deployed to a cloud service, like Heroku, AWS, or Google Cloud.
* The application should be accessible via a public URL.

Extra Step:
Users should be able to add each other as friends and should be able to view all playlists of their friends, Make Sure you build all the relevant APIs required for this
