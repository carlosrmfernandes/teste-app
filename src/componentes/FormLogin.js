import './FormSeller.css'

function FormLogin(){

   async function cadastrar(numero){
     let api = await fetch("https://teste-api-l9wn.onrender.com/")
     let response =  await api.json()
     alert(response.status)
        
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