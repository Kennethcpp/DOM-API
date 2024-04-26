
const div = document.getElementById("container")
const getUsers = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    const details = await response.json()
     console.log(details)

    details.forEach((each)=>{
        div.innerHTML += `

            <div class="card">
                <h1> ${each.name}</h1>
                <h2>${each.username}</h2>
                <h3>${each.address.street}</h3>
                <h4>${each.phone}</h4>
                <h5>${each.address.city}</h5>
                <h6>${each.address.street}</h6>
                
            </div>
        `
    })
}

getUsers()

