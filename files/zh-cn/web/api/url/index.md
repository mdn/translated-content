---
title: URL
slug: Web/API/URL
---

{{APIRef("URL API")}}

**`URL`** 接口用于解析，构造，规范化和编码 {{glossary("URL")}}。它通过提供允许你轻松阅读和修改 URL 组件的属性来工作。通常，通过在调用 URL 的构造函数时将 URL 指定为字符串或提供相对 URL 和基本 URL 来创建新的 URL 对象。然后，你可以轻松读取 URL 的已解析组成部分或对 URL 进行更改。

如果浏览器尚不支持{{domxref("URL.URL", "URL()")}}构造函数，则可以使用{{domxref("Window")}}中的{{domxref("Window.URL")}}属性。确保检查你的任何目标浏览器是否要求对此添加前缀。

{{AvailableInWorkers}}

## 构造器

- {{domxref("URL.URL", "new URL()")}}
  - : 创建并返回一个`URL`对象，该 URL 对象引用使用绝对 URL 字符串，相对 URL 字符串和基本 URL 字符串指定的 URL。

## 属性

- {{domxref("URL.hash", "hash")}}
  - : 包含`'#'`的{{domxref("USVString")}}，后跟 URL 的片段标识符。
- {{domxref("URL.host", "host")}}
  - : 一个{{domxref("USVString")}}，其中包含域（即主机名），后跟（如果指定了端口）“：”和 URL 的端口。
- {{domxref("URL.hostname", "hostname")}}
  - : 包含 URL 域名的 {{domxref("USVString")}}。
- {{domxref("URL.href", "href")}}
  - : 包含完整 URL 的 {{domxref("USVString")}}。
- {{domxref("URL.origin", "origin")}} {{readonlyInline}}
  - : 返回一个包含协议名、域名和端口号的 {{domxref("USVString")}}。
- {{domxref("URL.password", "password")}}
  - : 包含在域名前面指定的密码的 {{domxref("USVString")}} 。
- {{domxref("URL.pathname", "pathname")}}
  - : 以 '/' 起头紧跟着 URL 文件路径的 {{domxref("DOMString")}}。
- {{domxref("URL.port", "port")}}
  - : 包含 URL 端口号的 {{domxref("USVString")}}。
- {{domxref("URL.protocol", "protocol")}}
  - : 包含 URL 协议名的 {{domxref("USVString")}}，末尾带 `':'`。
- {{domxref("URL.search", "search")}}
  - : 一个{{domxref("USVString")}} ，指示 URL 的参数字符串；如果提供了任何参数，则此字符串包括所有参数，并以开头的“？”开头 字符。
- {{domxref("URL.searchParams", "searchParams")}} {{readonlyInline}}
  - : {{domxref("URLSearchParams")}}对象，可用于访问`search`中找到的各个查询参数。
- {{domxref("URL.username","username")}}
  - : 包含在域名前面指定的用户名的 {{domxref("USVString")}}。

## 方法

- {{domxref("URL.toString", "toString()")}}
  - : 返回包含整个 URL 的{{domxref("USVString")}}。它是{{domxref("URL.href")}}的同义词，尽管它不能用于修改值。
- {{domxref("URL.toJSON", "toJSON()")}}
  - : 返回包含整个 URL 的{{domxref("USVString")}}。它返回与`href`属性相同的字符串。

## 静态方法

- {{domxref("URL.createObjectURL", "createObjectURL()")}}
  - : 返回一个{{domxref("DOMString")}} ，包含一个唯一的 blob 链接（该链接协议为以 blob:，后跟唯一标识浏览器中的对象的掩码）。
- {{domxref("URL.revokeObjectURL", "revokeObjectURL()")}}
  - : 销毁之前使用{{ domxref("URL.createObjectURL()") }}方法创建的 URL 实例。

## 使用说明

如果`url`参数是相对 URL，则构造函数将使用`url`参数和可选的`base`参数作为基础。

```plain
const url = new URL('../cats', 'http://www.example.com/dogs');
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"
```

可以设置 URL 属性以构造 URL：

```plain
url.hash = 'tabby';
console.log(url.href); // "http://www.example.com/cats#tabby"
```

URL 根据 {{RFC(3986)}}中的规则进行编码。例如：

```plain
url.pathname = 'démonstration.html';
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"
```

{{domxref("URLSearchParams")}}接口可用于构建和处理 URL 查询字符串。

要从当前窗口的 URL 获取搜索参数，可以执行以下操作：

```plain
// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
```

URL 的{{domxref("URL.toString", "toString()")}}方法仅返回{{domxref("URL.href", "href")}} 属性的值，因此构造函数可以 用于直接对 URL 进行规范化和编码。

```plain
const response = await fetch(new URL('http://www.example.com/démonstration.html'));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中针对 `URL` 的 polyfill](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- [URL API](/zh-CN/docs/Web/API/URL_API)
- [什么是 URL？](/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- 获取 `URL` 对象的属性：{{domxref("URL")}}
- {{domxref("URLSearchParams")}}
