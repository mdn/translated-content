---
title: ARIA：checkbox 角色
slug: Web/Accessibility/ARIA/Reference/Roles/checkbox_role
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

`checkbox` 角色用于可勾选的交互控件。包含 `role="checkbox"` 的元素还必须包含 [`aria-checked`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) 属性，以便向辅助技术公开复选框的状态。

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">记住我的偏好设置</label>
```

> [!NOTE]
> ARIA 的第一规则是：如果原生 HTML 元素或属性已经具备你所需要的语义和行为，就使用它，而不是重新利用某个元素并添加 ARIA。请改用原生的 [`<input type="checkbox">` HTML 复选框](/zh-CN/docs/Web/HTML/Reference/Elements/input/checkbox)（配合关联的 {{HTMLElement('label')}}），它原生地提供了所需的全部功能：

```html
<input type="checkbox" id="chk1-label" name="RememberPreferences" />
<label for="chk1-label">记住我的偏好设置</label>
```

## 描述

原生 HTML 复选框（[`<input type="checkbox">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/checkbox)）表单控件有两种状态（“已勾选”或“未勾选”），并可以通过 JavaScript 设置 [`indeterminate`](/zh-CN/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) 状态。类似地，具有 `role="checkbox"` 的元素可以通过 `aria-checked` 属性暴露三种状态：`true`、`false` 或 `mixed`。

由于复选框是一种交互控件，它必须是可聚焦的，并且可以通过键盘访问。如果该角色被应用到一个不可聚焦的元素上，请使用 [`tabindex`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性来改变这一点。激活复选框所预期的键盘快捷键是 <kbd>空格</kbd> 键。

开发者需要在复选框被激活时动态更改 `aria-checked` 属性的值。

### 所有后代元素均为呈现性元素

某些类型的用户界面组件，在平台无障碍 API 中表示时只能包含文本。无障碍 API 无法表示 `checkbox` 中包含的语义元素。为了解决这一限制，浏览器会自动将 [`presentation`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) 角色应用于任何 `checkbox` 元素的所有后代元素，因为该角色不支持语义子元素。

例如，考虑下面这个包含标题的 `checkbox` 元素。

```html
<div role="checkbox"><h6>我的复选框名称</h6></div>
```

由于 `checkbox` 的后代元素是呈现性的，下面的代码与之等价：

```html
<div role="checkbox"><h6 role="presentation">我的复选框名称</h6></div>
```

从辅助技术用户的角度来看，该标题并不存在，因为前面的代码片段在[无障碍树](/zh-CN/docs/Glossary/Accessibility_tree)中等同于以下内容：

```html
<div role="checkbox">我的复选框名称</div>
```

### 关联的 WAI-ARIA 角色、状态和属性

- [`aria-checked`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : `aria-checked` 的值定义了复选框的状态。该属性有三个可能的取值：
    - `true`
      - : 复选框已被勾选。
    - `false`
      - : 复选框未被勾选。
    - `mixed`
      - : 复选框被部分勾选，即处于不确定（indeterminate）状态。

- `tabindex="0"`
  - : 用于使其可聚焦，以便辅助技术用户可以按 Tab 键切换到它并立即开始阅读。

### 键盘交互

| 按键            | 功能       |
| --------------- | ---------- |
| <kbd>空格</kbd> | 激活复选框 |

### 所需的 JavaScript

#### 所需的事件处理器

- `onclick`
  - : 处理复选框及其关联标签上的鼠标点击，通过更改 `aria-checked` 属性的值和复选框的外观来改变复选框的状态，使其在视力正常的用户看来呈现为已勾选或未勾选
- `onKeyDown`
  - : 处理用户按下 <kbd>空格</kbd> 键的情况，通过更改 `aria-checked` 属性的值和复选框的外观来改变复选框的状态，使其在视力正常的用户看来呈现为已勾选或未勾选

## 示例

下面的示例创建了一个本身没有语义的复选框元素，并使用 CSS 和 JavaScript 来处理该元素的已勾选或未勾选状态。

### HTML

```html
<span
  role="checkbox"
  id="chkPref"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">记住我的偏好设置</label>
```

### CSS

```css
[role="checkbox"] {
  padding: 5px;
}

[role="checkbox"]:focus {
  border: 2px solid #0198e1;
}

[aria-checked="true"]::before {
  content: "[x]";
}

[aria-checked="false"]::before {
  content: "[ ]";
}
```

### JavaScript

```js
const item = document.getElementById("chkPref");
const label = document.getElementById("chk1-label");

function changeCheckbox(code) {
  const checked = item.getAttribute("aria-checked");

  if (code && code !== "Space") {
    return;
  }
  if (checked === "true") {
    item.setAttribute("aria-checked", "false");
  } else {
    item.setAttribute("aria-checked", "true");
  }
}

item.addEventListener("keydown", (event) => {
  changeCheckbox(event.code);
});

label.addEventListener("keydown", (event) => {
  changeCheckbox(event.code);
});

item.addEventListener("click", changeCheckbox);
label.addEventListener("click", changeCheckbox);
```

{{EmbedLiveSample("示例", 230, 250)}}

## 无障碍考虑

当 `checkbox` 角色被添加到某个元素上时，用户代理应当做到以下几点：

- 在操作系统的无障碍 API 中将该元素暴露为具有 `checkbox` 角色。
- 当 `aria-checked` 的值发生变化时，发送无障碍状态变更事件。

辅助技术产品应当做到以下几点：

- 屏幕阅读器应当将元素播报为复选框，并可选择提供关于如何激活它的说明。

实现复选框的人应当做到以下几点：

- 确保复选框既可以通过键盘控件、也可以通过点击来访问和操作
- 在用户交互之后保持 `aria-checked` 属性为最新
- 提供指示复选框何时获得焦点的样式

> [!NOTE]
> 关于辅助技术应当如何处理这一技术，各方看法可能不同。上文提供的信息只是其中一种看法，并且可能会发生变化。

## 最佳实践

ARIA 的第一规则是：如果原生 HTML 元素或属性已经具备你所需要的语义和行为，就使用它，而不是重新利用某个元素并添加 ARIA 角色、状态或属性来使其可访问。因此，建议使用原生的 [HTML 复选框](/zh-CN/docs/Web/HTML/Reference/Elements/input/checkbox)这一表单控件，而不是用 JavaScript 和 ARIA 重新实现复选框的功能。

## 参见

- [`<input type="checkbox">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/checkbox)
- [ARIA：`radio` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [ARIA：`menuitem` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA：`menuitemcheckbox` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [ARIA：`menuitemradio` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA：`switch` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [ARIA：`option` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
