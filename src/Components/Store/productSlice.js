import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk('products/fetch', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
});

const productSlice = createSlice({
    name: 'products',
    initialState: { data: [], status: 'idle' },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getProducts.rejected, (state) => {
                state.status = 'error';  // Set status to 'error' here
            });
    },
});

export default productSlice.reducer;
