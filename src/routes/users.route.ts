import { NextFunction, Request, Response, Router } from "express";

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
    res.status(200).json(users);
});

usersRouter.get(
    "/users/:uuid",
    (req: Request, res: Response, next: NextFunction) => {
        const uuid = req.params.uuid;
        res.status(200).send({ uuid });
    }
);

export default usersRouter;
