---
title: 101 Switching Protocol
slug: Web/HTTP/Status/101
---

{{HTTPSidebar}}

Код ответа протокола HTTP 101 Switching Protocol указывает протокол, который сервер переключает, используя клиентский запрос {{HTTPHeader("Upgrade")}}.

Сервер отправляет заголовок ответа {{HTTPHeader ("Upgrade")}}, указывая протокол, на который он переключился.

## Статус

```
101 Switching Protocol
```

## Примеры

Протоколы переключения могут использоваться с [WebSockets](/ru/docs/Web/API/WebSockets_API).

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

## Характеристики

| Спецификация                                        | Название                                                      |
| --------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "101 Switching Protocol" , "6.2.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Смотрите также

- [WebSockets](/ru/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426")}} `Upgrade Required`
