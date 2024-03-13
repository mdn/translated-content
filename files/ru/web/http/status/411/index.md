---
title: 411 Length Required
slug: Web/HTTP/Status/411
---

{{HTTPSidebar}}

Код ответа на ошибку **`411 Length Required`** указывает, что сервер отказывается принять запрос без определённого {{HTTPHeader("Content-Length")}}.

Обратите внимание, что по спецификации при отправке данных в ряд фрагментов **Content-Length** опущен, и в начале каждого фрагмента вам нужно добавить длину текущего фрагмента в шестнадцатеричном формате. Подробнее смотрите {{HTTPHeader("Transfer-Encoding")}}.

## Статус

```
411 Length Required
```

## Спецификации

| Спецификация                                      | Название                                                      |
| ------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "411 Length Required" , "6.5.10")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Смотрите также

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
