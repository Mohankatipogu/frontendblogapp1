import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:4500' }),
  endpoints: (builder) => ({
    getblogList: builder.query({
      query: ()=>'/',
    }),
    getDetailsById:builder.query({
      query:(id)=>({
        url:`/products/${id}`
      })
      }),
      deleteproduct:builder.mutation({
        query(id){
          return{
            url:`/delete/${id}`,
            method:'DELETE'
          }
        }
      }),
      addproduct:builder.mutation({
        query(){
          return{
            url:`/`,
            method:"POST",
          }
        }
      })
      
    }),
})

export const {
   useGetblogListQuery,
   useGetDetailsByIdQuery,
   useDeleteproductMutation,
   useAddproductMutation,
 } = blogApi