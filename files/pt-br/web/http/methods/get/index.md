---
title: GET
slug: Web/HTTP/Methods/GET
tags:
  - HTTP
  - Método GET
  - Método Request
  - Referencia
translation_of: Web/HTTP/Methods/GET
---
{{HTTPSidebar}}O **método HTTP GET** solicita uma representação do recurso especificado. Solicitações usando GET só devem recuperar dados.

| Requisição tem corpo                           | Não |
| ---------------------------------------------- | --- |
| Resposta bem-sucedida tem corpo                | Sim |
| [Seguro](/pt-BR/docs/Glossary/Safe)            | Sim |
| [Idempotente](/pt-BR/docs/Glossary/Idempotent) | Sim |
| [Cacheável](/pt-BR/docs/Glossary/Cacheable)    | Sim |
| Permitido em formulários HTML                  | SIm |

## Sintaxe

    GET /index.html

## Especificações

| Especificação                            | Título                                                        |
| ---------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "GET", "4.3.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.methods.GET")}}

## Veja também

- {{HTTPHeader("Range")}}
