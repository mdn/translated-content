---
title: <input type="hidden">
slug: Web/HTML/Element/input/hidden
---

{{HTMLSidebar}}

**`hidden`** 类型的 {{HTMLElement("input")}} 元素允许 Web 开发者包含用户不可见、不可改的数据，在用户提交表单时，这些数据会一并发送出。比如，正被请求或编辑的内容的 ID，或是一个唯一的安全令牌。这些隐藏的 input 元素在渲染完成的页面中完全不可见，而且没有方法可以使它重新变为可见。

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#值">值</a></strong></td>
   <td>代表要传递回服务器的隐藏数据的字符串值</td>
  </tr>
  <tr>
   <td><strong>事件</strong></td>
   <td>无</td>
  </tr>
  <tr>
   <td><strong>支持的公共属性</strong></td>
   <td><a href="/zh-CN/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a></td>
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

> **备注：** {{domxref("HTMLElement/input_event", "input")}} 和 {{domxref("HTMLElement/change_event", "change")}} 事件不适用于此输入类型。即使使用 JavaScript（如 `hiddenInput.focus()`），隐藏的 input 也无法获得焦点。

## 值

{{HTMLElement("input")}} 元素的 [`value`](/zh-CN/docs/Web/HTML/Element/input#value) 属性包含要提交到服务器的隐藏数据。尽管可以通过浏览器开发者工具编辑该值，但明确要求用户不能通过用户界面看到或编辑这个值。

> **警告：** 尽管该值并未作为页面内容中显示给用户，但仍然可以使用任何浏览器的开发者工具或“查看源代码”功能来查看并进行编辑。请不要将表单的安全性依赖于使用 `hidden` 输入上。

## 额外属性

除所有 `{{HTMLElement("input")}}` 元素所共有的属性之外，带有 `hidden` 属性的 input 还提供以下额外属性：

### name

这实际上是常见属性之一，但它对于隐藏的 `{{HTMLElement("input")}}` 具有一个特殊含义。一般来说，[`name`](/zh-CN/docs/Web/HTML/Element/input#name) 属性在隐藏的 input 输入中与在非隐藏的 input 输入的表现是一样的；但是，在提交表单时，会自动包含一个 `name` 属性被设置为 `_charset_` 的隐藏 `input`，其值会被自动设置为被提交表单的字符编码。

## 使用隐藏 input

如上所述，隐藏的 `input` 可以用于任何有需要提交给服务器的，且要求用户无法查看或编辑的数据的地方。让我们看一些说明其用法的例子吧。

### 跟踪编辑的内容

隐藏输入的最常见用途之一是当被编辑的表单提交时，保持跟踪数据库数据的更新。典型的工作流程如下所示：

1. 用户决定编辑他们可以控制的某些内容，例如博客文章或产品条目。他们可以通过按编辑按钮开始。
2. 要被编辑的内容从数据库中提取并加载到 HTML 表单中，以允许用户进行更改。
3. 编辑后，用户提交表单，并将更新后的被数据发送回服务器以在数据库中进行更新。

在这里的步骤 2 思路中，要被更新的 ID 记录保留在隐藏的输入中。在步骤 3 中提交表单后，该 ID 随记录内容自动发送回服务器。该 ID 使站点的服务器端组件确切知道哪些记录需要被提交的数据更新的。

你可以在下面的[示例](#示例)部分中看到完整的示例。

### 提升网站安全性

隐藏输入表单还用于存储和提交安全令牌或机密信息，以提高网站的安全性。基本思路是，如果用户正在填写敏感的表单，例如在银行网站上将某笔款项转入另一个账户的表格，所提供的机密信息将证明他们的身份是真实的，并且使用了正确的表单来提交转账请求。

这将阻止恶意用户创建伪造的表单，伪装成银行，然后通过电子邮件将表单发送给毫无戒备心的用户，以诱骗他们将钱转入错误的位置。这种攻击称为[跨站点请求伪造（CSRF）](/zh-CN/docs/Learn/Server-side/First_steps/Website_security#跨站请求伪造_csrf)；几乎任何知名的服务器端框架都使用隐藏机密来防止此类攻击。

> **备注：** 如前所述，将密钥放置在隐藏的输入中并不能使其固有安全性。密钥的组成和编码已经可以做到这一点。隐藏输入的值是保持它与数据关联性，并在将表单发送到服务器时自动将其包含在内。你需要使用精心设计的密钥来真正保护您的网站。

## 验证

隐藏的 input 不参与约束验证；它们没有可受到约束的属性值。

## 示例

让我们看一下如何使用隐藏输入保存正在被编辑的记录的 ID，实现我们先前描述的编辑表单的简单版本（请参阅[跟踪编辑的内容](#跟踪编辑的内容)）。

编辑表单的 HTML 可能看起来像这样：

```html
<form>
  <div>
    <label for="title">文章标题：</label>
    <input type="text" id="title" name="title" value="My excellent blog post" />
  </div>
  <div>
    <label for="content">文章内容：</label>
    <textarea id="content" name="content" cols="60" rows="5">
This is the content of my excellent blog post. I hope you enjoy it!
    </textarea>
  </div>
  <div>
    <button type="submit">更新文章</button>
  </div>
  <input type="hidden" id="postId" name="postId" value="34657" />
</form>
```

我们还添加一些简单的 CSS：

```css
html {
  font-family: sans-serif;
}

form {
  width: 500px;
}

div {
  display: flex;
  margin-bottom: 10px;
}

label {
  flex: 2;
  line-height: 2;
  text-align: right;
  padding-right: 20px;
}

input,
textarea {
  flex: 7;
  font-family: sans-serif;
  font-size: 1.1rem;
  padding: 5px;
}

textarea {
  height: 60px;
}
```

在将表单发送给用户的浏览器之前，服务器会将 ID 为 `postID` 的隐藏 input 的值设置为其数据库中发送的 ID，并在返回表单时使用该信息来知道要向哪个数据库记录更新改变后的信息。内容中无需脚本即可处理。

输出看起来像这样：

{{ EmbedLiveSample('示例', '100%', 200) }}

> **备注：** 您还可以在 GitHub 上找到示例（请参见[源代码](https://github.com/mdn/learning-area/blob/main/html/forms/hidden-input-example/index.html)，并可以[实时运行](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)）。

提交后，发送到服务器的表单数据将如下所示：

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

即使根本看不到隐藏的 {{HTMLElement("input")}}，它所包含的数据仍然会被提交给服务器。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 表单指南](/zh-CN/docs/Learn/Forms)
- 通用 {{HTMLElement("input")}} 元素和用于操作该元素的 {{domxref("HTMLInputElement")}} 接口
