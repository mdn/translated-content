---
title: Accept-Language
slug: Web/HTTP/Headers/Accept-Language
---

{{HTTPSidebar}}{{Glossary("HTTP-заголовок")}} Запрос **`Accept-Language`** сообщает серверу, какие языки клиент понимает и какая локаль предпочтительнее (имеются в виду естественные языки, такие как английский, а не языки программирования). Используя механизм обсуждения содержимого ([content negotiation](/ru/docs/Web/HTTP/Content_negotiation)), сервер выбирает один из предложенных вариантов, использует его и информирует клиента о своём выборе при помощи заголовка ответа {{HTTPHeader("Content-Language")}}. Браузеры устанавливают соответствующие значения для данного заголовка, исходя из языка пользовательского интерфейса, и, даже если у пользователя есть возможность изменить значение заголовка **`Accept-Language`**, это происходит редко (и не одобряется, так как ведёт.к идентификации).

Данный заголовок является подсказкой для сервера, когда он не имеет другого способа определить язык, (например, явно указанный язык в URL'е, который пользователь явно выбрал). Рекомендуется никогда не переопределять на стороне сервера явный выбор пользователем языка. Содержимое заголовка `Accept-Language` часто не может быть переопределено пользователем (например, в путешествии, когда пользователь пользуется услугами интернет-кафе); также пользователь может захотеть посмотреть содержимое сайта на языке отличном от языка интерфейса.

Если сервер не может предоставить содержимое ни на одном языке из предложенных в заголовке `Accept-Language`, теоретически он может вернуть HTTP-статус {{HTTPStatus("406")}} (Not Acceptable). Однако, для большего удобства пользователя, это делается редко, а чаще принято в таких случаях игнорировать заголовок `Accept-Language`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>нет</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple header", "CORS-safelisted request-header")}}
      </th>
      <td>да</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
Accept-Language: <language>
Accept-Language: <locale>
Accept-Language: *

// Multiple types, weighted with the {{glossary("quality values", "quality value")}} syntax:
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

## Директивы

- `<language>`
  - : Тег языка (иногда называют идентификатором локали, "locale identifier"). Состоит из 2-3 буквенного основного языкового тега, представляющего язык, и опционально за ним могут следовать дополнительные под-теги, разделённые `'-'`. Наиболее распространённой дополнительной информацией являются указания на страну или регион (например, `'en-US'` или `'fr-CA'`) или тип алфавита, который следует использовать (например, `'sr-Latn'`). Другие варианты, такие как тип орфографии (`'de-DE-1996'`) обычно не используются в контексте данного заголовка.
- `*`
  - : Любой язык; `'*'` обозначает любое значение.
- `;q=` (q-factor weighting)
  - : Любое из значений, размещённых в порядке предпочтения, выраженном позицией {{glossary("Quality values", "quality value")}}, которое называют _весами_.

## Примеры

```
Accept-Language: *

Accept-Language: de

Accept-Language: de-CH

Accept-Language: en-US,en;q=0.5

Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5

Accept-Language: ru-RU, ru;q=0.9, en-US;q=0.8, en;q=0.7, fr;q=0.6
```

## Спецификации

| Спецификация                                | Название                                                      |
| ------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Accept-Language", "5.3.5")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Context |

## Совместимость с браузером

{{Compat}}

## Смотрите также

- HTTP [content negotiation](/ru/docs/Web/HTTP/Content_negotiation)
- Header with the result of the content negotiation: {{HTTPHeader("Content-Language")}}
- Other similar headers: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept")}}
