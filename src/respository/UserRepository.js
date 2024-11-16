import { ConexaoPrisma } from "../app/connection";
import bycript from "bcrypt"
export class RepositoryClient{

  async criarClient (body){
    try{
      const connection = ConexaoPrisma.gerarConexao()
  const cliente = await connection.cliente.findUnique({where:{email:body.email}})
  if(!cliente){
    const senhaCriptografada = bycript.hashSync(body.senha,10)
  const cliente =  await connection.cliente.create({data:{senha:senhaCriptografada,...body}})
  return {mensagem:"cliente cadastrado com sucesso, seja bem-vindo "+ cliente.name}
  }
  throw new Error("usuário ja registrado no banco de dados")
  } catch(error){
        throw error
      }

  //  await connection.cliente.create({data:{...body}})
   
  }
  async pegarTodos (){
    try{
      const connection = ConexaoPrisma.gerarConexao()
      const todosOsClientes = await connection.cliente.findMany()
      return todosOsClientes
      
    }catch(error){
       throw new Error("erro interno do servidor")
    }
  }
}


