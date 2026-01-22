import { create } from "zustand";
import type { IPart } from "../models/part";

interface IPartStore {
  parts: IPart[];
  selectedPart: IPart | null;
  setAllParts: (parts: IPart[]) => void;
  setSelectedPart: (part: IPart) => void;
}

const initialState: IPartStore = {
  parts: [],
  selectedPart: null,
  setAllParts: () => {},
  setSelectedPart: () => {},
};

export const usePartStore = create<IPartStore>((set) => ({
  ...initialState,
  setAllParts: (parts: IPart[]) => set({ parts }),
  setSelectedPart: (part: IPart) => set({ selectedPart: part }),
}));
