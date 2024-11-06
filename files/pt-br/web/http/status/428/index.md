---
title: 428 Precondition Required
slug: Web/HTTP/Status/428
---

{{HTTPSidebar}}

O codigo de resposta HTTP **`428 Precondition Required`** indica que o servidor precisa que a requisição seja [condicional](/pt-BR/docs/Web/HTTP/Conditional_requests).

Normalmente, isto significa que um cabeçalho pré-requisito, como o {{HTTPHeader("If-Match")}}, **está faltando**.

Quando o cabeçalho pré-requisito **não é o mesmo** esperado pelo servidor, a resposta deve ser {{HTTPStatus(412)}} `Precondition Failed`.

## Status

```
428 Precondition Required
```

## Especificações

| Especificação                                      | Título                       |
| -------------------------------------------------- | ---------------------------- |
| {{RFC("6585", "428 Precondition Required" , "3")}} | Additional HTTP Status Codes |

## Ver também

- [HTTP conditional requests](/pt-BR/docs/Web/HTTP/Conditional_requests)
- {{HTTPHeader("If-Match")}}
- {{HTTPStatus(412)}}
