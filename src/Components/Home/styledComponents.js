import styled from 'styled-components'

export const Container = styled.div`
    background-image:url("https://img.freepik.com/free-photo/empty-blackboard_53876-31358.jpg?t=st=1710415214~exp=1710418814~hmac=e7a7cef0c5dd69bb7c5257dedd5f7b1a17ef643bed24fa1d9ad6e53334cd4ac9&w=900");
    background-size:cover;
    min-height:100vh;
    font-family:"Roboto";
    color:white;
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media (min-width:768px){
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    margin-bottom:0;
    }

`

export const Container2 = styled.div`
    font-family:"Roboto";
    width:90%;
    text-align:center;
    @media (min-width:768px){
        width:40%;
        text-align:left;
    }

`
export const Heading = styled.h1`
    font-family:"Roboto";
    font-style:italic;
    font-weight:bold;
    font-size:48px;
    @media (max-width:767px){
        align-self:flex-start;
    }
`

export const Heading2 = styled.h3`
    font-weight:bold;
`

export const SubHeading = styled(Heading2)`
    font-weight:bold;
    @media (max-width:767px){
        text-align:left;
    }
`

export const Span1 = styled.span`
    color:#c6b756;
`

export const Paragraph = styled.p`
    font-family:"Roboto";
    color:white;
`

export const List = styled.ul`
    list-style-type:circle;
    font-weight:500;
    color:white;
    padding-left:10px;
    display:none;
    @media (min-width:768px){
        display:block;
    }
`

export const ListItem = styled.li`
    margin:10px;
`

export const Button1 = styled.button`
    cursor:pointer;
    padding-top:8px;
    padding-bottom:8px;
    padding-left:16px;
    padding-right:16px;
    color:white;
    background-color:#d41538;
    text-align:center;
    border-width:0;
    border-radius:5px;
    margin-bottom:10px;
`

export const BuyButton = styled(Button1)`
    margin:auto;
    margin-top:15px;
`


export const WhatsAppButton = styled(Button1)`
    background-color:#39983A;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:20px;
    width:130px;
    @media (max-width:767px){
        margin:auto;
    }
`


export const Iframe = styled.iframe`
    border-width:0;
    border-radius:8px;
    margin:auto;
    @media (max-width:425px){
        width:250px;
        height:140px;
    }
    @media (min-width:426px) and (max-width:767px){
        height:200px;
        width:400px;
    }
    @media (min-width:1025px){
        height:300px;
        width:400px;
    }
    background-size:cover;
`

export const SmallVideoContainer = styled.div`

    text-align:center;
    @media (min-width:768px){
        display:none;
    }
    padding:10px;
    flex-grow:1;
`

export const LargeVideoContainer = styled.div`
    width:40%;
    text-align:center;
    @media (max-width:767px){
        display:none;
    }
    padding:10px;
`

export const Footer = styled.div`
    text-align:left;
    font-weight:500;
    margin-top:0;
    background-color:#A5233B;
    padding:10px;
    color:white;
    font-family:"Roboto";
    padding-left:10%;
`