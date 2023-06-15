function MyButton(props) {
    const type = "danger"
  
    if (props.type === 'warning') {
      return (
        <button className="button-cls warning">{props.text}</button>
      )
    }
  
    return (
      <button className="button-cls">{props.text}</button>
    )
  }

  export default MyButton