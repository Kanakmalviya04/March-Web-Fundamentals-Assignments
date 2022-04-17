function getUsers() {
  const userList = [ { id: '1',
   email: "george.bluth@reqres.in",
   first_name: "George",
   last_name: "Bluth",
   avatar: "https://reqres.in/img/faces/1-image.jpg" ,
  }, 
  { id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
   },
   { id: 3,
     email: "emma.wong@reqres.in",
     first_name: "Emma",
     last_name: "Wong",
     avatar: "https://reqres.in/img/faces/3-image.jpg" ,
    },
    { id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
     },
     { id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg" ,
    },
    { id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
     } ];
  // fetch("https://randomuser.me/api/?results=200")
  //   .then((res) => {
  //     console.log(res.json);
  //     return res.json();
  //   })
  //   .then((data) => {
      // console.log(data.results);
      var tableRef = document.createElement("table");
      var trRef1 = document.createElement("tr");

      var thRef1 = document.createElement("th");
      var thRef2 = document.createElement("th");
      var thRef3 = document.createElement("th");
      var thRef4 = document.createElement("th");
      var thRef5 = document.createElement("th");


      thRef1.innerText = "id";
      thRef2.innerText = "Email";
      thRef3.innerText = "first_name";
      thRef4.innerText = "last_name";
      thRef5.innerText = "avatar";

      trRef1.appendChild(thRef1);
      trRef1.appendChild(thRef2);
      trRef1.appendChild(thRef3);
      trRef1.appendChild(thRef4);
      trRef1.appendChild(thRef5);

      tableRef.appendChild(trRef1);

      userList.map(function (userList) {
        //created row
        var trRef2 = document.createElement("tr");
        //created 4 columns
        var tdRef1 = document.createElement("td");
        var tdRef2 = document.createElement("td");
        var tdRef3 = document.createElement("td");
        var tdRef4 = document.createElement("td");
        var tdRef5 = document.createElement("td");


        //Appended data in the cell(td)

        tdRef1.innerText = userList.id;
        tdRef2.innerText = userList.email;
        tdRef3.innerText = userList.first_name;
        tdRef4.innerText = userList.last_name;
        tdRef5.innerText = userList.avatar;


        //append td into tr
        trRef2.appendChild(tdRef1);
        trRef2.appendChild(tdRef2);
        trRef2.appendChild(tdRef3);
        trRef2.appendChild(tdRef4);
        trRef2.appendChild(tdRef5);


        //append tr into table
        tableRef.appendChild(trRef2);
        return;
        
      });
      tableRef.style.border = 2;
      tableRef.style.borderStyle = "solid";
      tableRef.style.margin = "10px";
      thRef1.style.padding = "15px";


      document.querySelector("body").appendChild(tableRef);
}

function createTable() {}
