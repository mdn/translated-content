---
title: Accept
slug: Web/HTTP/Headers/Accept
---

{{HTTPSidebar}}

HTTP заголовок запроса **`Accept`** указывает, какие типы контента, выраженные как [MIME типы](/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types), клиент может понять. Используя [согласование контента](/ru/docs/Web/HTTP/Content_negotiation), сервер затем выбирает одно из предложений, использует его и информирует клиента о своём выборе с помощью заголовка ответа {{HTTPHeader ("Content-Type")}}. Браузеры задают адекватные значения для этого заголовка в зависимости от контекста, в котором выполняется запрос: при получении таблицы стилей CSS для запроса задаётся другое значение, чем при получении изображения, видео или скрипта.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Тип заголовка</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "Запрещённое имя заголовка")}}
      </th>
      <td>нет</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple header", "CORS-safelisted request-header")}}
      </th>
      <td>
        yes, with the additional restriction that values can't contain a
        <em>CORS-unsafe request header byte</em>: 0x00-0x1F (except 0x09 (HT)),
        <code>"():&#x3C;>?@[\]{}</code>, and 0x7F (DEL).
      </td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
Accept: <MIME_type>/<MIME_subtype>
Accept: <MIME_type>/*
Accept: */*

// Несколько типов, дополненных синтаксисом {{glossary("quality values", "значений качества")}}:
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

## Директивы

- `<MIME_type>/<MIME_subtype>`
  - : Один точный [MIME-тип](/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types), например `text/html`.
- `<MIME_type>/*`
  - : MIME тип без какого-либо подтипа. `image/*` будет соответствовать типам `image/png`, `image/svg`, `image/gif` и любым другим типам изображений.
- `*/*`
  - : Любой MIME type
- `;q=` (q-factor weighting)
  - : Любое используемое значение помещается в порядке приоритета, заданным с использованием относительного [значения качества](/ru/docs/Glossary/Quality_values), которое называется _весом_.

## Примеры

```
Accept: text/html

Accept: image/*

Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

## Спецификации

| Характеристика                     | Название                                                      |
| ---------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Accept", "5.3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Context |

## Совместимость с браузером

{{Compat}}

## Смотрите также

- HTTP [согласование контента](/ru/docs/Web/HTTP/Content_negotiation)
- Заголовок с результатами согласования контента: {{HTTPHeader("Content-Type")}}
- Другие похожие заголовки: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}
