---
title: TrustedScript：toString() 方法
short-title: toString()
slug: Web/API/TrustedScript/toString
l10n:
  sourceCommit: 3ceedbd90089cfb6970c9bf63ff9e6f3801fcbc5
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

{{domxref("TrustedScript")}} 接口的 **`toString()`** 方法返回一个可以被安全插入到[注入汇聚点](/zh-CN/docs/Web/API/Trusted_Types_API#概念和用法)中的字符串。

## 语法

```js-nolint
toString()
```

### 参数

无。

### 返回值

包含净化过的脚本的字符串。

## 示例

常量 `sanitized` 是一个由可信类型策略创建的对象。`toString()` 方法返回一个可以安全地作为脚本执行的字符串。

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");
console.log(sanitized.toString());
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
