const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/1',
            'name' : '이풍호',
            'birthday' : '930402',
            'gender' : '남자',
            'job' : '치킨집사장'
        },
        {
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/2',
            'name' : '조은별',
            'birthday' : '941109',
            'gender' : '여자',
            'job' : 'CEO'
        },
        {
            'id' : 3,
            'image' : 'https://placeimg.com/64/64/3',
            'name' : '김대연',
            'birthday' : '940826',
            'gender' : '남자',
            'job' : '제빵사'
        }
    ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`));