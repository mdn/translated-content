---
title: ARIA：button 角色
slug: Web/Accessibility/ARIA/Roles/button_role
---

`button` 角色用于可单击的元素，在用户激活时触发响应。添加 `role="button"` 会告诉屏幕阅读器这个元素是个按钮，但是不提供按钮的功能。你应该使用的 {{HTMLElement("button")}} 或者 `type="button"` 的 {{HTMLElement("input")}}。

## 描述

button 角色会向辅助技术（如屏幕阅读器）识别一个元素为按钮。按钮是用于执行操作的小部件，例如提交表单、打开对话框、退出活动或执行一个命令，例如插入新的记录或者显示信息。添加 `role="button"` 会告诉辅助技术，这是一个按钮，但是不提供按钮的功能。你应该使用 {{HTMLElement("button")}} 或者 {{HTMLElement("input")}} 以及 `type="button"`。

`button` 角色可以和 [`aria-pressed`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) 属性一起使用，以[创建切换按钮](#切换按钮)。

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">保存</div>
```

上面这个例子创建了一个可聚焦的按钮，但是需要 JavaScript 和 CSS 来包含按钮的外观和行为。这些功能默认是由 {{HTMLElement("button")}} 或者 {{HTMLElement("input")}}（带有 `type="button"`）元素提供的。

```html
<button type="button" id="saveChanges">保存</button>
```

> **备注：** 如果使用 `role="button"` 而不是语义化的 `<button>` 或 `<input type="button">` 你需要让这个元素可聚焦并定义 {{domxref("Element/click_event", "click")}} 和 {{domxref("Element/keydown_event", "keydown")}} 事件的事件处理器。这包括了对按下 <kbd>Enter</kbd> 和 <kbd>Space</kbd> 的事件的处理，以处理各种形式的用户输入。参见[官方的 WAI-ARIA 示例代码](https://www.w3.org/TR/wai-aria-practices/examples/button/button.html)。

除了常见的按钮部件之外，使用非按钮元素创建切换按钮和菜单按钮时，应该使用 `role="button"`。

切换按钮是指有两个状态的按钮，可以是关（未按下）或者开（已按下）。[`aria-pressed`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) 属性值 `true` 或 `false` 会将按钮识别为切换按钮。

菜单按钮是指控制一个菜单且 [`aria-haspopup`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) 属性设置为 `menu` 或 `true` 的按钮。

### 所有子元素都是仅作展示的

有些类型的用户界面元件，呈现在平台无障碍 API 中时，仅可包含文本。无障碍 API 没有呈现 `button` 中包含的语义元素的方式。要处理这个限制，浏览器会自动为任何 `button` 的后代元素应用角色 [`presentation`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role)，因为按钮这种角色不支持带有语义的子元素。

例如，考虑以下包含标题的 `button` 元素。

```html
<div role="button"><h3>按钮的标题</h3></div>
```

由于 `button` 的子元素都是仅作展示的，因此相当于以下的代码：

```html
<div role="button"><h3 role="presentation">按钮的标题</h3></div>
```

从辅助技术的视角来看，这个标题不存在，因为前面的代码片段在[无障碍树](/zh-CN/docs/Glossary/Accessibility_tree)中相当于以下内容：

```html
<div role="button">按钮的标题</div>
```

### 关联的 ARIA 角色、状态和属性

- [`aria-pressed`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
  - : `aria-pressed` 属性将按钮定义为切换按钮。此值描述了按钮的状态。值包括 `aria-pressed="false"`（按钮还没有被按下）、`aria-pressed="true"`（按钮当前已被按下）和 `aria-pressed="mixed"`（按钮被视为部分按下）。如果此属性被忽略，或者设置为默认值 `aria-pressed="undefined"`，那么元素不支持被按下。
- [`aria-expanded`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : 如果按钮控制了其他元素的分组，`aria-expanded` 状态指示了被控制的分组当前是被展开还是折叠。如果按钮设置了 `aria-expanded="false"`，则分组当前未展开；如果按钮设置了 `aria-expanded="true"`，则分组当前已展开；如果按钮设置了 `aria-expanded="undefined"`，则其是不可展开的。

### 基本的按钮

按钮始终应该有无障碍的名称。对于大多数的按钮，名称通常是和按钮内的文本、开启和闭合标签之间的内容一致的。一些情况下，比如以图标形式呈现的按钮，其无障碍名称可能是由 [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-label) 或者 [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 属性提供的。

## 切换按钮

切换按钮通常有两种状态：按下、没有按下，第三种混合状态可用于控制了其他的元素的切换按钮，例如其他的不共享同一个值的切换按钮或者复选框。还可以使用 `button` 角色（如果元素不是原生的 button 元素）加 [`aria-pressed`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) 属性来表示元素是否为切换按钮：

- 如果没有 `aria-pressed`，说明这不是一个切换按钮。
- 如果 `aria-pressed="false"`，说明这个按钮当前没有被按下。
- 如果 `aria-pressed="true"`。说明这个按钮当前已被按下。
- 如果 `aria-pressed="mixed"`，说明这个按钮被认为是部分按下的。

比如，音频播放器上有“静音”标签的静音按钮应该表示当 `aria-pressed` 状态为 true 时声音是静音的。切换按钮的标签不应该随状态改变而改变。在这个例子中，当屏幕阅读器说“静音切换按钮已按下”或者“静音切换按钮未按下”（取决于 `aria-pressed` 时），按钮的标签都始终为“静音”。如果设计时是要让按钮标签由“静音”更改为“取消静音”，那么这时候切换按钮并不合适，`aria-pressed` 属性应该省略。

### 键盘交互

| 按键             | 功能       |
| ---------------- | ---------- |
| <kbd>Enter</kbd> | 激活按钮。 |
| <kbd>Space</kbd> | 激活按钮。 |

按钮激活后，会根据按钮执行的操作的类型设置焦点。比如，如果点击打开对话框的按钮，那么焦点应该移动到对话框。如果按钮是关闭对话框的，那么焦点应该回到打开对话框的按钮，除非对话框上下文中执行的功能在逻辑上是导向到不同的元素的。如果按钮更改了当前的上下文，例如将音频文件静音或者取消静音，那么焦点通常应该留在按钮上。

### 必需的 JavaScript 特性

#### 必需的事件处理器

按钮可能是由鼠标、触屏或者键盘用户操作的。对于原生的 `<button>` 元素，按钮的 `onclick` 事件会在用户点击时，以及在按钮被聚焦且用户按下 <kbd>Space</kbd> 或 <kbd>Enter</kbd> 时触发。但如果使用其他标签创建按钮，那么 `onclick` 事件只会在用户使用鼠标指针点击时才会触发，即使使用了 `role="button"`。因此，需要给元素添加单独的事件处理器，以在按下 <kbd>Space</kbd> 或 <kbd>Enter</kbd> 键时触发按钮。

- `onclick`
  - : 使用鼠标点击或者触摸事件激活按钮时产生的事件。
- `onKeyDown`
  - : 使用键盘上的 Enter 或 Space 键激活按钮时触发的事件。（注意不是[已弃用的 onKeyPress](/zh-CN/docs/Web/API/Element/keypress_event)。）

## 示例

### 基本按钮示例

在这个例子中，span 元素有个 `button` 角色。由于使用了 `<span>` 元素，需要使用 `tabindex` 属性以使得按钮可聚焦，并成为页面的 tab 顺序的一部分。还有包含 CSS 样式，以使得这个 `<span>` 元素看上去像是个按钮，并在按钮被聚焦时，提供了视觉呈现。

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
  // 处理鼠标单击以及 Enter 或 Space 的按键激活

  // 除 Enter 或 Space 之外的按键不应该触发命令
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

{{EmbedLiveSample("基本按钮示例")}}

### 切换按钮示例

在这个片段中，使用 `button` 角色和 `aria-pressed` 属性，以将 {{HTMLElement("span")}} 元素转换为切换按钮，按钮被激活时，`aria-pressed` 的值在 `true` 和 `false` 之间切换。

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

  // 切换音频文件的播放状态
  if (pressed) {
    audio.pause();
  } else {
    audio.play();
  }
}
```

### 结果

{{EmbedLiveSample('切换按钮示例')}}

## 无障碍考虑

按钮本身是可交互的，因此可聚焦。如果给自身不可聚焦的元素（如 `<span>`、`<div>` 或 `<p>`）添加了 `button` 角色，那么就应该使用 `tabindex` 属性以使得按钮可聚焦。

> **警告：** 谨慎将链接标记为按钮。按钮是预期使用 <kbd>Space</kbd> 或 <kbd>Enter</kbd> 键触发的，而链接是预期使用 <kbd>Enter</kbd> 触发的。也就是说，如果将链接用作按钮，仅添加 `role="button"` 是不够的。还有必要为 <kbd>Space</kbd> 键添加一个按键事件处理器，以与原生按钮的行为保持一致。

使用了 `button` 角色时，屏幕阅读器会声明其说成是一个按钮，通常是说“单击（click）”然后是其无障碍名称。无障碍名称是元素的内容，或是 `aria-label` 的值，或是由 `aria-labelledby` 属性引用的元素的值，或是描述（如果已包括）。

## 最佳实践

如果链接执行的是按钮的操作，那么为元素设置 `role="button"` 可以帮助辅助技术用户理解这个元素的功能。然而，更好的设计是调整视觉设计从而匹配其功能和 ARIA 角色。如果可能，建议使用原生的 HTML 按钮（`<button>`、`<input type="button">`、`<input type="submit">`、`<input type="reset">` 和 `<input type="image">`）而不是 `button` 角色，因为原生 HTML 按钮能够被所有的用户代理和辅助技术所支持，且默认会提供键盘和聚焦需求而不需要额外的自定义。

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
- [HTML5 中强大的原生语义](https://html.spec.whatwg.org/multipage/dom.html#aria-usage-note)
- [在 HTML 中使用 ARIA 的注意事项](https://www.w3.org/TR/aria-in-html/)
- [官方 WAI-ARIA 示例代码](https://www.w3.org/TR/wai-aria-practices/examples/button/button.html)

<section id="Quick_links">

1. [**WAI-ARIA 角色**](/zh-CN/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/zh-CN/docs/Web/Accessibility/ARIA/Roles")}}

</section>
