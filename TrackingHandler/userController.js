const express = require('express');
const router = express.Router();

const alakiService = require('./alakiService');


// #region Apis

router.get('/users',

    async (req, res) => {

         await alakiService.Test();

        res.status(200).send('user');


    }
);

module.exports = router;