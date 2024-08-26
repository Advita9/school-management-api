School Management API

## Table of Contents
- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Hosting](#hosting)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Project Description
This project is a School Management API developed using Node.js and Express.js with MySQL as the database. The API allows users to add new schools and retrieve a list of schools sorted by proximity to a specified location.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/school-management-api.git
   cd school-management-api
2. Install dependencies:
   npm install
3. Set up the MySQL database with the following table structure:
   ```
   CREATE TABLE schools (
    	id INT AUTO_INCREMENT PRIMARY KEY,
   	name VARCHAR(255) NOT NULL,
    	address VARCHAR(255) NOT NULL,
    	latitude FLOAT NOT NULL,
    	longitude FLOAT NOT NULL
   );
4. Set up environment variables in a .env file:
   ```bash
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
5. Start the server:
   npm start

### Usage
You can use tools like Postman to interact with the API.

### Hosting
The API is hosted on Heroku. You can access it via the following URL:
- [Heroku App](https://murmuring-brook-41824-6e97693292f5.herokuapp.com/)

### Testing
Use the provided Postman collection to test the API endpoints. Import the collection into Postman, and you can run predefined tests.

### Contributing
Feel free to fork this project, open an issue, or submit a pull request.

### License
This project is licensed under the MIT License.


