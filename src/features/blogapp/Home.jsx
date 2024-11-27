import React from "react";
import {   useDeleteproductMutation, useGetblogListQuery} from "../../services/blogApi";
import { Link, useParams } from "react-router-dom";
function Home(){
    var {isLoading,data}=useGetblogListQuery()
    var [deleteproFn]=useDeleteproductMutation()
    var id=useParams();
    console.log(id)
     console.log(isLoading,data)
     function Del(i){
       deleteproFn(i)
       alert(i)
     }
    return(
            <div >
            <div className="container d-flex flex-wrap m-5">
                {
                    isLoading && <h1>Loading</h1>
                }
                {
                    !isLoading && data?.map((pro,i)=>{
                        return(
                            <div class="card mb-3 border shadow d-flex m-5 " style={{maxWidth:"540px"}}>
                     <div class="row g-0">
                    <div class="col-md-4">
                    <img src={pro.image} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{pro.title}</h5>
                        <p class="card-text">{pro.description.slice(0,20)}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <Link to={`/blogdetails/${pro.id}`}>
                          <button className="btn btn-success w-25 ">View</button>
                        </Link>
                          <button className="btn btn-danger w-25 m-2" onClick={()=>Del(i)}>Delete</button>
                        <Link>
                          <button className="btn btn-warning w-25 m-2 ">Edit</button>
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
                        )
                        })
                        }
                    </div>
                    </div>
    )
}
export default Home;