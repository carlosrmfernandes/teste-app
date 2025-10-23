import './FormSeller.css'

function FormSeller(){

   async function cadastrar(numero){
     let api = await fetch("https://viacep.com.br/ws/01001000/json/")
     let response =  await api.json()
     console.log(response)
        
    }

    return(
        <div>
            <form>
                <h2>Cadastra-se</h2>
                <label htmlFor='name'>Nome:</label>
                <input 
                type='text' 
                id='name'
                name='name'
                /><br/>

                <label htmlFor='name'>Email:</label>
                <input 
                type='email' 
                id='email' 
                name='email'
                /><br/>

                <label htmlFor='name'>Senha:</label>
                <input 
                type='password'
                id='senha' 
                name='senha'
                /><br/>

                <label htmlFor='name'>CPF / CNPJ:</label>
                <input 
                type='text' 
                id='cpf_cnpj' 
                name='cpf_cnpj'
                /><br/>
                        
                <input type='button' value="Cadastra-se" onClick={()=>cadastrar(12)}/>
            </form>
        </div>
    )
}
export default FormSeller