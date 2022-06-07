express = require("express");
const router = express.Router();

const { getUser, saveUser } = require("../controllers/user.controller");

router.get("/",(req,res)=>{
    res.end("Hello from local host");
})


// User Route to submit form
router.get("/users",getUser);

// Users Route to POST data
router.post('/users',saveUser);

module.exports = router;