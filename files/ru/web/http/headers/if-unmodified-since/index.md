---
title: If-Unmodified-Since
slug: Web/HTTP/Headers/If-Unmodified-Since
---

{{HTTPSidebar}}

HTTP-заголовок запроса **`If-Unmodified-Since`** делает запрос условным: сервер отправит обратно запрошенный ресурс или примет его в случае {{HTTPMethod("POST")}} или другого {{Glossary("safe", "небезопасного")}} метода, только если он не был последним изменён после указанной даты. Если запрос был изменён после указанной даты, то ответ будет {{HTTPStatus("412")}} (Precondition Failed) ошибка.

Существует два распространённых варианта использования:

- В сочетании с другими {{Glossary("safe", "небезопасными")}} методами, такими как {{HTTPMethod("POST")}}, он может использоваться для реализации [optimistic concurrency control](https://en.wikipedia.org/wiki/Optimistic_concurrency_control), например, сделанного некоторыми вики-версиями: выпуски отклоняются, если сохранённый документ был изменён с момента восстановления оригинала.

<!---->

- В сочетании с запросом диапазона с {{HTTPHeader("If-Range")}} его можно использовать для обеспечения того, чтобы новый фрагмент запрашивался из немодифицированного документа.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Тип заголовка</th>
      <td>
        {{Glossary("Request header", "Заголовок запроса")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "Запрещённое имя заголовка")}}
      </th>
      <td>Нет</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
If-Unmodified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Директивы

- \<day-name>
  - : One of "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", or "Sun" (case-sensitive).
- \<day>
  - : 2 digit day number, e.g. "04" or "23".
- \<month>
  - : One of "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (case sensitive).
- \<year>
  - : 4 digit year number, e.g. "1990" or "2016".
- \<hour>
  - : 2 digit hour number, e.g. "09" or "23".
- \<minute>
  - : 2 digit minute number, e.g. "04" or "59".
- \<second>
  - : 2 digit second number, e.g. "04" or "59".
- `GMT`
  - : Greenwich Mean Time. HTTP dates are always expressed in GMT, never in local time.

## Примеры

```
If-Unmodified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## Спецификации

| Спецификация                                  | Заголовок                                                    |
| --------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "If-Unmodified-Since", "3.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPHeader("If-Range")}}
- {{HTTPStatus("412")}} `Precondition Failed`
