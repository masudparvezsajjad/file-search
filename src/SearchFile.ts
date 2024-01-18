// import { readFile, readdir } from "node:fs";
import { readFile, readdir } from "fs/promises";
import { resolve } from "path";

const rootPath = "storage/app";

const targetPath = `/home/sajjad/Desktop/Playground/file-search/server/${rootPath}`;

const readfileTest = readFile;
const readDirest = readdir;
async function searchFile(fileName: string) {
  //   return new Promise((resolve, reject) => {
  //     readdir(targetPath, "utf-8", (err, files) => {
  //       if (err) {
  //         console.log("Error in file read");
  //         reject(err.message);
  //       }
  //       console.log(files);
  //     });
  //   });

  const path = await readdir(targetPath, { withFileTypes: true });

  const files = await Promise.all(
    path.map((singlePath) => {
      console.log(singlePath);
      const resolvedPath = resolve(fileName);

      return singlePath.isDirectory() ? searchFile(resolvedPath) : resolvedPath;
    })
  );

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

export default searchFile;
