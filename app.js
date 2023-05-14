const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const request = require('request');
const https = require('https');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/', (req, res) => res.sendFile(__dirname + '/signup.html'));


app.post('/', (req, res) => {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
            ]   
    }
    const jsonData = JSON.stringify(data);
    const url = "https://us8.api.mailchimp.com/3.0/lists/41e2427a6a";
    
    const options = {
        method: "POST",
        auth: "joshua1:a1064d061629854f2f6fa064705e25a5-us8"
    }
    const request = https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data));
        }
        )
    })
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));

http.request(options, function(response){
    response.on("data", function(data){
        console.log(JSON.parse(data));
    }
    )
})

//API KEY
//a1064d061629854f2f6fa064705e25a5-us8       41e2427a6a