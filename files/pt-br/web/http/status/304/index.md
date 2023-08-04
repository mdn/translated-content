---
title: 304 Not Modified
slug: Web/HTTP/Status/304
---

{{HTTPSidebar}}

O código de resposta HTTP de redirecionamento do cliente **`304`** **`Not Modified`** indica que não há necessidade de retransmitir a requisição de recursos. É um redirecionamento implícito para o recurso em cache. Isto ocorre quando o método de requisição é {{glossary("safe")}}, assim como uma requisição {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}}, ou quando a requisição é condicional e usa um cabeçalho {{HTTPHeader("If-None-Match")}} ou {{HTTPHeader("If-Modified-Since")}}.

A resposta equivalente {{HTTPStatus("200")}} `OK` teria incluso os cabeçalhos {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Location")}}, {{HTTPHeader("Date")}}, {{HTTPHeader("ETag")}}, {{HTTPHeader("Expires")}}, e {{HTTPHeader("Vary")}}.

> **Nota:** Vários [painéis de rede de ferramentas de desenvolvedor](/pt-BR/docs/Tools/Network_Monitor) dos navegadores criam requisições irrelevantes direcionando para respostas `304`, logo este acesso ao cache local é visível aos desenvolvedores.

## Status

```
304 Not Modified
```

## Especificações

| Specification                               | Title                                                        |
| ------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "304 Not Modified" , "4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## Compatibilidade com navegadores

{{Compat("http.status.304")}}

## Notas de Compatibilidade

- O comportamento do navegador difere se em conexões persistentes a resposta erroneamente incluir um corpo. Leia [204 No Content](/pt-BR/docs/Web/HTTP/Status/204) para mais detalhes.

## Veja também

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
