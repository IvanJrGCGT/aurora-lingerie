import styled from "styled-components";
import Assets from "../../Assets";

export default function Btn(props) {
    const Button = styled.div`
    width: ${props.width}%;
    height: 10vh;
    background-color: #ffffff2b;
    margin-top: 40px;
    border-radius: 10px;
    color: ${Assets.Pink};
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    transition: all .2s;

    
    :hover{
        cursor: pointer;
        width: 55%;
        color: ${Assets.PurpleDark};
        border:solid 1px ${Assets.PurpleDark};
        background-color: #ffffff49;

    }
    
    
    `
    
    return(
        <Button>
            {props.name}
        </Button>
    )
}