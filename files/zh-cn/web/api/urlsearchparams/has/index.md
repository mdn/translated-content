---
title: URLSearchParams：has() 方法
slug: Web/API/URLSearchParams/has
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URLSearchParams")}} 接口的 **`has()`** 方法返回一个布尔值，表示指定的键名对应的值是否存在于查询参数中。

一个参数名称和可选值用于匹配参数。如果只指定了一个参数名称，那么如果查询字符串中的任何参数与名称匹配，则该方法将返回 `true`，否则返回 `false`。
如果同时指定了参数名称和值，则如果参数与名称和值都匹配，该方法才返回 `true`。

## 语法

```js-nolint
has(name)
has(name, value)
```

### 参数

- `name`
  - : 要匹配的参数的名称。
- `value`
  - : 要匹配的参数值以及给定的名称。

### 返回值

一个布尔值。

## 示例

### 检查具有指定名称的参数

此示例显示如何检查查询字符串是否有具有特定名称的参数。

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);

// 如果参数在查询字符串中，则 has() 返回 true
log(`bar?:\t${params.has("bar")}`);
log(`bark?:\t${params.has("bark")}`);
log(`foo?:\t${params.has("foo")}`);
```

下面的日志表示参数 `bar`、`bark` 和 `foo` 是否在查询字符串中。

{{EmbedLiveSample('检查具有指定名称的参数', '100%', '80')}}

### 检查具有指定名称和值的参数

此示例显示如何检查查询字符串是否有具有特定名称的参数和值。

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);

// 如果具有指定名称和值的参数在查询字符串中，则 has() 返回 true
log(`bar=1?:\t${params.has("bar", "1")}`);
log(`bar=2?:\t${params.has("bar", "2")}`);
log(`foo=4?:\t${params.has("foo", "4")}`);
```

只有上面的第二个值是 `true`，因为仅有名称为 `bar` 且值为 `2` 的参数匹配。

{{EmbedLiveSample('检查具有指定名称和值的参数', '100%', '80')}}

如果你的浏览器不支持 `value` 选项，则该方法将基于名称进行匹配，并且所有结果都应为 `true`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `URLSearchParams` 的 polyfill](https://github.com/zloirock/core-js#url-and-urlsearchparams)
