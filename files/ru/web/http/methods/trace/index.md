---
title: TRACE
slug: Web/HTTP/Methods/TRACE
---

{{HTTPSidebar}}

**HTTP Метод `TRACE`** выполняет проверку обратной связи по пути к целевому ресурсу, предоставляя полезный механизм отладки.

Конечный получатель запроса должен отразить полученное сообщение, исключая некоторые поля описанные ниже, назад клиенту как тело сообщения с ответом 200 (`OK`) с заголовком {{httpheader("Content-Type")}} `message/http`. Конечный получатель это либо исходный сервер, либо первый сервер получивший значение {{httpheader("Max-Forwards")}} в запросе.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Запрос имеет тело</th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">Успешный ответ имеет тело</th>
      <td>Нет</td>
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
      <td>Да</td>
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
TRACE /index.html
```

## Спецификация

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [HTTP methods](/ru/docs/Web/HTTP/Methods)
