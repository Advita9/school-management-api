
const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Bhagwad@2003',
	database: 'school_management'
});

connection.connect((err) => {
	if (err) throw err;
	console.log('Connected to Mysql database');
});

// app.get("/hello", (req, res) => {
// 	res.send('Welcome to the server');
// });

// app.post('/cats', (req, res) => {
// 	res.send('Post request to cats');
// });

app.get('/listSchools', (req, res) => {
	const { latitude, longitude } = req.query;

	// Validate input data
	if (!latitude || !longitude) {
		return res.status(400).json({ error: 'Latitude and longitude are required' }); 
	}

	// Fetch all schools from the database
	const sql = 'SELECT *, ROUND(6371 * ACOS(COS(RADIANS(?)) * COS(RADIANS(latitude)) * COS(RADIANS(longitude) - RADIANS(?)) + SIN(RADIANS(?)) * SIN(RADIANS(latitude))), 2) AS distance FROM schools ORDER BY distance ASC'
	connection.query(sql, [latitude, longitude, latitude], (err, results) => {
	if (err) throw err;
	res.json(results);
	});
});

app.post('/addSchool', (req, res) => {
	const { name, address, latitude, longitude } = req.body;

	// Validate input data
	if (!name || !address || !latitude || !longitude) {
		return res.status(400).json({ error: 'All fields are required' });
	}

	// Insert the new school into the database
	const sql = ' INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
	connection.query(sql, [name, address, latitude, longitude], (err, result) => {
	if (err) throw err;
	res.status(201).json( {message: 'School added successfully', id: result.insertId });
	});
});


app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
