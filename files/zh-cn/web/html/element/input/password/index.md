---
title: <input type="password">
slug: Web/HTML/Element/Input/password
---

{{HTMLRef}}

`<input>` 元素 里有一种叫做 **`"password"`** 的值，给我们一个方法让用户更加安全的输入密码。这个元素是作为一行纯文本编辑器控件呈现的，其中文本被遮蔽以致于无法读取，通常通过用诸如星号（“\*”）或点（“•”）等符号替换每个字符来实现。）这个符号会根据用户的浏览器和操作系统来具体显示哪个。

{{EmbedInteractiveExample("pages/tabbed/input-password.html", "tabbed-standard")}}

入门过程的具体细节可能因浏览器而异; 例如，移动设备经常在隐藏它之前显示键入的字符一段时间，以允许用户确定他们按下了他们意图按下的键; 考虑到按键的小尺寸以及可以轻松按下错误的按键（特别是在虚拟键盘上），这是有帮助的。

> **备注：** 任何涉及密码等敏感信息的表格（例如登录表格）都应通过 HTTPS 提供; 许多浏览器现在都实现了警告不安全登录表单的机制; 请参阅[Insecure passwords](/zh-CN/docs/Web/Security/Insecure_passwords)。

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#值">值</a></strong></td>
   <td>A {{domxref("DOMString")}} representing a password, or empty</td>
  </tr>
  <tr>
   <td><strong>事件</strong></td>
   <td>{{event("change")}} and {{event("input")}}</td>
  </tr>
  <tr>
   <td><strong>Supported Common Attributes</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}}, {{htmlattrxref("inputmode", "input")}}, {{htmlattrxref("maxlength", "input")}}, {{htmlattrxref("minlength", "input")}}, {{htmlattrxref("pattern", "input")}}, {{htmlattrxref("placeholder", "input")}}, {{htmlattrxref("readonly", "input")}}, {{htmlattrxref("required", "input")}}, and {{htmlattrxref("size", "input")}}</td>
  </tr>
  <tr>
   <td><strong>IDL attributes</strong></td>
   <td><code>selectionStart</code>, <code>selectionEnd</code>, <code>selectionDirection</code>, and <code>value</code></td>
  </tr>
  <tr>
   <td><strong>Methods</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}, {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}}, and {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}</td>
  </tr>
 </tbody>
</table>

## 值

The {{htmlattrxref("value", "input")}} attribute contains a {{domxref("DOMString")}} whose value is the current contents of the text editing control being used to enter the password. 如果用户还没有输入任何内容，则此值为空字符串（“”）。If the {{htmlattrxref("required")}} property is specified, then the password edit box must contain a value other than an empty string to be valid.

