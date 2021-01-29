import { response } from "express"
import Server from '../models/server_model.js'

export const getAll = async (request, response) => {
  const servers = await Server.find({}).lean()

  response.status(200).json(servers)
}

export const create = async (request, response) => {
  const newServer = new Server({
    ...request.body
  })

  await newServer.save()
  response.redirect('/')
}

export const remove = (request, response) => {
  servers = servers.filter(s => s.id !== request.params.id)
  response.json({message: "Server has been removed"})
}