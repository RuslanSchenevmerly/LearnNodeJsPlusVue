import { response } from "express"

let servers = [
  {id: '1', name: 'Amazon', status: 'Stopped'},
  {id: '2', name: 'Yandex', status: 'Working'},
  {id: '3', name: 'Google', status: 'Working'}
]

export const getAll = (request, response) => {
  response.status(200).json(servers)
}

export const create = (request, response) => {
  const newServer = {
    id: Date.now().toString(),
    ...request.body
  }

  servers.push(newServer)
  response.status(201).json(servers)
}

export const remove = (request, response) => {
  servers = servers.filter(s => s.id !== request.params.id)
  response.json({message: "Server has been removed"})
}