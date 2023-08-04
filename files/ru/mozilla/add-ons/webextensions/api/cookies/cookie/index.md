---
title: cookies.Cookie
slug: Mozilla/Add-ons/WebExtensions/API/cookies/Cookie
---

{{AddonSidebar()}}

Тип `Cookie` из {{WebExtAPIRef("cookies")}} API представляет собой информацию о HTTP cookie.

## Тип

Значения этого типа - объекты, которые могут содержать следующие свойства:

- `name`
  - : `string` - содержит имя cookie.
- `value`
  - : `string` - содержит значение cookie.
- `domain`
  - : `string` - содержит домен, которому принадлежит cookie (например, "www\.google.com", "example.com").
- `hostOnly`
  - : `boolean` - `true` если cookie является host-only (то есть запрашивающий хост должен в точности совпадать с доменом cookie), в ином случае `false`.
- `path`
  - : `string` - содержит path cookie.
- `secure`
  - : `boolean` - `true`, если cookie помечен как secure (то есть его область действия ограничена безопасными каналами, обычно HTTPS), в ином случае `false`.
- `httpOnly`
  - : `boolean` - `true` если cookie помечен как HttpOnly (то есть он недоступен для клиентских скриптов), иначе `false`.
- `session`
  - : `boolean` - `true` если cookie является сессионным, `false` если cookie является постоянным с указанным временем жизни.
- `expirationDate`{{optional_inline}}
  - : `number` - содержит срок годности cookie, который представляется количеством секунд с начала UNIX-эры. Отсутствует для сессионных cookie.
- `storeId`
  - : `string` - представляет собой ID хранилища, в котором хранится данный cookie, как указано в соответствии с {{WebExtAPIRef("cookies.getAllCookieStores()")}}.

## Совместимость с браузерами

{{Compat}}

## Примеры

В большинстве методов из cookies API объекты типа `Cookie` используются как входные параметры методов, либо же как возвращаемые значения. К примеру, вызов {{WebExtAPIRef("cookies.getAll()")}} возвращает массив объектов типа `Cookie`.

В примере ниже мы запрашиваем все cookie, а затем выводим в лог некоторые из полей полученных `Cookie` объектов:

```js
function logCookies(cookies) {
  for (cookie of cookies) {
    console.log(`Domain: ${cookie.domain}`);
    console.log(`Name: ${cookie.name}`);
    console.log(`Value: ${cookie.value}`);
    console.log(`Persistent: ${!cookie.session}`);
  }
}

var gettingAll = browser.cookies.getAll({});
gettingAll.then(logCookies);
```

{{WebExtExamples}}

> **Примечание:** Это API основано на API Chromium [`chrome.cookies`](https://developer.chrome.com/extensions/cookies#type-Cookie). Эта документация основана на [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) из кода Chromium.
>
> Информация о совместимости Microsoft Edge предоставлена корпорацией Microsoft и включена здесь под лицензией Creative Commons Attribution 3.0 United States License.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
