import React from "react";
import { useState } from "react";
import {suppliersData} from "../data/suppliersData";


function StateSample() {
    const [suppliers, setSuppliers]=useState(suppliersData);
    const [sortData, setSortData] = useState(true);

    const sortOrder=()=>{ 
      setSortData(!sortData);

    const sortedSuppliers = [...suppliers];
    
    sortedSuppliers.sort((a, b) => 
      sortData ? a.companyName.localeCompare(b.companyName) : b.companyName.localeCompare(a.companyName)
    );
    setSuppliers(sortedSuppliers);
    }


    const deleteProduct=(id)=>{
      var result=window.confirm("Are you sure you want to delete?");
      if(result){
        var filteredSuppliers=suppliers.filter( q => q.id !== id);
        setSuppliers([...filteredSuppliers]);
      }
    }


  return (
    <>
      <h1>Length: {suppliersData.length}</h1>
      <table className="">
        <thead>
          <tr>
            <th>id</th>
            <th>Company Name <button onClick={sortOrder}></button> </th> {/*isme gore siralanacak*/}
            <th>Contact Name</th>
            <th>Contact Title</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.companyName}</td>
                <td>{item.contactName}</td>
                <td>{item.contactTitle}</td>
                <td><button onClick={()=>deleteProduct(item.id)} className="w3-button w3-red">Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default StateSample;
