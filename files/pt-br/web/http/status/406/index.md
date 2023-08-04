---
title: 406 Not Acceptable
slug: Web/HTTP/Status/406
---

{{HTTPSidebar}}

O código de resposta do erro de cliente **`406 Not Acceptable`** indica que o servidor não pode produzir uma resposta que combine com a lista de valores aceitáveis definidas nos cabeçalhos de negociação de conteúdo da requisição proativa, e o servidor é incapaz de produzir uma representação padrão.

Negociação de conteúdo proativa incluem:

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Charset")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}

Na prática, esse erro é raramente usado. Ao invés de responder usando esse código de erro, o que poderia ser enigmático ao usuário final e difícil de arrumar, servidores ignoram o cabeçalho relevante e servem a página atual ao usuário. Se assume que mesmo que o usuário não fique completamente feliz, ele irá preferir isso ao invés do código de erro.

Se o servidor retornar este status de erro, o corpo da mensagem deve conter a a lista disponíveis de representações do recurso, possibilitando ao usuário escolher entre elas.

## Status

```
406 Not Acceptable
```

## Especificações

| Especificação                                   | Título                                                        |
| ----------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "406 Not Acceptable" , "6.5.6")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

A informação mostrada abaixo foi buscada do MDN's GitHub (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.406")}}

## Veja também

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Charset")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}
- [Negociação de conteúdo](/pt-BR/docs/Web/HTTP/Content_negotiation) HTTP
