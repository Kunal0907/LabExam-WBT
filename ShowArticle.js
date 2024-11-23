import React, { useEffect, useState } from "react";

export default function ShowArticle() {
  var [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/showarticles")
      .then((response) => response.json())
      .then((value) => {
        console.log(value);
        setData(value);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <h1>Show Articles</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Date of creation</th>
            <th scope="col">Creator Name</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((record) => (
              <tr>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.category}</td>
                <td>{record.dateCreated}</td>
                <td>{record.creatorName}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
