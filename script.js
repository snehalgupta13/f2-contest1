/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((item)=>{
        if(item.profession=="developer"){
            console.log(item);
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((item)=>{
        if(item.profession=="developer"){
            console.log(item);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    const newemployee =  {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(newemployee);
    console.log(arr);
  }

  
  function removeAdmin() {
    //Write your code here, just console.log
    const update = arr.filter(item=> item.profession!="admin");
    arr=update;
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        { id: 1, name: "ayush", age: "18", profession: "developer" },
        { id: 2, name: "priya", age: "20", profession: "developer" },
        { id: 3, name: "roger", age: "19", profession: "admin" },
      ];
      const concatenatedArray=arr.concat(newArr);
      console.log(concatenatedArray);
      arr=concatenatedArray;
  }