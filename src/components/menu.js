import Display from './display';
import {useRef,useState} from 'react';
import Birthday from '../data';

const Menu = () => {
    const [value,setValue] = useState(null)
    const inputcontainer = useRef(null);

    const HandleClick = () => {
        const birthmonth = inputcontainer.current.value;
        const newarr = Birthday.filter((x) => x.Month === birthmonth);
        console.log(newarr);

        if(newarr.length === 0){
            setValue(<h2>No Birthdays this month!</h2>)
        }else{
            setValue(<Display array={newarr} />)
        }

      
        
    }
    return(
        <div>

            <div className='form'>
                <input type='text' ref ={inputcontainer}/>
                <button type="submit" onClick={HandleClick}>Search</button>
            </div>
            <div className="menu">
                {value}
            </div>

        </div>
       
        
    )
}

export default Menu;