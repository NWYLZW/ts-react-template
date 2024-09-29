import { createContext, useContext } from 'react'

const AContext = createContext(null)

export const useA = () => useContext(AContext)
export const AProvider = AContext.Provider
