import express, { NextFunction, Request, Response } from "express";
import usersRouter from "./routes/users.route";

const app = express();

// Configurações da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de Rotas
app.use(usersRouter);

app.get("/status", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: "bar" });
});

// Incialização do Servidor
app.listen(3000, () => {
    console.log(`Aplicação executando na porta 3000`);
});
