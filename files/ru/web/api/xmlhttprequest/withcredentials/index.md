---
title: XMLHttpRequest.withCredentials
slug: Web/API/XMLHttpRequest/withCredentials
---

{{APIRef('XMLHttpRequest')}}

Свойство **XMLHttpRequest.withCredentials** это {{jsxref("Boolean")}} который определяет, должны ли создаваться кросс-доменные `Access-Control` запросы с использованием таких идентификационных данных как cookie, авторизационные заголовки или TLS сертификаты. Настройка `withCredentials` бесполезна при запросах на тот же домен.

Вдобавок, этот флаг также используется для определения, будут ли проигнорированы куки переданные в ответе. Значение по умолчанию - `false`. XMLHttpRequest с другого домена не может установить cookie на свой собственный домен в случае, если перед созданием этого запроса флаг `withCredentials` не установлен в `true`. Сторонние cookies, полученные с помощью установки `withCredentials` в true, всё равно будут соблюдать политику одинакового домена и, следовательно, не могут быть получены запрашивающим скриптом через [document.cookie](/ru/docs/Web/API/Document/cookie) или из заголовков ответа.

> **Примечание:**Это свойство не влияет на запросы, отправленные на тот же домен.

> **Примечание:**Ответы с другого домена не могут установить куки для своего собственного домена в случае, если перед созданием запроса флаг `withCredentials` не установлен в `true`, несмотря на значение заголовков `Access-Control-`.

## Пример

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/", true);
xhr.withCredentials = true;
xhr.send(null);
```

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}
