import express, { NextFunction, Request, Response } from "express";
import usersRouter from "./routes/users.route";

const app = express();

app.use(usersRouter);

app.get("/status", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: "bar" });
});

app.listen(3000, () => {
    console.log(`Aplicação executando na porta 3000`);
});
