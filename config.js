const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'XjhX1aZA#XTwoTbQLLsm4v4TzZSr0GAG1ZHMM8ilQrAv8CBeWiFw', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority',// Enter Your MongoDB URL
    OWNER_NUMBER: process.env.OWNER_NUMBER || '94782543893',    // Enter Your Owner Number
};
