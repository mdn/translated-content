---
title: HTMLObjectElement
slug: Web/API/HTMLObjectElement
l10n:
  sourceCommit: 0fe8f4d7e9cd5b1b6a39e9fa047468206d3c3ca2
---

{{APIRef("HTML DOM")}}

**`HTMLObjectElement`** 接口提供特定的属性和方法（除了常规 {{domxref("HTMLElement")}} 接口之外，它还可以通过继承来使用），用于操作 {{HTMLElement("object")}} 元素（代表外部资源）的布局和呈现。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLObjectElement.align")}} {{deprecated_inline}}
  - : 表示枚举属性的字符串，指示元素内容相对于周围上下文的对齐。可能的值有 `"left"`、`"right"`、`"justify"` 和 `"center"`。
- {{domxref("HTMLObjectElement.archive")}} {{deprecated_inline}}
  - : 反映 [`archive`](/zh-CN/docs/Web/HTML/Element/object#archive) HTML 属性的字符串，包含此对象的资源存档列表。
- {{domxref("HTMLObjectElement.border")}} {{deprecated_inline}}
  - : 反映 [`border`](/zh-CN/docs/Web/HTML/Element/object#border) HTML 属性的字符串，指定对象周围边框的宽度。
- {{domxref("HTMLObjectElement.code")}} {{deprecated_inline}}
  - : 表示应用程序类文件名称的字符串，包含程序的子类，或访问类的路径，包含类文件本身。
- {{domxref("HTMLObjectElement.codeBase")}} {{deprecated_inline}}
  - : 反映 [`codebase`](/zh-CN/docs/Web/HTML/Element/object#codebase) HTML 属性的字符串，指定用于解析相对 URI 的基本路径。
- {{domxref("HTMLObjectElement.codeType")}} {{deprecated_inline}}
  - : 反映 [`codetype`](/zh-CN/docs/Web/HTML/Element/object#codetype) HTML 属性的字符串，指定数据的内容类型。
- {{domxref("HTMLObjectElement.contentDocument")}} {{ReadOnlyInline}}
  - : 返回表示对象元素的嵌套浏览器上下文的活动文档的 {{domxref("Document")}}（如果有的话），否则返回 `null`。
- {{domxref("HTMLObjectElement.contentWindow")}} {{ReadOnlyInline}}
  - : 返回表示对象元素的嵌套浏览器上下文的窗口代理的 {{glossary("WindowProxy")}}（如果有的话），否则返回 `null`。
- {{domxref("HTMLObjectElement.data")}}
  - : 返回反映 [`data`](/zh-CN/docs/Web/HTML/Element/object#data) HTML 属性的字符串，指定资源数据的地址。
- {{domxref("HTMLObjectElement.declare")}} {{deprecated_inline}}
  - : 反映 [`declare`](/zh-CN/docs/Web/HTML/Element/object#declare) HTML 属性的布尔值，表示这是对象的声明，而不是对象的实例。
- {{domxref("HTMLObjectElement.form")}} {{ReadOnlyInline}}
  - : 返回 {{domxref("HTMLFormElement")}} 表示对象元素的表单所有者，如果没有则为 `null`。
- {{domxref("HTMLObjectElement.height")}}
  - : 返回反映 [`height`](/zh-CN/docs/Web/HTML/Element/object#height) HTML 属性的字符串，以 CSS 像素为单位指定资源的显示高度。
- {{domxref("HTMLObjectElement.hspace")}} {{deprecated_inline}}
  - : 以像素表示控件周围水平空间的 `long` 值。
- {{domxref("HTMLObjectElement.name")}}
  - : 返回反映 [`name`](/zh-CN/docs/Web/HTML/Element/object#name) HTML 属性的字符串，指定浏览上下文的名称。
- {{domxref("HTMLObjectElement.standby")}} {{deprecated_inline}}
  - : 反映 [`standby`](/zh-CN/docs/Web/HTML/Element/object#standby) HTML 属性的字符串，指定在加载对象时显示的消息。
- {{domxref("HTMLObjectElement.type")}}
  - : 反映 [`type`](/zh-CN/docs/Web/HTML/Element/object#type) HTML 属性的字符串，指定资源的 MIME 类型。
- {{domxref("HTMLObjectElement.useMap")}} {{deprecated_inline}}
  - : 反映 [`usemap`](/zh-CN/docs/Web/HTML/Element/object#usemap) HTML 属性的字符串，指定要使用的 {{HTMLElement("map")}} 元素。
- {{domxref("HTMLObjectElement.validationMessage")}} {{ReadOnlyInline}}
  - : 返回表示描述控件不满足的验证约束的本地化消息字符串（如果有的话）。如果控件不是约束验证（`willValidate` 是 `false`）的候选者，或者它满足其约束，则此字符串为空。
- {{domxref("HTMLObjectElement.validity")}} {{ReadOnlyInline}}
  - : 返回带有此元素所处于的验证状态 {{domxref("ValidityState")}} 。
- {{domxref("HTMLObjectElement.vspace")}} {{deprecated_inline}}
  - : 以像素表示控件周围水平空间的 `long` 值。
- {{domxref("HTMLObjectElement.width")}}
  - : 返回反映 [`width`](/zh-CN/docs/Web/HTML/Element/object#width) HTML 属性的字符串，以 CSS 像素为单位指定资源的显示宽度。
- {{domxref("HTMLObjectElement.willValidate")}} {{ReadOnlyInline}}
  - : 返回布尔值指示元素是否为约束验证的候选者。对于 `HTMLObjectElement` 对象，始终为 `false`。

## 实例方法

_从其父接口 {{domxref("HTMLElement")}} 继承方法。_

- {{domxref("HTMLObjectElement.checkValidity()")}}
  - : 返回一个总是 `true` 的布尔值，因为 `object` 对象从来都不是约束验证的候选者。
- {{domxref("HTMLObjectElement.setCustomValidity()")}}
  - : 设置元素的自定义验证消息。如果消息不是空字符串，则该元素存在自定义验证错误，因此无法通过验证。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("object")}}
