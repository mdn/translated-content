---
title: HTMLOutputElement
slug: Web/API/HTMLOutputElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("HTML DOM")}}

**`HTMLOutputElement`** 接口提供用于操作 {{HTMLElement("output")}} 元素的布局和呈现的特定属性和方法（除了从 {{domxref("HTMLElement")}} 接口继承的之外）。

{{InheritanceDiagram}}

## 实例属性

_还从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLOutputElement.defaultValue")}}
  - : 一个表示元素默认值的字符串，初始为空字符串。
- {{domxref("HTMLOutputElement.form")}} {{ReadOnlyInline}}
  - : 一个表示与控件关联的表单的 {{domxref("HTMLFormElement")}}，如果定义了 [`form`](/zh-CN/docs/Web/HTML/Element/output#form) HTML 属性，则反映该属性。
- {{domxref("HTMLOutputElement.htmlFor")}} {{ReadOnlyInline}}
  - : 一个反映 [`for`](/zh-CN/docs/Web/HTML/Element/output#for) HTML 属性的 {{domxref("DOMTokenList")}}，包含同一文档中有助于（或以其它方式影响）计算出 `value` 的其它元素的 ID 列表。
- {{domxref("HTMLOutputElement.labels")}} {{ReadOnlyInline}}
  - : 一个包含与此元素有关联的 {{HTMLElement("label")}} 元素的 {{domxref("NodeList")}}。
- {{domxref("HTMLOutputElement.name")}}
  - : 一个反映 [`name`](/zh-CN/docs/Web/HTML/Element/output#name) HTML 属性的字符串，包含与表单数据一起提交的控件的名称。
- {{domxref("HTMLOutputElement.type")}} {{ReadOnlyInline}}
  - : 字符串“`output`”。
- {{domxref("HTMLOutputElement.validationMessage")}} {{ReadOnlyInline}}
  - : 一个表示本地化消息的字符串，该消息描述控件不满足的约束验证（如果有的话）。如果控件不是约束验证的候选项（`willValidate` 是 `false`），或者它满足其约束，则此字符串为空。
- {{domxref("HTMLOutputElement.validity")}} {{ReadOnlyInline}}
  - : 一个表示此元素所处的有效性状态的 {{domxref("ValidityState")}}。
- {{domxref("HTMLOutputElement.value")}}
  - : 一个表示元素内容值的字符串。行为类似 {{domxref("Node.textContent")}} 属性。
- {{domxref("HTMLOutputElement.willValidate")}} {{ReadOnlyInline}}
  - : 一个布尔值，指示该元素是否是约束验证的候选项。

## 实例方法

_还从其父接口 {{domxref("HTMLElement")}} 继承方法。_

- {{domxref("HTMLOutputElement.checkValidity()")}}
  - : 检查元素的有效性，返回一个保存检查结果的布尔值。
- {{domxref("HTMLOutputElement.reportValidity()")}}

  - : 此方法报告元素约束的问题，如果有的话，报给用户。如果有问题，在当前元素上触发 {{domxref("HTMLInputElement/invalid_event", "invalid")}} 事件，且返回 `false`；如果没有问题，则返回 `true`。

    当报告问题时，用户代理可以聚焦元素并更改文档的滚动位置，或执行一些其它动作来引起用户的注意。如果此元素同时出现多个问题，用户代理可能报告多个约束违规。如果元素没有渲染，则用户代理可能报告正在允许的脚本错误，而不是通知用户。

- {{domxref("HTMLOutputElement.setCustomValidity()")}}
  - : 设置元素的自定义验证消息。如果消息不是空字符串，则该元素存在自定义验证错误，且无法通过验证。

## 模式

此元素的行为模式有两种：*默认*模式和*值*模式。

### 默认模式

最初，元素处于默认模式，因此元素内容表示元素的值和默认值。

当元素的后代以任何方式发生变化时，如果元素处于默认模式，`defaultValue` 属性将设置为 {{domxref("Node.textContent","textContent")}} 属性的值。

重置表单会将元素置于默认模式，并将 {{domxref("Node.textContent","textContent")}} 属性设置为 `defaultValue` 属性值。

### 值模式

当设置 `value` 属性内容时，元素进入值模式。`value` 属性在其他方面的行为类似于 {{domxref("Node.textContent","textContent")}} 属性。当元素处于值模式，仅可通过 `defaultValue` 属性访问默认值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素 : {{HTMLElement("output")}}
