---
title: PATCH
slug: Web/HTTP/Reference/Methods/PATCH
l10n:
  sourceCommit: 3138c50f08e9fba1176aa77dbbfdb33e22357ddd
---

**Метод запроса HTTP `PATCH`** частично изменяет ресурс.

В какой-то степени `PATCH` можно назвать аналогом действия «обновить» из {{Glossary("CRUD")}} (однако не следует путать HTTP и {{Glossary("CRUD")}} — это две разные вещи).

Запрос `PATCH` является набором инструкций о том, как изменить ресурс. В отличие от {{HTTPMethod("PUT")}}, который полностью заменяет ресурс.

`PATCH` может как быть идемпотентным, так и не быть, в отличие от {{HTTPMethod("PUT")}}, который всегда идемпотентен. Операция считается идемпотентной, если её многократное выполнение приводит к тому же результату, что и однократное. Например, если автоинкрементное поле является важной частью ресурса, то {{HTTPMethod("PUT")}} перезапишет его (т.к. он перезаписывает всё), но `PATCH` может и не перезаписать.

`PATCH` (как и {{HTTPMethod("POST")}}) _может_ иметь побочные эффекты.

Чтобы обозначить, что сервер поддерживает `PATCH`, можно добавить этот метод в список заголовков ответа {{HTTPHeader("Allow")}} или {{HTTPHeader("Access-Control-Allow-Methods")}} (для [CORS](/ru/docs/Web/HTTP/Guides/CORS)).

Другим (неявным) индикатором, что метод `PATCH` разрешён, является наличие заголовка {{HTTPHeader("Accept-Patch")}}, который описывает, какой формат изменения документа принимает сервер.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Запрос имеет тело</th>
      <td>Да</td>
    </tr>
    <tr>
      <th scope="row">Успешный ответ имеет тело</th>
      <td>Может</td>
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
      <td>Только если включена информация о дате последнего изменения</td>
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

Успешный ответ указывается с помощью любого кода ответа серии [2xx](https://httpwg.org/specs/rfc9110.html#status.2xx).

В следующем примере используется код ответа {{HTTPStatus("204")}}, поскольку ответ не содержит тела сообщения. Если требуется передать тело, то используется код {{HTTPStatus("200")}}.

```
HTTP/1.1 204 No Content
Content-Location: /file.txt
ETag: "e0023aa4f"
```

## Спецификации

{{Specifications}}

## Смотрите также

- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Accept-Patch")}} – указывает изменяемые типы документов принимаемые сервером.
