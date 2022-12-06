import styled from 'styled-components';
import Components from '..';
import Assets from '../../Assets';
import slide from '../../Assets/slide';




export default function Slide(props) {
    const Slide = styled.div`
        margin-top: 25px;
        width: 50vw;
        height: 80vh;
        background: linear-gradient(to bottom, #00000057 0%, #0000008f 0 80%, #000 100%),url(${slide.one});
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;

            .title{
                color: ${Assets.White};
                font-family: 'Urbanist', sans-serif;
                font-size: 18pt;
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
                justify-content: center;
               
            }
`;
    return(
        <Slide>

            <div className="title">
            O papel da lingerie é de ressaltar as belezas do seu corpo
                <Components.Btn name='Veja mais' />
            </div>
            
        </Slide>
    )
}