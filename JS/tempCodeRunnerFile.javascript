//an infinite loop is a loop that continues to execute indefinitely, either due to logical error or intetial design.
//examples:
while(true){
    console.log("infinite loop!")
}

//infinite for loop
for (;;){
    console.log("infinite loop!");
}

//infinite do-while loop
do{
    console.log("onfinite loop!");

}while (true)


//java script array
let data = [
    { district: "Kampala", rainfall: 120 },
    { district: "Gulu", rainfall: 80 },
    { district: "Mbarara", rainfall: 95 }
  ];

  for (let i = 0; i < data.length; i++) {
    console.log("District: " + data[i].district + ", Rainfall: " + data[i].rainfall);
  }