# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Command    | Description                                    |
| ---------- | ---------------------------------------------- |
| git status | List all new or modified files                 |
| git diff   | Show file differences that haven't been staged |

Directions

1. Put the routes in the table below into your markdown in table format. Hint: You will need to look up how to make tables in markdown! Here's a cheatsheet if you need one!

Disclaimer: We haven't yet talked about the methods PUT and DELETE. They are methods just like GET and POST, but PUT is for update and DELETE is for destroy. We'll come back to them later!

| Method | Path                     | Purpose                                          |
| ------ | ------------------------ | ------------------------------------------------ |
| GET    | /                        | Home page                                        |
| GET    | /places                  | Places index page                                |
| POST   | /places                  | Create new place                                 |
| GET    | /places/new              | Form page for creating a new place               |
| GET    | /places/:id              | Details about a particular place                 |
| PUT    | /places/:id              | Update a particular place                        |
| GET    | /places/:id/edit         | Form page for editing an existing place          |
| DELETE | /places/:id              | Delete a particular place                        |
| POST   | /places/:id/rant         | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET    | \*                       | 404 page (matches any route not defined above)   |

Your places should have a name (string), city (string), state (string), cuisines (string) and a pic (string)

| Name   | City   | State  | Cuisines | Picture |
| ------ | ------ | ------ | -------- | ------- |
| String | String | String | String   | String  |
