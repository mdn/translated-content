---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Status/506
---

{{HTTPSidebar}}

O código de status de resposta HTTP **`506 Variant Also Negotiates`** pode ser dado no contexto de Negociação de Conteúdo Transparente (Transparent Content Negotiation) (veja [RFC 2295](https://tools.ietf.org/html/rfc2295)). Esse protocolo permite ao cliente requerer a melhor variante de um dado recurso, onde um servidor fornece múltiplos variantes.

O código de status **`Variant Also Negotiates`** indica um erro na configuração interna do servidor na qual a variante escolhida é em si configurada para entrar em uma negociação de conteúdo, então não é um _endpoint_ de negociação apropriado.

## Status

```
506 Variant Also Negotiates
```

## Especificações

| Especificação                                          | Título                                  |
| ------------------------------------------------------ | --------------------------------------- |
| {{RFC("2295", "506 Variant Also Negotiates" , "8.1")}} | Transparent Content Negotiation in HTTP |
