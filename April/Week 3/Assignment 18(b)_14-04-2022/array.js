const students = [
    {name: "john 0", score:45},
    {name: "john 1", score:33},
    {name: "john 2", score:55},
    {name: "john 3", score:65},
    {name: "john 4", score:85},
  ];

//   step 1 - add 10 grace marks to students whose score < 50
//   step 2 - sum all the marks of students who passed
//   passing marks = 50
//   step 3 - display the list of passed students and their marks in 
//   table format on the screen
function passedStudents(studentList){
    const finalArr = []
    var sum = 0
    for (let i = 0; i < studentList.length; i++) {
        if(studentList[i].score < 50){
            const obj = {
                name: studentList[i].name,
                score: studentList[i].score + 10
            }
            finalArr.push(obj)
        }else{
            finalArr.push(studentList[i])
        }
        if(finalArr[i].score > 50){
            var sum = sum + studentList[i].score
        }
    }
    console.log(finalArr)
    console.log("Total  of All The Passed Stutents are :", sum)

    for (let i = 0; i < finalArr.length; i++) {
        if(finalArr[i].score > 50){
            console.log(finalArr[i].name, " has passed, Scored :", finalArr[i].score)
        }else{
            console.log(finalArr[i].name, " failed the test, Scored :", finalArr[i].score)
        }
    }
    var tableRef = document.createElement("table");
    var trRef1 = document.createElement("tr");

    var thRef1 = document.createElement("th");
    var thRef2 = document.createElement("th");


    thRef1.innerText = "Name";
    thRef2.innerText = "Score";

    trRef1.appendChild(thRef1);
    trRef1.appendChild(thRef2);

    tableRef.appendChild(trRef1);

    finalArr.map(function (finalArr) {
      //created row
      var trRef2 = document.createElement("tr");
      //created 2 columns
      var tdRef1 = document.createElement("td");
      var tdRef2 = document.createElement("td");


      //Appended data in the cell(td)

      tdRef1.innerText = finalArr.name;
      tdRef2.innerText = finalArr.score;


      //append td into tr
      trRef2.appendChild(tdRef1);
      trRef2.appendChild(tdRef2);

      //append tr into table
      tableRef.appendChild(trRef2);
      return;
      
    });
    tableRef.style.border = 2;
    tableRef.style.borderStyle = "solid";
    tableRef.style.margin = "10px";
    thRef1.style.padding = "10px";


    document.querySelector("body").appendChild(tableRef);
}

passedStudents(students)