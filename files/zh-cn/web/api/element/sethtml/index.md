---
title: Element：setHTML() 方法
slug: Web/API/Element/setHTML
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

{{domxref("Element")}} 接口的 **`setHTML()`** 方法用于解析和清理（sanitize）HTML 字符串，然后将其作为元素的子树插入到 DOM 中。应使用它来代替 {{domxref("Element.innerHTML")}}，以将不受信任的 HTML 字符串插入到元素中。

解析过程会删除 HTML 字符串中的对于当前元素上下文无效的任何元素，而清理则会删除任何不安全或不需要的元素、属性或者注释。默认的 `Sanitizer()` 配置会默认删除 XSS 相关的输入，包括 {{HTMLElement("script")}} 标签、自定义元素和注释。可以使用 {{domxref("Sanitizer.Sanitizer","Sanitizer()")}} 构造函数的选项来自定义清理器配置。

> **备注：** 如果字符串必须在之后的时间点插入到 DOM 中，例如目标元素尚不可用，则应使用 {{domxref("Sanitizer.sanitizeFor()")}} 代替此方法。

## 语法

```js-nolint
setHTML(input, options)
```

### 参数

- `input`
  - : 定义要清理的 HTML 字符串。
- `options` {{optional_inline}}

  - : 具有以下可选参数的选项对象：

    - `sanitizer`
      - : 一个 {{domxref("Sanitizer")}} 对象，用于定义输入的哪些元素将被清理。如果未指定，则使用默认的 {{domxref("Sanitizer")}} 对象。

### 返回值

无（`undefined`）。

### 异常

无。

## 示例

以下代码演示了如何清理 HTML 字符串并将其插入 id 为 `target` 的元素（`Element`）中。

```js
const unsanitized_string = "abc <script>alert(1)<" + "/script> def"; // 未清理的 HTML 字符串
const sanitizer1 = new Sanitizer(); // 默认的清理器；

// 获取 id 为“target”的元素并将其设置为清理后的字符串。
document
  .getElementById("target")
  .setHTML(unsanitized_string, { sanitizer: sanitizer1 });

// 结果（字符串）：“abc  def”
```

> **备注：** 该示例使用默认的清理器。{{domxref("Sanitizer/Sanitizer","Sanitizer")}} 构造函数用于配置清理器选项。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Sanitizer.sanitizeFor()")}}
- {{domxref('HTML Sanitizer API')}}
