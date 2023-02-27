
const dataLoad=()=>{
    fetch("../js/data.json")
    .then(res=>res.json())
    .then(data=> displayData(data));

}

const displayData=(data)=>{
    console.log(data[0])
const {message,result}=data[0];
const loadData= document.getElementById("loadData");
document.getElementById("title").innerText=message;

 result.forEach(element => {
    const div= document.createElement("div");
    div.classList.add("w-1/2");
    div.classList.add("shadow-lg");
    div.innerHTML=`
    <h3 class="border-b-2 border-b-black" id="name">Name: ${element.name.fullName[0]} ${element.name.fullName[1]}</h3>
   <div class="py-4">
   <p></p>
   <p>Street: ${element.address.street} </p>
   </div>
    `;
    loadData.appendChild(div)
 });
}


dataLoad();