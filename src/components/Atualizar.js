import { useState } from 'react'
import './Atualizar.css'

function AtualizarUser() {
    const [name, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setPassword] = useState('')
    const [cpf_cnpj, setCpf_cnpj] = useState('')


    async function AtualizarUser() {
        if(name === "" || email === "" || senha === "" || cpf_cnpj==="") {
            alert("Preencha todos os campos!")
            return
        } 

        // Integrar com a vossa API
        let api = await fetch("http://localhost:8081/atualizar?id", {
            method : "POST",
            body:JSON.stringify({
                "name":name,
                "email":email,
                "password":senha,
                "cpf_cnpj":cpf_cnpj,
                "is_active":1
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        if(api.ok){
            alert("Cadastro com sucesso !")
            window.location.href = "http://localhost:3000/listar-user"
            return;
        }
        else {
            alert("Erro ao cadastrar usuário");
        }


        alert(name)
        alert(email)
    }


    return (
        <div className='page'>
            <div className='card'>
                <form className='form'>
                    <h2>Atualizar</h2>

                    <label htmlFor='name'>Nome:</label>
                    <input className='campo' type='text' id='name' name='name' placeholder='Digite seu nome' onChange={(e)=> setNome(e.target.value)}></input>

                    <label htmlFor='email'>E-mail:</label>
                    <input className='campo' type='text' id='email' name='email' placeholder='Digite seu e-mail' onChange={(e)=> setEmail(e.target.value)}></input>

                    <label htmlFor='password'>Senha:</label>
                    <input className='campo' type='password' id='password' name='password' placeholder='Digite sua senha'  onChange={(e)=> setPassword(e.target.value)}></input>

                    <label htmlFor='cpf_cnpf'>CPF/CNPJ:</label>
                    <input className='campo' type='text' id='cpf_cnpf' name='cpf_cnpf' placeholder='Digite seu CPF/CNPJ' onChange={(e)=> setCpf_cnpj(e.target.value)}></input>

                    <input className='botao' type='button' value="Atualizar" onClick={AtualizarUser}/>
                </form>
            </div>
        </div>
    )
}

export default AtualizarUser

