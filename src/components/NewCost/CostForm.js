import React, { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {

    const [Iname, setName] = useState('');
    const [Iamount, setAmount] = useState('');
    const [Idate, setDate] = useState('');

    //const [userInput, setUserInput] = useState({
       // name: '',
       // amount: '',
       // date: ''
   // });

    const nameChangeHandler = (event) => {
         setName(event.target.value);  
    };
         //setUserInput({
           // ...userInput,
            //name: event.target.value
            //setUserUnput((previousState) => {
               // return {
                  //  ...previousState
                   // name: event.target.value
               // }
           // })
        // };
        const amountChangeHandler = (event) => {
            setAmount(event.target.value);
          //  setUserInput({
           //     ...userInput,
                //amount: event.target.value
            // });
       // };
        };
        const dateChangeHandler = (event) => {
            setDate(event.target.value);
        };
          //  setUserInput({
            //    ...userInput,
              //  date: event.target.value
             //});
    const submitHandler = (event) => {
        event.preventDefault();
        const costData = {
            name: Iname,
            amount: Iamount,
            date: new Date(Idate)
        };
        props.onSaveCostData(costData);
        setName('');
        setAmount('');
        setDate('');
    };
    
    return <div>
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" onChange={nameChangeHandler} value={Iname}/>
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input  onChange = {amountChangeHandler} type="number" min='0.01' step='0.01' value={Iamount}/>
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input onChange={dateChangeHandler} type="date" min='2019-01-01' step='2023-12-31' value={Idate} />
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Добавить расход</button>
                    <button type='button' onClick={props.onCancel}>Отмена</button>
                </div>
            </div>
        </form>
    </div>
}

export default CostForm;