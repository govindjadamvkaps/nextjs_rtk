import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getUsers = createAsyncThunk('user/getUsers',async(arg,{rejectWithValue}) => {
    try {
        const userRes = await axios.get(`/api/users`)
        
        return userRes?.data?.data
    } catch (error) {
        console.log("error",error)
        return rejectWithValue()
    }
})

export const userSliceData = createSlice({
    name: 'user',
    initialState:{
        error: null,
        isLoading: false,
        user: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state,{payload}) => {
            state.isLoading = true
            state.user = []
        })
        builder.addCase(getUsers.fulfilled, (state,{payload}) => {
            
            state.isLoading = false
            state.user = payload
        })
        builder.addCase(getUsers.rejected, (state,{payload}) => {
            state.isLoading = false
            state.user = []
        })
    }

})

export default userSliceData.reducer;
