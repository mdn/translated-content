---
title: URL()
slug: Web/API/URL/URL
---

{{APIRef("URL API")}}

**`URL()`** 构造函数返回一个新创建的 {{domxref("URL")}} 对象，表示由一组参数定义的 URL。

如果给定的基本 URL 或生成的 URL 不是有效的 URL 链接，则会抛出一个{{jsxref("TypeError")}}。

{{AvailableInWorkers}}

## 语法

```
const url = new URL(url [, base])
```

### 参数

- `url`
  - : 是一个表示绝对或相对 URL 的 {{domxref("DOMString")}}。如果`url` 是相对 URL，则会将 `base` 用作基准 URL。如果 `url` 是绝对 URL，则无论参数`base`是否存在，都将被忽略。
- `base` {{optional_inline}}
  - : 是一个表示基准 URL 的 {{domxref("DOMString")}}，在 _url_ 是相对 URL 时，它才会起效。如果未指定，则默认为 `''`。

### 异常

| 异常                             | 解释                                                                          |
| -------------------------------- | ----------------------------------------------------------------------------- |
| {{jsxref("TypeError")}} | `url`（若为绝对 URL）或 `base` + `url`（若为相对 URL）是一个无效的 URL 链接。 |

## 示例

```js
let m = 'https://developer.mozilla.org';
let a = new URL("/", m);                                // => 'https://developer.mozilla.org/'
let b = new URL(m);                                     // => 'https://developer.mozilla.org/'

        new URL('en-US/docs', b);                      // => 'https://developer.mozilla.org/en-US/docs'
let d = new URL('/en-US/docs', b);                     // => 'https://developer.mozilla.org/en-US/docs'
        new URL('/en-US/docs', d);                     // => 'https://developer.mozilla.org/en-US/docs'
        new URL('/en-US/docs', a);                     // => 'https://developer.mozilla.org/en-US/docs'

        new URL('/en-US/docs', "https://developer.mozilla.org/fr-FR/toto");
                                                       // => 'https://developer.mozilla.org/en-US/docs'

        new URL('/en-US/docs', '');                    // Raises a TypeError exception as '' is not a valid URL
        new URL('/en-US/docs');                        // Raises a TypeError exception as '/en-US/docs' is not a valid URL
        new URL('http://www.example.com', );           // => 'http://www.example.com/'
        new URL('http://www.example.com', b);          // => 'http://www.example.com/'

        new URL("//foo.com", "https://example.com")    // => 'https://foo.com' (see relative URLs)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口：{{domxref("URL")}}
