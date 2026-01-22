import type { IRestRepository, IResult } from "../models/restRepository";
import partsMock from "../mocks/partsMock.json";
import type { IServiceConfig } from "../models/part";

export const createService = <T>(
  config: IServiceConfig
): IRestRepository<T> => {
  const headers = {
    "Content-Type": "application/json",
    ...config.headers,
  };

  return {
    async getAll(): Promise<IResult<T>> {
      return {
        success: true,
        data: partsMock as T[],
      };
    },
  };
};
