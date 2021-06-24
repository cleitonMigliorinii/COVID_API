import { Request, Response } from "express";
import api from "./api";

class StateService {

    async searchDataFullStateNow(){

        const promise = await api.get("data?place_type=state&is_last=True");
        return promise.data;

    }

    async searchDataStateNow(state : string){

        const promise = await api.get(`data?place_type=state&is_last=True&state=${state}`);
        return promise.data;

    }

    async getRegisterStateNewDeathsAndConfirmed(state : string){

        const promise = await api.get(`data?place_type=state&state=${state}`);
        return promise.data.results;

    }

}

export { StateService }