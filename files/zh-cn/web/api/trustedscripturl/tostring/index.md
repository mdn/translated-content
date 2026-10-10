---
title: "TrustedScriptURL: toString() 方法"
slug: Web/API/TrustedScriptURL/toString
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

{{domxref("TrustedScriptURL")}} 接口的 **`toString()`** 方法返回一个可以被安全注入到[注入落点](/zh-CN/docs/Web/API/Trusted_Types_API#concepts_and_usage)中的字符串。

## 语法

```js-nolint
toString()
```

### 参数

无。

### 返回值

包含清洗过的 URL 的字符串。

## 示例

常量 `sanitized` 是一个通过可信类型策略创建的对象。`toString()` 方法返回一个可以安全地用于加载第三方脚本的字符串。

```js
const sanitized = scriptPolicy.createScriptURL(
  "https://example.com/my-script.js",
);
console.log(sanitized.toString());
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
