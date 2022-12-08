const express = require("express");
const router = express.Router();
const config = require("../../netflixFinancialStatement.json");


router.get("/all", auth, (req, res, next)=>{
    
})


module.exports = router;