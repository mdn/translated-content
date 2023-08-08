---
title: 502 Bad Gateway
slug: Web/HTTP/Status/502
---

{{HTTPSidebar}}

O código de erro HTTP **`502 Bad Gateway`** retornado pelo servidor indica que ele, enquanto atuando como um servidor intermediário (_gateway_ ou _proxy_), recebeu uma resposta inválida do servidor para o qual a requisição foi encaminhada (_upstream server_).

> **Nota:** Um _[Gateway](https://pt.wikipedia.org/wiki/Gateway)_ pode se referir a coisas diferentes na rede e um erro 502 geralmente não é algo que você possa corrigir, mas requer uma correção por parte do servidor web ou dos proxies através dos quais você está tentando obter acesso.

## Status

```
502 Bad Gateway
```

## Especificações

| Especificação                                | Título                                                        |
| -------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "502 Bad Gateway" , "6.6.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

As informações mostradas acima foram extraídas do GitHub do MDN (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.502")}}

## Veja também

- {{HTTPStatus(504)}}
