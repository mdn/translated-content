---
title: ARIA：button 角色
slug: Web/Accessibility/ARIA/Roles/button_role
---

`button` 角色应该用于可单击的元素，当用户激活时触发响应。添加 `role="button"` 会告诉屏幕阅读器这个元素是个按钮，但是不提供按钮的功能。你应该使用 {{HTMLElement("button")}} 或者 {{HTMLElement("input")}} 以及 `type="button"`。

## 描述

button 角色会向辅助技术（如屏幕阅读器）识别一个元素为按钮。按钮是用于执行操作的小部件，例如提交表单、打开对话框、退出活动或执行一个命令，例如插入新的记录或者显示信息。添加 `role="button"` 会告诉辅助技术，这是一个按钮，但是不提供按钮的功能。你应该使用 {{HTMLElement("button")}} 或者 {{HTMLElement("input")}} 以及 `type="button"`。

`button` 角色可以和 [`aria-pressed`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) 发生一起使用，以[创建切换按钮](#toggle_buttons)。

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">保存</div>
```

上面这个例子创建了一个可聚焦的按钮，但是需要 JavaScript 和 CSS 来包含按钮的外观和行为。这些功能默认是由 {{HTMLElement("button")}} 或者 {{HTMLElement("input")}}（带有 `type="button"`）元素提供的。`

```html
<button type="button" id="saveChanges">保存</button>
```

> **注意：** 如果使用 `role="button"` 而不是语义的 `<button>` 或 `<input type="button">` 元素，你需要让这个元素可聚焦并定义事件处理器 {{domxref("Element/click_event", "click")}} 和 {{domxref("Element/keydown_event", "keydown")}}。这包括了按下 <kbd>Enter</kbd> 和 <kbd>Space</kbd> 键盘按键以处理各种形式的用户输入。参见 [官方的 WAI-ARIA 示例代码](https://www.w3.org/TR/wai-aria-practices/examples/button/button.html)。

除了常见的按钮部件之外，使用非按钮元素创建切换按钮和菜单按钮时，应该使用 `role="button"`。

切换按钮是指有两个状态的按钮，可以是关（未按下）或者开（已按下）。[`aria-pressed`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) 属性值 `true` 或 `false` 会将按钮识别为切换按钮。

菜单按钮是指控制一个菜单且 [`aria-haspopup`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) 属性设置为 `menu` 或 `true` 的按钮。

### 所有子元素都是 presentation

有些类型的用户界面元件，当呈现为平台无障碍 API 时，仅可包含文本。无障碍 API 没有呈现 `button` 中包含的语义元素的方式。要处理这个限制，浏览器会自动为任何 `button` 的后代元素应用角色 [`presentation`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role)，因为按钮这种角色不支持带有语义的子元素。

例如，请看这个 `button` 按钮，有如下内容：

```html
<div role="button"><h3>按钮的标题</h3></div>
```

由于 `button` 的子元素都是 presentation，因此相当于以下的代码：

```html
<div role="button"><h3 role="presentation">按钮的标题</h3></div>
```

从辅助技术的视角来看，这个标题不存在，因为前面的代码片段在 [辅助功能树](/zh-CN/docs/Glossary/Accessibility_tree) 中相当于以下内容：

```html
<div role="button">按钮的标题</div>
```

### 关联的 ARIA 角色、状态和属性

- [`aria-pressed`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
  - : `aria-pressed` 属性定义的按钮是否为切换按钮。此值描述了按钮的状态。值包括 `aria-pressed="false"`（按钮还没有被按下）、`aria-pressed="true"` （按钮当前已被按下）和 `aria-pressed="mixed"` （按钮被视为部分按下）。如果此属性被忽略，或者设置为默认值 `aria-pressed="undefined"`，那么元素不支持被按下。
- [`aria-expanded`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : 如果按钮控制了其他元素的分组，`aria-expanded` 状态指示了被控制的分组当前是被展开还是折叠。如果按钮有设置了 `aria-expanded="false"`，那么分组当前没有开，如果被展开了，则按钮会有 `aria-expanded="undefined"`，如果属性被忽略，则是不可展开。

### 基本的按钮

Buttons should always have an accessible name. For most buttons, this name will be the same as the text inside the button, between the opening and closing tags. In some cases, for example buttons represented by icons, the accessible name may be provided from the [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attributes.

## 切换按钮

切换按钮通常有两种状态：按下、没有按下，第三个混合的状是指，切换按钮控制了其他的元素，例如其他的切换按钮或者复选框，而不共享同一个值。按钮是否被按下可以由 `button` 角色（如果元素还不是原生的 button 元素）加上 [`aria-pressed`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) 表示：

- 如果没有 `aria-pressed`，说明这不是一个切换按钮。
- 如果 `aria-pressed="false"`，说明这个按钮当前没有被按下。
- 如果 `aria-pressed="true"`。说明这个按钮当前已被按下。
- 如果 `aria-pressed="mixed"`，说明这个按钮被认为是部分按下的。

As an example, the mute button on an audio player labeled "mute" could indicate that sound is muted by setting the `aria-pressed` state true. The label of a toggle button should not change when its state changes. In our example the label remains "Mute" with a screen reader reading "Mute toggle button pressed" or "Mute toggle button not pressed" depending on the value of `aria-pressed`. If the design were to call for the button label to change from "Mute" to "Unmute," a toggle button would not be appropriate, so the `aria-pressed` attribute would be omitted.

### 键盘交互

| 按键             | 功能       |
| ---------------- | ---------- |
| <kbd>Enter</kbd> | 激活按钮。 |
| <kbd>Space</kbd> | 激活按钮。 |

Following button activation, focus is set depending on the type of action the button performs. For example, if clicking the button opens a dialog, the focus should move to the dialog. If the button closes a dialog, focus should return to the button that opened the dialog unless the function performed in the dialog context logically leads to a different element. If the button alters the current context, such as muting and unmuting an audio file, then focus typically remains on the button.

### Required JavaScript Features

#### Required event handlers

Buttons can be operated by mouse, touch, and keyboard users. For native HTML `<button>` elements, the button's `onclick` event fires for mouse clicks and when the user presses <kbd>Space</kbd> or <kbd>Enter</kbd> while the button has focus. But if another tag is used to create a button, the `onclick` event only fires when clicked by the mouse cursor, even if `role="button"` is used. Because of this, separate key event handlers must be added to the element so that the button is be triggered when the <kbd>Space</kbd> or <kbd>Enter</kbd> key is pressed.

- `onclick`
  - : Handles the event raised when the button is activated using a mouse click or touch event.
- `onKeyDown`
  - : Handles the event raised when the button is activated using the Enter or Space key on the keyboard. (Note not the [deprecated onKeyPress](/zh-CN/docs/Web/API/Element/keypress_event))

## 示例

### 基本按钮示例

在这个例子中，span 元素有个 `button` 角色。由于使用了 `<span>` 元素，需要使用 `tabindex` 属性以使得按钮可聚焦，并成为页面的 tab 顺序的一部分。还有包含 CSS 样式，以使用这个 `<span>` 元素看上去像是个按钮，并在按钮有焦点时，提供了视觉呈现。

`handleBtnClick` 和 `handleBtnKeyDown` 事件处理器执行了按钮在鼠标单击或者按下 <kbd>Space</kbd> 或 <kbd>Enter</kbd> 键的操作。在这个例子中，操作是给名字列表添加一个新的名字。

在文本框中添加名称以尝试这个例子。按钮会给列表添加一个新的名字。

#### HTML

```html
<h1>ARIA 按钮示例</h1>
<ul id="nameList"></ul>
<label for="newName">输入你的名字：</label>
<input type="text" id="newName" />
<span
  role="button"
  tabindex="0"
  onclick="handleCommand(event)"
  onKeyDown="handleCommand(event)"
  >添加名字</span
>
```

#### CSS

```css
[role="button"] {
  padding: 2px;
  background-color: navy;
  color: white;
  cursor: default;
}
[role="button"]:hover,
[role="button"]:focus,
[role="button"]:active {
  background-color: white;
  color: navy;
}
ul {
  list-style: none;
}
```

#### JavaScript

```js
function handleCommand(event) {
  // 处理鼠标单击以及 Enter 或 Space 的激活

  // 除 Enter 或 Space 之外的按钮不应该触发命令
  if (
    event instanceof KeyboardEvent &&
    event.key !== "Enter" &&
    event.key !== " "
  ) {
    return;
  }

  // 从输入框中获取新的名字
  const newNameInput = document.getElementById("newName");
  const name = newNameInput.value;
  newNameInput.value = ""; // 清除文本框
  newNameInput.focus(); // 给予文本框焦点，以允许添加额外的名称。

  // 不要在列表中添加空白项。
  if (name.length > 0) {
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(name));

    // 在列表中添加新的名字。
    const list = document.getElementById("nameList");
    list.appendChild(listItem);
  }
}
```

{{EmbedLiveSample("Basic_button_example")}}

### 切换按钮示例

在这个片段中，使用 `button` 角色和 `aria-pressed` 属性，来将 `<span>` 元素转换为一个切换按钮，按钮被激活时，`aria-pressed` 的值在 `true` 和 `false` 之间切换。

#### HTML

```html
<button
  type="button"
  onclick="handleBtnClick(event)"
  onKeyDown="handleBtnKeyDown(event)">
  静音音频
</button>

<span
  role="button"
  tabindex="0"
  aria-pressed="false"
  onclick="handleBtnClick(event)"
  onKeyDown="handleBtnKeyDown(event)">
  静音音频
</span>

<audio
  id="audio"
  src="https://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3">
  你的浏览器不支持 `audio` 元素。
</audio>
```

#### CSS

```css
button,
[role="button"] {
  padding: 3px;
  border: 2px solid transparent;
}

button:active,
button:focus,
[role="button"][aria-pressed="true"] {
  border: 2px solid #000;
}
```

#### JavaScript

```js
function handleBtnClick(event) {
  toggleButton(event.target);
}

function handleBtnKeyDown(event) {
  // 检查 space 或 enter 是否已按下
  // "Spacebar" 是为 IE11 支持
  if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
    // 避免按下空格键时滚动屏幕的默认操作
    event.preventDefault();
    toggleButton(event.target);
  }
}

function toggleButton(element) {
  const audio = document.getElementById("audio");

  // 检查按钮是否已按下
  const pressed = element.getAttribute("aria-pressed") === "true";

  // 将 aria-pressed 设为相反的状态
  element.setAttribute("aria-pressed", !pressed);

  // 切换 audio 文件的 play 状态
  if (pressed) {
    audio.pause();
  } else {
    audio.play();
  }
}
```

### 结果

{{EmbedLiveSample('ARIA_Toggle_Button')}}

## 无障碍考虑

按钮本身是可交互的，因此可聚焦。如果给自身没有焦点的元素（如 `<span>`、`<div>` 或 `<p>`）添加了焦点，那么就应该使用 `tabindex` 属性以使用按钮可聚焦。

> **警告：** 谨慎将链接标记为按钮。按钮是预期使用 <kbd>Space</kbd> 或 <kbd>Enter</kbd> 键触发的，而链接是预期使用 <kbd>Enter</kbd> 触发的。也就是说，如果使用了链接以表现得像是个按钮，仅添加 `role="button"` 是不够的。还有必要为 <kbd>Space</kbd> 添加一个键事件处理器，以与原生的按钮行为保持一致。

使用了 `button` 角色时，屏幕阅读器会将其说成是一个按钮，通常是说“单击（click）”然后是其可访问的名称。可访问名称是元素的内容，或者 `aria-label` 的会是，或者由 `aria-labelledby` 属性引用的值，或者描述（如果已包括）。

## 最佳实践

If a link performs the action of a button, giving the element `role="button"` helps assistive technology users understand the function of the element. However, a better solution is to adjust the visual design so it matches the function and ARIA role. Where possible, it is recommended to use native HTML buttons (`<button>`, `<input type="button">`, `<input type="submit">`, `<input type="reset">` and `<input type="image">`) rather than the `button` role, as native HTML buttons are supported by all user agents and assistive technology and provide keyboard and focus requirements by default, without need for additional customization.

## 规范

{{Specifications}}

## 参见

- {{HTMLElement('button')}} 元素
- {{HTMLElement("input")}} 元素
- [`<input type="button">`](/zh-CN/docs/Web/HTML/Element/input/button)
- [`<input type="submit">`](/zh-CN/docs/Web/HTML/Element/input/submit)
- [`<input type="reset">`](/zh-CN/docs/Web/HTML/Element/input/reset)
- [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed)
- [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded)
- [`aria-haspopup`](https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup)
- [Strong native semantics in HTML5](https://html.spec.whatwg.org/multipage/dom.html#aria-usage-note)
- [Notes on Using ARIA in HTML](https://www.w3.org/TR/aria-in-html/)
- [Official WAI-ARIA example code](https://www.w3.org/TR/wai-aria-practices/examples/button/button.html)

<section id="Quick_links">

1. [**WAI-ARIA 角色**](/zh-CN/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/zh-CN/docs/Web/Accessibility/ARIA/Roles")}}

</section>
