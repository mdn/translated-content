---
title: <input type="email">
slug: Web/HTML/Element/Input/email
---

{{HTMLRef}}

带有 **`"email"`** (电子邮箱) 类型标记的输入框元素 ({{HTMLElement("input")}}) 能够让用户输入或编辑一个电子邮箱地址，此外，如果指定了{{htmlattrxref("multiple", "input")}}属性，用户还可以输入多个电子邮箱地址。在表单提交前，输入框会自动验证输入值是否是一个或多个合法的电子邮箱地址 (非空值且符合电子邮箱地址格式). CSS 伪标签 {{cssxref(":valid")}} 和 {{cssxref(":invalid")}} 能够在校验后自动应用。

> **备注：** 不支持“电子邮件”类型的浏览器可以回退为标准的“文本”输入。

{{EmbedInteractiveExample("pages/tabbed/input-email.html", "tabbed-standard")}}

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#值">值</a></strong></td>
   <td>一个邮箱地址格式的{{domxref("DOMString")}} 或空值</td>
  </tr>
  <tr>
   <td><strong>事件</strong></td>
   <td>{{event("change")}} 和 {{event("input")}}</td>
  </tr>
  <tr>
   <td>
    <p><strong>支持的属性</strong></p>
    <p><strong>通用的属性</strong></p>
   </td>
   <td>{{htmlattrxref("autocomplete", "input")}}, {{htmlattrxref("list", "input")}}, {{htmlattrxref("maxlength", "input")}}, {{htmlattrxref("minlength", "input")}}, {{htmlattrxref("multiple", "input")}}, {{htmlattrxref("pattern", "input")}}, {{htmlattrxref("placeholder", "input")}}, {{htmlattrxref("readonly", "input")}}, and {{htmlattrxref("size", "input")}}</td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td><code>list</code> and <code>value</code></td>
  </tr>
  <tr>
   <td><strong>方法</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}</td>
  </tr>
 </tbody>
</table>

## 值

{{HTMLElement("input")}} 元素的 {{htmlattrxref("value", "input")}} 属性包含一个会自动验证是否符合电子邮件语法的 {{domxref("DOMString")}}。具体来说，此处有三个格式可以通过验证：

