const express = require('express')

const port = 3000
const app = express()
app.use(express.json())

const users = []

app.get('/users', (request, response) => {
    const { name, age } = request.body

    const user = { id: uuid.v4(), name, age }

    users.push(user)

    return response.status(201).json(user)

})


app.put('/users/:id', (request, response) => {

    const { id } = request.params
    const { name, age } = request

    const updatedUser = { id, name, age}

    const index = users.findIndex(user => user.id === id)

    if(index < 0){
        return response.status(404).json({ message: "User not found"})
    }

    users [index] = updatedUser

    return response.json(updatedUser)
})



