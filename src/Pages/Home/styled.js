import styled from 'styled-components'

export const HomeContainer = styled.div`
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   /* margin */

`

export const Content = styled.div`
width: 100vv;
display: flex;
align-items: center;
justify-content: center;

`

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    /* 0:focus;
    0:active {
       outline: none; 
       box-shadow: none;
    } */
`

export const Buton = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;

    /* &:focus;
    &:active {
       outline: none; 
       box-shadow: none;
    } */
   `

export const ErrorMsg = styled.span`
   display: block;
   font-size: 0.65rem;
   color: red;
   font-weight: 600;
   margin-top: 1rem;

   `