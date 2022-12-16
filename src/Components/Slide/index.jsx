import styled from 'styled-components';
import Components from '..';
import Assets from '../../Assets';
import slide from '../../Assets/slide';




export default function Slide(props) {
    const Slide = styled.div`
        max-width: 100vw;
        min-width: 40%;
        height: 60vh;
        min-height: 40vh;
        background: linear-gradient(to bottom, #00000057 0%, #0000008f 0 80%, #000 100%),url(${slide.one});
        background-size: contain;
        background-repeat: no-repeat;
        text-align: center;
        align-items: flex-start;
        display: flex;
        justify-content: start;


            .title{
                flex: 1;
                margin-top: 100px;
                color: ${Assets.White};
                font-family: 'Urbanist', sans-serif;
                font-size: 18pt;
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
                justify-content: center;
                width: 100%;
            }
`;
    return(
        <Slide>

            <div className="title">
            O papel da lingerie é de ressaltar as belezas do seu corpo
                <Components.Btn width="40" name='Veja mais' />
            </div>
            
        </Slide>
    )
}