---
title: Document：lastModified 属性
slug: Web/API/Document/lastModified
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("DOM")}}

{{domxref("Document")}} 接口的 **`lastModified`** 属性返回包含当前文档最后修改的日期和本地时间的字符串。

## 值

字符串。

## 示例

### 简单用法

此示例会提示 `lastModified` 的值。

```js
alert(document.lastModified);
// 返回：Tuesday, December 16, 2017 11:09:42
```

### 将 lastModified 转换为 Date 对象

此示例将 `lastModified` 转换为 {{jsxref("Date")}} 对象。

```js
let oLastModif = new Date(document.lastModified);
```

### 将 lastModified 转换成毫秒

此示例将 `lastModified` 转换为自本地时间 1970 年 1 月 1 日 00:00:00 以来的毫秒数。

```js
let nLastModif = Date.parse(document.lastModified);
```

## 备注

请注意，作为字符串的 `lastModified` 无法*轻松*用于比较文档的修改日期。

下面是一个页面切换时显示提示消息的示例（参见：[JavaScript cookies API](/zh-CN/docs/Web/API/Document/cookie)）：

```js
// 在 'last_modif=timestamp' 中匹配 'timestamp'
// 例如，'last_modif=1687964614822' 中的 '1687964614822'
const pattern = /last_modif\s*=\s*([^;]*)/;

if (
  Date.parse(document.lastModified) >
  (parseFloat(document.cookie.match(pattern)?.[1]) || 0)
) {
  document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${
    location.pathname
  }`;
  alert("此页面已更改！");
}
```

相同的示例，但跳过第一次访问：

```js
const pattern = /last_modif\s*=\s*([^;]*)/;

const lastVisit = parseFloat(document.cookie.replace(pattern, "$1"));
const lastModif = Date.parse(document.lastModified);

if (Number.isNaN(lastVisit) || lastModif > lastVisit) {
  document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${
    location.pathname
  }`;

  if (isFinite(lastVisit)) {
    alert("此页面已更改！");
  }
}
```

如果你想知道某个*外部*页面是否发生了变化，可以通过 {{domxref("Window/fetch", "fetch()")}} API 发起 {{HTTPMethod("HEAD")}} 请求，并检查 {{HTTPHeader("Last-Modified")}} 响应标头信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
