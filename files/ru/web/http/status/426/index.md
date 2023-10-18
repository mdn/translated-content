---
title: 426 Upgrade Required
slug: Web/HTTP/Status/426
---

{{HTTPSidebar}}

Код ответа на HTTP **`426 Upgrade Required`** указывает, что сервер отказывается выполнять запрос с использованием текущего протокола, но может захотеть сделать это после того, как клиент обновится до другого протокола.

Сервер отправляет {{HTTPHeader("Upgrade")}} с этим ответом, чтобы указать требуемый протокол (ы).

## Статус

```
426 Upgrade Required
```

## Примеры

```
HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/3.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/3.0 protocol
```

## Спецификации

| Спецификация                                       | Название                                                      |
| -------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "426 Upgrade Required" , "6.5.15")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Смотрите также

- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("101")}} `Switching Protocol`
