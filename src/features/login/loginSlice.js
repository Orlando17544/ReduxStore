import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
	name: 'login',
	initialState: {value: false},
	reducers: {
		logUser(state, action) {
			const { value } = action.payload;
			state.value = value;
		}
	}
});

// Action creators are generated for each case reducer function
export const { logUser } = loginSlice.actions

export default loginSlice.reducer
