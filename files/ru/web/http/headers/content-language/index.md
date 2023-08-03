---
title: Content-Language
slug: Web/HTTP/Headers/Content-Language
---

{{HTTPSidebar}}

{{Glossary("HTTP-заголовок")}} **`Content-Language`** используется для описания языков контента доступных для аудитории, позволяя таким образом пользователю выбрать язык в соответствии со своими предпочтениями.

Например, если установлен заголовок "`Content-Language: de-DE`", это говорит о том, что документ предназначен для носителей немецкого языка (однако это не означает, что документ написан на немецком языке). Это может быть документ на английском языке в рамках языкового курса для носителей немецкого языка).

Если заголовок `Content-Language` не указан, по умолчанию предполагается, что содержимое предназначено для всех языковых аудиторий. Также допустимо использование в заголовке нескольких языковых тегов. Заголовок `Content-Language` может применяться не только к текстовым документам но и другим типам контента.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Entity header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted response-header")}}
      </th>
      <td>yes</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple header", "CORS-safelisted request-header")}}
      </th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
Content-Language: de-DE
Content-Language: en-US
Content-Language: de-DE, en-CA
```

## Директивы

- `language-tag`

  - : Несколько языковых тегов разделяются запятыми. Каждый языковой тег представляет собой последовательность из одного или нескольких подтегов без учёта регистра, разделённых символом дефиса ("`-`", `%x2D`).

    В большинстве случаев языковой тег состоит из подтега основного языка, который идентифицирует широкое семейство родственных языков (например, "`en`" = English), за которым дополнительно следует ряд подтегов, уточняющих или сужающих диапазон этого языка (например, "`en-CA`" = вариант диалекта английского языка, использующегося в Канаде).

> **Примечание:** Языковые теги формально описаны в [RFC 5646](https://tools.ietf.org/html/rfc5646), который в свою очередь опирается на стандарт [ISO 639](https://en.wikipedia.org/wiki/ISO_639) (точнее на [ISO 639-1 code list](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) в части перечня используемых [language codes](https://en.wikipedia.org/wiki/Language_code).

## Примеры

### Указание использованного языка документа

Глобальный атрибут [`lang`](/ru/docs/Web/HTML/Global_attributes/lang) используется на HTML-элементах для указания языка всего HTML документа или его частей.

```html
<html lang="de"></html>
```

**Не** используйте этот мета элемент как здесь для констатирования языка документа:

```html example-bad
<!-- /!\ Это плохая практика -->
<meta http-equiv="content-language" content="de" />
```

### Указание целевой аудитории для ресурса

`Content-Language` заголовок используется для определения целевой аудитории страницы и может указывать на более чем 1 язык.

```
Content-Language: de, en
```

## Спецификации

| Спецификация                                   | Заголовок                                                     |
| ---------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Content-Language", "3.1.3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Совместимость с браузерами

{{Compat}}

## [Смотрите также](/ru/docs/Web/JavaScript/Reference/Functions/set#%D0%A1%D0%BC%D0%BE%D1%82%D1%80%D0%B8%D1%82%D0%B5_%D1%82%D0%B0%D0%BA%D0%B6%D0%B5)

- {{HTTPHeader("Accept-Language")}}
- [HTTP headers, meta elements and language information](https://www.w3.org/International/questions/qa-http-and-lang.en)
