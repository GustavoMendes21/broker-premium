import axios from "axios";

export const api = axios.create({
  baseURL: "raw.githubusercontent.com/GustavoMendes21/broker-premium/main/src/data/db.json"
})