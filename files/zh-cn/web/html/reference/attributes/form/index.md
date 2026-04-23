---
title: HTML 属性：form
short-title: form
slug: Web/HTML/Reference/Attributes/form
l10n:
  sourceCommit: 6afda999d054c2ba12d13d129b13eb35952b4fbe
---

HTML `form` 属性将表单相关元素与同一文档内的 {{htmlelement("form")}} 元素建立关联。该属性适用于 {{htmlelement("button")}}、{{htmlelement("fieldset")}}、{{htmlelement("input")}}、{{htmlelement("object")}}、{{htmlelement("output")}}、{{htmlelement("select")}} 和 {{htmlelement("textarea")}} 元素。

## 值

应建立关联的 `<form>` 元素的 `id` 值。

## 使用说明

默认情况下，表单控件与其最近的祖先 {{htmlelement("form")}} 元素相关联，而未嵌套在 `<form>` 内的表单控件则不与任何表单相关联。`form` 属性可用于覆盖这些默认行为。

{{htmlelement("button")}}、{{htmlelement("fieldset")}}、{{htmlelement("input")}}、{{htmlelement("object")}}、{{htmlelement("output")}}、{{htmlelement("select")}} 和 {{htmlelement("textarea")}} 元素的 `form` 属性可指定显式表单所属元素，从而将文档中任意位置的表单控件关联至同一文档内的任意 `<form>` 元素。

当表单提交时，无论控件是否实际嵌套在该 `<form>` 内，甚至嵌套在其他 `<form>` 中，其名称和值都会被提交。

控件的 `form` 属性值应为目标关联 `<form>` 元素的 `id`。该属性设置的其他值均被忽略。

虽然并非必要将属性值设为最近祖先 `<form>` 的 `id`，但显式定义表单控件与其最近祖先表单的关联关系，可确保当脚本或错误 HTML 导致特定 `<form>` 不再是控件最近表单祖先时，该控件仍不会与表单脱离关联。

### 与非祖先表单进行关联

`form` 属性可用于将嵌套在某个 `<form>` 中的表单控件关联到另一个 `<form>`。

在此代码示例中，用户名 `<input>` 控件嵌套在 `internalForm` 中，但 `form` 属性将其从嵌套的祖先表单中分离，转而关联到 `externalForm`：

```html
<form id="externalForm"></form>
<form id="internalForm">
  <label for="username">用户名：</label>
  <input form="externalForm" type="text" name="username" id="username" />
</form>
```

在此情况下，用户名将在提交 `externalForm` 时一并提交，而 `internalForm` 则不包含任何关联的表单控件。

### `form` 属性的非继承性

`form` 属性仅关联其设置所在的元素。该属性的行为不会被继承。例如，当 `form` 属性设置在 `<fieldset>` 元素上时，它仅关联该 `<fieldset>`；它不会自动关联该 `<fieldset>` 内嵌的表单控件。

在此示例中，`<fieldset>` 和 `username` `<input>` 与 `exampleForm` 关联，并包含在 {{domxref("HTMLFormControlsCollection")}} 的 {{domxref("HTMLFormElement.elements")}} 属性中，但 `password` 不包含在内。提交 `exampleForm` 时，仅 `username` 将被包含：

```html
<form id="exampleForm"></form>

<fieldset form="exampleForm">
  <legend>登录信息</legend>
  <label
    >用户名：<input form="exampleForm" type="text" name="username"
  /></label>
  <label>密码：<input type="password" name="password" /></label>
</fieldset>
```

每个嵌套元素都需要拥有自己的 `form` 属性，或者必须嵌套在表单内部。你可以通过 JavaScript 使用 [HTMLFormElement.elements](/zh-CN/docs/Web/API/HTMLFormElement/elements) 检查哪些元素与表单相关联。

### 表单提交

包含 `form` 属性并不意味着该元素会随表单一起提交。只有可提交元素（包括 `<button>`、`<input>`、`<select>` 和 `<textarea>`）在关联的 `<form>` 提交时，其名称和值才会被提交。

在此情况下，即使 `<output>` 元素先隐式后显式地关联到 `calcForm`，当提交 `calcForm` 时，`result` 也不会随 `a` 和 `b` 一同提交。但它确实属于表单的 `HTMLFormControlsCollection` 集合。

```html
<form id="calcForm">
  <label>第一个数：<input id="a" value="2" type="number" /></label>
  <label>第二个数：<input id="b" value="3" type="number" /></label>
  <label
    >总和：<output name="result" for="a b" form="calcForm">5</output></label
  >
</form>
```

## 示例

### 基本示例

此示例演示了如何通过 `form` 属性将表单关联元素与 `<form>` 元素关联，即使这些元素并未显式嵌套在表单内部。本示例中所有表单关联元素均与 `loginForm` 存在关联关系：或通过直接嵌套实现隐式关联，或通过 `form` 属性实现显式关联。当登录表单提交时，所有可提交元素的名称与值都将被包含在内。

```html
<form id="loginForm">
  <label>用户名：<input type="text" name="username" /></label>
</form>

<label>密码：<input form="loginForm" type="password" name="password" /></label>
<label>
  选择一个选项：
  <select form="loginForm" name="options">
    <option value="A">A</option>
    <option value="B">B</option>
  </select>
</label>
<label
  >描述：
  <textarea form="loginForm" rows="4" name="description">你好，世界！</textarea>
</label>
<button form="loginForm" type="submit" name="submitLogin" value="Login">
  提交
</button>
```

### 与不同表单关联的元素

在此示例中，我们有两个 `<form>` 元素：`parentForm` 和 `targetForm`。位于 `parentForm` 内部的 `<button>` 将 `form` 属性设置为 `targetForm`，使其脱离最近祖先 `parentForm` 的关联，转而关联到 `targetForm`。当提交按钮被激活时，它将提交 `targetForm` 而非其祖先 `parentForm`。

```html
<form id="targetForm">
  <input type="text" name="targetInput" />
</form>
<form id="parentForm">
  <button form="targetForm" type="submit" name="submitTarget" value="Target">
    提交目标表单（targetForm）
  </button>
</form>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [覆盖默认表单行为](/zh-CN/docs/Web/HTML/Reference/Elements/input/image#覆盖默认表单行为)
