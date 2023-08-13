---
title: <input type="image">
slug: Web/HTML/Element/input/image
---

{{HTMLSidebar}}

**`image`** 类型的 {{HTMLElement("input")}} 元素用于创建图形化的提交按钮，即采用图像而非文本形式的提交按钮。

{{EmbedInteractiveExample("pages/tabbed/input-image.html", "tabbed-standard")}}

## 值

`<input type="image">` 元素不接受 `value` 属性。要显示的图像的路径在 `src` 属性中指定。

## 额外属性

除了所有 {{HTMLElement("input")}} 元素的共有属性外，`image` 按钮还支持以下属性。

### alt

`alt` 属性提供一个备用字符串，在图像无法加载的情况下作为按钮的标注（由于错误，一个不能或者被设置为不能显示图像的 {{Glossary("user agent")}}，或用户正在使用屏幕阅读设备）。如果它被提供，它必须为非空字符串，且适合作为按钮的标签。

例如，如果你有一个按钮，显示一个带有图标和/或图像文本“现在登录”的图片，你也应该设置 `alt` 属性为类似于 `现在登录` 的东西。

> **备注：** 虽然 `alt` 属性在技术上是可选的，但是你总应该包含它，以最大限度地提高你的内容的可用性。在功能上，`<input type="image">` 元素的 `alt` 属性与 {{HTMLElement("img")}} 元素的 [`alt`](/zh-CN/docs/Web/HTML/Element/img#alt) 属性相类似。

### formaction

一个字符串，指示要将数据提交到的 URL。这优先于拥有 {{HTMLElement("input")}} 的 {{HTMLElement("form")}} 元素上的 [`action`](/zh-CN/docs/Web/HTML/Element/form#action) 属性。

该属性也在 [`<input type="submit">`](/zh-CN/docs/Web/HTML/Element/input/submit) 和 {{HTMLElement("button")}} 元素上可用。

### formenctype

一个字符串，标识在将表单数据提交到服务器时要使用的编码方法。有三个允许的值：

- `application/x-www-form-urlencoded`
  - : 这是默认值，它将会将表单数据在使用 {{jsxref("encodeURI", "encodeURI()")}} 等算法进行 URL 编码后发送。
- `multipart/form-data`
  - : 使用 {{domxref("FormData")}} API 来管理数据，允许向服务器提交文件。你*必须*使用该编码方式，如果你的表单包含 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 为 `file`（[`<input type="file">`](/zh-CN/docs/Web/HTML/Element/input/file)）的任何 {{HTMLElement("input")}} 元素。
- `text/plain`
  - : 纯文本；通常只在调试时有作用，你可以很容易看到要被提交的数据。

如果该属性被指定，`formenctype` 属性的值将会覆盖表单的 [`action`](/zh-CN/docs/Web/HTML/Element/form#action) 属性。

该属性也在 [`<input type="submit">`](/zh-CN/docs/Web/HTML/Element/input/submit) 和 {{HTMLElement("button")}} 元素上可用。

### formmethod

一个字符串，指定提交表单数据时使用的 HTTP 方法；该值将会覆盖所属表单上的任何 [`method`](/zh-CN/docs/Web/HTML/Element/form#method) 属性。允许的值如下：

- `get`
  - : 以 `formaction` 或 [`action`](/zh-CN/docs/Web/HTML/Element/form#action) 属性给定的 URL 为前缀构造的一个 URL，在前缀后会附加一个问号（`?`）字符，然后附加表单数据，表单数据按照 `formenctype` 或表单的 [`enctype`](/zh-CN/docs/Web/HTML/Element/form#enctype) 属性的描述进行编码。构造的 URL 会通过 HTTP {{HTTPMethod("get")}} 请求发送到服务器。此方法适用于仅包含 ASCII 字符，且没有副作用的简单表单。这是该属性的默认值。
- `post`
  - : 表单数据包含在请求的主体（body）中，并使用 HTTP {{HTTPMethod("post")}} 请求发送到 `formaction` 或 [`action`](/zh-CN/docs/Web/HTML/Element/form#action) 属性指定的 URL。此方法支持复杂数据和文件附件。
- `dialog`
  - : 此方法用于指示关闭与该输入元素关联的对话框的一个按钮，其不会传输表单数据。

该属性也在 [`<input type="submit">`](/zh-CN/docs/Web/HTML/Element/input/submit) 和 {{HTMLElement("button")}} 元素上可用。

### formnovalidate

一个布尔值，如果存在，则指定在提交给服务器之前不应对表单进行验证。这将会覆盖元素所属表单上的 [`novalidate`](/zh-CN/docs/Web/HTML/Element/form#novalidate) 属性的值。

该属性也在 [`<input type="submit">`](/zh-CN/docs/Web/HTML/Element/input/submit) 和 {{HTMLElement("button")}} 元素上可用。

### formtarget

一个字符串，指定一个名字或关键词来表示在提交表单后在何处显示响应数据。该字符串必须是一个**浏览上下文**的名字（即一个标签页、窗口，或 {{HTMLElement("iframe")}}）。在此处指定的值将会覆盖 {{HTMLElement("form")}} 上拥有该输入的 [`target`](/zh-CN/docs/Web/HTML/Element/form#target) 属性所给出的任何目标。

除了标签页、窗口或内联框架的实际名字，还有部分特殊关键词可用：

- `_self`
  - : 将响应加载到与包含表单的浏览上下文相同的浏览上下文中。这将用接收到的数据替换当前文档。如果未指定，这将是默认值。
- `_blank`
  - : 将响应加载到新的未命名浏览上下文中。这通常是一个与当前文档相同的窗口中的新选项卡，但是可能会因为{{Glossary("user agent", "用户代理")}}的配置而有所不同。
- `_parent`
  - : 将响应加载到当前浏览上下文的父浏览上下文中。若不存在父浏览上下文，该选项的行为将与 `_self` 相同。
- `_top`
  - : 将响应加载到顶级浏览上下文中；它是当前浏览上下文的最顶层祖先。如果当前浏览上下文为最顶层上下文，该选项的行为将与 `_self` 相同。

该属性也在 [`<input type="submit">`](/zh-CN/docs/Web/HTML/Element/input/submit) 和 {{HTMLElement("button")}} 元素上可用。

### height

一个表示绘制 `src` 属性指定图像的高度的数字，以 CSS 像素为单位。

### src

一个字符串，指定将要在提交按钮上显示的图像的 URL。当用户与该图像交互时，输入将会以和其他按钮输入相同的方式被处理。

### width

一个表示绘制图像宽度的数字，以 CSS 像素为单位。

## 已弃用的属性

下列属性是由 HTML 4 为 `image` 输入定义的，但未被所有浏览器实现，并且已被弃用。

### usemap

如果 `usemap` 被指定，它必须是一个图像映射元素的名字。{{HTMLElement("map")}} 用于定义一个和图像一同使用的图像映射。该用法已被弃用；当你需要使用图像映射时，你应该切换到使用 {{HTMLElement("img")}} 元素。

## 示例

### 一个登录表单

下面的例子显示和之前相同的按钮，但被包含在了一个典型登录表单的上下文中：

{{ EmbedLiveSample('一个登录表单', 600, 170) }}

#### HTML

```html
<form>
  <p>登录到你的账户</p>
  <div>
    <label for="userId">用户 ID</label>
    <input type="text" id="userId" name="userId" />
  </div>
  <div>
    <label for="pwd">密码</label>
    <input type="password" id="pwd" name="pwd" />
  </div>
  <div>
    <input
      id="image"
      type="image"
      src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"
      alt="Login"
      width="100" />
  </div>
</form>
```

#### CSS

下面是一些简单的 CSS 来让这些基本元素排列更整齐：

```css
div {
  margin-bottom: 10px;
}
label {
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 10px;
}
```

### 调整图像的位置和缩放

在这个例子里，我们调整了之前的例子，为图像留出了更多空间，并使用 {{cssxref("object-fit")}} 和 {{cssxref("object-position")}} 来调节图像的大小和位置。

{{EmbedLiveSample("调整图像的位置和缩放", 600, 300)}}

#### HTML

```html
<form>
  <p>登录到你的账户</p>
  <div>
    <label for="userId">用户 ID</label>
    <input type="text" id="userId" name="userId" />
  </div>
  <div>
    <label for="pwd">密码</label>
    <input type="password" id="pwd" name="pwd" />
  </div>
  <div>
    <input
      id="image"
      type="image"
      src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"
      alt="Login"
      width="200"
      height="100" />
  </div>
</form>
```

#### CSS

```css
div {
  margin-bottom: 10px;
}
label {
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 10px;
}
#image {
  object-position: right top;
  object-fit: contain;
  background-color: #ddd;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现它的 {{HTMLElement("input")}} 和 {{domxref("HTMLInputElement")}} 接口。
- 在 `<input>` 元素的框架内改变图像的位置和大小：{{cssxref("object-position")}} 和 {{cssxref("object-fit")}}
- [CSS 属性的兼容性](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
