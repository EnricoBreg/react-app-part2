import { create } from "zustand";

interface AuthStore {
  user: string;
  login: (user: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: "",
  login: (user) => set(() => ({ user })),
  logout: () => set(() => ({ user: "" })),
}));

export default useAuthStore;
