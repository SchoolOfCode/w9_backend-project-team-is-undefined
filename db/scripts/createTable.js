import pool from '../index.js'
import 'dotenv/config'


const sqlStr = `CREATE TABLE IF NOT EXISTS tech-links (
	id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY ,
    link TEXT,
    userName TEXT,
    topic TEXT,
    voteCount INT
    );`

async function createTable(){
    const response = await pool.query(sqlStr)
    console.log (response)
};

createTable()