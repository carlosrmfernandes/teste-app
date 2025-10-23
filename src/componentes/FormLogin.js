import './FormSeller.css'

function FormLogin(){

   async function cadastrar(numero){
     let api = await fetch("https://viacep.com.br/ws/01001000/json/")
     let response =  await api.json()
     console.log(response)
        
    }

    return(
        <div>
            <form>
            
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
                <input type='button' value="Cadastra-se" onClick={()=>cadastrar(12)}/>
            </form>
        </div>
    )
}
export default FormLogin