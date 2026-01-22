import { create } from "zustand";
import type { IPart } from "../models/part";
import type { PartStatusEnum } from "../models/enums/partEnum";

interface IPartStore {
  parts: IPart[];
  selectedPart: IPart | null;
  setAllParts: (parts: IPart[]) => void;
  setSelectedPart: (part: IPart | null) => void;
  setStatusPart: (status: PartStatusEnum) => void;
}

const initialState: IPartStore = {
  parts: [],
  selectedPart: null,
  setAllParts: () => {},
  setSelectedPart: () => {},
  setStatusPart: () => {},
};

export const usePartStore = create<IPartStore>((set) => ({
  ...initialState,
  setAllParts: (parts: IPart[]) => set({ parts }),
  setSelectedPart: (part: IPart | null) => set({ selectedPart: part }),
  setStatusPart: (status: PartStatusEnum) =>
    set((state) => {
      if (!state.selectedPart) return state;

      const updatedPart = { ...state.selectedPart, status };
      return {
        selectedPart: updatedPart,
        parts: state.parts.map((part) =>
          part.id === state.selectedPart?.id ? updatedPart : part
        ),
      };
    }),
}));
