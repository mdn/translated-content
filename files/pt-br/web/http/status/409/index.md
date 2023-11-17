---
title: 409 Conflict
slug: Web/HTTP/Status/409
---

{{HTTPSidebar}}

O status de resposta **`409 Conflict`** indica que a solicitação atual conflitou com o recurso que está no servidor.

Conflitos são mais frequentes quando usado o método {{HTTPMethod("PUT")}}. Por exemplo, você pode receber uma resposta 409 quando fizer upload de um arquivo que é mais antigo do que já existe no servidor, resultando em conflito de versão.

## Status

```
409 Conflito
```

## Especificações

| Especificação                             | Título                                                                    |
| ----------------------------------------- | ------------------------------------------------------------------------- |
| {{RFC("7231", "409 Conflict" , "6.5.8")}} | Protocolo de Transferência de Hypertexto (HTTP/1.1): Semântica e Conteúdo |

## Veja também

- {{HTTPMethod("PUT")}}
