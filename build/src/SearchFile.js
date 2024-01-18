"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { readFile, readdir } from "node:fs";
const promises_1 = require("fs/promises");
const path_1 = require("path");
const rootPath = "storage/app";
const targetPath = `/home/sajjad/Desktop/Playground/file-search/server/${rootPath}`;
const readfileTest = promises_1.readFile;
const readDirest = promises_1.readdir;
async function searchFile(fileName) {
    //   return new Promise((resolve, reject) => {
    //     readdir(targetPath, "utf-8", (err, files) => {
    //       if (err) {
    //         console.log("Error in file read");
    //         reject(err.message);
    //       }
    //       console.log(files);
    //     });
    //   });
    const path = await (0, promises_1.readdir)(targetPath, { withFileTypes: true });
    const files = await Promise.all(path.map((singlePath) => {
        console.log(singlePath);
        const resolvedPath = (0, path_1.resolve)(fileName);
        return singlePath.isDirectory() ? searchFile(resolvedPath) : resolvedPath;
    }));
    console.log(files);
}
// async function traverseDirRecursively(totalPath: array) {
//   const files = await Promise.all(
//     filesInPath.map((fileInPath) => {
//       const resolvedPath = resolve(path, fileInPath.name);
//       return fileInPath.isDirectory()
//         ? readDirectory(resolvedPath)
//         : resolvedPath;
//     })
//   );
// }
exports.default = searchFile;
