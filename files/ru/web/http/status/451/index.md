---
title: 451 Unavailable For Legal Reasons
slug: Web/HTTP/Status/451
---

{{HTTPSidebar}}

HTTP-код ответа **`451 Unavailable For Legal Reasons`** указывает, что пользователь запросил ресурс, который недоступен по юридическим причинам, например веб-страница, заблокированная из-за судебных исков.

## Статус

```
451 Unavailable For Legal Reasons
```

## Пример

Этот пример ответа берётся из IETF RFC (см. ниже) и содержит ссылку на [Житие Брайана по Монти Пайтону](https://ru.wikipedia.org/wiki/%D0%96%D0%B8%D1%82%D0%B8%D0%B5_%D0%91%D1%80%D0%B0%D0%B9%D0%B0%D0%BD%D0%B0_%D0%BF%D0%BE_%D0%9C%D0%BE%D0%BD%D1%82%D0%B8_%D0%9F%D0%B0%D0%B9%D1%82%D0%BE%D0%BD%D1%83).

Обратите внимание, что {{HTTPHeader("Link")}}также может содержать отношение a `rel="blocked-by"`, идентифицирующее объект, ответственный за недоступный ресурс, например имя человека или организации, которые предъявили законный запрос В результате чего удаление содержимого.

```
HTTP/1.1 451 Unavailable For Legal Reasons
Link: <https://spqr.example.org/legislatione>; rel="blocked-by"
Content-Type: text/html

<html>
<head><title>Unavailable For Legal Reasons</title></head>
<body>
<h1>Unavailable For Legal Reasons</h1>
<p>This request may not be serviced in the Roman Province
of Judea due to the Lex Julia Majestatis, which disallows
access to resources hosted on servers deemed to be
operated by the People's Front of Judea.</p>
</body>
</html>
```

## Спецификации

| Спецификация                                         | Название                                      |
| ---------------------------------------------------- | --------------------------------------------- |
| {{RFC("7725", "451 Unavailable For Legal Reasons")}} | An HTTP Status Code to Report Legal Obstacles |

## Совместимость с браузером

{{Compat}}
