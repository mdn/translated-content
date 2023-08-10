---
title: If-Modified-Since
slug: Web/HTTP/Headers/If-Modified-Since
---

{{HTTPSidebar}}

Заголовок HTTP запроса **`If-Modified-Since`** делает запрос условным: сервер отправит обратно запрошенный ресурс с статусом {{HTTPStatus("200")}}, только если он был изменён после указанной даты. Если запрос не был изменён после указанной даты, ответ будет {{HTTPStatus("304")}} без какого-либо тела; заголовок {{HTTPHeader("Last-Modified")}} при этом будет содержать дату последней модификации. В отличие от {{HTTPHeader("If-Unmodified-Since")}}, `If-Modified-Since` может использоваться только с {{HTTPMethod("GET")}} или {{HTTPMethod("HEAD")}}.

При использовании в сочетании с {{HTTPHeader("If-None-Match")}} заголовок `If-Modified-Since` игнорируется, кроме тех случаев, когда сервер не поддерживает If-None-Match.

Наиболее распространённым вариантом использования является обновление кешированного объекта, не связанного с {{HTTPHeader("ETag")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
If-Modified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Директивы

- \<day-name>
  - : День недели ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat" или "Sun") с учётом регистра.
- \<day>
  - : День (2 цифры), например, "04" или "23".
- \<month>
  - : Название месяца ("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec") с учётом регистра.
- \<year>
  - : Год (4 цифры), например, "1990" или "2016".
- \<hour>
  - : Час (2 цифры), например, "09" или "23".
- \<minute>
  - : Минута (2 цифры), например, "04" или "59".
- \<second>
  - : Секунда (2 цифры), например, "04" or "59".
- `GMT`
  - : Среднее время по Гринвичу (Greenwich Mean Time). HTTP даты всегда представлены как GMT время и никогда как локальное.

## Примеры

```
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## Спецификации

| Спецификация                                | Название                                                     |
| ------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "If-Modified-Since", "3.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## Совместимость с браузером

{{Compat}}

## Смотрите также

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Unmodified-since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("304")}} `Not Modified`
