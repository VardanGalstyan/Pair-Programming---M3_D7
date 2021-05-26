


    const mySearchList = document.getElementById("name")//done
    let userFirstFamilyName = document.querySelector(".dropdown-menu a:first-child").innerText
    let userName = document.querySelector(".dropdown-menu a:nth-child(2)").innerText
    let userEmail = document.querySelector(".dropdown-menu a:last-child").innerText
    let dropDownValue = document.getElementById("dropdown")
    const inputValue = document.querySelector(".input-group>input")
    const inputButton = document.querySelector(".input-group button")
    let key
    let newArray = []


    

    window.onload = function(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                // Selecting - DropDownValue
                console.log(users);
                
            dropDownValue.addEventListener("click", (event) => {
                //cleaning up after each click
                inputValue.value = ""
                mySearchList.innerHTML = ""
                //Selecting one of three buttons
                if(event.target.innerText === userFirstFamilyName){
                  key = "name"
                } else if(event.target.innerText === userName){
                  key = "username"
                } else if(event.target.innerText === userEmail)
                  key = "email"

                  users.forEach(user => {
                    mySearchList.innerHTML += `<li class="list-group-item form-control m-1">${user[key]}</li>`
                    newArray.push(user[key])
                  });

                  console.log(newArray);

                  inputButton.addEventListener("click", () => {
                    const usersToBeRendered = newArray.filter(user => user.toLowerCase().includes(inputValue.value))
                    console.log(usersToBeRendered, usersToBeRendered.length)
                    mySearchList.innerHTML = ""
                    usersToBeRendered.forEach(user => {
                        if(user.length >= 1){
                            mySearchList.innerHTML += `<li class="list-group-item form-control">${user}</li>`
                        } else {
                            mySearchList.innerHTML = `<li class="list-group-item form-control">"No Users to select"</li>`
                        }
                    })
                    
                  })
                  
                
            })
            
        });
    }


  // const listNames = function(arr, el){
  //     const myMap = arr.map(x => arr.el)
  //     return myMap
  // }

console.log(listNames(users , "name"));