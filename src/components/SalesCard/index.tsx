import {
  Container,
  Description,
  Amount,
  Local,
  Footer,
  Date,
  Header,
  Funcao,
  Cpf,
} from "./styles";

import { storageSalesDTO } from "../../storage/storageSalesDTO";

// interface SaleProps{
//   cpfFunc:number | string;
//   nomeProduto:string;
//   valorVenda:number;
//   dataVenda: Date;
// }

import { convertDateToString } from "../../utils/convertDateToString";


export function SalesCard({nomeProduto,valorVenda,dataVenda,cpfFunc}:storageSalesDTO) {
  return (
    <Container>

      <Header>
      <Description>{nomeProduto}</Description>
      <Cpf>CPF:{cpfFunc}</Cpf>
      </Header>

      <Header>
      <Amount>{`R$${valorVenda && valorVenda.toFixed(2)}`}</Amount>
      </Header>

      <Footer>
        <Date>{dataVenda && convertDateToString(dataVenda).toLocaleDateString('pt-BR')}</Date>
      </Footer>

    </Container>
  )
}
