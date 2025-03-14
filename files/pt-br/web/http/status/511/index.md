---
title: 511 Network Authentication Required
slug: Web/HTTP/Status/511
---

{{HTTPSidebar}}

O código de erro HTTP para o cliente **`511 Network Authentication Required`** indica que o cliente precisa realizar uma autenticação para utilizar a rede.

Esse status não é gerado pelos servidores de origem, mas pela interceptação de proxies que controlam o acesso à rede.

Às vezes, as operadoras de rede exigem alguma autenticação, aceitação de termos ou outra interação do usuário antes de conceder acesso (por exemplo, em um cyber café ou em um aeroporto). Eles geralmente identificam clientes que não o fizeram usando seus endereços de Controle de Acesso à Mídia({{Glossary("MAC")}})

## Status

```
511 Network Authentication Required
```

## Especificações

| Especificação                                                | Título                            |
| ------------------------------------------------------------ | --------------------------------- |
| {{RFC("6585", "511 Network Authentication Required" , "6")}} | Códigos adicionais de estado HTTP |

## Veja também

- {{Glossary("Proxy server")}}
