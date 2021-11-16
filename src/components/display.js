import Element from './Element';
const Display = ({array}) => {
    
    return(
        array.map((x) =>{
            const date = new Date()
            var year = date.getFullYear();
            var age = year - x.Year;
           return(    
           <Element key={x.Name} Name={x.Name} age={age} Date={x.Date} Month={x.Month}/>      
       )}) 
    )
    
}

export default Display;