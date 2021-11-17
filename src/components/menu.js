import Display from './display';
import {useRef,useState} from 'react';
import Birthday from '../data';

const Menu = () => {
    const [value,setValue] = useState(null)
    const inputcontainer = useRef(null);

    const HandleClick = () => {
        const birthmonth = inputcontainer.current.value;
        console.log(birthmonth)
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
                <select name="Month" id="Months" ref ={inputcontainer}>
                <option value="January">Jan</option>
                <option value="February">Feb</option>
                <option value="March">Mar</option>
                <option value="April">Apr</option>
                <option value="May">May</option>
                <option value="June">Jun</option>
                <option value="July">Jul</option>
                <option value="August">Aug</option>
                <option value="September">Sep</option>
                <option value="October">Oct</option>
                <option value="November">Nov</option>
                <option value="December">Dec</option>

                </select>
                <button type="submit" onClick={HandleClick}>Search</button>
            </div>
            <div className="menu">
                {value}
            </div>

        </div>
       
        
    )
}

export default Menu;