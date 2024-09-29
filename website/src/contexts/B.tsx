import { createContext, useContext } from 'react'

const BContext = createContext(null)

export const useB = () => useContext(BContext)
export const BProvider = BContext.Provider
