import express from "express";
import { createServer } from "http";
import { routes } from "./routes";

const app = express();

const http = createServer(app);

app.use(express.json());
app.use(routes);

export { http }