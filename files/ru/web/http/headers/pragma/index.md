---
title: Pragma
slug: Web/HTTP/Headers/Pragma
---

{{HTTPSidebar}}

Общий заголовок **`Pragma`** HTTP / 1.0 - это заголовок, зависящий от реализации, который может иметь различные эффекты в цепочке запрос-ответ. Он используется для обратной совместимости с кешами HTTP / 1.0, где заголовок `Cache-Control` HTTP / 1.1 ещё не присутствует.

> **Примечание:** **`Pragma`** не указана для ответов HTTP и поэтому не является надёжной заменой общего заголовка управления кешем HTTP/1.1, хотя она ведёт себя так же, как `Cache-Control: no-cache`, если поле заголовка управления кешем опущено в запросе. Используйте `Pragma` только для обратной совместимости с клиентами HTTP / 1.0.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("General header")}}, но поведение ответа не указано
        и, следовательно, зависит от реализации.
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
Pragma: no-cache
```

## Директива

- no-cache
  - : То же, что и `Cache-Control: no-cache`. Заставляет кеши отправлять запрос на исходный сервер для проверки перед выпуском кешированной копии.

## Образец

```
Pragma: no-cache
```

## Технические требования

| Спецификация                     | Название                                        |
| -------------------------------- | ----------------------------------------------- |
| {{RFC("7234", "Pragma", "5.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Caching |

## Совместимость браузера

{{Compat}}

## Смотреть также

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
