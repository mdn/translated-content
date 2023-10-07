---
title: 206 Partial Content
slug: Web/HTTP/Status/206
---

{{HTTPSidebar}}

"The HTTP **`206 Partial Content"`** код ответа на статус успешного указывает, что запрос преуспел, и тело содержит запрошенные диапазоны данных, как описано в {{HTTPHeader("Range")}} запроса

Если существует только один диапазон, {{HTTPHeader("Content-Type")}} всего ответа задаётся типом документа, а также {{HTTPHeader("Content-Range")}}

Если несколько диапазонов отправлены обратно, {{HTTPHeader("Content-Type")}} задано значение **multipart/byteranges**, и каждый фрагмент охватывает один диапазон, {{HTTPHeader("Content-Range")}} и {{HTTPHeader("Content-Type")}}, описывающий его.

## Статус

```
206 Partial Content
```

## Примеры

Ответ, содержащий один диапазон:

```
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif

... 26012 bytes of partial image data ...
```

Ответ, содержащий несколько диапазонов:

```
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Length: 1741
Content-Type: multipart/byteranges; boundary=String_separator

--String_separator
Content-Type: application/pdf
Content-Range: bytes 234-639/8000

...the first range...
--String_separator
Content-Type: application/pdf
Content-Range: bytes 4590-7999/8000

...the second range
--String_separator--
```

## Характеристики

| Спецификация                                   | Название                                               |
| ---------------------------------------------- | ------------------------------------------------------ |
| {{RFC("7233", "206 Partial Content" , "4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## Совместимость с браузером

{{Compat}}

## Смотрите также

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
