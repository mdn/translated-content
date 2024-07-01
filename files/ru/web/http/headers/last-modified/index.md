---
title: Last-Modified
slug: Web/HTTP/Headers/Last-Modified
---

{{HTTPSidebar}}

Заголовок **`Last-Modified`** в ответе HTTP содержит дату и время, в которую, по мнению удалённого сервера, запрашиваемый ресурс был изменён. Он используется в качестве средства проверки для определения того, остался ли ресурс неизменным. Этот заголовок менее надёжный, чем {{HTTPHeader("ETag")}}, и используется как резервный механизм. Условный запрос, содержащий заголовок {{HTTPHeader("If-Modified-Since")}} или {{HTTPHeader("If-Unmodified-Since")}} позволяет серверу использовать для сравнения эту дату.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Тип заголовка</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>нет</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted response-header")}}
      </th>
      <td>да</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
Last-Modified: <имя-дня>, <номер-дня> <имя-месяца> <год> <час>:<минута>:<секунда> GMT
```

## Директивы

- <имя-дня>
  - : Одно из: "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", или "Sun" (чувствительно к регистру).
- <номер-дня>
  - : Номер дня из двух цифр, например "04" или "23".
- <имя-месяца>
  - : Одно из: "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (чувствительно к регистру).
- <год>
  - : Номер года из четырёх цифр, например "1990" или "2016".
- <час>
  - : Номер часа из двух цифр, например "09" или "23".
- <минута>
  - : Номер минуты из двух цифр, например "04" или "59".
- <секунда>
  - : Номер секунды из двух цифр, например "04" или "59".
- `GMT`
  - : Greenwich Mean Time. HTTP даты всегда представлены GMT, и никогда — в локальном поясе.

## Примеры

```
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
```

## Спецификации

| Specification                           | Title                                                        |
| --------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "Last-Modified", "2.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("Etag")}}
