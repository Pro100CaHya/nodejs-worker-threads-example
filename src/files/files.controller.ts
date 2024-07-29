import { Router, Request, Response, NextFunction } from "express";
import { resolve } from "path";

import { FilesService } from "./files.service";

class FilesController {
    public path = "/files";
    public router = Router();

    constructor(private filesService: FilesService) {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/resize`, this.resizeFile);
    }

    private resizeFile = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const resizedFile = await this.filesService.resizeFile({
                width: 600,
                height: 400
            });

            response.status(200)
                .json(resizedFile);
        } catch (error) {
            response.status(500)
                .json(error);
        }
    }
}

export {
    FilesController
}