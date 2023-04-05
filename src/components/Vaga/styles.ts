import styled from 'styled-components'

export const VagaLista = styled.li`
  border: 1px solid ${(props) => props.theme.colors.principal};
  background-color: ${(props) => props.theme.colors.secundaria};
  color: ${(props) => props.theme.colors.principal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.colors.principal};
    color: ${(props) => props.theme.colors.secundaria};
  }
`

export const VagaLink = styled.a`
  border-color: ${(props) => props.theme.colors.secundaria};
  background-color: ${(props) => props.theme.colors.principal};
  color: ${(props) => props.theme.colors.secundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  &:hover {
    border-color: ${(props) => props.theme.colors.principal};
    background-color: ${(props) => props.theme.colors.secundaria};
    color: ${(props) => props.theme.colors.principal};
  }

  @media (max-width: 768px) {
    display: block;
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
