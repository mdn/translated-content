---
title: 510 Not Extended
slug: Web/HTTP/Status/510
---

{{HTTPSidebar}}

O código de status da resposta HTTP **`510 Not Extended`** é enviado no contexto do HTTP Extension Framework, definido na [RFC 2774](https://tools.ietf.org/html/rfc2774).

Na especificação, um cliente pode mandar uma requisição que contenha uma declaração de extensão, que descreve a extensão a ser utilizada. Se o servidor aceitar tal requisição, mas quaisquer extensões descritas na requisição não forem suportadas, o servidor então retorna uma resposta com o código de status **`510`**.

## Status

```
510 Not Extended
```

## Especificações

| Especificação                             | Título                      |
| ----------------------------------------- | --------------------------- |
| {{RFC("2774", "510 Not Extended" , "7")}} | An HTTP Extension Framework |
