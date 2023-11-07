import styled from 'styled-components'

export const Container = styled.header`
    background-color: white;
    padding: 4rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    filter: drop-shadow(1px 1px 24px rgba(0, 0, 0, 0.25));
    img{
        width: 4rem;
        cursor: pointer;
    }
    input{
        height: 2.5rem;
        width: 260px;
        margin-right: 1rem;
        border: 1px solid black;
        border-radius: .25rem;
        
        &, &::placeholder{
            text-indent: .5rem;
            font-size: 1rem;
        }
    }
    button{
        height: 2.5rem;
        font-weight: 600;
        background-color: #FAF074;
        padding: .25rem;
        cursor: pointer;
        border: 0;
        border-radius: .25rem;

        &:hover{
            filter: brightness(.9);
        }
    }
`