---
title: cookies
slug: Mozilla/Add-ons/WebExtensions/API/cookies
---

{{AddonSidebar}}

Позволяет WebExtensions получить и установить куки ,а также сообщить об их изменении.

Для использования этого API,вам нужно предоставить доступ [API permission](/en-US/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) в вашем файле [manifest.json](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json),а также [host permissions](/en-US/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) для тех сайтов чьи куки вам нужны для доступа.Смотрите [cookie Permissions](/en-US/Add-ons/WebExtensions/API/cookies#Permissions).

## Types

- {{WebExtAPIRef("cookies.Cookie")}}
  - : Предоставляет информацию о HTTP cookie
- {{WebExtAPIRef("cookies.CookieStore")}}
  - : Represents a cookie store in the browser.
- {{WebExtAPIRef("cookies.OnChangedCause")}}
  - : Represents the reason a cookie changed.

## Methods

- {{WebExtAPIRef("cookies.get()")}}
  - : Запрашивает информацию об одном кукис.
- {{WebExtAPIRef("cookies.getAll()")}}
  - : Выдаёт все кукис которые подходят установленному фильтру.
- {{WebExtAPIRef("cookies.set()")}}
  - : Устанавливает кукис с заданной информацией;в том случае если подобный кукис был информация будет перезаписана.
- {{WebExtAPIRef("cookies.remove()")}}
  - : Удаляет кукис по имени.
- {{WebExtAPIRef("cookies.getAllCookieStores()")}}
  - : Список всех существующих куки

## Event handlers

- {{WebExtAPIRef("cookies.onChanged")}}
  - : Происходит когда кукис задаётся или меняется.

## Permissions

In order to use this API, an add-on must specify the "cookies" [API permission](/en-US/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) in its manifest, along with [host permissions](/en-US/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) for any sites for which it wishes to access cookies. The add-on may read or write any cookies which could be read or written by a URL matching the host permissions. For example:

- `http://*.example.com/`

  - : An add-on with this host permission may:

    - Read a non-secure cookie for `www.example.com`, with any path.
    - Write a secure or non-secure cookie for `www.example.com`, with any path.

    It may _not_:

    - Read a secure cookie for `www.example.com`.

- `http://www.example.com/`

  - : An add-on with this host permission may:

    - Read a non-secure cookie for `www.example.com`, with any path.
    - Read a non-secure cookie for `.example.com`, with any path.
    - Write a secure or non-secure cookie for `www.example.com` with any path.
    - Write a secure or non-secure cookie for `.example.com` with any path.

    It may _not_:

    - Read or write a cookie for `foo.example.com`.
    - Read or write a cookie for `foo.www.example.com`.

- `*://*.example.com/`

  - : An add-on with this host permission may:

    - Read or write a secure or non-secure cookie for `www.example.com` with any path.

## Browser compatibility

{{Compat}}

### Edge incompatibilities

Promises are not supported in Edge. Use callbacks instead.

{{WebExtExamples("h2")}}

> **Примечание:** Это API основано на API Chromium [`chrome.cookies`](https://developer.chrome.com/extensions/cookies). Эта документация основана на [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) из кода Chromium.
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
