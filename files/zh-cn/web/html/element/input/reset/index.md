---
title: <input type="reset">
slug: Web/HTML/Element/input/reset
---

{{HTMLSidebar("Input_types")}}

**`reset`** 类型的 {{HTMLElement("input")}} 元素将渲染为按钮，且带有默认的 {{domxref("Element/click_event", "click")}} 事件，用于将表单中的所有输入重置为其初始值。

{{EmbedInteractiveExample("pages/tabbed/input-reset.html", "tabbed-standard")}}

> **备注：** 你应该尽量避免在表单中包含重置按钮。它们很少具有实用性，事实上更有可能使用户因误点而感到沮丧（通常是在尝试单击[提交](/zh-CN/docs/Web/HTML/Element/Input/submit)按钮时）。

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#值">值</a></strong></td>
   <td>用做按钮标签的字符串</td>
  </tr>
  <tr>
   <td><strong>事件</strong></td>
   <td>{{domxref("Element/click_event", "click")}}</td>
  </tr>
  <tr>
   <td><strong>支持的常用属性</strong></td>
   <td>{{htmlattrxref("type", "input")}} 和 {{htmlattrxref("value", "input")}}</td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td><code>value</code></td>
  </tr>
  <tr>
    <td><strong>DOM 接口</strong></td>
    <td><p>{{domxref("HTMLInputElement")}}</p></td>
  </tr>
  <tr>
   <td><strong>方法</strong></td>
   <td>无</td>
  </tr>
 </tbody>
</table>

## 值

`<input type="reset">` 元素的 `{{htmlattrxref("value", "input")}}` 属性包含一个用做按钮标签的字符串，诸如 `reset` 之类的按钮没有其他值。

### 设置 value 属性

```html
<input type="reset" value="Reset the form" />
```

{{EmbedLiveSample("设置 value 属性", 650, 30)}}

### 省略 value 属性

如果你未指定 `value`，则会获得一个带有默认标签的按钮（通常为“重置”，但这将根据{{Glossary("user agent", "用户代理")}}而有所不同）：

```html
<input type="reset" />
```

{{EmbedLiveSample("省略 value 属性", 650, 30)}}

## 使用重置按钮

`<input type="reset">` 按钮用于重置表单。如果要创建自定义按钮，并使用 JavaScript 自定义行为，你需要使用 [`<input type="button">`](/zh-CN/docs/Web/HTML/Element/Input/button)，或者最好使用 `{{htmlelement("button")}}` 元素。

### 一个简单的重置按钮

我们将从创建一个简单的重置按钮开始：

```html
<form>
  <div>
    <label for="example">Type in some sample text</label>
    <input id="example" type="text" />
  </div>
  <div>
    <input type="reset" value="Reset the form" />
  </div>
</form>
```

上述代码会渲染成这样：

{{EmbedLiveSample("一个简单的重置按钮", 650, 100)}}

尝试在文本字段中输入一些文本，然后点击重置按钮。

### 添加重置键盘快捷键

像对 {{HTMLElement("input")}} 元素所做的那样，向重置按钮添加一个快捷键是非常有意义的，且可以通过 {{htmlattrxref("accesskey")}} 全局属性来实现。

在这个例子中， <kbd>r</kbd> 被指定为访问键（需要按下 <kbd>r</kbd> 键与浏览器或操作系统的特定键相组合；关于这些命令的详细列表请参见 {{htmlattrxref("accesskey")}}）。

```html
<form>
  <div>
    <label for="example">Type in some sample text</label>
    <input id="example" type="text" />
  </div>
  <div>
    <input type="reset" value="Reset the form" accesskey="r" />
  </div>
</form>
```

{{EmbedLiveSample("添加重置键盘快捷键", 650, 100)}}

上面的示例的问题在于，用户无法知道访问键是什么！事实上，是因为修饰符通常是非标准的，以避免与系统和软件快捷键冲突。在构建网站时，请确保以不干扰网站设计的方式提供此信息（例如，通过提供易于访问的链接来指向有关网站访问键的信息）。向按钮添加提示（也可以使用 {{htmlattrxref("title")}} 属性）, 尽管这并不是出于无障碍目的的完善的解决方案。

### 禁用和启用重置按钮

要禁用重置按钮，只需在其上指定 {{htmlattrxref("disabled")}} 全局属性，如下所示：

```html
<input type="reset" value="Disabled" disabled />
```

你可以在运行时通过简单地将 `disable` 设置为 `true` 或 `false` 来启用和禁用按钮。在 JavaScript 中，使用 `btn.disabled = true` 或 `btn.disabled = false`。

> **备注：** 有关启用和禁用按钮的更多概念，请参见 [`<input type="button">`](/zh-CN/docs/Web/HTML/Element/input/button#启用与禁用按钮) 页面。

## 验证

按钮并不参与约束性验证，它们并没有实际的约束价值。

## 示例

我们在上面已经提供了一些简单的示例。实际上关于重置按钮并没有更多的内容了。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("input")}} 和 {{domxref("HTMLInputElement")}} 实现接口
- [表单和按钮](/zh-CN/docs/Learn/Forms/Basic_native_form_controls#按钮)
- [无障碍表单](/zh-CN/docs/Web/Accessibility/ARIA/forms)
- [HTML 表单](/zh-CN/docs/Learn/Forms)
- {{HTMLElement("button")}} 元素
- [表单控件 CSS 兼容性列表](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
