import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { ThunkDispatch } from 'redux-thunk'

import { appReducer } from './app-slice'
import {useDispatch} from "react-redux";


const rootReducer = combineReducers({
    app: appReducer,

})

export const store = configureStore({
    reducer: rootReducer,
/*    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
            },
        }),*/
})

export const useAppDispatch: () => AppDispatch = useDispatch
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>
export type RootState = ReturnType<typeof store.getState>
