# Roast
## Introduction
Roast allows its user to search for the nearest cafe and read its reviews at http://roast-cafes.surge.sh/
## Landing Page
![Image of Landing](https://i.imgur.com/qgxEYGw.png)
## Technology
* React.js
* Yelp API
* React Bootstrap
## Backend Repository
https://github.com/SFX818/Team-8-backend
## Set-Up
* fork and clone repo
* npm i
## User Stories
* As a user, I should be able to sign up as a new user and log in
* As a user, I should be able to see the front page with the title of the site and about on the top left corner with the login/signup on the top right corner with a get started button
* As a user, I should be able to click the get started button which redirects me to a search page when I am not logged in
* As a user, I should be able to enter a zipcode which then populates the nearby cafes when I am not logged in
* As a user, I should be able to view more information about a particular cafe, yelp favicon, their reviews, a form to submit reviews and a add to favorites button
* As a user, I should receive a warning to tell me to log in if I click on add to favorites or submit a review without being logged in
* As a user, I should be able to click on my username and view my profile and favorites
## Creation Process
* Team member brainstorm for application theme that all had a personal interest in.
* Researched possible third party APIs for obtaining cafe data; decided on YELP.
* Developed user stories and wireframes.
* Created RESTful routes in the backend that allow for the manipulation of database models.
* Developed React components to match wireframes and connect to the database models.
#### ERD
![Image of ERD](https://i.imgur.com/pDLvnet.png)
#### Wireframes
##### Homepage
![Image of Homepage](https://i.imgur.com/fOqJbIv.png)
##### Searched Cafe Results
![Image of Search](https://i.imgur.com/Xviid7w.png)
##### Cafe Show Page
![Image of Cafe](https://i.imgur.com/c5jYlAL.png)
##### Profile Page
![Image of Profile](https://i.imgur.com/8HrzoYM.png)
##### Profile Favorites
![Image of Favorites](https://i.imgur.com/kd6rdOP.png)
## Challenges
* Utilising Axios to connect to backend routes.
* Deploying with Surge and editing unrecognized routes.
* Learning best Mongoose practices and editing original backend routes for easier data manipulation.
## Future Goals
* Allow users to rate the coziness of the cafe shop on a scale of 1-5
* Allow users to upload images of the cafe