/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(function(user){
        if(user.profession === "developer"){
            console.log(user);
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((user)=>{
        if(user.profession === "developer"){
            console.log(user);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    let pushObj = {
        id : 4,
        name : "Sumit",
        age : 23,
        profession : "intern"
    }
    arr.push(pushObj);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let ans = arr.filter((user)=>{
        if(user.profession !== "admin"){
            return user;
        }
    });
    console.log(ans);
  }

  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        { id: 5, name: "Mahi", age: "41", profession: "Cricketers" },
        { id: 6, name: "Hitman", age: "36", profession: "Cricketers" },
        { id: 7, name: "KingKohli", age: "35", profession: "Cricketers" },
      ];
      let ans = arr.concat(newArr);
      console.log(ans);
  }