const app = require('express')();
const cors = require('cors');
const port = 3000;
const pool = require('./db');


// middleware
app.use(cors());
app.use(require('express').json());
app.listen(port, () => {console.log(`Server running on port ${port}`);})
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        console.log(description);
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }});

app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);    
    }catch (err) {
        console.error(err.message);
    }})





// app.get('/tshirt', (req, res) => {res.status(200).send('T-Shirt endpoint');});
// app.post('/tshirt/:id', (req, res) => {
//     const {id} = req.params;
//     const {logo}= req.body;
//     if (!logo) {
//         return res.status(400).send('Logo is required');
//     }
//     console.log(`Creating T-Shirt with ID: ${id} and Logo: ${logo}`);
//     // res.status(201).send('T-Shirt created');});
//     ;});
