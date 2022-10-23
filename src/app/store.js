import { configureStore } from '@reduxjs/toolkit'

import loginReducer from '../features/login/loginSlice'
import purchasesReducer from '../features/purchases/purchasesSlice'
import wishesReducer from '../features/wishes/wishesSlice'

export default configureStore({
	reducer: {
		login: loginReducer,
		purchases: purchasesReducer,
		wishes: wishesReducer
	}
})
