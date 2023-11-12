---
title: Веб Запрос
slug: Mozilla/Add-ons/WebExtensions/API/webRequest
---

{{AddonSidebar}}

Добавляет обработчики событий на различных стадиях HTTP запроса. Обработчик получить детальную информацию о запросе и способен изменить или отменить запрос.

Каждое событие запущено на определённой стадии запроса. Типичный порядок событий такой:![](webrequest-flow.png)

{{WebExtAPIRef("webRequest.onErrorOccurred", "onErrorOccurred")}} Может быть запущен в любой момент во время запроса. Чреда событий может отличаться от приведённой выше: например, в Firefox, после [HSTS](/ru/docs/Web/HTTP/Headers/Strict-Transport-Security) обновления, событие `onBeforeRedirect` будет запущено сразу же после `onBeforeRequest`.

Все события, кроме `onErrorOccurred`, могут принимать три аргумента в `addListener()`:

- сам обработчик
- объект {{WebExtAPIRef("webRequest.RequestFilter", "filter")}} , который позволяет получать оповещения о запросах, сделанных к определённым URL или определённым типам ресурсов.
- необязательный объект `extraInfoSpec` . Может быть использован для передачи дополнительных специфических для события инструкций.

Функции - обработчику передаётся объект `details` который содержит информацию о запросе. Она содержит ID запроса, который обеспечен для включения надстройки, которая позволяет соотносить события, ассоциируемые с одним запросом. Это уникально в пределах сессии и контекста надстройки. Информация остаётся одинаковой везде на протяжении запроса, даже при перенаправлениях и обменах аутентификации.

Для использования webRequest API для определённого хоста, расширение должно иметь "webRequest" [API permission](/en-US/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) и [host permission](/en-US/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) для этого хоста. Для использования возможности "блокирования" расширение должно также иметь "webRequestBlocking" API разрешение.

Для перехвата ресурсов, загруженных страницей (таких как картинки, скрипты или таблицы стилей), расширение должно иметь разрешение хоста для ресурса также как и для главной страницы, запрашивающей ресурс. К примеру, если страница на "https\://developer.mozilla.org" загружает картинку из "https\://mdn.mozillademos.org", тогда расширение должно иметь разрешения обоих хостов чтобы перехватить запрос картинки.

## Модифицирование заголовков

Используя некоторые из этих событий, вы можете модифицировать запрос. Конкретно, вы можете:

- отменить запрос в:

  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}
  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

- перенаправить запрос в:

  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- модифицировать заголовки запроса в:

  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}

- модифицировать заголовки ответа в:

  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- предоставить учётные данные аутентификации в:

  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

Чтобы сделать это, вам необходимо передать опцию со значением "blocking" в аргументе `extraInfoSpec` к `addListener()`. Это делает обработчик синхронным. В обработчике, вы можете тогда возвратить объект {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}} который индикует модификацию, какую вам нужно сделать: например, модифицированный заголовок запроса который вы хотите отправить.

## Доступ к информации о безопасности

В обработчике {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} вы имеете доступ к [TLS](/ru/docs/Glossary/TLS) свойствам запроса через вызов {{WebExtAPIRef("webRequest.getSecurityInfo()", "getSecurityInfo()")}}. Чтобы сделать это, вы должны также передать "blocking" в `extraInfoSpec` аргументе к `addListener()` события.

Вы можете прочитать детали TLS хэндшейка, но не можете модифицировать их или перезаписать решения доверы браузера.

## Modifying responses

Для того, чтобы модифицировать тело HTTP ответа на запрос, вызовите {{WebExtAPIRef("webRequest.filterResponseData")}}, и передайте ID запроса. Это возвратит объект {{WebExtAPIRef("webRequest.StreamFilter")}} который вы сможете использовать чтобы исследовать и изменять данные когда они получены браузером.

Чтобы сделать это, у вас должно быть "webRequestBlocking" API разрешение, а также "webRequest" [API permission](/en-US/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) и [host permission](/en-US/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) от соответствующего хоста.

## Types

- {{WebExtAPIRef("webRequest.BlockingResponse")}}
  - : An object of this type is returned by event listeners that have set `"blocking"` in their `extraInfoSpec` argument. By setting particular properties in `BlockingResponse`, the listener can modify network requests.
- {{WebExtAPIRef("webRequest.CertificateInfo")}}
  - : An object describing a single X.509 certificate.
- {{WebExtAPIRef("webRequest.HttpHeaders")}}
  - : An array of HTTP headers. Each header is represented as an object with two properties: `name` and either `value` or `binaryValue`.
- {{WebExtAPIRef("webRequest.RequestFilter")}}
  - : An object describing filters to apply to webRequest events.
- {{WebExtAPIRef("webRequest.ResourceType")}}
  - : Represents a particular kind of resource fetched in a web request.
- {{WebExtAPIRef("webRequest.SecurityInfo")}}
  - : An object describing the security properties of a particular web request.
- {{WebExtAPIRef("webRequest.StreamFilter")}}
  - : An object that can be used to monitor and modify HTTP responses while they are being received.
- {{WebExtAPIRef("webRequest.UploadData")}}
  - : Contains data uploaded in a URL request.

## Properties

- {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}
  - : The maximum number of times that [`handlerBehaviorChanged()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/WebRequest/handlerBehaviorChanged) can be called in a 10 minute period.

## Functions

- {{WebExtAPIRef("webRequest.handlerBehaviorChanged()")}}
  - : This function can be used to ensure that event listeners are applied correctly when pages are in the browser's in-memory cache.
- {{WebExtAPIRef("webRequest.filterResponseData()")}}
  - : Returns a {{WebExtAPIRef("webRequest.StreamFilter")}} object for a given request.
- {{WebExtAPIRef("webRequest.getSecurityInfo()")}}
  - : Gets detailed information about the [TLS](/ru/docs/Glossary/TLS) connection associated with a given request.

## Events

- {{WebExtAPIRef("webRequest.onBeforeRequest")}}
  - : Fired when a request is about to be made, and before headers are available. This is a good place to listen if you want to cancel or redirect the request.
- {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}
  - : Fired before sending any HTTP data, but after HTTP headers are available. This is a good place to listen if you want to modify HTTP request headers.
- {{WebExtAPIRef("webRequest.onSendHeaders")}}
  - : Fired just before sending headers. If your add-on or some other add-on modified headers in `{{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}`, you'll see the modified version here.
- {{WebExtAPIRef("webRequest.onHeadersReceived")}}
  - : Fired when the HTTP response headers associated with a request have been received. You can use this event to modify HTTP response headers.
- {{WebExtAPIRef("webRequest.onAuthRequired")}}
  - : Fired when the server asks the client to provide authentication credentials. The listener can do nothing, cancel the request, or supply authentication credentials.
- {{WebExtAPIRef("webRequest.onResponseStarted")}}
  - : Fired when the first byte of the response body is received. For HTTP requests, this means that the status line and response headers are available.
- {{WebExtAPIRef("webRequest.onBeforeRedirect")}}
  - : Fired when a server-initiated redirect is about to occur.
- {{WebExtAPIRef("webRequest.onCompleted")}}
  - : Fired when a request is completed.
- {{WebExtAPIRef("webRequest.onErrorOccurred")}}
  - : Fired when an error occurs.

## Browser compatibility

{{Compat}}

[Extra notes on Chrome incompatibilities](/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#webRequest_incompatibilities).

{{WebExtExamples("h2")}}

> **Примечание:** Это API основано на API Chromium [`chrome.webRequest`](https://developer.chrome.com/extensions/webRequest). Эта документация основана на [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) из кода Chromium.
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
