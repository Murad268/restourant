import React, { Component } from 'react';

class Services extends Component {

      getData = async (data = "", id = "") => {
         const res = await fetch(`http://localhost:3000/${data}/${id}`)
         if(!res.ok) {
            throw new Error(`can't fetch to ${data}`)
         }
         return await res.json()
      }
      postData = async (data, body) => {
         const res = await fetch(`http://localhost:3000/${data}`, {
            method: "POST",
            body: body,
            headers: {'Content-Type': 'application/json'}
         })
         return await res.json()
      }
}

export default Services;
