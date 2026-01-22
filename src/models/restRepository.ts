export interface IResult<T> {
  success: boolean;
  data: T[];
}

export interface IRestRepository<TBase> {
  getAll(): Promise<IResult<TBase>>;
}
