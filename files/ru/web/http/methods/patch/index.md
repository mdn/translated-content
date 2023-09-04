---
title: PATCH
slug: Web/HTTP/Methods/PATCH
---

{{HTTPSidebar}}

**Метод запроса HTTP `PATCH`** частично изменяет ресурс.

В какой-то степени `PATCH` можно назвать аналогом концепта «обновить» (update) из {{Glossary("CRUD")}} (но не стоит путать HTTP и {{Glossary("CRUD")}} — это две разные вещи).

`PATCH` может как быть идемпотентным, так и не быть, в отличие от {{HTTPMethod("PUT")}}, который всегда идемпотентен. Операция считается идемпотентной, если её многократное выполнение приводит к тому же результату, что и однократное выполнение. Например, если автоинкрементное поле является важной частью ресурса, то {{HTTPMethod("PUT")}} перезапишет его (т.к. он перезаписывает всё), но `PATCH` может и не перезаписать.

`PATCH` (как и `PUT`) _может_ иметь побочные эффекты на другие ресурсы.

Чтобы обозначить, что сервер поддерживает `PATCH`, можно добавить этот метод в список заголовков ответа {{HTTPHeader("Allow")}} или {{HTTPHeader("Access-Control-Allow-Methods")}} (для CORS).

Другой (неявный) индикатор, что `PATCH` разрешён, является наличие заголовка {{HTTPHeader("Accept-Patch")}}, где описано, в каком формате сервер принимает изменённые документы.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Запрос имеет тело</th>
      <td>Да</td>
    </tr>
    <tr>
      <th scope="row">Успешный ответ имеет тело</th>
      <td>Да</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Safe", "Безопасный")}}
      </th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Idempotent", "Идемпотентный")}}
      </th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Cacheable", "Кешируемый")}}
      </th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">
        Допускается в <a href="/ru/docs/Learn/HTML/Forms">HTML-формах</a>
      </th>
      <td>Нет</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
PATCH /file.txt HTTP/1.1
```

## Пример

### Запрос

```http
PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[описание изменений]
```

### Ответ

Успешный ответ указывается с помощью кода ответа {{HTTPStatus("204")}}, поскольку ответ в примере не содержит тела сообщения. А если бы содержал, то код был бы {{HTTPStatus("200")}}.

```
HTTP/1.1 204 No Content
Content-Location: /file.txt
ETag: "e0023aa4f"
```

## Спецификации

| Спецификация             | Заголовок             |
| ------------------------ | --------------------- |
| {{RFC("5789", "PATCH")}} | PATCH Method for HTTP |

## Смотрите также

- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Accept-Patch")}} – указывает изменяемые типы документов принимаемые сервером.
