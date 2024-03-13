---
title: 508 Loop Detected
slug: Web/HTTP/Status/508
---

{{HTTPSidebar}}

O código de resposta de erro HTTP **`508 Loop Detected`** pode ser retornado em um contexto do protocolo Web Distributed Authoring and Versioning (WebDAV) .

Indica que o servidor finalizou uma operação porque encontrou um loop infinito enquando processava a requisição com "Depth: infinity". Esse código indica que toda a operação falhou.

## Status

```
508 Loop Detected
```

## Specifications

| Specification                                | Title                                    |
| -------------------------------------------- | ---------------------------------------- |
| {{RFC("5842", "508 Loop Detected" , "7.2")}} | Web Distributed Authoring and Versioning |
