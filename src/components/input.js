function Input(props){
    return (
        <form onSubmit={props.handleSubmit}>
        <label>
        Todo &nbsp;
        <input type = "text" required = {true} defaultValue = {props.input} onChange = {props.handleChange}/>
        </label>  
        <input type = "submit" value = "Create"/> {/*Create BTN*/}         
      </form>
    )
}

export default Input;
