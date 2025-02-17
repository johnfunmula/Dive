import { atom } from 'jotai'

export const sidebarVisibleAtom = atom(false)
export const configSidebarVisibleAtom = atom(false)

export const toggleSidebarAtom = atom(
  null,
  (get, set) => {
    set(sidebarVisibleAtom, !get(sidebarVisibleAtom))
  }
)

export const toggleConfigSidebarAtom = atom(
  null,
  (get, set) => {
    set(configSidebarVisibleAtom, !get(configSidebarVisibleAtom))
  }
)