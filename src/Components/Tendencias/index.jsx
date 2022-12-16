import styled from "styled-components";
import Components from "..";
import Assets from "../../Assets";
import Lingeries from "../../Assets/Lingerie";
import 
   Produtos

 from "../../Functions/Produtos";




function Tendencias(props) {
    const Tendencias = styled.div`
        color: ${Assets.White};
        width: 90vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;

        .tendencias{
            width: 90%;
            height: 90%;
            text-align: center;
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: column;
            .btn{
                text-align: center;
                align-items: center;
                justify-content: center;
                display: flex;
                width: 10vw;
            }
           
           
            img{
                width: 50%;
            }
            .text{
                font-size: 24pt;
            }
            .card{
                margin-top: 30px;
                width: 90vw;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
              
                text-align: center;
                align-items: center;
                justify-content: space-evenly;
            }
            
        }
    `
        
    return(
        <Tendencias>
                <div className="tendencias">
                   <div className="text">Tendencias</div>
                   <div className="card">
                   <Components.Card produto={Produtos.produto9} />
                   <Components.Card produto={Produtos.produto7} />
                   <Components.Card produto={Produtos.produto6} />
                   <Components.Card produto={Produtos.produto5} />
                     
                      

                   </div> 
{/*                    <div className="btn"><Components.Btn  name="Ver mais" /></div>
 */}                </div>
        </Tendencias>
    )
}

export default Tendencias