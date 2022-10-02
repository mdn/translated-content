---
title: <input type="hidden">
slug: Web/HTML/Element/Input/hidden
---

{{HTMLRef}}

**`"hidden"`** 类型的 `{{HTMLElement("input")}}` 元素允许 Web 开发者存放一些用户不可见、不可改的数据，在用户提交表单时，这些数据会一并发送出。比如，正被请求或编辑的内容的 ID，或是一个唯一的安全令牌。这些隐藏的 [`<input>`](/zh-CN/docs/Web/HTML/Element/input)元素在渲染完成的页面中完全不可见，而且没有方法可以使它重新变为可见。

> **备注：** 本警告框下面的代码下，就有一个 `<input type="hidden">` 的 live example 可交互示例——如果它正常运作的话，你应当什么也看不到！

```html
<input id="prodId" name="prodId" type="hidden" value="xm234jq">
```

{{ EmbedLiveSample('Basic_example', 600, 40) }}

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#属性值">属性值</a></strong></td>
   <td><code>{{domxref("DOMString")}}</code>代表您要传递回服务器的隐藏数据的值</td>
  </tr>
  <tr>
   <td><strong>事件</strong></td>
   <td>无</td>
  </tr>
  <tr>
   <td><strong>支持的公共属性</strong></td>
   <td><code>{{htmlattrxref("autocomplete", "input")}}</code></td>
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

> **备注：** `{{HTMLElement("input")}}`和 [`change`](/zh-CN/docs/Web/Events/change) 事件不适用于此输入类型。隐藏的输入无法获得焦点，即使使用 JavaScript 例如 (e.g. `hiddenInput.focus()`)

## 属性值

`{{HTMLElement("input")}}`元素的`{{htmlattrxref("value", "input")}}`属性有`{{domxref("DOMString")}}`，其中包含您想提交到服务器的隐藏数据尽管您可以通过浏览器开发人员工具编辑该值，但明确的是，用户不能通过用户界面对其编辑或看到。

> **警告：** 尽管该值未在页面内容中显示给用户，但可以使用任何浏览器的开发人员工具或“查看源代码”功能来查看并进行编辑。请不要依赖 `hidden` 输入作为安全表单。

## 额外属性

除所有 `{{HTMLElement("input")}}`元素所共有的属性之外，带有 `hidden` 属性的 `{{HTMLElement("input")}}`提供以下额外属性：

| 属性                 | 描述                                                                                                                                                                                                        |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`name`](#attr-name) | 与所有输入类型一样，这可以是提交表单时反馈给服务器的 `{{HTMLElement("input")}}` 的名称；使用特殊属性值 `_charset_` 则会使当前隐藏 `{{HTMLElement("input")}}` 的值被反馈为表单内容的字符编码 |

### {{htmlattrdef("name")}}

这实际上是常见属性之一，但它对于隐藏的 `{{HTMLElement("input")}}` 具有一个特殊含义。一般来说，`{{htmlattrxref("name", "input")}}` 的属性在隐藏 `{{HTMLElement("input")}}` 上的作用和任何其他 `{{HTMLElement("input")}}` 上的一样；但是，在提交表单时， `name` 属性被设置为 `_charset_` 的隐藏 `{{HTMLElement("input")}}`，其值会被自动设置为被提交表单的字符编码。

## 使用隐藏 `<input>`

如上所述，隐藏的 `{{HTMLElement("input")}}` 可以用于任何有需要提交给服务器的、用户无法查看或编辑的数据的地方。让我们看一些说明其用法的例子吧。

### 跟踪被编辑的内容

隐藏输入的最常见用途之一是当被编辑的表单提交时，保持跟踪数据库数据的更新。
典型的工作流程如下所示：

1. 用户决定编辑他们可以控制的某些内容，例如博客文章或产品条目。他们可以通过按编辑按钮开始。
2. 要被编辑的内容从数据库中提取并加载到 HTML 表单中，以允许用户进行更改。
3. 编辑后，用户提交表单，并将更新后的被数据发送回服务器以在数据库中进行更新。

在这里的步骤 2 思路中，要被更新的 ID 记录保留在隐藏的输入中。在步骤 3 中提交表单后，该 ID 随记录内容自动发送回服务器。该 ID 使站点的服务器端组件确切知道哪些记录需要被提交的数据更新的。

您可以在下面的 [例子](/zh-CN/docs/Web/HTML/Element/input/hidden#例子) 部分中看到完整的[示例](/zh-CN/docs/Web/HTML/Element/input/hidden#例子)。

### 改善网站安全性

隐藏输入表单还用于存储和提交安全令牌或机密信息，以提高网站的安全性。基本思路是，如果用户填写敏感表格，例如在其银行网站上将某笔款项转入另一个帐户的表格，他们将被提供的密钥和证明他们就是他们所说的真实身份，并且他们使用正确的表单来提交转移请求。

这将阻止恶意用户创建伪造的表单，伪装成银行，然后通过电子邮件将表单发送给毫无戒备心的用户，以诱骗他们将钱转入错误的位置。这种攻击称为[跨站点请求伪造（CSRF）](</zh-CN/docs/Learn/Server-side/First_steps/Website_security#Cross-Site_Request_Forgery_(CSRF)>)；几乎任何信誉良好的服务器端框架都使用隐藏机密来防止此类攻击。

> **备注：** 如前所述，将密钥放置在隐藏的输入中并不能使其固有安全性。密钥的组成和编码已经可以做到这一点。隐藏输入的值是保持它与数据关联性，并在将表单发送到服务器时自动将其包含在内。您需要使用精心设计的密钥来真正保护您的网站。

## 验证

隐藏的 `{{HTMLElement("input")}}` 不参与约束验证；他们没有可受到约束的属性值。

## 例子

让我们看一下如何使用隐藏输入保存正在被编辑的记录的 ID，实现我们先前描述的编辑表单的简单版本（请参阅 `跟踪被编辑的内容`）。

编辑表单的 HTML 可能看起来像这样：

```html
<form>
  <div>
    <label for="title">Post title:</label>
    <input type="text" id="title" name="title" value="My excellent blog post">
  </div>
  <div>
    <label for="content">Post content:</label>
    <textarea id="content" name="content" cols="60" rows="5">
This is the content of my excellent blog post. I hope you enjoy it!
    </textarea>
  </div>
  <div>
    <button type="submit">Update post</button>
  </div>
  <input type="hidden" id="postId" name="postId" value="34657">
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

input, textarea {
  flex: 7;
  font-family: sans-serif;
  font-size: 1.1rem;
  padding: 5px;
}

textarea {
  height: 60px;
}
```

在将表单发送给用户的浏览器之前，服务器会将 ID `"postID"`的隐藏输入的值设置为其数据库中发送的 ID，并在返回表单时使用该信息来知道要向哪个数据库记录更新改变后的信息。内容中无需脚本即可处理。

输出看起来像这样：

{{ EmbedLiveSample('Examples', '100%', 200) }}

> **备注：** 您还可以在 GitHub 上找到示例（请参见[源代码](https://github.com/mdn/learning-area/blob/master/html/forms/hidden-input-example/index.html)，并可以[实时运行](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)）。

提交后，发送到服务器的表单数据将如下所示：

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

即使根本看不到隐藏的 `{{HTMLElement("input")}}`，它所包含的数据仍然会被提交给服务器。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML forms guide](/zh-CN/docs/Learn/HTML/Forms)
- {{HTMLElement("input")}} and the {{domxref("HTMLInputElement")}} interface it's based upon
