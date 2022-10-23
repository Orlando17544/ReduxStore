import { createSlice } from '@reduxjs/toolkit'

import { SHOPPING_ITEMS } from './../../data/SHOPPING_ITEMS';

export const wishesSlice = createSlice({
	name: 'wishes',
	initialState: SHOPPING_ITEMS.slice(2, 4),
	reducers: {
		wishAdded(state, action) {
			state.push(action.payload);
		},
		wishRemoved(state, action) {
			const { wishId } = action.payload;
			const wishIndex = state.findIndex((wish) => wish.id === wishId);
			state.splice(wishIndex, 1);
		}
	}
});

// Action creators are generated for each case reducer function
export const { wishAdded, wishRemoved } = wishesSlice.actions

export default wishesSlice.reducer
