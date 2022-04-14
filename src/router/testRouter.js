import express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
    res.send("test page!")
});

module.exports = router;