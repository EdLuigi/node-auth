import express from "express";
import statusRouter from "./routes/status.route";
import usersRouter from "./routes/users.route";

const app = express();

// Configurações da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de Rotas
app.use(usersRouter);
app.use(statusRouter);

// Incialização do Servidor
app.listen(3000, () => {
    console.log(`Aplicação executando na porta 3000`);
});
