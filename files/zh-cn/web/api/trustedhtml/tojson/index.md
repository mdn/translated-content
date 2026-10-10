---
title: "TrustedHTML: toJSON() 方法"
slug: Web/API/TrustedHTML/toJSON
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

{{domxref("TrustedHTML")}} 接口的 **`toJSON()`** 方法返回其存储数据的 JSON 表示形式。

## 语法

```js-nolint
toJSON()
```

### 参数

无。

### 返回值

包含存储数据的 JSON 表示形式的字符串。

## 示例

常量 `escaped` 是一个由可信类型策略 excapeHTMLPolicy 创建的对象。`toString()` 方法返回一个可以安全地插入文档的字符串。

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped.toJSON());
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
