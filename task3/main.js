import express from 'express'
import getUsers from './Users.js'
import getSports from './Sports.js'
import getAnimals from './Animals.js'

const app = express()
const port = 3000

app.get('/users/get', async (req, res) => {
    const users = await getUsers();
    res.send(users);
  })

  app.get('/sports/get', async (req, res) => {
    const sports = await getSports();
    res.send(sports);
  })

  app.get('/animals/get', async (req, res) => {
    const animals = await getAnimals();
    res.send(animals);
  })

  app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
  });