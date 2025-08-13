const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

const allowedOrigins = [
    'https://juanfpaz.github.io',
    'https://juanfpaz.github.io/form-contacto/',
    'https://jpaz.ar',
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
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));


app.get('/', (req, res) => {
    try {
        console.log(`Recibiendo request desde ${req.headers.origin}`);
        res.json({mensaje:'Hola fonky :D'})
    } catch (error) {
        console.log(error);
        res.status(403).json({error:'Solicitud no permitida'})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})