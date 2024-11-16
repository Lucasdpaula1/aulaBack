import {Router} from 'express'
import { ClientContrller } from '../controllers/clientContrller'

export const clientRota = Router()
clientRota.post("/criar",ClientContrller.criar)
clientRota.get("/buscar",ClientContrller.pegarTodos)

