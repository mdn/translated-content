---
title: 411 Length Required
slug: Web/HTTP/Status/411
---

{{HTTPSidebar}}

O código de resposta **`411 Length Required`** de erro de cliente do Protocolo de Transferência de HyperTexto (HTTP) indica que o servidor se nega a aceitar a requisição sem um cabeçalho {{HTTPHeader("Content-Length")}} definido.

> **Nota:**pela especificação, quando envia dados em uma série de blocos, o cabeçalho `Content-Length` é omitido e no início de cada bloco você precisa adicionar o tamanho do bloco corrente no formato hexadecimal. Veja {{HTTPHeader("Transfer-Encoding")}} para mais detalhes.

## Status

```
411 Length Required
```

## Specifications

| Specification                                     | Title                                                                     |
| ------------------------------------------------- | ------------------------------------------------------------------------- |
| {{RFC("7231", "411 Length Required" , "6.5.10")}} | Protocolo de transferência de Hipertexto (HTTP/1.1): Semântica e Conteúdo |

## See also

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
