---
title: 414 URI Too Long
slug: Web/HTTP/Status/414
---

{{HTTPSidebar}}

O código de resposta **`414 URI Too Long`** indica que o tamanho da URI requisitada pelo cliente é maior do que o tamanho que o servidor aceita interpretar.

Existem algumas raras condições em que isso pode ocorrer:

- quando um cliente converteu de forma imprópria uma requisição {{HTTPMethod("POST")}} para uma requisição {{HTTPMethod("GET")}} com uma sequência de informações muito grande,
- quando o cliente caiu em um loop de redirecionamentos (por exemplo, um redirecionamento de uma URI prefixada que aponta para um sufixo de si mesmo),
- ou quando o servidor está sob ataque por um cliente tentando explorar potenciais falhas de segurança.

## Status

```
414 URI Too Long
```

## Especificações

| Especificação                                  | Título                                                        |
| ---------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "414 URI Too Long" , "6.5.12")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Veja também

- {{Glossary("URI")}}
