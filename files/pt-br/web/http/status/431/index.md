---
title: 431 Request Header Fields Too Large
slug: Web/HTTP/Status/431
---

{{HTTPSidebar}}

O código de stauts de resposta HTTP **`431 Request Header Fields Too Large`** indica que o servidor se recusou a processar a requisição por que os [cabeçalhos HTTP](/pt-BR/docs/Web/HTTP/Headers) da mesma são muito grandes. A requisição _pode_ ser resubmetida depois de o tamanho dos cabeçalhos serem reduzidos.

**`431`** pode ser usado quando o **tamanho total** dos cabeçalhos da requisição são muito grandes, ou quando um **único** cabeçalho da requisição é muito grande. Para ajudar aqueles que estão encontrando esse erro, indicar quais dos dois é o problema através do corpo da resposta - idealmente inclua quais são os cabeçalhos que são muito grandes. Isso permite aos usuários a possibilidade de poder arrumar o problema, como limpando os _cookies_ deles.

Servidores vão produzir esse status frequentemente se:

- O cabeçalho {{HttpHeader("Referer")}} URL é muito longo;
- Existem muitos [Cookies](/pt-BR/docs/Web/HTTP/Cookies) sendo enviados na requisição

## Status

```
431 Request Header Fields Too Large
```

## Especificações

| Especificação                                                | Título                       |
| ------------------------------------------------------------ | ---------------------------- |
| {{RFC("6585", "431 Request Header Fields Too Large" , "5")}} | Additional HTTP Status Codes |

## Veja também

- {{HTTPStatus(414, "414 URI Too Long")}}
- {{Glossary("Request header")}}
