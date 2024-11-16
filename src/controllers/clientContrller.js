import { RepositoryClient } from "../respository/UserRepository"
const {criarClient,pegarTodos} = new RepositoryClient()

export class ClientContrller{
 static async criar(request,response){
  try{
    const body = request.body
    const mensagem = await criarClient(body)
    response.json("usuário criado com sucesso").status(201)
  

  }catch(error){
    response.json("erro ao criar o usuário").status(500)
    return;
  }



  }
  static async pegarTodos(response,request){
    try{
      const todosOsClientes = await pegarTodos()
      response.json(todosOsClientes).status(200)
    }catch(error){
    response.status(500).json("erro interno do servidor")
    }
  }
}