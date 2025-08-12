const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

const allowedOrigins = [
    'http://localhost:5173'
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));


app.get('/', (req, res) => {
    try {
        console.log('Hola fonky')
        res.json({mensaje:'Hola Fonky! n.n'})
    } catch (error) {
        console.log(error);
        
        res.status(403).json({error:'Solicitud no permitida'})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})