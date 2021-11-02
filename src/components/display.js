import Element from './Element';
import Birthday from '../data';
const Display = () => {
    return(
        Birthday.map((x) =>{
            const date = new Date()
            var year = date.getFullYear();
            var age = year - x.Year;
           return(    
           <Element key={x.Name} name={x.Name} age={age} Date={x.Date}/>      
       )}) 
    )
    
}

export default Display;