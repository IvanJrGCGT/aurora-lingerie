import styled from "styled-components";
import Assets from "../../Assets";
import Lingeries from "../../Assets/Lingerie";
import Produtos from "../../Functions/Produtos";




export default function Card(props) {
    const Card = styled.div`



    .price{
            font-size: 12pt;
        }
    .title{
        font-size: 18pt;
        font-family: 'Urbanist', sans-serif;

    }
        .content,.img{
            
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        width: 20vw;
        height: 80%;
        transition: all .2s;
        img{
                width: 100%;
                border-radius: 10px;
                transition: all .2s;


            }
            :hover{
                cursor: pointer;
                img{
                    width: 90%;
                }
            }
        } 
        
           
        
            
              
        
        
    `
        
    return(
        <Card>
       
           <div className="content">
                <div className="img">
                        <img src={props.img} alt="" />
                </div>
                <div className="title">{props.nome}</div>
                <div className="price ">{props.preco}</div>
           </div>
        </Card>

    )
}