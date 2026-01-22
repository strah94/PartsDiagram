import type { PartStatusEnum } from "./enums/partEnum";

export interface IPart {
  id: string;
  name: string;
  status: PartStatusEnum;
  supplier: string;
  material: string;
  weight: number;
  critical: boolean;
  lastUpdated: string;
  geometry: IGeometry;
}

interface IGeometry {
  width: number;
  height: number;
  holes: IHole[];
}

interface IHole {
  x: number;
  y: number;
  diameter: number;
}

export interface IServiceConfig {
  baseUrl?: string;
  headers?: Record<string, string>;
}
