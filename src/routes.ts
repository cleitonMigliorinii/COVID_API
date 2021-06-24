import { Router } from "express";
import { StatesControllers } from "./controllers/StatesControllers";

const routes = Router();

const statesControllers = new StatesControllers();

routes.get("/searchDataFullStateNow", statesControllers.executeSearchDataFullStateNow);
routes.get("/searchDataStateNow/:state", statesControllers.executeSearchDataStateNow);
routes.get("/getRegisterStateNewDeathsAndConfirmed/:state",statesControllers.executeGetRegisterStateNewDeathsAndConfirmed);

export { routes };