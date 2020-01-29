This project consumes the Flickr Public Feed Api and displays the returned photos with their basic information in a card layout. The documentation for the api can be found [here](https://www.flickr.com/services/feeds/docs/photos_public/). The project is hosted at https://flickr-public-feed-biswas.herokuapp.com/

Few essentials to download and run this project are given below: 

## Install Node.js

You will need to install Node.js to run the project. The Node.js installations instructions can be found [here]( https://nodejs.org/en/download/package-manager/)

You should be able to run the following commands after installing
  $ node --version
  $ npm --version
  
## Install yarn

Make sure yarn is installed as well. You can find the instructions [here](https://legacy.yarnpkg.com/en/docs/install/)
  
## Clone the project

  $ git clone https://github.com/biswasthapa/flickr-feed.git
  
## Configuration

The configuration files for respective environments can be found at config/ directory

## Install Dependencies and run

You can install the dependencies by running the following command
  $ yarn install

Run the server with the following
  $ yarn start
  
The app can be accessed locally by navigating http://localhost:3000 in your browser
  
## Running the tests
  
Use the following command to run the tests
  
  $ yarn test

