import { createSlice } from '@reduxjs/toolkit'

import { SHOPPING_ITEMS } from './../../data/SHOPPING_ITEMS';

export const purchasesSlice = createSlice({
	name: 'purchases',
	initialState: SHOPPING_ITEMS.slice(0, 2).map(shopping_item => ({ ...shopping_item, quantity: 1 })),
	reducers: {
		purchaseAdded(state, action) {
			if (!state.find((purchase) => purchase.id === action.payload.id)) { 
				state.push(action.payload);
			}
		},
		purchaseRemoved(state, action) {
			const { purchaseId } = action.payload;
			const purchaseIndex = state.findIndex((purchase) => purchase.id === purchaseId);
			state.splice(purchaseIndex, 1);
		},
		purchaseUpdated(state, action) {
			const { id, quantity } = action.payload;
			const purchase = state.find((purchase) => purchase.id === id);
			if (purchase && !(purchase.quantity === 1 && quantity === -1)) {
				purchase.quantity = purchase.quantity + quantity;
			}
		},
		purchasesRemoved(state, action) {
			state.splice(0, state.length);
		}
	}
});

// Action creators are generated for each case reducer function
export const { purchaseAdded, purchaseRemoved, purchaseUpdated, purchasesRemoved } = purchasesSlice.actions

export default purchasesSlice.reducer
