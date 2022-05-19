import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Addfriend = () => {
    var [name,setName]=useState("")
    var [fname,setFname]=useState("")
    var [nickname,setNickname]=useState("")
    var [describe,setDescribe]=useState("")
    const subData=()=>{
        const data={"name":name,"friendName":fname,"friendNickName":nickname,"DescribeYourFriend":describe}
        console.log(data)
        axios.post("http://dummyapifriends.herokuapp.com/adddata",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                {
                    alert("Successfully added")
                }
                else
                {
                    alert("Failed To Add")
                }
            }
        )
    }
  return (
    <div>
        <Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} placeholder="Enter name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Friend Name</label>
                    <input onChange={(e)=>{setFname(e.target.value)}} placeholder="Enter friend name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Friend NickName</label>
                    <input onChange={(e)=>{setNickname(e.target.value)}} placeholder="Enter nick name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Describe Your Friend</label>
                    <textarea onChange={(e)=>{setDescribe(e.target.value)}} placeholder="Enter descriptione" name="" id="" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData} className="btn btn-primary">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>




    </div>
  )
}

export default Addfriend