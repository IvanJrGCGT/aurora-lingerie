import styled from "styled-components";
import Components from "..";
import Assets from "../../Assets";
import Lingeries from "../../Assets/Lingerie";
import 
   Produtos

 from "../../Functions/Produtos";




function Tendencias(props) {
    const Tendencias = styled.div`
        margin-top: 55px;
        color: ${Assets.White};
        width: 100vw;
        height: auto;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;

        .tendencias{
            width: 100%;
            height: 100%;
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
                width: 60vw;
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
                   <Components.Card img={Produtos.produto1.img} />
                   <Components.Card img={Produtos.produto2.img} />
                   <Components.Card img={Produtos.produto3.img} />
                   <Components.Card img={Produtos.produto4.img} />
                 {/*   <Components.Card img={Produtos.produto5.img} nome={Produtos.produto5.nome} preco={Produtos.produto5.preco} />
                   <Components.Card img={Produtos.produto6.img} nome={Produtos.produto6.nome} preco={Produtos.produto6.preco} />
                   <Components.Card img={Produtos.produto7.img} nome={Produtos.produto7.nome} preco={Produtos.produto7.preco} />
                   <Components.Card img={Produtos.produto8.img} nome={Produtos.produto8.nome} preco={Produtos.produto8.preco} />
                  */}             
                      

                   </div> 
                   <div className="btn"><Components.Btn  name="Ver mais" /></div>
                </div>
        </Tendencias>
    )
}

export default Tendencias