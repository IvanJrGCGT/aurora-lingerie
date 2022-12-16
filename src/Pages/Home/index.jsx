import styled from "styled-components"
import Components from "../../Components"
import slide from '../../Assets/slide';
import  Colors  from "../../Assets";




export default function HomeP(props) {
    const HomeP = styled.div`
        max-width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
       
      
    `

  
        


    return(
       
        <HomeP>
        <Components.Header />
        <Components.Slide/>
        <Components.Tendencias />
{/*         <Components.Footer />
 */}            
        </HomeP>
        
    )
}