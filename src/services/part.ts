import type { IPart } from "../models/part";
import { createService } from "./main";

const partService = createService<IPart>({
  baseUrl: "/api/parts",
});

export default partService;
