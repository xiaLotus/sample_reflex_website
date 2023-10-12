import { createContext } from "react"
import { E, hydrateClientStorage } from "/utils/state.js"

export const initialState = {"is_hydrated": false}
export const StateContext = createContext(null);
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}
export const initialEvents = [
    E('state.hydrate', hydrateClientStorage(clientStorage)),
]