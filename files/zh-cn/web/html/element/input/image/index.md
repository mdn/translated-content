---
title: <input type="image">
slug: Web/HTML/Element/Input/image
---

{{HTMLSidebar}}

`<input type="image">` 标签是一个图片提交按钮。你必须使用 **src** 属性来定义图片的源，并且使用 **alt** 来定义当图片无法显示的时候的替代文字。 **height** 和 **width** 属性是用来定义图片的高和宽的。

{{EmbedInteractiveExample("pages/tabbed/input-image.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#值">值</a></strong></td>
      <td>无 - <code>value</code> 属性不应该被指定。</td>
    </tr>
    <tr>
      <td><strong>事件</strong></td>
      <td>无</td>
    </tr>
    <tr>
      <td><strong>支持的公共属性</strong></td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Element/input#alt"><code>alt</code></a>、
        <a href="/zh-CN/docs/Web/HTML/Element/input#src"><code>src</code></a>、
        <a href="/zh-CN/docs/Web/HTML/Element/input#width"><code>width</code></a>、
        <a href="/zh-CN/docs/Web/HTML/Element/input#height"><code>height</code></a>、
        <a href="/zh-CN/docs/Web/HTML/Element/input#formaction"><code>formaction</code></a>、
        <a href="/zh-CN/docs/Web/HTML/Element/input#formenctype"><code>formenctype</code></a>、
        <a href="/zh-CN/docs/Web/HTML/Element/input#formmethod"><code>formmethod</code></a>、
        <a href="/zh-CN/docs/Web/HTML/Element/input#formmethod"><code>formnovalidate</code></a>、
        <a href="/zh-CN/docs/Web/HTML/Element/input#formtarget"><code>formtarget</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td>无</td>
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

`<input type="image">` 元素不接受 `value` 属性。要显示的图像的路径在 `src` 属性中指定。

## 额外属性

除了所有 {{HTMLElement("input")}} 元素的共有属性外，`image` 按钮还支持下列属性。

### alt

`alt` 属性提供一个备用字符串，在图像无法加载的情况下作为按钮的标注（由于错误，一个不能或者被设置为不能显示图像的 {{Glossary("user agent")}}，或用户正在使用屏幕阅读设备）。如果它被提供，它必须为非空字符串，且适合作为按钮的标签。

例如，如果你有一个按钮，显示一个带有图标和/或图像文本“现在登录”的图片，你也应该设置 `alt` 属性为类似于 `现在登录` 的东西。

> **备注：** 虽然 `alt` 属性在技术上是可选的，但是你总应该包含它，以最大限度地提高你的内容的可用性。在功能上，`<input type="image">` 元素的 `alt` 属性与 {{HTMLElement("img")}} 元素的 {{htmlattrxref("alt", "img")}} 属性相类似。

### formaction

一个字符串，指示要将数据提交到的 URL。这优先于拥有 {{HTMLElement("input")}} 的 {{HTMLElement("form")}} 元素上的 {{htmlattrxref("action", "form")}} 属性。

该属性也在 [`<input type="submit">`](/zh-CN/docs/Web/HTML/Element/input/submit) 和 {{HTMLElement("button")}} 元素上可用。

### formenctype

一个字符串，标识在将表单数据提交到服务器时要使用的编码方法。有三个允许的值：

- `application/x-www-form-urlencoded`
  - : 这是默认值，它将会将表单数据在使用 {jsxref("encodeURI", "encodeURI()")}} 等算法进行 URL 编码后发送。
- `multipart/form-data`
  - : 使用 {{domxref("FormData")}} API 来管理数据，允许向服务器提交文件。你_必须_使用该编码方式，如果你的表单包含 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) `file` ([`<input type="file">`](/zh-CN/docs/Web/HTML/Element/input/file)) 的任何 {{HTMLElement("input")}} 元素。
- `text/plain`
  - : 纯文本；通常只在调试时有作用，你可以很容易看到要被提交的数据。

如果该属性被指定，`formenctype` 属性的值将会覆盖表单的 {{htmlattrxref("action", "form")}} 属性。

该属性也在 [`<input type="submit">`](/zh-CN/docs/Web/HTML/Element/input/submit) 和 {{HTMLElement("button")}} 元素上可用。

### formmethod

一个字符串，指定提交表单数据时使用的 HTTP 方法；该值将会覆盖所属表单上的任何 {{htmlattrxref("method", "form")}} 属性。允许的值如下：

- `get`
  - : A URL is constructed by starting with the URL given by the `formaction` or {{htmlattrxref("action", "form")}} attribute, appending a question mark ("?") character, then appending the form's data, encoded as described by `formenctype` or the form's {{htmlattrxref("enctype", "form")}} attribute. This URL is then sent to the server using an HTTP {{HTTPMethod("get")}} request. This method works well for simple forms that contain only ASCII characters and have no side effects. This is the default value.
- `post`
  - : The form's data is included in the body of the request that is sent to the URL given by the `formaction` or {{htmlattrxref("action", "form")}} attribute using an HTTP {{HTTPMethod("post")}} request. This method supports complex data and file attachments.
- `dialog`
  - : This method is used to indicate that the button closes the dialog with which the input is associated, and does not transmit the form data at all.

该属性也在 [`<input type="submit">`](/zh-CN/docs/Web/HTML/Element/input/submit) 和 {{HTMLElement("button")}} 元素上可用。

### formnovalidate

一个布尔值，如果存在，则指定在提交给服务器之前不应对表单进行验证。这将会覆盖元素所属表单上的 {{htmlattrxref("novalidate", "form")}} 属性的值。

该属性也在 [`<input type="submit">`](/zh-CN/docs/Web/HTML/Element/input/submit) 和 {{HTMLElement("button")}} 元素上可用。

### formtarget

一个字符串，指定一个名字或关键词来表示在提交表单后在何处显示响应数据。该字符串必须是一个**浏览上下文**的名字（即一个标签页、窗口，或 {{HTMLElement("iframe")}}）。在此处指定的值将会覆盖 {{HTMLElement("form")}} 上拥有该输入的 {{htmlattrxref("target", "form")}} 属性所给出的任何目标。

除了标签页、窗口或内联框架的实际名字，还有部分特殊关键词可用：

- `_self`
  - : 将响应加载到与包含表单的浏览上下文相同的浏览上下文中。这将用接收到的数据替换当前文档。如果未指定，这将是默认值。
- `_blank`
  - : 将响应加载到新的未命名浏览上下文中。这通常是一个与当前文档相同的窗口中的新选项卡，但是可能会因为 {{Glossary("user agent")}} 的配置而有所不同。
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

## 被弃用的属性

下列属性是由 HTML 4 为 `image` 输入定义的，但未被所有浏览器实现，并且已被弃用。

### usemap

如果 `usemap` 被指定，它必须是一个图像映射元素的名字。{{HTMLElement("map")}} 用于定义一个和图像一同使用的图像映射。该用法已被弃用；当你需要使用图像映射时，你应该切换到使用 {{HTMLElement("img")}} 元素。

## 使用图像输入

The `<input type="image">` element is a [replaced element](/zh-CN/docs/Web/CSS/Replaced_element) (an element whose content isn't generated or directly managed by the CSS layer), behaving in much the same way as a regular {{htmlelement("img")}} element, but with the capabilities of a [submit button](/zh-CN/docs/Web/HTML/Element/input/submit).

### 基本的图像输入特性

Let's look at a basic example that includes all the essential features you'd need to use (These work exactly the same as they do on the `<img>` element.):

```html
<input
  id="image"
  type="image"
  width="100"
  height="30"
  alt="Login"
  src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png" />
```

{{ EmbedLiveSample('基本的图像输入特性', 600, 50) }}

- The [`src`](/zh-CN/docs/Web/HTML/Element/input#src) attribute is used to specify the path to the image you want to display in the button.
- The [`alt`](/zh-CN/docs/Web/HTML/Element/input#alt) attribute provides alt text for the image, so screen reader users can get a better idea of what the button is used for. It will also display if the image can't be shown for any reason (for example if the path is misspelled). If possible, use text which matches the label you'd use if you were using a standard submit button.
- The [`width`](/zh-CN/docs/Web/HTML/Element/input#width) and [`height`](/zh-CN/docs/Web/HTML/Element/input#height) attributes are used to specify the width and height the image should be shown at, in pixels. The button is the same size as the image; if you need the button's hit area to be bigger than the image, you will need to use CSS (e.g. {{cssxref("padding")}}). Also, if you specify only one dimension, the other is automatically adjusted so that the image maintains its original aspect ratio.

### 覆盖表单默认行为

`<input type="image">` elements — like regular [submit buttons](/zh-CN/docs/Web/HTML/Element/input/submit) — can accept a number of attributes that override the default form behavior:

- {{htmlattrdef("formaction")}}
  - : The URI of a program that processes the information submitted by the input element; overrides the {{htmlattrxref("action","form")}} attribute of the element's form owner.
- {{htmlattrdef("formenctype")}}

  - : Specifies the type of content that is used to submit the form to the server. Possible values are:

    - `application/x-www-form-urlencoded`: The default value if the attribute is not specified.
    - `text/plain`.

    If this attribute is specified, it overrides the {{htmlattrxref("enctype","form")}} attribute of the element's form owner.

- {{htmlattrdef("formmethod")}}

  - : Specifies the HTTP method that the browser uses to submit the form. Possible values are:

    - `post`: The data from the form is included in the body of the form and is sent to the server.
    - `get`: The data from the form is appended to the **`form`** attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side effects and contains only ASCII characters.

    If specified, this attribute overrides the {{htmlattrxref("method","form")}} attribute of the element's form owner.

- {{htmlattrdef("formnovalidate")}}
  - : A Boolean attribute specifying that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the {{htmlattrxref("novalidate","form")}} attribute of the element's form owner.
- {{htmlattrdef("formtarget")}}

  - : A name or keyword indicating where to display the response that is received after submitting the form. This is a name of, or keyword for, a _browsing context_ (for example, tab, window, or inline frame). If this attribute is specified, it overrides the {{htmlattrxref("target", "form")}} attribute of the element's form owner. The following keywords have special meanings:

    - `_self`: Load the response into the same browsing context as the current one. This value is the default if the attribute is not specified.
    - `_blank`: Load the response into a new unnamed browsing context.
    - `_parent`: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.
    - `_top`: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same as `_self`.

### 使用 x 和 y 数据点

When you submit a form using a button created with `<input type="image">`, two extra data points are submitted to the server automatically by the browser — `x` and `y`. You can see this in action in our [X Y coordinates example](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html).

When you click on the image to submit the form, you'll see the data appended to the URL as parameters, for example `?x=52&y=55`. If the image input has a [`name`](/zh-CN/docs/Web/HTML/Element/input#name) attribute, then keep in mind that the specified name is prefixed on every attribute, so if the `name` is `position`, then the returned coordinates would be formatted in the URL as `?position.x=52&position.y=55`. This, of course, applies to all other attributes as well.

These are the X and Y coordinates of the image that the mouse clicked on to submit the form, where (0,0) is the top-left of the image. These can be used when the position the image was clicked on is significant, for example you might have a map that when clicked, sends the coordinates that were clicked to the server. The server-side code then works out what location was clicked on, and returns information about places nearby.

In our above example, we could write server-side code that works out what color was clicked on by the coordinates submitted, and keeps a tally of the favorite colors people voted for.

### 调整图像的位置和缩放算法

You can use the {{cssxref("object-position")}} property to adjust the positioning of the image within the `<input>` element's frame, and the {{cssxref("object-fit")}} property to control how the image's size is adjusted to fit within the frame. This allows you to specify a frame for the image using the `width` and `height` attributes to set aside space in the layout, then adjust where within that space the image is located and how (or if) it is scaled to occupy that space.

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

Here, `object-position` is configured to draw the image in the top-right corner of the element, while `object-fit` is set to `contain`, which indicates that the image should be drawn at the largest size that will fit within the element's box without altering its aspect ratio. Note the visible grey background of the element still visible in the area not covered by the image.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现它的 {{HTMLElement("input")}} 和 {{domxref("HTMLInputElement")}} 接口。
- 在 `<input>` 元素的框架内改变图像的位置和大小：{{cssxref("object-position")}} and {{cssxref("object-fit")}}
- [CSS 属性的兼容性](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
