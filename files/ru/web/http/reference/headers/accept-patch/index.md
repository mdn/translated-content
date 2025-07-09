---
title: Accept-Patch
slug: Web/HTTP/Reference/Headers/Accept-Patch
---

HTTP-заголовок запроса **`Accept-Patch`** показывает, какой медиа-тип понимает сервер внутри запроса `PATCH`.

Наличие **`Accept-Patch`** в ответе к любому методу означает, что сервер принимает `PATCH`-запросы. Как правило, из этого вытекает следующее:

Сервер, принимающий `PATCH`-запрос с неподдерживаемым медиа-типом может ответить кодом ошибки {{HTTPStatus("415")}} `Unsupported Media Type` и заголовком **`Accept-Patch`**, в котором перечислены поддерживаемые медиа-типы.

> [!NOTE]
> Хранилище IANA поддерживает [полный список официальных кодировок](https://www.iana.org/assignments/http-parameters).

> [!NOTE]
> Иногда также используются две другие кодировки, `bzip` и `bzip2`, но они не входят в стандарт. Они применяют алгоритм, который используются в этих двух UNIX-программах. Стоит учесть, что поддержка первой кодировки прекратилась из-за проблем с лицензированием.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Тип заголовка</th>
      <td>
        {{Glossary("Response header", "Заголовок ответа")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "Запрещённое имя заголовка")}}
      </th>
      <td>да</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
Accept-Patch: application/example, text/example
Accept-Patch: text/example;charset=utf-8
Accept-Patch: application/merge-patch+json
```

## Директивы

Нет

## Примеры

```
Accept-Patch: application/example, text/example

Accept-Patch: text/example;charset=utf-8

Accept-Patch: application/merge-patch+json
```

## Спецификации

| Спецификация                           | Название   |
| -------------------------------------- | ---------- |
| {{RFC("5789", "Accept-Patch", "3.1")}} | HTTP PATCH |

## Совместимость с браузерами

Совместимость с браузерами не играет роли для данного заголовка, так как заголовок посылается сервером и спецификация не определяет поведение клиента.

## Смотрите также

- HTTP-метод {{HTTPMethod("PATCH")}}
- Семантика и контекст {{RFC("7231", "PUT", "4.3.4")}}
