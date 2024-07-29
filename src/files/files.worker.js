import { parentPort, workerData } from "node:worker_threads";

import sharp from "sharp";

let counter = 0;

        for (let i = 0; i < 10e8; i++) {
            counter++;
        }

        parentPort?.postMessage({
            counter
        });