---
title: GET
slug: Web/HTTP/Methods/GET
---

{{HTTPSidebar}}

**HTTP-метод `GET`** запрашивает представление указанного ресурса. `GET`-запросы должны только получать данные.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Запрос имеет тело</th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">Успешный ответ имеет тело</th>
      <td>Да</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Safe", "Безопасный")}}
      </th>
      <td>Да</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Idempotent", "Идемпотентный")}}
      </th>
      <td>Да</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Cacheable", "Кешируемый")}}
      </th>
      <td>Да</td>
    </tr>
    <tr>
      <th scope="row">
        Допускается в <a href="/ru/docs/Learn/HTML/Forms">HTML-формах</a>
      </th>
      <td>Да</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
GET /index.html
```

## Спецификации

| Спецификация                    | Заголовок                                                     |
| ------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "GET", "4.3.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [HTTP Заголовки](/ru/docs/Web/HTTP/%D0%97%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B8)
- {{HTTPHeader("Range")}}
- [POST](/ru/docs/Web/HTTP/Methods/POST)
