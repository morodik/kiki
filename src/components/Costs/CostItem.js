import './CostItem.css';
import CostDate from './CostDate';
import Card from '../UI/Cards';
import React, { useState } from 'react';


const CostItem = (props) => {

   const [name, setName] = useState(props.name); //здесь создается особая переменная
    //useState возвращает массив 1зн - сама переменная 2зн - обновленная фун-ия 

    const changeNameHandler = () => {
        setName('New cost') //name = 'new cost'
        console.log('click')
    }
    return (
        <li>
            <Card className='cost-item'>
                <CostDate date={props.date}/>
                <div className='cost-item__description'>
                    <h2>{name}</h2>
                    <div className='cost-item__price'>${props.amount}</div>
                </div>
                <button onClick={changeNameHandler}>Изменить описание</button>
            </Card>
        </li>
    );
}

export default CostItem;