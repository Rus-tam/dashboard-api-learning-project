import { Request, Response } from 'express';

export interface IUsersController {
	login: (req: Request, res: Response) => void;
	register: (req: Request, res: Response) => void;
}
