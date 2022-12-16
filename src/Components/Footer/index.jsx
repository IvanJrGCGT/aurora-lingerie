import styled from "styled-components";
import Assets from "../../Assets";

export default function Footer(props) {
    const Footer = styled.div`
    width:100vw;
    height: 20vh;
    background-color: ${Assets.Purple};
    display: flex;
    flex-direction: row;
    .menuFooter{
        width: 100%;
        height: 100%;
        ul{
            width: 100%;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: space-evenly;
            .item{
            width: 10vw;

            img{
                width: 100%;
            }
        }

        }
    }    
    
    `
        
    return(
        <Footer>
            <nav className="menuFooter">
                <ul>
                    <li className="item">
                        <img src={Assets.logo} alt="" />
                    </li>
                    <li className="item">
                        Inicio
                    </li>
                    <li className="item">
                        SexShop
                    </li>
                    <li className="item">
                        Lingerie
                    </li>
                </ul>
            </nav>
        </Footer>
    )
}