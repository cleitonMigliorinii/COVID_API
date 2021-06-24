import { Request, Response } from "express";
import { StateService } from "../services/StateService";

class StatesControllers{

    async executeSearchDataFullStateNow(request: Request, response: Response){
        
        const service = new StateService();
        response.json(await service.searchDataFullStateNow());

    }

    async executeSearchDataStateNow(request: Request, response: Response){

        const { state } = request.params;

        const service = new StateService();
        response.json(await service.searchDataStateNow(state));

    }

    async executeGetRegisterStateNewDeathsAndConfirmed(request: Request, response: Response){

        const { state } = request.params;

        const service = new StateService();
        const list: any[] = await service.getRegisterStateNewDeathsAndConfirmed(state)
        let newList:any[] = [];

        list.forEach(item => {
            
            newList.push(
                {
                    "date": item.date,
                    "new_confirmed": item.new_confirmed,
                    "new_deaths": item.new_deaths,
                    "state": item.state 
                }
            )

        });

        response.json(newList);

    }

}

export { StatesControllers }