import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetUsersData } from "./Url";

function Status() {
  const { id } = useParams();

  const Navigate = useNavigate();

  const [UserData, SetUserData] = useState(null);

  //    console.log(UserData);

  function GetData(id) {
    axios
      .get(`${GetUsersData}/${id}`)
      .then((res) => {
        // console.log(res.data);
        SetUserData([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
       useEffect(()=>{
        GetData(id)
       },[id])

  return (
    <div>
      {UserData &&
        UserData?.map((v) => {
          console.log(v);

          let { Name, FatherName, Number, Address, City, State } = v;

          return (
            <>
              <div>Name :{Name}</div>
              <div>FatherName :{FatherName}</div>
              <div>Number :{Number}</div>
              <div>Address :{Address}</div>
              <div>City :{City}</div>
              <div>State :{State}</div>

              <button
                onClick={() => {
                  setTimeout(() => {
                    Navigate("/SecondPage");
                  }, 1000);
                }}
              >
                Back
              </button>
            </>
          );
        })}
    </div>
  );
}

export default Status;
