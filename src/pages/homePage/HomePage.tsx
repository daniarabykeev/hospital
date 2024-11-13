import cls from './HomePage.module.css';
import Navbar from "../../components/navbar/Navbar.tsx";
import HospitalCard from "../../components/hospitalCard/HospitalCard.tsx";


const HomePage = () => {
    return (
        <div className={cls.homePageMain}>
            <Navbar/>
            <div>
                <div className={cls.homePageCards}>
                    <HospitalCard title={"РКИБ"} address={"Льва Толстого 70"}/>
                    <HospitalCard title={"НЦОМиД"} address={"Тоголок Молдо 1а"}/>
                </div>
                <div className={cls.homePageCards}>
                    <HospitalCard title={"ГДКБСМП"} address={"Байтик Баатыра 8а"}/>
                    <HospitalCard title={"ЧООБ"} address={"Саратовская 10/4"}/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;