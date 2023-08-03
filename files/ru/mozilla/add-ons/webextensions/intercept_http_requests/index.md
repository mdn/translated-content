---
title: Intercept HTTP requests
slug: Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
---

{{AddonSidebar}}

Для перехвата HTTP запросов используйте {{WebExtAPIRef("webRequest")}} API. Этот API позволит вам добавлять обработчики, на различных этапах создания HTTP запросов. В обработчиках вы можете:

- получить доступ к заголовкам и телам запроса, к заголовкам ответа
- отменять и перенаправлять запросы
- изменять запрос и заголовки ответа

В этой статье мы рассмотрим три разных способа использования `webRequest` модуля:

- Логирование URL сделанных запросов.
- Перенаправление запросов.
- Модификация заголовков запроса.

## Логирование URL запросов

Создайте новый каталог "requests". В нём создайте файл "manifest.json" со следующим содержимым:

```json
{
  "description": "Demonstrating webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": ["webRequest", "<all_urls>"],

  "background": {
    "scripts": ["background.js"]
  }
}
```

Далее, создайте файл "background.js" со следующим содержимым:

```js
function logURL(requestDetails) {
  console.log("Loading: " + requestDetails.url);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});
```

Здесь мы используем {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} для вызова функции `logURL()` перед началом запроса. Функция `logURL()` берёт URL запроса из объекта event и выводит в консоль браузера. [Шаблон](/en-US/Add-ons/WebExtensions/Match_patterns) `{urls: ["<all_urls>"]}` означает, что мы будем перехватывать HTTP запросы ко всем URL.

Для проверки [проинсталлируйте WebExtension](/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox), [откройте консоль браузера](/ru/docs/Tools/Browser_Console) и откройте какую-нибудь веб-страницу. В консоли вы должны увидеть URL для каждого ресурса, который запрашивает браузер:

{{EmbedYouTube("X3rMgkRkB1Q")}}

## Перенаправление запросов

Теперь давайте использовать `webRequest` для перенаправления HTTP-запросов. Во-первых, замените manifest.json на это:

```json
{
  "description": "Demonstrating webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": [
    "webRequest",
    "webRequestBlocking",
    "https://mdn.mozillademos.org"
  ],

  "background": {
    "scripts": ["background.js"]
  }
}
```

Единственное изменение здесь заключается в добавлении `"webRequestBlocking"` в `permission`. Мы должны запрашивать это дополнительное разрешение каждый раз, когда мы изменяем запрос.

Затем замените «background.js» следующим образом:

```js
var pattern = "https://mdn.mozillademos.org/*";

function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  return {
    redirectUrl:
      "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif",
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

Опять же, мы используем {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} обработчик событий для запуска функции непосредственно перед каждым запросом. Эта функция заменит целевой URL на `redirectUrl` указанный в функции.

На этот раз мы не перехватываем каждый запрос: опция `{urls: [pattern], types: ["image"]}` указывает, что мы должны перехватывать запросы (1) для URL-адресов, находящихся в разделе "https\://developer.mozilla.org/" (2) для ресурсов изображения. Подробнее см. {{WebExtAPIRef ("webRequest.RequestFilter")}}.

Также обратите внимание, что мы передаём опцию `"blocking"`: нам нужно передать это, когда мы хотим изменить запрос. Это заставляет функцию обработчика блокировать сетевой запрос, поэтому браузер ждёт, пока обработчик вернётся, прежде чем продолжить. Дополнительную информацию о `"blocking"` смотрите в документации {{WebExtAPIRef ("webRequest.onBeforeRequest")}}.

Чтобы проверить это, откройте страницу в MDN, которая содержит много изображений (например, <https://developer.mozilla.org/ru/docs/Tools/Network_Monitor>), перезагрузите WebExtension и перезагрузите страницу MDN :

{{EmbedYouTube("ix5RrXGr0wA")}}

## Modifying request headers

Finally, use `webRequest` to modify request headers.
In this example, you change the "User-Agent" header so the browser identifies itself as Opera 12.16, but only when visiting pages under "http\://useragentstring.com/".

The "manifest.json" can stay the same as in the previous example.

Replace "background.js" with code like this:

```js
var targetPage = "http://useragentstring.com/*";

var ua =
  "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

function rewriteUserAgentHeader(e) {
  for (var header of e.requestHeaders) {
    if (header.name.toLowerCase() == "user-agent") {
      header.value = ua;
    }
  }
  return { requestHeaders: e.requestHeaders };
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  { urls: [targetPage] },
  ["blocking", "requestHeaders"],
);
```

Here we use the {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} event listener to run a function just before the request headers are sent.

The listener function will be called only for requests to URLs matching the `targetPage` [pattern](/en-US/Add-ons/WebExtensions/Match_patterns). Also note that we've again passed `"blocking"` as an option. We've also passed `"requestHeaders"`, which means that the listener will be passed an array containing the request headers that we expect to send. See {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}} for more information on these options.

The listener function looks for the "User-Agent" header in the array of request headers, replaces its value with the value of the `ua` variable, and returns the modified array. This modified array will now be sent to the server.

To test it out, open [useragentstring.com](http://useragentstring.com/) and check that it identifies the browser as Firefox. Then reload the add-on, reload [useragentstring.com](http://useragentstring.com/), and check that Firefox is now identified as Opera:

{{EmbedYouTube("SrSNS1-FIx0")}}

## Learn more

To learn about all the things you can do with the `webRequest` API, see its [reference documentation](/en-US/Add-ons/WebExtensions/API/WebRequest).
