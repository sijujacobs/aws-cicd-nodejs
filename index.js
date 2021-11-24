const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h2>Welcome to NodeJS-AWS-CICD-APP</h2><h3>Success</h3>')
});

app.get('/products', (req, res) => {
    res.send([
        {
            productId: '1001',
            price: '550',
            color: 'White'
        },
        {
            productId: '1002',
            price: '660',
            color: 'Black'
        },
        {
            productId: '1003',
            price: '770',
            color: 'Green'
        }
    ])
});

app.listen(port, () => {
    console.log(`NodeJS-AWS-CICD-APP is UP and LISTENING to port :${port}`);
})