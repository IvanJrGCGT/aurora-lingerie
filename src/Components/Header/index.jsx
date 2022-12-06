import styled from "styled-components"
import { Outlet, Link } from "react-router-dom";
import  Colors  from "../../Assets";
import Assets from "../../Assets";





export default function Header(props) {
    const Header = styled.div`
    background: linear-gradient( to bottom, #30003071 0%,#30003000 100%);
    width: 100vw;
    height: 30vh;

    
    nav{
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
       
        

    }
     a {
            font-size: 14pt;
            color: #FFF;
            transition: all .2s;
            
                
            :hover{
                font-size: 110%;
                color: ${Colors.Pink};
            }
        }

        .logo{
                width: 10vw;
                img{
                    width: 100%;
                }
            }

            .menu{
            margin-top: 10px;
        }
    `
        
    return(
        <Header>
            <nav>
            <li className="item logo">
                    <Link to='/'>
                         <img src={Assets.logo} alt="" />
                    </Link>
                </li>
            </nav>
            <nav className="menu">
               
                <li className="item text">
                    <Link to='/'>
                         Inicio
                    </Link>
                </li>
                <li className="item text">
                    <Link to='/lingerie'>
                         Lingerie
                    </Link>
                </li>
                <li className="item text">
                    <Link to='/sexshop'>
                         Sex shop
                    </Link>
                </li>
                <li className="item text">
                    <Link to='/login'>
                         Login
                    </Link>
                </li>
            </nav>
            <Outlet />
        </Header>
    )
}