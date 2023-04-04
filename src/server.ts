import express from "express";
import { Request, Response, Router } from "express";

const app = express();

const route = Router();

app.use(express.json());

route.get('/', (req: Request, res: Response) => {
    res.json({
        'message': 'Hello world'
    })
});

app.use(route);

app.listen(3000, () => 'App running on port 3000')