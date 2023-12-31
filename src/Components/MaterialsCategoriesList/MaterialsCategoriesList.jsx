import { CategoryWrap, CategoryNumber, CategoryTitle, CategoryInnerWrap, MaterialsWrap, ImgWrap, InfoWrap, Price, IncreaseBtn, DecreaseBtn, Input, QuantityWrap, TotalPrice, ToogleCategoryBtn } from "./MaterialsCategoriesList.styled"
import mp75 from '../../images/mp75.jpg'

import { useState } from "react"

import { OrderBar } from "Components/OrderBar/OrderBar"

import { BiSolidDownArrow} from "react-icons/bi";
import { BiSolidUpArrow} from "react-icons/bi";

export const MaterialsCategoriesList = () => {
    const [quantity, setQuantity] = useState(0);
    // const [totalPrice, setTotalPrice] = useState(0);

    const [isCategoryOpen, setIsCategoryOpen] = useState(false)

    const total = (quantity * 299.89).toFixed(2);
    const weight = quantity * 30;

    const onDecrease = () => {
        setQuantity(prevState => prevState - 1);
        
    }
    const onIncrease = () => {
        setQuantity(prevState => prevState + 1);  
    }

    const onCategoryOpen = () => {
        setIsCategoryOpen(prevState => !prevState)
    }

    const handleChange = (e) => {
        setQuantity(e.target.value)
    }

    return (
        <>
            {quantity > 0 && <OrderBar weight={weight} total={total}/>}
            <CategoryWrap>
                <CategoryInnerWrap>
                    <CategoryNumber>1</CategoryNumber>
                    <CategoryTitle>Штукатурка гіпсова машиного та ручного нанесення</CategoryTitle>
                </CategoryInnerWrap>
                <ToogleCategoryBtn type="button" onClick={onCategoryOpen}>{isCategoryOpen ? "Розгорнути" : "Згорнути"}{isCategoryOpen ? < BiSolidDownArrow size='18px'/> :  < BiSolidUpArrow size='18px'/> }</ToogleCategoryBtn>
            </CategoryWrap>
            {!isCategoryOpen && 
            <MaterialsWrap>
                <ImgWrap>
                    <img src={mp75} alt="Штукатурка МП75" width={150} height={150}/>
                </ImgWrap>
                
                <InfoWrap>
                    <h2>KNAUF MP-75 (КНАУФ МП 75)</h2>
                    <p>Knauf MP 75, штукатурка гіпсова машинного нанесення застосовується для штукатурення різних мінеральних поверхонь, як правило, машинним способом. У кінцевому результаті отримаємо міцний шар, який в подальшому може бути оброблений декоративною штукатуркою або цементної шпаклівкою.</p>
                    <Price>Ціна: 299,89 грн.</Price>
                </InfoWrap>
                <QuantityWrap>
                    <DecreaseBtn onClick={onDecrease}>-</DecreaseBtn>
                    <Input type="text" name='quantity' value={quantity} onChange={handleChange}/>
                    <IncreaseBtn onClick={onIncrease}>+</IncreaseBtn>
                </QuantityWrap>
                <TotalPrice>
                    {total} грн.
                </TotalPrice>                
            </MaterialsWrap>
            }           
        </>
        
    )
}