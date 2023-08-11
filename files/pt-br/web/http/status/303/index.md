---
title: 303 See Other
slug: Web/HTTP/Status/303
---

{{HTTPSidebar}}

O código de resposta de status de redirecionamento do HyperText Transfer Protocol (HTTP) **`303 See Other`** indica que o direcionamento não une a um recurso carregado novo, mas a outra página, com uma página de confirmação ou de progresso de carregamento. Este código de resposta normalmente é retornado como resultado de um {{HTTPMethod("PUT")}} ou {{HTTPMethod("POST")}}. O método usado para mostrar esta página redirecionada é sempre {{HTTPMethod("GET")}}.

## Status

```
303 See Other
```

## Especificações

| Especificação                              | Título                                                        |
| ------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "303 See Other" , "6.4.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

A informação mostrada abaixo foi retirada do Github da MDN (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.303")}}

## Veja também

- {{HTTPStatus("302")}} `Found`, the temporary redirect
