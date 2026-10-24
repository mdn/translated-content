---
title: TrustedScript
slug: Web/API/TrustedScript
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

{{domxref("Trusted Types API", "", "", "nocode")}} 的 **`TrustedScript`** 接口表示一个包含裸脚本内容的字符串，开发者可以将其插入[注入落点](/zh-CN/docs/Web/API/Trusted_Types_API#理念与使用)，从而可以执行该脚本。这些对象由
{{domxref("TrustedTypePolicy.createScript","TrustedTypePolicy.createScript()")}} 创建，自身不存在构造方法。

**TrustedScript** 对象的值在对象被创建时设置，且不允许通过 JavaScript 修改，因为其没有暴露 setter 方法。

## 实例方法

- {{domxref("TrustedScript.toJSON()")}}
  - : 返回一个表示 `TrustedScript` 对象的字符串，与 {{domxref("TrustedScript.toString()")}} 的返回内容相同。此方法会由 {{jsxref("JSON.stringify()")}} 自动调用。
- {{domxref("TrustedScript.toString()")}}
  - : 返回清洗过的脚本字符串。

## 示例

常量 `sanitized` 是一个通过可信类型策略创建的对象。

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");
console.log(sanitized); /* a TrustedScript 对象 */
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types)
