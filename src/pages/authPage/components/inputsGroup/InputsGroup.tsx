import cls from './InputsGroup.module.css';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const InputsGroup = () => {
    const [isRegistered, setIsRegistered] = useState(true);
    const navigate = useNavigate();

    const toggleRegistered = () => {
        setIsRegistered(!isRegistered)
    }

    return (
        <>
            {
                isRegistered ? <div className={cls.inputsGroupMain}>
                    <h2>С возвращением</h2>
                    <div>
                        <p>Логин</p>
                        <input placeholder={"Введите имя пользователя"}/>
                    </div>
                    <div>
                        <p>Пароль</p>
                        <input type={"password"} placeholder={"Введите Ваш пароль"}/>
                    </div>
                    <button onClick={() => navigate("/")} className={cls.inputsGroupButton}>
                        ВОЙТИ
                    </button>
                    <a onClick={toggleRegistered}>Еще не зарегистрированы?</a>
                </div> :
                    <div className={cls.inputsGroupMain}>
                        <h2>Добро пожаловать</h2>
                        <div>
                            <p>Логин</p>
                            <input placeholder={"Введите имя пользователя"}/>
                        </div>
                        <div>
                            <p>Пароль</p>
                            <input type={"password"} placeholder={"Введите Ваш пароль"}/>
                        </div>
                        <div>
                            <p>Повторите пароль</p>
                            <input type={"password"} placeholder={"Введите Ваш пароль"}/>
                        </div>
                        <button className={cls.inputsGroupButton}>
                            ЗАРЕГИСТРИРОВАТЬСЯ
                        </button>
                        <a onClick={toggleRegistered}>Уже есть аккаунт?</a>
                    </div>
            }
        </>
    );
};

export default InputsGroup;