import { http, HttpResponse } from "msw";
import { adresses } from "./data/adresses";
import blackouts from "./data/output.json";

export const handlers = [
  http.get("/users", () => {
    return HttpResponse.json(adresses);
  }),
  http.get("/api/blackouts", () => {
    return HttpResponse.json(blackouts);
  }),
];
