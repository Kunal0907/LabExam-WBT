import React, { useRef } from "react";

export default function UpdateArticle() {
  let x1 = useRef();
  let x2 = useRef();
  let x3 = useRef();
  let x4 = useRef();
  let x5 = useRef();
  function f1() {
    var data = {
      id: x1.current.value,
      name: x2.current.value,
      category: x3.current.value,
      dateCreated: x4.current.value,
      creatorName: x5.current.value,
    };
    data = JSON.stringify(data);
    fetch(`http://localhost:8000/updatearticles/${data.id}`, {
      method: "PATCH",
      body: data,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="container">
      <h1>Update Articles</h1>
      <br />
      <input type="text" placeholder="id" ref={x1} />
      <br />
      <input type="text" placeholder="name" ref={x2} />
      <br />
      <input type="text" placeholder="category" ref={x3} />
      <br />
      <input type="text" placeholder="dateCreated" ref={x4} />
      <br />
      <input type="text" placeholder="creatorName" ref={x5} />
      <br />
      <button onClick={f1}>Update</button>
    </div>
  );
}
