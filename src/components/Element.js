const Element = (props) => {
    return(
        <div className="element">
            <h1>{props.Name}</h1>
            <h4>Turning {props.age}<br/> on {props.Date} {props.Month}</h4>
            <div className='profile'>
                <img src="https://st.depositphotos.com/2101611/4338/v/950/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg"/>
            </div>

        </div> 
            
        )   
}

export default Element;