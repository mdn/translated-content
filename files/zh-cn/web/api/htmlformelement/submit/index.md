---
title: form.submit
slug: Web/API/HTMLFormElement/submit
---

{{ ApiRef("HTML DOM") }}

**`HTMLFormElement.submit()`** 用来提交表单 {{HtmlElement("form")}}。

这个方法和触发提交表单按钮很类似，但有所不同：

- 没有引发 [`submit`](/zh-CN/docs/Web/API/HTMLFormElement/submit_event) 事件。即，表单的 {{domxref("GlobalEventHandlers.onsubmit", "onsubmit")}} 事件处理程序不会运行。
- 不会触发[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation) 。

{{domxref("HTMLFormElement.requestSubmit()")}} 方法与触发表单提交的 {{HtmlElement("button")}} 的效果是相同的。

如果一个表单控件（比如一个提交按钮）的 `name` 或 `id` 的值为 `submit`，则它将覆盖表单的 submit 方法。

使用 `HTMLFormElement.submit()` 方法时，属性 `type="submit"` 的 {{HtmlElement("input")}} 不会与表单一起被提交，但在使用原始的 HTML 表单提交时，它将被提交。

## 语法

```js-nolint
submit()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
document.forms["myform"].submit();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
