---
title: URLSearchParams：delete() 方法
slug: Web/API/URLSearchParams/delete
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URLSearchParams")}} 接口的 **`delete()`** 方法从所有查询参数的列表中删除指定的参数及其关联值。

一个参数名称和可选值用于匹配参数。如果指定了一个参数名称，则会删除所有与该名称匹配的查询参数及其关联值。如果同时指定了参数名称和值，则会删除所有与参数名称和数值匹配的查询参数。

## 语法

```js-nolint
delete(name)
delete(name, value)
```

### 参数

- `name`
  - : 需要删除的键值名称。
- `value` {{optional_inline}}
  - : 参数必须匹配的值以及要删除的给定名称。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 删除指定名称的所有参数

此示例显示如何删除具有特定名称的所有查询参数（和值）。

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
log(`查询参数（删除前）：${params}`);
params.delete("foo");
log(`查询参数（删除后）：${params}`);
```

下面的日志显示所有名称为 `foo` 的参数都将被删除。

{{EmbedLiveSample('删除指定名称的所有参数', '100%', '50')}}

### 删除指定名称和值的所有参数

此示例显示如何删除具有特定的名称和值的查询参数。

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
const url = new URL("https://example.com?foo=1&bar=2&foo=3&foo=1");
const params = new URLSearchParams(url.search);
log(`查询参数（删除前）：${params}`);
params.delete("foo", "1");
log(`查询参数（删除后）：${params}`);
```

所有与参数 `name` 和 `value` 匹配的参数应该被删除（没有理由指定两个具有相同名称和值的参数，如上所示）。

{{EmbedLiveSample('删除指定名称和值的所有参数', '100%', '50')}}

如果浏览器支持 `value` 选项，则“删除后”字符串应为 `bar=2&foo=3`。否则，结果将与前面的例子相同（`bar=2`）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `URLSearchParams` 的 polyfill](https://github.com/zloirock/core-js#url-and-urlsearchparams)
