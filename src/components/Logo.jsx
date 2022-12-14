import { useEffect, useState } from 'react';
import LogoMobile from '../images/logoMobile.png';
import LogoImg from '../images/logo.png'
import { useNavigate } from 'react-router-dom';


export default function Logo () {
            const navigate = useNavigate();
            const [size, setSize] = useState(window.innerWidth);
            useEffect(() => {
                const handleResize = () => {
                    setSize(window.innerWidth);
                }
                window.addEventListener("resize", handleResize);
                return () => {
                    window.removeEventListener("resize", handleResize);
                }
            },[])
            return (
                size < 375 ?  <img src={LogoMobile} alt="logo de Kasa" onClick={() => navigate('/')} ></img> : <img src={LogoImg} alt="logo de Kasa" onClick={() => navigate('/')} ></img>
                    );
}