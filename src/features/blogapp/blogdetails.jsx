import React from "react";
import { useGetDetailsByIdQuery } from "../../services/blogApi";
import { useParams } from "react-router-dom";

function BlogDetails(){
    var {id}=useParams();
    console.log(id)
    var{isLoading,data}=useGetDetailsByIdQuery(id)
     console.log(isLoading,data)
    return(
         <div>
            {
                isLoading && <h5>Loding...</h5>
            }
            {
                !isLoading && 
                <div className=" container d-flex justify-content-start border shadow" style={{width:"50%",marginTop:"5%"}}>
                    <div class="d-flex justify-content-center">
                       <img className="" src={data?.image} alt="" style={{width:"200px"}} />
                       <div style={{marginTop:"10%",marginLeft:"100px"}}>
                       <p className="text-start" ><b>Name</b>: {data?.title}</p>
                       <p className="text-start" ><b>Category</b>: {data?.category}</p>
                       <p className="text-start" ><b>Price</b>: {data?.price}</p>
                       <button className="btn btn-primary w-50">Buy</button>
                       </div>

                    </div>
                </div>
            }
         </div>
         )
}
export default BlogDetails;