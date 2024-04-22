---
title: 如何关闭表单自动填充
slug: Web/Security/Securing_your_site/Turning_off_form_autocompletion
---

本文介绍了网站如何禁用表单字段的自动完成功能。

默认情况下，浏览器会记录用户网页上提交的 {{HTMLElement("input")}} 框的信息。这使得浏览器能够提供自动补全（在用户开始输入的时候给用户提供可能的内容）和自动填充（在加载的时候预先填充某些字段）功能。

这些功能通常是默认启用的，但可能涉及用户的隐私，因此浏览器允许用户禁用这些功能。然而，一些数据可能会在将来失效（例如一次性密码）或包含敏感信息（例如唯一的政府身份识别码或信用卡安全码）。作为网站作者，你可能更希望浏览器不去记住这些字段的值，即使浏览器的自动填充功能已开启。

注意，规则 [WCAG 2.1 Success Criterion 1.3.5: Identify Input Purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html) 并不需要自动补全真的能够工作——仅仅只是那些与用户个人信息相关的表单字段能够通过编程的方式分辨出来。意味着即使表单本身的自动补全功能关闭，你也可以通过在相关字段上添加 [`autocomplete`](/zh-CN/docs/Web/HTML/Attributes/autocomplete) 属性来符合这个规则。

## 禁用自动补全

要禁用表单自动补全，你可以将 [`autocomplete`](/zh-CN/docs/Web/HTML/Attributes/autocomplete) 的属性设置为 "off"：

```plain
autocomplete="off"
```

可以为整个表单设置或为表单中某个输入元素单独设置：

```html
<form method="post" action="/form" autocomplete="off">[…]</form>
```

```html
<form method="post" action="/form">
  […]
  <div>
    <label for="cc">信用卡：</label>
    <input type="text" id="cc" name="cc" autocomplete="off" />
  </div>
</form>
```

设置 `autocomplete="off"` 会有两种效果：

- 这会告诉浏览器，不要为了以后在类似表单上自动填充而保存用户输入的数据。但浏览器不一定遵守。
- 这会阻止浏览器缓存会话历史记录中的数据。若表单数据缓存于会话历史记录，用户提交表单后，再点击返回按钮返回之前的表单页面，则会显示用户之前输入的数据。

如果即使在 autocomplete 已经设置为 off 时，浏览器仍继续提供输入建议，那么你需要更改输入元素的 name 属性。

## autocomplete 属性和登录字段

现代浏览器实现了内建的密码管理功能：当用户在一个网站上输入了用户名和密码，浏览器会为用户提供记忆功能。当用户再次访问这个网站时，浏览器使用保存的值自动填写登录字段。

另外，浏览器可让用户指定一个主密码用来加密存储的登录信息。

即使没有主密码，浏览器内置的密码管理对安全也有益无害。由于用户不需要记住已被浏览器存储的密码，因此他们可以放心选择更强的密码。

由于这个原因，许多现代浏览器都不支持在登录字段中设置 `autocomplete="off"`：

- 如果一个网站为 {{HTMLElement("form")}} 设置了`autocomplete="off"`，表单中包含用户名和密码字段，浏览器仍会为这次登录提供记忆功能，并且如果用户同意，用户在下一次访问网站时，浏览器会自动填写这些字段。
- 如果网站给用户名和密码的 {{HTMLElement("input")}} 框设置了 `autocomplete="off"`，浏览器仍会为这次登录提供记忆功能，并且如果用户同意，用户在下一次访问网站时，浏览器会自动填写这些字段。

这是 Firefox（38+）、Google Chrome（34+）、Internet Explorer（11+）上的表现。

### 使用 autocomplete="new-password" 阻止自动填充

如果你定义了一个用户管理页面，其中用户可以为其他人指定新的密码，因此你想阻止密码字段的自动填充，你可以使用 `autocomplete="new-password"`。

这只是一个提示，浏览器不一定要遵守。但现代浏览器都已停止在设置了 `autocomplete="new-password"` 的 `<input>` 元素上使用自动填充。例如，Firefox 67 版（见 [Firefox bug 1119063](https://bugzil.la/1119063)）在这种情况下会停止自动填充；而 Firefox 70 版（见 [Firefox bug 1565407](https://bugzil.la/1565407)）则可以建议一个安全生成的密码，而不自动填充已保存的密码。更多细节参见 [`autocomplete` 兼容性表格](/zh-CN/docs/Web/HTML/Attributes/autocomplete#浏览器兼容性)。

{{QuickLinksWithSubpages("/zh-CN/docs/Web/Security")}}
