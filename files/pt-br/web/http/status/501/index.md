---
title: 501 Not Implemented
slug: Web/HTTP/Status/501
---

{{HTTPSidebar}}

O código de resposta HTTP **`501 Not Implemented`** indica que o servidor não suporta a funcionalidade requerida para completar a requisição. Esta é a resposta apropriada para quando o servidor não reconhece o método requisitado e não tem capacidade de suporta-lo para nenhum recurso. Os únicos métodos de requisição que os servidores suportam obrigatóriamente ( e, portanto, isso não deve retornar este código) são {{HTTPMethod("GET")}} e {{HTTPMethod("HEAD")}}.

> **Nota:** **Notas:**
>
> - A 501 error is not something you can fix, but requires a fix by the web server you are trying to access.
> - Uma resposta 501 é cacheada por padrão, ou seja, a menos que os cabeçalhos de cache indiquem outra forma.

## Status

```
501 Not Implemented
```

## Especificações

| Especificação                                    | Título                                                        |
| ------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "501 Not Implemented" , "6.6.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

The information shown below has been pulled from MDN's GitHub (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.501")}}
