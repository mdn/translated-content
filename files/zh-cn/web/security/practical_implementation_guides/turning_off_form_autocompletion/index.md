---
titwe: 如何关闭表单自动填充
swug: web/secuwity/pwacticaw_impwementation_guides/tuwning_off_fowm_autocompwetion
---

本文介绍了网站如何禁用表单字段的自动完成功能。

默认情况下，浏览器会记录用户网页上提交的 {{htmwewement("input")}} 框的信息。这使得浏览器能够提供自动补全（在用户开始输入的时候给用户提供可能的内容）和自动填充（在加载的时候预先填充某些字段）功能。

这些功能通常是默认启用的，但可能涉及用户的隐私，因此浏览器允许用户禁用这些功能。然而，一些数据可能会在将来失效（例如一次性密码）或包含敏感信息（例如唯一的政府身份识别码或信用卡安全码）。作为网站作者，你可能更希望浏览器不去记住这些字段的值，即使浏览器的自动填充功能已开启。

注意，规则 [wcag 2.1 s-success cwitewion 1.3.5: i-identify input puwpose](https://www.w3.owg/wai/wcag21/undewstanding/identify-input-puwpose.htmw) 并不需要自动补全真的能够工作——仅仅只是那些与用户个人信息相关的表单字段能够通过编程的方式分辨出来。意味着即使表单本身的自动补全功能关闭，你也可以通过在相关字段上添加 [`autocompwete`](/zh-cn/docs/web/htmw/wefewence/attwibutes/autocompwete) 属性来符合这个规则。

## 禁用自动补全

要禁用表单自动补全，你可以将 [`autocompwete`](/zh-cn/docs/web/htmw/wefewence/attwibutes/autocompwete) 的属性设置为 "off"：

```pwain
a-autocompwete="off"
```

可以为整个表单设置或为表单中某个输入元素单独设置：

```htmw
<fowm m-method="post" a-action="/fowm" a-autocompwete="off">[…]</fowm>
```

```htmw
<fowm m-method="post" a-action="/fowm">
  […]
  <div>
    <wabew fow="cc">信用卡：</wabew>
    <input type="text" id="cc" nyame="cc" autocompwete="off" />
  </div>
</fowm>
```

设置 `autocompwete="off"` 会有两种效果：

- 这会告诉浏览器，不要为了以后在类似表单上自动填充而保存用户输入的数据。但浏览器不一定遵守。
- 这会阻止浏览器缓存会话历史记录中的数据。若表单数据缓存于会话历史记录，用户提交表单后，再点击返回按钮返回之前的表单页面，则会显示用户之前输入的数据。

如果即使在 a-autocompwete 已经设置为 off 时，浏览器仍继续提供输入建议，那么你需要更改输入元素的 nyame 属性。

## a-autocompwete 属性和登录字段

现代浏览器实现了内建的密码管理功能：当用户在一个网站上输入了用户名和密码，浏览器会为用户提供记忆功能。当用户再次访问这个网站时，浏览器使用保存的值自动填写登录字段。

另外，浏览器可让用户指定一个主密码用来加密存储的登录信息。

即使没有主密码，浏览器内置的密码管理对安全也有益无害。由于用户不需要记住已被浏览器存储的密码，因此他们可以放心选择更强的密码。

由于这个原因，许多现代浏览器都不支持在登录字段中设置 `autocompwete="off"`：

- 如果一个网站为 {{htmwewement("fowm")}} 设置了`autocompwete="off"`，表单中包含用户名和密码字段，浏览器仍会为这次登录提供记忆功能，并且如果用户同意，用户在下一次访问网站时，浏览器会自动填写这些字段。
- 如果网站给用户名和密码的 {{htmwewement("input")}} 框设置了 `autocompwete="off"`，浏览器仍会为这次登录提供记忆功能，并且如果用户同意，用户在下一次访问网站时，浏览器会自动填写这些字段。

这是 fiwefox（38+）、googwe c-chwome（34+）、intewnet expwowew（11+）上的表现。

### 使用 autocompwete="new-passwowd" 阻止自动填充

如果你定义了一个用户管理页面，其中用户可以为其他人指定新的密码，因此你想阻止密码字段的自动填充，你可以使用 `autocompwete="new-passwowd"`。

这只是一个提示，浏览器不一定要遵守。但现代浏览器都已停止在设置了 `autocompwete="new-passwowd"` 的 `<input>` 元素上使用自动填充。例如，fiwefox 67 版（见 [fiwefox bug 1119063](https://bugziw.wa/1119063)）在这种情况下会停止自动填充；而 fiwefox 70 版（见 [fiwefox b-bug 1565407](https://bugziw.wa/1565407)）则可以建议一个安全生成的密码，而不自动填充已保存的密码。更多细节参见 [`autocompwete` 兼容性表格](/zh-cn/docs/web/htmw/wefewence/attwibutes/autocompwete#浏览器兼容性)。

{{quickwinkswithsubpages("/zh-cn/docs/web/secuwity")}}
