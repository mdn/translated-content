---
title: 101 Switching Protocols
slug: Web/HTTP/Status/101
---

{{HTTPSidebar}}

O código de resposta HTTP **`101 Switching Protocols`** indica para qual protocolo o servidor está trocando, conforme solicitado por um cliente que tenha enviado uma mensagem incluindo {{HTTPHeader("Upgrade")}} no cabeçalho da requisição.

O servidor inclui {{HTTPHeader("Upgrade")}} no seu cabeçalho de resposta para indicar para qual protocolo o cliente foi redirecionado. O processo é descrito detalhadamente no artigo [Protocol upgrade mechanism](/pt-BR/docs/Web/HTTP/Protocol_upgrade_mechanism).

## Status

```
101 Switching Protocols
```

## Exemplos

Switching protocols pode ser usado para [WebSockets](/pt-BR/docs/Web/API/WebSockets_API).

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

## Especificações

| Specification                                       | Title                                                          |
| --------------------------------------------------- | -------------------------------------------------------------- |
| {{RFC("7231", "101 Switching Protocol" , "6.2.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semânticas e Conteúdos |

## Veja também

- [Protocol upgrade mechanism](/pt-BR/docs/Web/HTTP/Protocol_upgrade_mechanism)
- [WebSockets](/pt-BR/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426")}} `Upgrade Required`
