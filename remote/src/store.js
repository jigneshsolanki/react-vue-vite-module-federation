import { create } from 'zustand'

const useCounter = create((set) => ({
  counter: 0,
  increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
}))

export default useCounter;

