import cls from './Counter.module.css';
import Icon, {IconsName} from '../icon/Icon.tsx';


const Counter = ({ value, setValue, saveValue }) => {
    const increment = () => {
        setValue(value + 1)
    };
    const decrement = () => {
        if(value != 0) setValue(value - 1)
    };



    return (
        <div className={cls.counterConteiner}>
            <div className={cls.counterMain}>
                <button className={cls.counterBtn} onClick={decrement}>
                    <Icon iconName={IconsName.MINUS}/>
                </button>
                    <p className={cls.counterValue}>{value}</p>
                <button className={cls.counterBtn} onClick={increment}>
                    <Icon iconName={IconsName.PLUS}/>
                </button>
            </div>
            <button className={cls.counterSaveBtn} onClick={saveValue}>СОХРАНИТЬ</button>
        </div>
    );
};

export default Counter;