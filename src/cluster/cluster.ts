import cluster from "cluster";
import os from "os";
import { FilesController } from "src/files";
import { FilesService } from "src/files/files.service";

import { Server } from "src/server";

class Cluster {
    private readonly server: Server;

    constructor(processes: number) {

        this.server = new Server([
            new FilesController(
                new FilesService()
            )
        ], Number(process.env.PORT) || 3000);

        this.initializeProcesses(processes);
    }

    private async initializeProcesses(processes: number) {
        if (processes > os.cpus().length || processes < 1) {
            throw new Error(`Too many processes, processes must be between 1 and ${os.cpus().length}`);
        }
        
        if (cluster.isPrimary) {
            for (let i = 0; i < processes; i++) {
                cluster.fork();
            }

            cluster.on("exit", () => {
                console.log(`Process with PID ${process.pid} died... Creating new process`);
    
                cluster.fork();
            });
        } else {
            this.server.startServer();
        }
    }
}

export {
    Cluster
}