If the {{htmlattrxref("pattern", "input")}} attribute is specified, the content of a `"password"` control is only considered valid if the value passes validation; see [Validation](#验证) for more information.

> **备注：** The line feed (U+000A) and carriage return (U+000D) characters are not permitted in a `"password"` value. When setting the value of a password control, line feed and carriage return characters are stripped out of the value.

## 使用密码输入框

密码输入框通常与其他文本输入框一样工作; 主要区别在于内容模糊，以防止用户附近的人阅读密码。

### 一个简单的密码输入框

在这里，我们看到了最基本的密码输入，并使用了 {{HTMLElement("label")}} 元素。

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password">
```

{{EmbedLiveSample("A_simple_password_input", 600, 40)}}

### 允许自动补全

为了让用户的密码管理器自动输入密码，specify the {{htmlattrxref("autocomplete", "input")}} attribute. For passwords, this should typically be one of the following:

- `"on"`
  - : 允许浏览器或密码管理器自动填写密码字段。这不像使用“current-password”或“new-password”那样提供信息。
- `"off"`
  - : 不让浏览器或密码管理器自动填写密码字段。请注意，某些软件会忽略此值，因为它通常会损害用户维护安全密码操作的能力。
- `"current-password"`
  - : 允许浏览器或密码管理器输入网站的当前密码。这提供了比“on”更多的信息，因为它允许浏览器或密码管理器自动在该字段中输入当前已知的网站密码，但不建议新密码。
- `"new-password"`
  - : 允许浏览器或密码管理器自动输入网站的新密码; 这用于“更改密码”和“新用户”表单，在该字段询问用户新密码。新密码可能以多种方式生成，具体取决于使用的密码管理器。它可能只是填写新的建议密码，或者它可能会向用户显示创建密码的界面。

```html
<label for="userPassword">Password:</label>
<input id="userPassword" type="password" autocomplete="current-password">
```

{{EmbedLiveSample("Autocomplete_sample1", 600, 40)}}

### 让密码必须输入

To tell the user's browser that the password field must have a valid value before the form can be submitted, simply specify the Boolean {{htmlattrxref("required", "input")}} attribute.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" required>
<input type="submit" value="Submit">
```

{{EmbedLiveSample("Making_the_password_mandatory", 600, 40)}}

### 指定输入模式

If your recommended (or required) password syntax rules would benefit from an alternate text entry interface than the standard keyboard, you can use the {{htmlattrxref("inputmode", "input")}} attribute to request a specific one. 最明显的用例是密码必须是数字（例如 PIN）。例如，带有虚拟键盘的移动设备可能会选择切换到数字键盘布局而不是全键盘，以便更轻松地输入密码。

```html
<label for="pin">PIN: </label>
<input id="pin" type="password" inputmode="numeric">
```

{{EmbedLiveSample("Specifying_an_input_mode", 600, 40)}}

### 设置长度要求

As usual, you can use the {{htmlattrxref("minlength", "input")}} and {{htmlattrxref("maxlength", "input")}} attributes to establish minimum and maximum acceptable lengths for the password.此示例通过指定用户的 PIN 必须至少为 4 且不超过 8 位来扩展前一个示例。The {{htmlattrxref("size", "input")}} attribute is used to ensure that the password entry control is eight characters wide.

```html
<label for="pin">PIN:</label>
<input id="pin" type="password" inputmode="numeric" minlength="4"
       maxlength="8" size="8">
```

{{EmbedLiveSample("Setting_length_requirements", 600, 40)}}

### 选中字符

As with other textual entry controls, you can use the {{domxref("HTMLInputElement.select", "select()")}} method to select all the text in the password field.

#### HTML

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" size="12">
<button id="selectAll">Select All</button>
```

#### JavaScript

```js
document.getElementById("selectAll").onclick = function() {
  document.getElementById("userPassword").select();
}
```

#### 结果：

{{EmbedLiveSample("Selecting_text", 600, 40)}}

You can also use {{domxref("HTMLInputElement.selectionStart", "selectionStart")}} and {{domxref("HTMLInputElement.selectionEnd", "selectionEnd")}} to get (or set) what range of characters in the control are currently selected, and {{domxref("HTMLInputElement.selectionDirection", "selectionDirection")}} to know which direction selection occurred in (or will be extended in, depending on your platform; see its documentation for an explanation). However, given that the text is obscured, the usefulness of these is somewhat limited.

## 验证

If your application has character set restrictions or any other requirement for the actual content of the entered password, you can use the {{htmlattrxref("pattern", "input")}} attribute to establish a regular expression to be used to automatically ensure that your passwords meet those requirements.

在这个例子中，只有包含至少四个和不超过八个十六进制数字的值才是有效的。

```html
<label for="hexId">Hex ID: </label>
<input id="hexId" type="password" pattern="[0-9a-fA-F]{4,8}"
       title="Enter an ID consisting of 4-8 hexadecimal digits">
```

{{EmbedLiveSample("Validation_sample1", 600, 40)}}

- {{htmlattrdef("disabled")}}
  - : 此布尔属性指示密码字段不可用于交互。此外，禁用的字段值不会与表单一起提交。

## 实例

### 申请社会安全号码

此示例仅接受与有效的美国社会安全号码格式相匹配的输入。这些用于美国税务和识别目的的数字的格式为“123-45-6789”。还存在针对每个组中允许的值的各种规则。

#### HTML 版本的实例

```html
<label for="ssn">SSN:</label>
<input type="password" id="ssn" inputmode="number" minlength="9" maxlength="12"
    pattern="(?!000)([0-6]\d{2}|7([0-6]\d|7[012]))([ -])?(?!00)\d\d\3(?!0000)\d{4}"
    required autocomplete="off">
<br>
<label for="ssn">Value:</label>
<span id="current"></span>
```

This uses a {{htmlattrxref("pattern", "input")}} which limits the entered value to strings representing legal Socal Security numbers. 很显然，这个正则表达式并不能保证有效的 SSN（因为我们没有进入社会保障局的数据库），但它确实保证数量可能是一个号; 它通常会避免无效的值。此外，它允许三组数字由空格，短划线（“ - ”）分隔，或者什么也不分。

> **备注：** Isn't that regular expression just _beautiful_?

The {{htmlattrxref("inputmode", "input")}} is set to `"number"` to encourage devices with virtual keyboards to switch to a numeric keypad layout for easier entry. The {{htmlattrxref("minlength", "input")}} and {{htmlattrxref("maxlength", "input")}} attributes are set to 9 and 12, respectively, to require that the value be at least nine and no more than 12 characters (the former without separating characters between the groups of digits and the latter with them). The {{htmlattrxref("required", "input")}} attribute is used to indicate that this control must have a value. Finally, {{htmlattrxref("autocomplete", "input")}} is set to `"off"` to avoid password managers trying to set its value, since this isn't a password at all.

#### JavaScript 版本的实例

这只是一些简单的代码，用于在屏幕上显示输入的 SSN，以便您可以看到它。显然这会破坏密码字段的目的，但它有助于试验模式。

```js
var ssn = document.getElementById("ssn");
var current = document.getElementById("current");

ssn.oninput = function(event) {
  current.innerHTML = ssn.value;
}
```

#### 结果：

{{EmbedLiveSample("Requesting_a_Social_Security_number", 600, 60)}}

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}
