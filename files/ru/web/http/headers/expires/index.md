---
title: Expires
slug: Web/HTTP/Headers/Expires
---

{{HTTPSidebar}}

Заголовок **`Expires`** содержит дату/время, по истечении которой ответ сервера считается устаревшим.

Прошедшая или невалидная дата, например 0, обозначает, что ресурс уже устарел.

Если в ответе с сервера установлен заголовок {{HTTPHeader("Cache-Control")}} с директивами "max-age" или "s-maxage" , заголовок `Expires` игнорируется.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Тип заголовка</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "Запрещённое имя заголовка")}}
      </th>
      <td>нет</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS безопасный заголовок ")}}
      </th>
      <td>да</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
Expires: <http-date>
```

## Директивы

- \<http-date>
  - : HTTP-дата и время.

## Примеры

```
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

## Спецификация

{{Specifications}}

## Совместимость браузера

{{Compat}}

## Смотрите также

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Age")}}
