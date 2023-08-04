---
title: 408 Request Timeout
slug: Web/HTTP/Status/408
---

{{HTTPSidebar}}

`A resposta 408 Request Timeout` significa que o servidor irá encerrar essa conexão em desuso. É enviado a uma conexão parada por alguns servidores, _mesmo sem nenhuma requisição feita anteriormente pelo cliente_.

O servidor deve enviar no cabeçalho de resposta "close" {{HTTPHeader("Connection")}} já que `408` implica que o servidor decidiu encerrar a conexão ao invés de continuar aguardando.

Essa resposta está sendo mais usada desde que alguns browsers como Chrome, Firefox 27+, e IE9, usam o mecanismo "HTTP pre-connection" para acelerar a navegação.

> **Nota:**alguns servidores simplesmente encerram a conexão sem enviar esssa mensagem.

## Status

```
408 Request Timeout
```

## Especificações

| Especificação                                    | Título                                                        |
| ------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "408 Request Timeout" , "6.5.7")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Veja Também

- {{HTTPHeader("Connection")}}
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
