import { create } from 'zustand';

interface Store {
    words: string;
    setWords: (newString: string) => void;
}

const useStore = create<Store>((set) => ({
    words: '',
    setWords: (newWords) => set({ words: newWords }),
  }));
  
export default useStore;