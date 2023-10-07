---
title: Accept-Charset
slug: Web/HTTP/Headers/Accept-Charset
---

{{HTTPSidebar}}

Заголовок **`Accept-Charset`** запроса HTTP сообщает какую кодировку клиент может понять. Используя [согласование контента](/ru/docs/Web/HTTP/Content_negotiation), сервер выбирает один из предложенных вариантов, использует его и информирует клиент о своём выборе в {{HTTPHeader("Content-Type")}} ответном заголовке. Браузер обычно не устанавливает этот заголовок, т.к. значение по умолчанию для каждого контентного типа обычно корректный и передача его позволит с большей лёгкостью получить цифровой отпечаток.

Если сервер не может обслужить никакую из предоставленных кодировок, теоретически он может вернуть {{HTTPStatus("406")}} (Not Acceptable) код ошибки. Но, для более лучшего пользовательского опыта, это редко делается и более частый способ в этом случае, это просто игнорирование заголовка `Accept-Charset`.

> **Примечание:** В более ранних версиях HTTP/1.1, кодировка по умолчанию (`ISO-8859-1`) была определена. Теперь это не так и каждый контентый тип может иметь своё собственное дефолтное значение.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Тип заголовка</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Да</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
Accept-Charset: <кодировка>

// Множественные типы, придающие вес с {{glossary("quality values", "quality value")}} синтаксисом:
Accept-Charset: utf-8, iso-8859-1;q=0.5
```

## Директивы

- `<charset>`
  - : Кодировка типа `utf-8` или `iso-8859-15.`
- `*`
  - : Любая кодировка не указанная нигде в заголовке; `'*'` используется как групповой символ.
- `;q=` (q-factor weighting)
  - : Любое значение помещается в порядке предпочтения, выраженного с использованием относительного значения качества, называемого _весом_.

## Примеры

```
Accept-Charset: iso-8859-1

Accept-Charset: utf-8, iso-8859-1;q=0.5

Accept-Charset: utf-8, iso-8859-1;q=0.5, *;q=0.1
```

Смотрите также

- HTTP [content negotiation](/ru/docs/Web/HTTP/Content_negotiation)
- Header with the result of the content negotiation: {{HTTPHeader("Content-Type")}}
- Other similar headers: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}
