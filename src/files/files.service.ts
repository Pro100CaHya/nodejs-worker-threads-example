import { Worker } from "node:worker_threads";
import { resolve as pathResolve } from "path";

import sharp from "sharp";

import { ResizeFileDto } from "./dto/resize-file.dto";

class FilesService {
    constructor() {}

    // public async resizeFile(resizeFileDto: ResizeFileDto) {
    //     const worker1 = new Promise((resolve, reject) => {
    //         const { width, height } = resizeFileDto;

    //         const filesWorker = new Worker(pathResolve(__dirname, "files.worker.js"), {
    //             workerData: {
    //                 inputPath: pathResolve(process.cwd(), "uploads", "original", "picture-2.jpg"),
    //                 outputPath: pathResolve(process.cwd(), "uploads", "resized", `picture-2-${Date.now()}.jpg`),
    //                 width,
    //                 height
    //             }
    //         });

    //         filesWorker.on("message", (result) => {
    //             resolve(result);
    //         })

    //         filesWorker.on("error", (err) => {
    //             console.log(err)
    //             reject(err);
    //         })
    //     });

    //     const worker2 = new Promise((resolve, reject) => {
    //         const { width, height } = resizeFileDto;

    //         const filesWorker = new Worker(pathResolve(__dirname, "files.worker.js"), {
    //             workerData: {
    //                 inputPath: pathResolve(process.cwd(), "uploads", "original", "picture.jpg"),
    //                 outputPath: pathResolve(process.cwd(), "uploads", "resized", `picture-${Date.now()}.jpg`),
    //                 width,
    //                 height
    //             }
    //         });

    //         filesWorker.on("message", (result) => {
    //             resolve(result);
    //         })

    //         filesWorker.on("error", (err) => {
    //             console.log(err)
    //             reject(err);
    //         })
    //     });

    //     const worker3 = new Promise((resolve, reject) => {
    //         const { width, height } = resizeFileDto;

    //         const filesWorker = new Worker(pathResolve(__dirname, "files.worker.js"), {
    //             workerData: {
    //                 inputPath: pathResolve(process.cwd(), "uploads", "original", "picture-3.jpg"),
    //                 outputPath: pathResolve(process.cwd(), "uploads", "resized", `picture-3-${Date.now()}.jpg`),
    //                 width,
    //                 height
    //             }
    //         });

    //         filesWorker.on("message", (result) => {
    //             resolve(result);
    //         })

    //         filesWorker.on("error", (err) => {
    //             console.log(err)
    //             reject(err);
    //         })
    //     });

    //     const worker4 = new Promise((resolve, reject) => {
    //         const { width, height } = resizeFileDto;

    //         const filesWorker = new Worker(pathResolve(__dirname, "files.worker.js"), {
    //             workerData: {
    //                 inputPath: pathResolve(process.cwd(), "uploads", "original", "picture-4.jpg"),
    //                 outputPath: pathResolve(process.cwd(), "uploads", "resized", `picture-4-${Date.now()}.jpg`),
    //                 width,
    //                 height
    //             }
    //         });

    //         filesWorker.on("message", (result) => {
    //             resolve(result);
    //         })

    //         filesWorker.on("error", (err) => {
    //             console.log(err)
    //             reject(err);
    //         })
    //     });

    //     const worker5 = new Promise((resolve, reject) => {
    //         const { width, height } = resizeFileDto;

    //         const filesWorker = new Worker(pathResolve(__dirname, "files.worker.js"), {
    //             workerData: {
    //                 inputPath: pathResolve(process.cwd(), "uploads", "original", "picture-5.jpg"),
    //                 outputPath: pathResolve(process.cwd(), "uploads", "resized", `picture-5-${Date.now()}.jpg`),
    //                 width,
    //                 height
    //             }
    //         });

    //         filesWorker.on("message", (result) => {
    //             resolve(result);
    //         })

    //         filesWorker.on("error", (err) => {
    //             console.log(err)
    //             reject(err);
    //         })
    //     });

    //     return Promise.all([worker1, worker2, worker3, worker4, worker5]);
    // }

    public async resizeFile(resizeFileDto: ResizeFileDto) {
        const { width, height } = resizeFileDto;

        const promise1 = new Promise((resolve, reject) => {
            sharp(pathResolve(process.cwd(), "uploads", "original", "picture-2.jpg"))
                .resize(width, height)
                .toFile(pathResolve(process.cwd(), "uploads", "resized", `picture-2-${Date.now()}.jpg`))
                .then(() => {
                    resolve({
                        success: true
                    });
                })
                .catch((error) => {
                    reject({
                        success: false,
                        error: error.message
                    });
                });
        });

        const promise2 = new Promise((resolve, reject) => {
            sharp(pathResolve(process.cwd(), "uploads", "original", "picture.jpg"))
                .resize(width, height)
                .toFile(pathResolve(process.cwd(), "uploads", "resized", `picture-${Date.now()}.jpg`))
                .then(() => {
                    resolve({
                        success: true
                    });
                })
                .catch((error) => {
                    reject({
                        success: false,
                        error: error.message
                    });
                });
        });

        const promise3 = new Promise((resolve, reject) => {
            sharp(pathResolve(process.cwd(), "uploads", "original", "picture-3.jpg"))
                .resize(width, height)
                .toFile(pathResolve(process.cwd(), "uploads", "resized", `picture-3-${Date.now()}.jpg`))
                .then(() => {
                    resolve({
                        success: true
                    });
                })
                .catch((error) => {
                    reject({
                        success: false,
                        error: error.message
                    });
                });
        });

        const promise4 = new Promise((resolve, reject) => {
            sharp(pathResolve(process.cwd(), "uploads", "original", "picture-4.jpg"))
                .resize(width, height)
                .toFile(pathResolve(process.cwd(), "uploads", "resized", `picture-4-${Date.now()}.jpg`))
                .then(() => {
                    resolve({
                        success: true
                    });
                })
                .catch((error) => {
                    reject({
                        success: false,
                        error: error.message
                    });
                });
        });

        const promise5 = new Promise((resolve, reject) => {
            sharp(pathResolve(process.cwd(), "uploads", "original", "picture-5.jpg"))
                .resize(width, height)
                .toFile(pathResolve(process.cwd(), "uploads", "resized", `picture-5-${Date.now()}.jpg`))
                .then(() => {
                    resolve({
                        success: true
                    });
                })
                .catch((error) => {
                    reject({
                        success: false,
                        error: error.message
                    });
                });
        });

        const promise6 = new Promise((resolve, reject) => {
            sharp(pathResolve(process.cwd(), "uploads", "original", "picture-6.jpg"))
                .resize(width, height)
                .toFile(pathResolve(process.cwd(), "uploads", "resized", `picture-6-${Date.now()}.jpg`))
                .then(() => {
                    resolve({
                        success: true
                    });
                })
                .catch((error) => {
                    reject({
                        success: false,
                        error: error.message
                    });
                });
        });

        return Promise.all([
            promise1, promise2, promise3, promise4, promise5, promise6
        ])
    }
}

export {
    FilesService
}