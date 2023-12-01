---
title: DELETE
slug: Web/HTTP/Methods/DELETE
---

{{HTTPSidebar}}

**Метод запроса HTTP DELETE** удаляет указанный ресурс.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Запрос имеет тело</th>
      <td>Может</td>
    </tr>
    <tr>
      <th scope="row">Успешный ответ имеет тело</th>
      <td>Может</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Safe","Безопасный")}}
      </th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Idempotent","Идемпотентный")}}
      </th>
      <td>Да</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Cacheable","Кешируемый")}}
      </th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">
        Допускается в
        <a href="https://developer.mozilla.org/ru/docs/Learn/HTML/Forms"
          >HTML-формах</a
        >
      </th>
      <td>Нет</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
DELETE /file.html HTTP/1.1
```

## Пример

### Запрос

```
DELETE /file.html HTTP/1.1
```

### Ответ

Если метод `DELETE` успешно выполняется, то возможны следующие коды состояния ответа:

- {{HTTPStatus("202")}} (`Accepted`) код состояния, если удаление будет успешным, но ещё не выполнено.
- {{HTTPStatus("204")}} (`No Content`) код ответа, если удаление было выполнено, но тело ответа отсутствует.
- {{HTTPStatus("200")}} (`OK`) код ответа, если удаление было выполнено, и ответ содержит код и объект описывающий состояние.

```
HTTP/1.1 200 OK
Date: Wed, 21 Oct 2015 07:28:00 GMT

<html>
  <body>
    <h1>File deleted.</h1>
  </body>
</html>
```

## Спецификации

| Спецификация                       | Заголовок                                                     |
| ---------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "DELETE", "4.3.5")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Поддержка браузерами

{{Compat}}

## Смотрите также

- HTTP status: {{HTTPStatus("200")}}, {{HTTPStatus("202")}}, {{HTTPStatus("204")}}
