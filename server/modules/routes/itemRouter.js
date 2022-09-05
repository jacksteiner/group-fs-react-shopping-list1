const {response} = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


///get
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "list" ORDER BY "name";`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got the drinks`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making query ${sqlText}`, error);
            res.sendStatus(500); 
        });
});


//post 


//put to update data base 





module.exports = router;