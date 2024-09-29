import type { ReactElement, ReactNode } from 'react'
import { ComposeContextProvider } from 'foxact/compose-context-provider'

import { AProvider } from './A'
import { BProvider } from './B'

const contexts: ReactElement[] = [
  <AProvider key='a' value={null} />,
  <BProvider key='b' value={null} />,
]

export function ContextsProvider({ children }: { children: ReactNode }) {
  return <ComposeContextProvider contexts={contexts}>{children}</ComposeContextProvider>
}
