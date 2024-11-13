import cls from './HospitalCard.module.css';
import Counter from "../counter/Counter.tsx";
import {useState} from "react";
import Icon, {IconsName} from "../icon/Icon.tsx";


interface HospitalCardProps {
    title: string;
    address: string;
}

const HospitalCard = ({title, address}) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(`value-${title}`);
        return storedValue ? parseInt(storedValue) : 0;
    });
    const [isSaveBtnActive, setIsActiveBtnActive] = useState(false)

    const showCounter = () => {
        setIsActiveBtnActive(true)
    }
    const hideCounter = () => {
        setIsActiveBtnActive(false)
    }

    const saveValue = () => {
        localStorage.setItem(`value-${title}`, value.toString());
        hideCounter();
    }

    return (
        <div className={cls.cardMain}>
            <div className={cls.cardTop}>
                <h2>{title}</h2>
                <p>{address}</p>
                <div className={cls.cardValue} onClick={showCounter}>
                    {value}
                </div>
            </div>
            {isSaveBtnActive ? <Counter saveValue={saveValue} value={value} setValue={setValue} /> : <div>
                <Icon iconName={IconsName.ARROW_UP}/>
                <p className={cls.hidedText}>Нажмите чтобы изменить</p>
            </div>}
        </div>
    );
};

export default HospitalCard;