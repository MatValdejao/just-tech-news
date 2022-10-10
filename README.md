# just-tech-news

## Purpose

Just-Tech-News is a social platform for the tech savvy. The application allows its users to read tech news and interact with other tech enthusiasts. Users can comment, reply, and upvote other posts a supplies people with an envrionment where they are able to share their passion with others. 

## Built with

- mySQL
- Sequelize
- Express
- Handlebars
- Jest

## Setup Locally

### Getting Started

- Install mySQL Community Server - [mySQL Community Download]('https://dev.mysql.com/downloads/mysql/')
- Clone this repo - `git clone https://github.com/MatValdejao/just-tech-news`
- Install the dependencies with - `npm i`
- Create a .env file containing values for DB_USER, DB_PW. Add DB_NAME='just_tech_news_db' to target the correct database.

### Create the Database

- From PowerShell or Command Prompt navigate to the 'db' directory of the cloned repo and log into mysql - `mysql -u root -p`
- Create the database - `source schema.sql`
- If you wish to seed the database from your command line interface of choice (in the root of the cloned repo directory), type - `npm run seed`

### You're Ready!

- From the ../just-tech-news directory - `npm start`
- Use an api tool such as Insomnia or Postman to test the APIs or go directly to the [local site](http://localhost:3001)

### Live Look

![Live Website](./just-tech.png)

## Links

[Live Site](https://arcane-journey-82765.herokuapp.com/)<br>
[Checkout the Code](https://github.com/MatValdejao/just-tech-news)
