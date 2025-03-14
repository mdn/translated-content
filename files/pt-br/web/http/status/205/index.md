---
title: 205 Reset Content
slug: Web/HTTP/Status/205
---

{{HTTPSidebar}}

O código de estado HTTP **`205 Reset Content`** informa ao cliente para reconfigurar a visualização do documento, para, por exemplo, limpar o conteúdo de um formulário, redefinir um estado da tela ou atualizar a interface do usuário.

## Status

```
205 Reset Content
```

## Specifications

| Specification                                  | Title                                                         |
| ---------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "205 Reset Content" , "6.3.6")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibility Notes

- O comportamento do Browser é diferente se a resposta de forma errada incluir um Body nas conexões persistentes, veja [204 No Content](/pt-BR/docs/Web/HTTP/Status/204) para mais detalhes.

## See also

- {{HTTPStatus(204)}} No Content
