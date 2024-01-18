import express, { NextFunction, Request, Response } from "express";
import searchFile from "./src/SearchFile";

const app = express();

async function init() {
  app.get(
    "/",
    async (request: Request, response: Response, next: NextFunction) => {
      const fileData = searchFile("test");
      return response.send({ data: "fuiegf" });
    }
  );

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
}

/**
 * initiate server
 */

init();
