---
title: ARIA：alertdialog 角色
slug: Web/Accessibility/ARIA/Reference/Roles/alertdialog_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

**alertdialog** 角色用于模态警报对话框，这类对话框会打断用户的工作流程，以传达重要消息并要求用户作出响应。

## 描述

`alertdialog` 角色用于通知用户需要其立即注意的紧急信息。在包含对话框的元素上加入 `role="alertdialog"`，可以帮助辅助技术将这些内容识别为与页面其余内容分组且分离的内容。例如需要确认的错误消息，以及其他操作确认提示。

顾名思义，`alertdialog` 是 [`dialog`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) 角色与 [`alert`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) 角色的组合体。`alertdialog` 是 `dialog` 的一种，其用例与 `alert` 类似，但适用于需要用户响应的情况。

> [!NOTE]
> `alertdialog` 角色应当只用于带有相关交互控件的警报消息。如果警报对话框只包含静态内容而完全没有任何交互控件，请改用 [`alert`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)。

作为 dialog 的一种类型，[`dialog`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) 角色的状态、属性和键盘焦点要求同样适用于 `alertdialog` 角色。

由于其紧急性质会打断用户的工作流程，警报对话框应当是[模态的](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)。

警报对话框必须至少有一个可聚焦的控件——例如“确认”、“关闭”和“取消”——并且在警报对话框出现时，焦点必须移至该控件。警报对话框还可以有其他交互控件，例如文本框和复选框。

`alertdialog` 角色不能用来替代其他对话框，包括无需确认的 `alert` 对话框（[`Window.alert()`](/zh-CN/docs/Web/API/Window/alert)）和提示对话框（[`Window.prompt()`](/zh-CN/docs/Web/API/Window/prompt)）。

仅仅添加 `role="alertdialog"` 并不足以让警报对话框变得无障碍。还需要做到以下几点：

- 警报对话框必须被正确标注
- 必须正确管理键盘焦点

`alertdialog` 必须具有可访问名称，通过 [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 或 [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) 定义。警报对话框文本必须具有使用 [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 提供的{{glossary("accessible description", "无障碍描述")}}。

### 关联的 WAI-ARIA 角色、状态和属性

- [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : 使用此属性为 alertdialog 标注。`aria-labelledby` 属性的值通常是用作为 alertdialog 提供标题的元素的 id。

- [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : 使用此属性来涵盖警报对话框内容的描述。`aria-describedby` 属性的值通常是包含警报对话框消息文本的元素的 ID，通常紧跟在标题之后。

## 示例

### 示例 1：一个基本的警报对话框

```html
<div
  role="alertdialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <div role="document" tabindex="0">
    <h2 id="dialog1Title">您的登录会话即将过期</h2>
    <p id="dialog1Desc">要延长您的会话，请点击“确定”按钮</p>
    <button>确定</button>
  </div>
</div>
```

上面的代码片段展示了如何标记一个仅提供一条消息和一个“确定”按钮的警报对话框。

### 示例 2：带有两个选项的确认对话框

```html
<div
  id="alert_dialog"
  role="alertdialog"
  aria-modal="true"
  aria-labelledby="dialog_label"
  aria-describedby="dialog_desc">
  <h2 id="dialog_label">确认</h2>
  <div id="dialog_desc">
    <p>你确定要删除这张图片吗？</p>
    <p>此更改无法撤销。</p>
  </div>
  <ul>
    <li>
      <button id="close-btn" type="button">否</button>
    </li>
    <li>
      <button id="confirm-btn" type="button" aria-controls="form">是</button>
    </li>
  </ul>
</div>
```

```js
document.getElementById("close-btn").addEventListener("click", () => {
  closeDialog();
});
document.getElementById("confirm-btn").addEventListener("click", (event) => {
  deleteFile();
});
```

## 规范

{{Specifications}}

## 参见

- HTML {{HTMLElement("dialog")}} 元素
- [`dialog` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [`alert` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [`aria-modal` 属性](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`Window.alert()`](/zh-CN/docs/Web/API/Window/alert)
- [`Window.prompt()`](/zh-CN/docs/Web/API/Window/prompt)
