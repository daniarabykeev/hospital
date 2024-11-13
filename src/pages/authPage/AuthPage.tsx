import cls from './AuthPage.module.css';
import InputsGroup from "./components/inputsGroup/InputsGroup.tsx";
import Icon, {IconsName} from "../../components/icon/Icon.tsx";

const AuthPage = () => {
    return (
        <div className={cls.authPageMain}>
            <Icon iconName={IconsName.HUMAN}/>
            <InputsGroup/>
        </div>
    );
};

export default AuthPage;