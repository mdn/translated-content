---
title: 402 Payment Required
slug: Web/HTTP/Status/402
---

{{HTTPSidebar}}{{SeeCompatTable}}

O código de status HTTP **`402 Payment Required`** é um termo despadronizado para respostas de Status, podendo-se ter usos futuros.

Às vezes, este comando indica que o processo não pôde ser realizado em função de um pagamento não realizado. Originalmente, foi criado para validar uma micro ou grande transação e pode indicar que o método não se realiza até que o cliente efetue o pagamento. Contudo, não existem usos convecionais fixos e sua inserção varia, dependendo do contexto que é posto.

## Status

```
402 Payment Required
```

## Exemplos de resposta

```bash
HTTP/1.1 402 Payment Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## Especificações

| Especificação                                     | Título                         |
| ------------------------------------------------- | ------------------------------ |
| {{RFC("7231", "402 Payment Required" , "6.5.2")}} | HTTP/1.1: Semântica e contexto |

## Compatibilidade com navegadores

{{Compat("http.status.402")}}

## Veja também

- [HTTP autenticação](/pt-BR/docs/Web/HTTP/Authentication)
