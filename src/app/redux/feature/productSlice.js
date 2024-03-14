import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk('getProducts', async(value, {rejectWithValue}) => {
    try {
        const productRes = await axios.get('/api/products')
        console.log("response",productRes)
        return productRes?.data?.data
    } catch (error) {
        return rejectWithValue()
    }
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        error: null,
        isLoading: false,
        products: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending , (state, {payload}) => {
            state.isLoading = true
            state.products = []
        })
        builder.addCase(getProducts.fulfilled , (state, {payload}) => {
            state.isLoading = false
            state.products = payload
        })
        builder.addCase(getProducts.rejected , (state, {payload}) => {
            state.isLoading = false
            state.products = []
            state.error = payload
        })
    }
})

export default productSlice.reducer