1. 一个空字符串（“”），表示用户未输入值或该值已被删除。
2. 单个符合格式的电子邮件地址。并不代表该邮件地址存在，而是说它至少在格式上是正确的，简单地讲就是 `"username@domain"` 或者 `"username@domain.tld"`，当然并不局限于此。关于匹配电子邮件地址验证算法的 {{Glossary("regular expression")}}，参见 [Validation](#validation)。
3. 当且仅当明确 {{htmlattrxref("multiple", "input")}} 属性时，值可以是一个列表，该列表包含一串符合格式的电子邮件地址，且每个地址之间用逗号分隔。列表中，位于每个地址之前和之后的任何空白字符都会被移除。

关于如何验证电子邮件地址以保证其格式正确的细节，参见 [Validation](#validation)。

## Using email inputs

电子邮件地址是网络上最频繁输入的文本数据表格; 登录网站，请求信息，允许订单确认，网络邮件等时使用它们。因此，“电子邮件”输入类型可以使您作为 Web 开发人员的工作变得更加容易，因为它可以在构建电子邮件地址的用户界面和逻辑时帮助简化您的工作。当您使用正确的类型值“email”创建电子邮件输入时，您将自动验证输入的文本是否至少以正确的形式可能是合法的电子邮件地址。这有助于避免用户输错地址或提供无效地址的情况。

然而，重要的是要注意，这不足以确保指定的文本是实际存在的电子邮件地址，对应于站点的用户，或者以任何其他方式可接受。它只是确保将字段的值正确格式化为电子邮件地址。

> **备注：** 记住用户可以在幕后修改 HTML 也很重要，因此您的站点不得出于任何安全目的使用此验证。您必须验证所提供文本可能具有任何安全隐患的任何事务的服务器端的电子邮件地址。

### A simple email input

目前，所有实现此元素的浏览器都将其实现为具有基本验证功能的标准文本输入字段。但是，该规范允许浏览器对此进行纬度调整。例如，该元素可以与用户设备的内置地址簿集成，以允许从该列表中挑选电子邮件地址。在最基本的形式中，电子邮件输入可以像这样实现：

```html
<input id="emailAddress" type="email">
```

{{ EmbedLiveSample('A_simple_email_input', 600, 40) }}

Notice that it's considered valid when empty and when a single validly-formatted email address is entered, but is otherwise not considered valid. By adding the {{htmlattrxref("required", "input")}} attribute, only validly-formed email addresses are allowed; the input is no longer considered valid when empty.

### Allowing multiple email addresses

By adding the {{htmlattrxref("multiple", "input")}} Boolean attribute, the input can be configured to accept multiple email addresses.

```html
<input id="emailAddress" type="email" multiple>
```

{{ EmbedLiveSample('Allowing_multiple_email_addresses', 600, 40) }}

The input is now considered valid when a single email address is entered, or when any number of email addresses separated by commas and, optionally, some number of whitespace characters are present.

> **备注：** When `"multiple"` is used, the value _is_ allowed to be empty.

Some examples of valid strings when `"multiple"` is specified:

- `""`
- `"me@example"`
- `"me@example.org"`
- `"me@example.org,you@example.org"`
- `"me@example.org, you@example.org"`
- `"me@example.org,you@example.org, us@example.org"`

Some examples of invalid strings:

- `","`
- `"me"`
- `"me@example.org you@example.org"`

### Placeholders

Sometimes it's helpful to offer an in-context hint as to what form the input data should take. This can be especially important if the page design doesn't offer descriptive labels for each {{HTMLElement("input")}}. This is where **placeholders** come in. A placeholder is a value that demonstrates the form the `value` should take by presenting an example of a valid value, which is displayed inside the edit box when the element's `value` is `""`. Once data is entered into the box, the placeholder disappears; if the box is emptied, the placeholder reappears.

Here, we have an `"email"` input with the placeholder `"sophie@example.com"`. Note how the placeholder disappears and reappears as you manipulate the contents of the edit field.

```html
<input type="email" placeholder="sophie@example.com">
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Controlling the input size

You can control not only the physical length of the input box, but also the minimum and maximum lengths allowed for the input text itself.

#### Physical input element size

The physical size of the input box can be controlled using the {{htmlattrxref("size", "input")}} attribute. With it, you can specify the number of characters the input box can display at a time. In this example the email edit box is 15 characters wide:

```html
<input type="email" size="15">
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Element value length

The `size` is separate from the length limitation on the entered email address itself so that you can have fields fit in a small space while still allowing longer email address strings to be entered. You can specify a minimum length, in characters, for the entered email address using the {{htmlattrxref("minlength", "input")}} attribute; similarly, use {{htmlattrxref("maxlength", "input")}} to set the maximum length of the entered email address.

The example below creates a 32 character-wide email address entry box, requiring that the contents be no shorter than 3 characters and no longer than 64 characters.

```html
<input type="email" size="32" minlength="3" maxlength="64">
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

### Providing default options

As always, you can provide a default value for an `"email"` input box by setting its {{htmlattrxref("value", "input")}} attribute:

```html
<input type="email" value="default@example.com">
```

{{EmbedLiveSample("Default_value", 600, 40)}}

#### Offering suggested values

Taking it a step farther, you can provide a list of default options from which the user can select by specifying the {{htmlattrxref("list", "input")}} attribute. This doesn't limit the user to those options, but does allow them to select commonly-used email addresses more quickly. This also offers hints to {{htmlattrxref("autocomplete", "input")}}. The `list` attribute specifies the ID of a {{HTMLElement("datalist")}}, which in turn contains one {{HTMLElement("option")}} element per suggested value; each `option`'s `value` is the corresponding suggested value for the email entry box.

```html
<input type="email" size="40" list="defaultEmails">

<datalist id="defaultEmails">
  <option value="jbond007@mi6.defence.gov.uk">
  <option value="jbourne@unknown.net">
  <option value="nfury@shield.org">
  <option value="tony@starkindustries.com">
  <option value="hulk@grrrrrrrr.arg">
</datalist>
```

{{EmbedLiveSample("Offering_suggested_values", 600, 40)}}

With the {{HTMLElement("datalist")}} element and its {{HTMLElement("option")}}s in place, the browser will offer the specified values as potential values for the email address; this is typically presented as a popup or drop-down menu containing the suggestions. While the specific user experience may vary from one browser to another, typically clicking in the edit box presents a drop-down of the suggested email addresses. Then, as the user types, the list is filtered to show only matching values. Each typed character narrows down the list until the user makes a selection or types a custom value.

![Animation: Using keyboard entry to filter the list of suggested email addresses](https://mdn.mozillademos.org/files/14831/html-input-email1.gif)

## Validation

There are two levels of content validation available for `"email"` inputs. First, there's the standard level of validation offered to all {{HTMLElement("input")}}s, which automatically ensures that the contents meet the requirements to be a valid email address. But there's also the option to add additional filtering to ensure that your own specialized needs are met, if you have any.

> **警告：** HTML 表单验证不能替代确保输入的数据格式正确的脚本。对于某些人来说，调整 HTML 非常容易，因为它允许他们绕过验证，或者完全删除它。某人也可以完全绕过您的 HTML 并将数据直接提交给您的服务器。如果您的服务器端代码无法验证它收到的数据，则当数据格式不正确（或数据太大，类型错误等等）输入数据库时，灾难可能会发生。

### Basic validation

支持“电子邮件”输入类型的浏览器会自动提供验证，以确保只有符合 Internet 电子邮件地址标准格式的文本才会输入到输入框中。实现规范的浏览器应使用与以下正则表达式等效的算法：

```js
/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
  [a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
```

To learn more about how form validation works and how to take advantage of the {{cssxref(":valid")}} and {{cssxref(":invalid")}} CSS properties to style the input based on whether or not the current value is valid, see [Form data validation](/zh-CN/docs/Learn/HTML/Forms/Form_validation).

> **备注：** There are known specification issues related to international domain names and the validation of email addresses in HTML. See [W3C bug 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489) for details.

### Pattern validation

If you need the entered email address to be restricted further than just "any string that looks like an email address," you can use the {{htmlattrxref("pattern", "input")}} attribute to specify a [regular expression](/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions) the value must match for it to be valid. If the {{htmlattrxref("multiple", "input")}} attribute is specified, each individual item in the comma-delineated list of values must match the {{jsxref("regexp")}}.

For example, let's say you're building a page for employees of Best Startup Ever, Inc. which will let them contact their IT department for help. In our simplified form, the user needs to enter their email address and a message describing the problem they need help with. We want to ensure that not only does the user provide a valid email address, but for security purposes, we require that the address be an internal corporate email address.

Since inputs of type `"email"` validate against both the standard email address validation _and_ the specified {{htmlattrxref("pattern", "input")}}, you can implement this easily. Let's see how:

```css hidden
body {
  font: 16px sans-serif;
}

.emailBox {
  padding-bottom: 20px;
}

.messageBox {
  padding-bottom: 20px;
}

label {
  line-height: 22px;
}

label::after {
  content: ":";
}
```

```html
<form>
 <div class="emailBox">
   <label for="emailAddress">Your email address</label><br>
   <input id="emailAddress" type="email" size="64" maxLength="64" required
          placeholder="username@beststartupever.com" pattern=".+@beststartupever.com"
          title="Please provide only a Best Startup Ever corporate email address">
 </div>

 <div class="messageBox">
   <label for="message">Request</label><br>
   <textarea id="message" cols="80" rows="8" required
             placeholder="My shoes are too tight, and I have forgotten how to dance."></textarea>
 </div>
  <input type="submit" value="Send Request">
</form>
```

{{EmbedLiveSample("Pattern_validation", 700, 275)}}

Our {{HTMLElement("form")}} contains one {{HTMLElement("input")}} of type `"email"` for the user's email address, a {{HTMLElement("textarea")}} to enter their message for IT into, and an `<input>` of type [`"submit"`](/zh-CN/docs/Web/HTML/Element/input/submit), which creates a button to submit the form. Each text entry box has a {{HTMLElement("label")}} associated with it to let the user know what's expected of them.

Let's take a closer look at the email address entry box. Its {{htmlattrxref("size", "input")}} and {{htmlattrxref("maxlength", "input")}} attributes are both set to 64 in order to show room for 64 characters worth of email address, and to limit the number of characters actually entered to a maximum of 64. The {{htmlattrxref("required", "input")}} attribute is specified, making it mandatory that a valid email address be provided.

An appropriate {{htmlattrxref("placeholder", "input")}} is provided—`"username@beststartupever.com"`—to demonstrate what constitutes a valid entry. This string demonstrates both that an email address should be entered, and suggests that it should be a corporate beststartupever.com account. This is in addition to the fact that using type `"email"` will validate the text to ensure that it's formatted like an email address. If the text in the input box isn't an email address, you'll get an error message that looks something like this:

![](enter-valid-email-address.png)

If we left things at that, we would at least be validating on legitimate email addresses. But we want to go one step farther: we want to make sure that the email address is in fact in the form "_username_\@beststartupever.com". This is where we'll use {{htmlattrxref("pattern", "input")}}. We set `pattern` to `".+@beststartupever.com"`. This simple regular expression requests a string that consists of at least one character of any kind, then an "@" followed by the domain name "beststartupever.com".

Note that this is not even close to an adequate filter for valid email addresses; it would allow things such as " @beststartupever.com" (note the leading space) or "@@beststartupever.com", neither of which is valid. However, the browser runs both the standard email address filter _and_ our custom pattern against the specified text. As a result, we wind up with a validation which says "make sure this is a valid email address, and if it is, make sure it's also a beststartupever.com address."

It's advisable to use the {{htmlattrxref("title")}} attribute along with `pattern`. If you do, the `title` _must_ describe the pattern. That is, it should explain what format the data should take on, rather than any other information. That's because the `title` may be displayed or spoken as part of a validation error message. For example, the browser might present the message "The entered text doesn't match the required pattern." followed by your specified `title`. If your `title` is something like "Email address", the result would be the message "The entered text doesn't match the required pattern. Email address", which isn't very good.

That's why, instead, we specify the string "Please provide only a Best Startup Ever corporate email address" By doing that, the resulting full error message might be something like "The entered text doesn't match the required pattern. Please provide only a Best Startup Ever corporate email address."

![](email-pattern-match-bad.png)

> **备注：** If you run into trouble while writing your validation regular expressions and they're not working properly, check your browser's console; there may be helpful error messages there to aid you in solving the problem.

## Examples

Here we have an email input with the ID `"emailAddress"` which is allowed to be up to a maximum of 256 characters long. The input box itself is physically 64 characters wide, and displays the text `"user@example.gov"` as a placeholder anytime the field is empty. In addition, by using the {{htmlattrxref("multiple", "input")}} attribute, the box is configured to allow the user to enter zero or more email addresses, separated by commas, as described in [Allowing multiple email addresses](#allowing_multiple_email_addresses). As a final touch, the {{htmlattrxref("list", "input")}} attribute contains the ID of a {{HTMLElement("datalist")}} whose {{HTMLElement("option")}}s specify a set of suggested values the user can choose from.

As an added touch, the {{HTMLElement("label")}} element is used to establish a label for the email entry box, with its {{htmlattrxref("for", "label")}} attribute referencing the `"emailAddress"` ID of the {{HTMLElement("input")}} element. By associating the two elements in this way, clicking on the label will focus the input element.

```html
<label for="emailAddress">Email</label><br/>
<input id="emailAddress" type="email" placeholder="user@example.gov"
       list="defaultEmails" size="64" maxlength="256" multiple>

<datalist id="defaultEmails">
  <option value="jbond007@mi6.defence.gov.uk">
  <option value="jbourne@unknown.net">
  <option value="nfury@shield.org">
  <option value="tony@starkindustries.com">
  <option value="hulk@grrrrrrrr.arg">
</datalist>
```

{{EmbedLiveSample('Examples', 600, 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML forms guide](/zh-CN/docs/Learn/HTML/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/zh-CN/docs/Web/HTML/Element/input/tel)
