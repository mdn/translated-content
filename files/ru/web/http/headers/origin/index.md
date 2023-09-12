---
title: Origin
slug: Web/HTTP/Headers/Origin
---

{{HTTPSidebar}}Заголовок запроса **`Origin`** показывает откуда будет производиться загрузка. Он не включает в себя какую-либо информацию о пути, содержит в себе лишь имя сервера. Заголовок отправляется как с {{Glossary("CORS")}}, так и с {{HTTPMethod("POST")}} запросами. Он похож на заголовок {{HTTPHeader("Referer")}}, но, в отличие от этого заголовка, не раскрывает весь путь.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
Origin: ""
Origin: <протокол> "://" <имя_хоста> [ ":" <порт> ]
```

`Origin` может быть пустой строкой: это полезно, например, если источником данных будет URL.

## Директивы

- <протокол>
  - : Используемый протокол. Обычно это HTTP протокол, или его защищённая версия HTTPS.
- <имя_хоста>
  - : Доменное имя сервера (для виртуального хостинга) или IP.
- <порт> {{optional_inline}}
  - : Номер TCP порта, который сервер будет слушать. Если порт не задан, будет использован порт по умолчанию для указанного сервиса (например "80" для HTTP).

## Примеры

```
Origin: https://developer.mozilla.org
```

## Спецификации

| Specification                                          | Comment                                              |
| ------------------------------------------------------ | ---------------------------------------------------- |
| {{RFC("6454", "Origin", "7")}}                         | The Web Origin Concept                               |
| {{SpecName('Fetch','#origin-header','Origin header')}} | Supplants the `Origin` header as defined in RFC6454. |

## Совместимость с браузером

{{Compat}}

## Смотрите также

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Referer")}}
- [Same-origin policy](/ru/docs/Web/Security/Same-origin_policy)
