      //fetch API

      const url='https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20';

       fetch(url)
       .then(response=> response.json())
       .then(data=>{

       let element = document.getElementById("personajes");
       for (let index = 0; index < data.length; index++) {
              console.log(data[index]);
           //element.innerHTML += `<option value="${data[index].id}">${data[index].name}<option/>`;
           let option = document.createElement("option");
           option.setAttribute("value",`${data[index].id}`);
           option.setAttribute("label",`${data[index].name}`);
           element.appendChild(option);

       }


       })
       .catch(err=>console.log(err));

       let ids = [];

       function agregar(){
              let x = document.getElementById("personajes").value;
              x=--x;
              //let element = document.getElementsByClassName("row");
              //let element = document.getElementsByClassName("row");
              let element = document.querySelector(".row");
              //alert(x);
              fetch(url)
              .then(response=> response.json())
              .then(data=>{
               if(ids.includes(`${data[x].id}`)){
                     alert("ya se agregó el personaje");

               }else{
              ids.push(`${data[x].id}`);
              console.log(ids);
              //element.innerHTML += `<div id="tarjetaPersonaje" style="width:288px;float:left; margin-right:15px;"><img class="card-img-top" src="${data[x].image}"><img/><h5  class="card-title">${data[x].name}<h5/><div class="card-body">${data[x].status}<div/><div>${data[x].species}<div/></div>`;
              element.innerHTML += `<div class="col-3"><img class="card-img-top" src="${data[x].image}"><img/><h5  class="card-title">${data[x].name}<h5/><div class="card-body">${data[x].status}<div/><div>${data[x].species}<div/></div>`;
               }
       })
       .catch(err=>console.log(err));
       }