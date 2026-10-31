---
title: "TrustedScript: toJSON() 方法"
slug: Web/API/TrustedScript/toJSON
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

{{domxref("TrustedScript")}} 接口的 **`toJSON()`** 方法返回其存储数据的 JSON 表示形式。

## 语法

```js-nolint
toJSON()
```

### 参数

无。

### 返回值

包含存储数据的 JSON 表示形式的字符串。

## 示例

常量 `sanitized` 是一个由可信类型策略创建的对象。`toString()` 方法返回一个可以安全地作为脚本执行的字符串。

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");
console.log(sanitized.toJSON());
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
