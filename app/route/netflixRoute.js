const express = require("express");
const router = express.Router();
const financialStatement = require("../../netflixFinancialStatement.json");


router.get("/all", (req, res, next)=>{
    res.status(200).json(financialStatement);
})


module.exports = router;