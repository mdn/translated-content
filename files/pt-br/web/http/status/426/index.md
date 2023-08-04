---
title: 426 Upgrade Required
slug: Web/HTTP/Status/426
---

{{HTTPSidebar}}

O status HTTP **`426 Upgrade Required`** indica que o servidor recusa o processamento da requisição usando o protocolo atual mas poderá ser processado caso o cliente atualize para um protocolo diferente.

O servidor envia uma header {{HTTPHeader("Upgrade")}} com esta resposta para indicar qual o protocolo necessário.

## Status

```
426 Upgrade Required
```

## Exemplos

```
HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/2.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/2.0 protocol
```

## Especificações

| Especificação                                      | Título                                                        |
| -------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "426 Upgrade Required" , "6.5.15")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Ver também

- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("101")}} `Switching Protocol`
