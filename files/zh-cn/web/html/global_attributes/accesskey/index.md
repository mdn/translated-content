---
title: accesskey
slug: Web/HTML/Global_attributes/accesskey
---

{{HTMLSidebar("Global_attributes")}}

**accesskey** [全局属性](/zh-CN/docs/Web/HTML/Global_attributes) 提供了为当前元素生成快捷键的方式。属性值必须包含一个可打印字符。

{{EmbedInteractiveExample("pages/tabbed/attribute-accesskey.html","tabbed-shorter")}}

> [!NOTE]
> 在 WHATWG 规范中，它说你可以指定多个空格分隔的字符，浏览器将使用它所支持的第一个字符。然而，这在大多数浏览器中是行不通的。在 IE/Edge 中，它将使用它支持的第一个没有问题的，只要没有与其他命令冲突。

激活 accesskey 的操作取决于浏览器及其平台。

<table class="standard-table">
  <tbody>
    <tr>
      <th></th>
      <th>Windows</th>
      <th>Linux</th>
      <th>Mac</th>
    </tr>
    <tr>
      <th>Firefox</th>
      <td colspan="2" rowspan="1" style="text-align: center">
        <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        On Firefox 57 or newer, <kbd>Control</kbd> + <kbd>Option</kbd> +
        <kbd><em>key</em></kbd> -OR- <kbd>Control</kbd> + <kbd>Alt</kbd> +
        <kbd><em>key</em></kbd
        ><br />On Firefox 14 or newer, <kbd>Control</kbd> + <kbd>Alt</kbd> +
        <kbd><em>key</em></kbd
        ><br />On Firefox 13 or older, <kbd>Control</kbd> +
        <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Internet Explorer</th>
      <td>
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td colspan="2" rowspan="1">N/A</td>
    </tr>
    <tr>
      <th>Google Chrome</th>
      <td colspan="2" rowspan="1" style="text-align: center">
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Safari</th>
      <td>
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>N/A</td>
      <td>
        <kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Opera 15+</th>
      <td colspan="2" rowspan="1" style="text-align: center">
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Opera 12</th>
      <td colspan="3" rowspan="1">
        <p>
          <kbd>Shift</kbd> + <kbd>Esc</kbd> opens a contents list which are
          accessible by accesskey, then, can choose an item by pressing
          <kbd><em>key</em></kbd>
        </p>
      </td>
    </tr>
  </tbody>
</table>

要注意 Firefox 可以通过用户偏好，自定义所需的修饰键。

## 无障碍

除了糟糕的浏览器支持之外， `accesskey`属性还有很多问题：

- `accesskey` 值可能与系统或浏览器键盘快捷键或辅助技术功能相冲突。对于一个操作系统来说，辅助技术和浏览器组合可能无法与其他操作系统协同工作。
- 某些 `accesskey` 值可能不会出现在某些键盘上，特别是在国际化是一个问题的时候。
- 依赖于数字的 `accesskey` 值可能会让那些经历认知问题的人感到困惑，因为他们的数字与它触发的功能没有逻辑关联。
- 通知用户`accesskey`s 存在，这样他们就能意识到该功能。如果没有公开这些信息的方法，`accesskey`s 可能会被意外激活。

由于这些问题，一般建议不要在大多数通用的网站和 web 应用程序中使用`accesskey` 属性。

- [WebAIM: Keyboard Accessibility - Accesskey](https://webaim.org/techniques/keyboard/accesskey#spec)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.accessKey")}}
- {{domxref("HTMLElement.accessKeyLabel")}}
- 所有 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)
