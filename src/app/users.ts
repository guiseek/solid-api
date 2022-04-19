import { app } from './app'

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
]

app.get('/users', (req, res) => {
  res.json(users)
})

app.get('/users/:id', (req, res) => {
  const user = users.find((user) => user.id === +req.params.id)

  if (!user) {
    res.status(404).json({ message: 'User not found' })
    return
  }

  res.json(user)
})

app.post('/users', (req, res) => {
  const { name } = req.body

  if (!name) {
    res.status(400).json({ message: 'Name is required' })
    return
  }

  const user = { id: users.length + 1, name }

  users.push(user)

  res.json(user)
})

app.put('/users/:id', (req, res) => {
  req.params.id
})

app.delete('/users/:id', (req, res) => {
  users.splice(
    users.findIndex((u) => u.id === +req.params.id),
    1
  )

  res.json(users)
})

export default app
