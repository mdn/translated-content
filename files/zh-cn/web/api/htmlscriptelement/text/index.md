---
title: HTMLScriptElement：text 属性
short-title: text
slug: Web/API/HTMLScriptElement/text
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> 此属性表示脚本元素的文本内容，根据脚本类型的不同，这些内容可能是可执行的。
> 这类 API 被称为[注入汇聚点](/zh-CN/docs/Web/API/Trusted_Types_API#概念和用法)，并且可能是[跨站脚本（XSS）](/zh-CN/docs/Web/Security/Attacks/XSS) 攻击的载体。
>
> 你可以通过始终赋值 {{domxref("TrustedScript")}} 对象而不是字符串，并[强制执行可信类型](/zh-CN/docs/Web/API/Trusted_Types_API#使用_csp_强制执行可信类型)来缓解此风险。
> 更多信息请参阅[安全考量](#安全考量)。

{{domxref("HTMLScriptElement")}} 接口的 **`text`** 属性表示 {{HTMLElement("script")}} 元素的内联文本内容。
它的行为与 {{domxref("HTMLScriptElement.textContent","textContent")}} 和 {{domxref("HTMLScriptElement.innerText","innerText")}} 属性相同。

## 值

读取该属性会返回一个包含脚本文本的字符串。

设置该属性时接受 {{domxref("TrustedScript")}} 对象或字符串。

### 异常

- {{jsxref("TypeError")}}
  - : 当[可信类型](/zh-CN/docs/Web/API/Trusted_Types_API)被 [CSP 强制执行](/zh-CN/docs/Web/API/Trusted_Types_API#使用_csp_强制执行可信类型)且未定义默认策略时，如果将该属性设置为字符串，则抛出此异常。

## 描述

{{domxref("HTMLScriptElement")}} 接口的 **`text`** 属性表示 {{HTMLElement("script")}} 元素内部的文本内容。

对于可执行的脚本（即 {{domxref('HTMLScriptElement/type','type')}} 表明其为模块或经典脚本的脚本），此文本就是内联的可执行代码。
对于其他类型，它可能表示导入映射、推测规则或其他类型的数据块。

注意，如果设置了 {{domxref('HTMLScriptElement/src','src')}} 属性，那么 `text` 属性的内容会被忽略。

### 安全考量

请参阅 {{domxref("HTMLScriptElement.textContent")}} 中的[安全考量](/zh-CN/docs/Web/API/HTMLScriptElement/textContent#security_considerations)（`text`、`textContent` 和 `innerText` 属性的注意事项相同）。

## 示例

请参阅 {{domxref("HTMLScriptElement.textContent")}} 中的[示例](/zh-CN/docs/Web/API/HTMLScriptElement/textContent#examples)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLScriptElement.textContent")}}
- {{domxref("HTMLScriptElement.innerText")}}
