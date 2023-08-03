---
title: Host
slug: Web/HTTP/Headers/Host
---

{{HTTPSidebar}}

Заголовок **Host** содержит имя домена, для которого предназначен запрос и, опционально, номер порта.

Если порт не указан, то используется умолчательный порт протокола/сервиса (например «80» для HTTP, "443" для HTTPS и т.д.).

Каждый HTTP/1.1 запрос должен содержать один и только один заголовок **Host**, в ином случае ответ будет с кодом статуса {{HTTPStatus("400")}} (Bad Request).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Тип заголовка</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name")}} Неизменяемый
      </th>
      <td>да</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
Host: <host>:<port>
```

## Обозначения

- \<host>
  - : доменное имя сервера
- \<port> {{optional_inline}}
  - : номер порта

## Пример

```
Host: developer.mozilla.org
```

## Спецификации

| Стандарт/спецификация          | Название                                                           |
| ------------------------------ | ------------------------------------------------------------------ |
| {{RFC("7230", "Host", "5.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## Совместимость браузеров

{{Compat}}

## Смотрите также

- {{HTTPStatus("400")}}
