import { useEffect, useState } from 'react'
import "./ListarUsuario.css"

async function ListarUsuario(){ 
    
    const [users, setUsers] = useState([]);

    async function ListarUsuario(){
        const api = await fetch("http://localhost:8081/user/list")
        const resposta  = await api.json
    
        if(api.ok){
            console.log(resposta)
        }else{
            alert('ERRO')
            return false
        }
    }


        useEffect (() => {
            ListarUsuario()
            }, []);

    return(
        <div>
        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Cpf</th>
                <th>Atualizar</th>
            </tr>
            <tbody>
                {users.map((user) => (
                    <tr>
                        <th>{user.id}</th>
                        <th>{user.name}</th>
                        <th>{user.cpf}</th>
                        <input className="table-button" type="button" value="Atualizar"></input>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}



export default ListarUsuario;


    // const [name, setNome] = useState('')
    // const user = [
    //     {id:1, name:"Carlos", cpf:"23456"},
    //     {id:2, name:"Josue", cpf:"464164"},
    //     {id:3, name:"Astolfo", cpf:"8416516"},
    //     {id:4, name:"Thomas", cpf:"716541684"}
    // ]

    // <input className="table-button" type="button" value="Atualizar" onClick={() => update(user.id)}></input>

