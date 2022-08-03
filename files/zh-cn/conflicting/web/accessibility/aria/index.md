---
title: Alerts
slug: conflicting/Web/Accessibility/ARIA
translation_of: Web/Accessibility/ARIA/forms/alerts
original_slug: Web/Accessibility/ARIA/forms/alerts
---
## 问题

您有一个表单（例如联系表单），您希望将一些可访问的错误检查放入其中。 常见问题的示例包括无效的电子邮件地址，或至少不包含名字或姓氏的名称字段。

## 表单

首先，请阅读有关[`aria-required` technique](/en-US/docs/Web/Accessibility/ARIA/forms/Basic_form_hints#Required_and_invalid_fields)所需的技术（如果您尚未这样做的话），因为该技术会以此为基础进行扩展。

这是一个示例表单：

```html
 <form method="post" action="post.php">
   <fieldset>
     <legend>Please enter your contact details</legend>
     <label for="name">Your name (required):</label>
     <input name="name" id="name" aria-required="true"/>
     <br />
     <label for="email">E-Mail address (required):</label>
     <input name="email" id="email" aria-required="true"/>
     <br />
     <label for="website">Website (optional):</label>
     <input name="website" id="website"/>
   </fieldset>
   <label for="message">Please enter your message (required):</label>
   <br />
   <textarea name="message" id="message" rows="5" cols="80"
             aria-required="true"></textarea>
   <br />
   <input type="submit" name="submit" value="Send message"/>
   <input type="reset" name="reset" value="Reset form"/>
 </form>
```

## 检查有效性并通知用户

表单有效性检验由这几个步骤组成：

1.  检查电子邮件地址或输入的名称是否有效。 每个字段都有一组必须通过验证的标准。 为了简化此示例，我们将检查电子邮件地址是否包含“ @”符号，以及名称条目是否包含至少 1 个字符。
2.  如果不满足上述条件，则该字段的`aria-invalid`属性将被赋予“ `true`”值。
3.  如果不符合条件，用户将被通过警报来通知。 我们将使用简单的 WAI-ARIA 小部件来进行通知，而不是使用 JavaScript 的“`alert`”功能。 这会通知用户错误，但允许他们继续修改表单而不会失去焦点（由 JavaScript 默认的“`alert`”功能中的“ `onblur`”处理函数引起）。

下面是一个能够被插入在结束“ `head`”标签上方的示例 JavaScript 代码

```js
 <script type="application/javascript">
 function removeOldAlert()
 {
   var oldAlert = document.getElementById("alert");
   if (oldAlert){
     document.body.removeChild(oldAlert);
   }
 }

 function addAlert(aMsg)
 {
   removeOldAlert();
   var newAlert = document.createElement("div");
   newAlert.setAttribute("role", "alert");
   newAlert.setAttribute("id", "alert");
   var msg = document.createTextNode(aMsg);
   newAlert.appendChild(msg);
   document.body.appendChild(newAlert);
 }

 function checkValidity(aID, aSearchTerm, aMsg)
 {
   var elem = document.getElementById(aID);
   var invalid = (elem.value.indexOf(aSearchTerm) < 0);
   if (invalid) {
     elem.setAttribute("aria-invalid", "true");
     addAlert(aMsg);
   } else {
     elem.setAttribute("aria-invalid", "false");
     removeOldAlert();
   }
 }
 </script>
```

## `checkValidity` 函数

JavaScript 中用于表单验证的主要方法是`checkValidity`函数。 此方法采用三个参数：要验证的`输入`的 ID，要确保有效性的搜索项，以及要插入警报中的错误消息。

要查看其是否有效，该函数将检查`输入`的`indexOf`值是否大于`-1`。 如果在值内找不到搜索词的索引，则返回`-1`或更小的值。

如果无效，这个函数会执行这两个事情：

1.  它会把这个字段的`aria-invalid`属性设置为“`true`”，指示用户那里有无效的内容。
2.  它会调用`addAlert`函数来使用给定的错误信息添加警告。

如果搜索词被找到，`aria-invalid`值会被重置为“`false`”。此外，所有剩余警告都将被删除。

## `addAlert` 函数

此功能首先删除所有旧警报。 该函数很简单：它查找 ID 为“`alert`”的元素，如果找到，则将其从[文档对象模型](/zh-CN/docs/Mozilla/Tech/XUL/Tutorial/Document_Object_Model)中删除。

接下来，这个函数创建一个`div`元素来保存警告文本。 它得到了一个 “`alert`”的 ID.，并且它具有“`alert`”角色集。 这实际上是受 ARIA 启发的，即使它在属性名称中没有标明“aria”。 这是因为该角色基于[XHTML 角色属性模块](http://www.w3.org/TR/xhtml-role/)，为简单起见，该模块简单地移植到 HTML。

这些文字被加入这个`div`元素，然后这个`div`元素被加入文档。

发生这种情况时，当此`div`出现时，Firefox 将向辅助技术触发“警报”事件。 大多数屏幕阅读器都会自动选择并说出来。 这类似于 Firefox 中的提示栏，提示您是否要保存密码。 我们刚刚创建的警报没有任何可按的按钮，只是告诉我们出了什么问题。

## 修改“`onblur`” 事件

现在剩下的就是添加事件处理程序。 我们需要为此更改电子邮件和名称的两个输入：

```html
 <input name="name" id="name" aria-required="true"
        onblur="checkValidity('name', ' ', 'Invalid name entered!');"/>
 <br />
 <input name="email" id="email" aria-required="true"
        onblur="checkValidity('email', '@', 'Invalid e-mail address');"/>
```

**测试示例**

如果你在使用 Firefox 3 和一个当前支持的屏幕阅读器，试试看下面的操作：

1.  在姓名输入框中，只输入你的名。按下 Tab 键时，您会听到警告，提示您输入了无效的姓名。 然后，您可以向后移 Tab 键并更正错误。
2.  输入不带“ @”符号的电子邮件地址。 跳出此字段时，您应该听到一条警告，提示您未输入有效的电子邮件地址。

在两种情况下，当将焦点返回到相关字段时，您的屏幕阅读器应该告诉您该字段无效。 JAWS 9 支持这个功能，但是 JAWS 8 不支持，所以这个功能不一定能够在所有版本的支持的屏幕阅读器中正常工作。

## 您可能遇到的一些问题

- Q. 为什么在某些输入中同时在标签文本和“`aria-required`”属性中都添加了“`(required)`”？
  - : A. 如果这是一个实例中的表格，并且尚不支持 ARIA 的浏览器正在访问该网站，我们仍然希望表明这是必填字段。
- Q. 为什么不将焦点自动设置回无效字段？
  - : A. 因为 Windows API 规范（可能还有其他规范）不允许这样做。 同样，让焦点在没有实际用户交互的情况下过于频繁地跳动通常也不是一件好事。

> **警告：** TBD:让我们重新考虑一下 - 就个人而言，我认为如果不引起键盘陷阱，设置焦点可能会很好。
