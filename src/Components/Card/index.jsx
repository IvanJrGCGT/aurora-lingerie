import styled from "styled-components";
import Assets from "../../Assets";
import Lingeries from "../../Assets/Lingerie";
import Produtos from "../../Functions/Produtos";




export default function Card(props) {
    const Card = styled.div`

    width: 20vw;
    display: flex;
    flex-direction: column;

   
    .content{
        z-index: 1;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        transition: all .2s;
           
            img{
                    width: 100%;
                    border-radius: 10px 10px 0 0;
                    transition: all .2s;


                }
                
        
    }
    .info{  
                z-index: 2;
                margin-top: 50px;

                width: 100%;
                
                border-radius: 0 0 20px 20px;
                .price{
                    font-size: 12pt;
                    color: ${Assets.White};
                    visibility: hidden;
                    margin-top: 8px;
                }
                .title{
                    visibility: hidden;
                    margin-top: 8px;
                    color: ${Assets.White};
                    font-size: 18pt;
                    font-family: 'Urbanist', sans-serif;

                }
            }

            :hover{
                    transition:all .2s ;
                    border: 2px solid purple;
                    border-radius: 20px  ;
                    padding-top: 30px;
                    .title, .price{
                        
                        visibility: visible;

                    }
                    .info{
                        border: solid 5px ${Assets.Purple};
                        margin-top: -20px;
                        background-color: ${Assets.Purple};
                        height: 70px;
                    }
                    img{
                        margin-top: -20px;
                        border-radius: 10px ;
                        width: 95%;

                    }
                }
        
            
              
        
        
    `
        
    return(
        <Card>
       
           <div className="content">
                <div className="img">
                        <img src={(props.produto).img} alt="" />
                </div>
                
           </div>
           <div className="info">
                <div className="title">{(props.produto).nome}</div>
                <div className="price ">{(props.produto).preco}</div>
            </div>
        </Card>

    )
}