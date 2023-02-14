// fetch('https://reqres.in/api/users')
// .then((res) =>{
//     console.log(res)
//     if(res.ok) {
//         res.json()
//     } else {
//         console.log('Erro')
//     }
// } )
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'Jorge',
    }),
})
.then(res => res.json())
.then((data) => console.log(data))