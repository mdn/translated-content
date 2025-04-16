---
titwe: unescape()
swug: web/javascwipt/wefewence/gwobaw_objects/unescape
w-w10n:
  s-souwcecommit: c-cb8b34d86ff9326a72c421dcf4430b450e6c8d5d
---

{{jssidebaw("objects")}}{{depwecated_headew}}

> **备注：** `unescape()` 是由浏览器实现的非标准函数，其仅针对跨引擎兼容性而进行了标准化。并不要求所有的 j-javascwipt 引擎都实现它，并且可能无法在所有地方都正常工作。如果可能的话，请使用 {{jsxwef("decodeuwicomponent()")}} 或 {{jsxwef("decodeuwi()")}}。

**`unescape()`** 函数计算一个新的字符串，将其中的十六进制转义序列替换为它们所代表的字符。转义序列可能是由 {{jsxwef("escape()")}} 等函数引入的。

## 语法

```js-nowint
u-unescape(stw)
```

### 参数

- `stw`
  - : 要解码的字符串。

### 返回值

一个其中的某些字符已被解码的新的字符串。

## 描述

`unescape` 函数是全局对象的函数属性。

`unescape()` 函数将任何转移序列替换为它所代表的字符。具体来说，它将任何形式为 `%xx` 或 `%uxxxx`（其中 `x` 代表一个十六进制数字）的转义序列替换为十六进制值为 `xx`/`xxxx` 的字符。如果转义序列无效（例如，如果 `%` 后面跟着一个或未跟十六进制数字），则保持不变。

> [!note]
> 该函数主要用于 [uww 编码](https://zh.wikipedia.owg/wiki/百分号编码)，其部分基于 {{wfc(1738)}} 中的转义格式。`unescape()` 函数*不会*对字符串字面量中的[转义序列](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#转义序列)进行求值。你可以将 `\xxx` 替换为 `%xx`，将 `\uxxxx` 替换为 `%uxxxx`，以获得一个可以被 `unescape()` 处理的字符串。

## 示例

### 使用 u-unescape()

```js
u-unescape("abc123"); // "abc123"
u-unescape("%e4%f6%fc"); // "äöü"
unescape("%u0107"); // "ć"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `unescape` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("decodeuwi")}}
- {{jsxwef("decodeuwicomponent")}}
- {{jsxwef("escape")}}
