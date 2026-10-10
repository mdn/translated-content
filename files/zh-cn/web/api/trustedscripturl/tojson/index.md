---
title: "TrustedScriptURL: toJSON() 方法"
slug: Web/API/TrustedScriptURL/toJSON
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

{{domxref("TrustedScriptURL")}} 接口的 **`toJSON()`** 方法返回其存储数据的 JSON 表示形式。

## 语法

```js-nolint
toJSON()
```

### 参数

无。

### 返回值

包含存储数据的 JSON 表示形式的字符串。

## 示例

常量 `sanitized` 是一个通过可信类型策略创建的对象。`toString()` 方法返回一个可以安全地用于加载第三方脚本的字符串。

```js
const sanitized = scriptPolicy.createScriptURL(
  "https://example.com/my-script.js",
);
console.log(sanitized.toJSON());
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
