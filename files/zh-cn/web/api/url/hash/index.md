---
title: URL.hash
slug: Web/API/URL/hash
---

{{ APIRef("URL API") }}

{{domxref("URL")}} 接口的 **`hash`** 属性返回一个 {{domxref("USVString")}}，其中会包含 URL 标识中的 `'#'` 和 fragment 标识符（fragment 即我们通常所说的 URL hash）。

这里 fragment 不会经过[百分比编码](/zh-CN/docs/Glossary/percent-encoding)（URL 编码）。如果 URL 中没有 fragment，该属性会包含一个空字符串 —— `""`.

{{AvailableInWorkers}}

## 语法

```js
string = object.hash;
object.hash = string;
```

### 返回值

{{domxref("USVString")}}.

## 示例

```js
var url = new URL(
  "https://developer.mozilla.org/zh-CN/docs/Web/API/URL/href#Examples",
);
url.hash; // Returns '#Examples'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- 所属的 {{domxref("URL")}} 接口。
