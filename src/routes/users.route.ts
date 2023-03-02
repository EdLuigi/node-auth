import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

// get /users/
// get /users/ : uuid
// post /users
// put /users/ : uuid
// delete /users/: uuid

const usersRouter = Router();

usersRouter.get("/users", (req: Request, res: Response, next: NextFunction) => {
    const users = [
        { userName: "Renan" },
        { userName: "Caio" },
        { userName: "João" },
        { userName: "Marcelo" },
        { userName: "Antonio" },
    ];
    res.status(StatusCodes.OK).send(users);
});

usersRouter.get("/users/:uuid", (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
});

usersRouter.post("/users", (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser);
});

usersRouter.put("/users/:uuid", (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const mondifiedUser = req.body;

    mondifiedUser.uuid = uuid;
    res.status(StatusCodes.OK).send({ mondifiedUser });
});

export default usersRouter;
