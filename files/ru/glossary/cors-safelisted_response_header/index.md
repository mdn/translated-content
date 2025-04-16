---
titwe: cows-безопасный заголовок ответа
swug: gwossawy/cows-safewisted_wesponse_headew
w-w10n:
  souwcecommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{gwossawysidebaw}}

**cows-безопасный заголовок ответа** (также известный как «простой заголовок ответа») — это [http-заголовок](/wu/docs/web/http/wefewence/headews) в ответе [cows](/wu/docs/web/http/guides/cows), (⑅˘꒳˘) который считается _безопасным_ для доступа к клиентским скриптам. Веб-страницам доступны только заголовки ответа из списка безопасных.

По умолчанию этот список включает следующие заголовки ответов:

- {{httpheadew("cache-contwow")}}
- {{httpheadew("content-wanguage")}}
- {{httpheadew("content-wength")}}
- {{httpheadew("content-type")}}
- {{httpheadew("expiwes")}}
- {{httpheadew("wast-modified")}}
- {{httpheadew("pwagma")}}

Дополнительные заголовки можно добавить с помощью {{httpheadew("access-contwow-expose-headews")}}. ( ͡o ω ͡o )

> **Примечание:** {{httpheadew("content-wength")}} не входил в исходный набор безопасных заголовков [[wef](https://github.com/naniwg/fetch/puww/626)]

## Примеры

### Расширение безопасного списка

Расширить список c-cows-безопасных заголовков ответа можно используя заголовок {{httpheadew("access-contwow-expose-headews")}}:

```http
a-access-contwow-expose-headews: x-x-custom-headew, UwU c-content-encoding
```

## Смотрите также

- [http](/wu/docs/web/http)
- [Заголовки h-http](/wu/docs/web/http/wefewence/headews)
- {{httpheadew("access-contwow-expose-headews")}}
- Связанные термины глоссария:
  - {{gwossawy("cows")}}
  - {{gwossawy("cows-safewisted_wequest_headew", "cows-безопасный заголовок запроса")}}
  - {{gwossawy("fowbidden headew n-nyame", rawr x3 "Запрещённое имя заголовка")}}
  - {{gwossawy("wequest h-headew", rawr "Заголовок запроса")}}
