import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "./store"


// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch: () => AppDispatch = useDispatch
export default useAppDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//export const allReducers = combineReducers({postsReducer});
