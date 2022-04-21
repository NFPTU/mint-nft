import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    position: sticky;
    z-index: 100;
    top: 0;
    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
    background-color: white;
`


export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
    flex: 1;
`

export const Logo = styled.img`
    height: 30px;
`

export const Name = styled.p`
    margin: 3px 0px 0px 10px;
    font-weight: bold;
    font-size: 23px;
`

export const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 4;
    margin-right: 30px;
`

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 500px;
    border: 3px solid #eaedef;
    margin-right: 15px;
    padding: 5px 5px;
    border-radius: 10px;
    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`

export const SearchInput = styled.input`
    width: 100%;
    padding-left: 5px;
`

export const OptionWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    flex: 1;
    list-style-type: none;
    margin-top: 10px;
`

export const MenuItem = styled.li`
    font-size: 17px;
    margin-right: 35px;
`

export const Option = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`

export const OptionItem = styled.div`
    margin-right: 35px;
`



