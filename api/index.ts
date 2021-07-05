import express from 'express';
import { Middlewares } from './middlewares/index'


const app = express();

app.use(express.json())
Middlewares.init(app);

app.listen(1700, () => {
    console.log("Server is running on port 1500");
})