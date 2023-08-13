---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Status/203
---

{{HTTPSidebar}}

"The HTTP **`203 Non-Authoritative Information`** Статус ответа указывает, что запрос был успешным, но прилагаемая полезная нагрузка была изменена с учётом ответа сервера{{HTTPStatus("200")}} (`OK`) сервера происхождения с помощью преобразующего {{Glossary("Proxy server", "proxy")}}.

"The `203"` ответ аналогичен значению [`214`](/ru/docs/Web/HTTP/Headers/Warning#Warning_codes), значение "`Transformation Applied"`, кода {{HTTPHeader("Warning")}} имеет дополнительное преимущество, применимое к ответам с любым кодом состояния.

## Статус

```
203 Non-Authoritative Information
```

## Характеристики

| Спецификация                                                   | Название                                                      |
| -------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "203 Non-Authoritative Information" , "6.3.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Смотрите также

- {{HTTPStatus("200")}}
- {{Glossary("Proxy server")}}
- {{HTTPHeader("Warning")}}
