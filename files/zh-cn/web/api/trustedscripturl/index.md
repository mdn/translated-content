---
title: TrustedScriptURL
slug: Web/API/TrustedScriptURL
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

{{domxref("Trusted Types API", "可信类型 API", "", "nocode")}} 的 **`TrustedScriptURL`** 接口表示一个可以被开发者插入[注入汇聚点](/zh-CN/docs/Web/API/Trusted_Types_API#概念和用法)的、作为外部脚本的 URL 解析的字符串。这些对象由 {{domxref("TrustedTypePolicy.createScriptURL","TrustedTypePolicy.createScriptURL()")}} 创建，因此没有构造函数。

`TrustedScriptURL` 对象的值在对象被创建时设置，且不允许通过 JavaScript 修改，因为其没有暴露 setter 方法。

## 实例方法

- {{domxref("TrustedScriptURL.toJSON()")}}
  - : 返回一个表示 `TrustedScriptURL` 对象的字符串，与 {{domxref("TrustedScriptURL.toString()")}} 的返回内容相同。此方法会由 {{jsxref("JSON.stringify()")}} 自动调用。
- {{domxref("TrustedScriptURL.toString()")}}
  - : 包含净化过的 URL 的字符串。

## 示例

常量 `sanitized` 是一个通过可信类型策略创建的对象。

```js
const sanitized = scriptPolicy.createScriptURL(
  "https://example.com/my-script.js",
);
console.log(sanitized); /* TrustedScriptURL 对象 */
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用可信类型防范基于 DOM 的跨站脚本攻击漏洞](https://web.developers.google.cn/articles/trusted-types)
