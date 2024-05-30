import { Router } from "express";

import RutaUsuario from "./routes.usuario";

import RutaDash from "./routes.dash";
import routesProducts from "./routes.product";
const ruta = Router();
ruta.use("/", RutaUsuario);
ruta.use("/", RutaDash);
ruta.use("/",routesProducts)
export default ruta;

