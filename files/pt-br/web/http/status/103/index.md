---
title: 103 Early Hints
slug: Web/HTTP/Status/103
---

{{HTTPSidebar}}

O código de informação de status de resposta HTTP **`103 Early Hints`** é destinado principalmente a ser usado com o cabeçalho {{HTTPHeader("Link")}} para permitir ao agente do usuário começar pré-carregamento de recursos enquanto o servidor ainda está preparando uma resposta.

## Sintaxe

```
103 Early Hints
```

## Especificações

| Especificação                    | Status   | Comentários       |
| -------------------------------- | -------- | ----------------- |
| {{RFC(8297, "103 Early Hints")}} | IETF RFC | Definição inicial |

## Comptabilidade de navegador

{{Compat("http.status.103")}}

## Veja também

- {{HTTPHeader("Link")}}
