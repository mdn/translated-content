---
title: <input type="reset">
slug: Web/HTML/Element/Input/reset
---
`{{HTMLElement("input")}}` type 类型为 **`"reset"`** 元素呈现为按钮，且带有默认的 `{{event("click")}}` 事件，用于将表单中的所有输入重置为其初始值。

{{EmbedInteractiveExample("pages/tabbed/input-reset.html", "tabbed-standard")}}

> **备注：** 您通常应该尽量避免在表单中包含重置按钮。 它们很少有实用性，事实上更有可能使用户误点而感到沮丧（通常是在尝试单击 “[提交](/zh-CN/docs/Web/HTML/Element/Input/submit)” 按钮时）。

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#值">值</a></strong></td>
   <td><code>{{domxref("DOMString")}}</code>用做按钮标签</td>
  </tr>
  <tr>
   <td><strong>事件</strong></td>
   <td><code>{{event("click")}}</code></td>
  </tr>
  <tr>
   <td><strong>支持的常用属性</strong></td>
   <td><code>{{htmlattrxref("type", "input")}}</code> 和 <code>{{htmlattrxref("value", "input")}}</code></td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td><code>value</code></td>
  </tr>
  <tr>
   <td><strong>方法</strong></td>
   <td>无</td>
  </tr>
 </tbody>
</table>

## 值

`<input type="reset">` 元素的 `{{htmlattrxref("value", "input")}}` 属性包含一个用做按钮标签的 `{{domxref("DOMString")}}`，诸如 `reset`之类的按钮没有其他值。

```html
<input type="reset" value="Reset the form">
```

{{EmbedLiveSample("summary-example3", 650, 30)}}

如果您未指定 `value`，则会获得一个带有默认标签的按钮（通常为 “重置”，但这将根据 {{Glossary("user agent")}} 而有所不同：

```html
<input type="reset">
```

{{EmbedLiveSample("summary-example1", 650, 30)}}

## 使用重置按钮

`<input type =“ reset”>` 按钮用于重置表单。 如果您要创建自定义按钮，则使用 JavaScript 自定义行为，您需要使用 [`<input type="button">`](/zh-CN/docs/Web/HTML/Element/Input/button)，或者最好使用 `{{htmlelement("button")}}` 元素。

### 一个简单的重置按钮

我们将从创建一个简单的重置按钮开始：

```html
<form>
  <div>
    <label for="example">Type in some sample text</label>
    <input id="example" type="text">
  </div>
  <div>
    <input type="reset" value="Reset the form">
  </div>
</form>
```

如下所示：

{{EmbedLiveSample("A_simple_reset_button", 650, 100)}}

尝试在文本字段中输入一些文本，然后点击重置按钮。

### 添加重置键盘快捷键

添加键盘快捷键到提交按钮 — 就像您使用 `{{HTMLElement("input")}}` 一样做一些事情 — 请使用 `{{htmlattrxref("accesskey")}}` 全局属性。

在这个例子中， <kbd>r</kbd> 被指定为访问键（您需要按 <kbd>r</kbd> 键与浏览器或操作系统的特定键相组合； 关于这些命令请参见 `{{htmlattrxref("accesskey")}}` ）。

```html
<form>
  <div>
    <label for="example">Type in some sample text</label>
    <input id="example" type="text">
  </div>
  <div>
    <input type="reset" value="Reset the form"
     accesskey="r">
  </div>
</form>
```

{{EmbedLiveSample("Adding_a_reset_keyboard_shortcut", 650, 100)}}

上面的示例的问题在于，用户无法知道访问键是什么！事实上，是因为修饰符通常是非标准的以避免与系统和软件快捷键冲突。 在构建网站时，请确保以不干扰网站设计的方式提供此信息（例如，通过提供易于访问的链接来指向有关网站访问键的信息）。向按钮添加提示（也可以使用 `{{htmlattrxref("title")}}` 属性）, 尽管这并不是出于无障碍目的的完善的解决方案。

### 禁用和启用重置按钮

要禁用重置按钮，只需在其上指定 `{{htmlattrxref("disabled")}}` 的全局属性，如下所示：

```html
<input type="reset" value="Disabled" disabled>
```

您可以在运行时通过简单地将 `disable` 设置为 `true` 或 `false` 来启用和禁用按钮。在 JavaScript 中，使用`btn.disabled = true` 或 `btn.disabled = false`。

> **备注：** 有关启用和禁用按钮的更多想法，请参见 [`<input type="button">`](/en-US/docs/Web/HTML/Element/input/button#Disabling_and_enabling_a_button) 页面。

## 验证方式

按钮并不参与约束性验证；他们并没有实际的约束价值。

## 例子

我们在上面已经提供了一些简单的示例。 实际上关于重置按钮并没有更多的内容了。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("input")}} 和 {{domxref("HTMLInputElement")}} 实现接口
- [Forms and buttons](/zh-CN/docs/Learn/HTML/Forms_and_buttons)
- [Forms (accessibility)](/zh-CN/docs/Web/Accessibility/ARIA/forms)
- [HTML forms](/zh-CN/docs/Learn/HTML/Forms)
- The {{HTMLElement("button")}} element
