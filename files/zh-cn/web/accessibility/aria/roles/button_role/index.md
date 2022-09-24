---
title: Using the button role
slug: Web/Accessibility/ARIA/Roles/button_role
original_slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role
---

**[button](https://www.w3.org/TR/wai-aria/roles#button)** 角色应该用于可单击的元素，当用户激活时触发响应。在其本身，`role="button"` 可以使任何元素 (e.g. {{HTMLElement("p")}}, {{HTMLElement("span")}} or {{HTMLElement("div")}}) 作为一个屏幕阅读器的按钮控件出现。此外，该角色还可以与 `aria-pressed` 属性组合使用，以创建切换按钮。

> **备注：** 在可能的情况下，建议使用原生 HTML 按钮 (`<button>`, `<input type="button" />`, `<input type="submit" />, <input type="reset" />` and `<input type="image" />`) 而不是按钮角色，因为原生 HTML 按钮得到了较老用户代理和辅助技术的广泛支持。原生 HTML 按钮也支持键盘和焦点需求，不需要额外的定制。

## 键盘 and 聚焦

按钮是交互式控件，因此其本身是可聚焦的。如果`button` 角色被添加到一个自身不可聚焦的元素 (such as `<span>`, `<div>` or `<p>`) 那么必须使用`tabindex` 属性来使按钮可聚焦。

按钮可以由鼠标用户和键盘用户操作。对于原生 HTML `<button>` 元素，按钮的 `onclick` 事件会在鼠标单击和按下键盘的 <kbd>Space</kbd> or <kbd>Enter</kbd> 时被触发，同时这个按钮处于聚焦状态。但是如果使用其他标签来创建“自定义按钮”，那么`onclick`事件只会在点击鼠标光标时触发，即使使用`role="button"` 。因此，开发人员必须向元素添加一个单独的关键事件处理程序，以便在按下 <kbd>Space</kbd> or <kbd>Enter</kbd> 时触发按钮。

**Warning:** 把给一个链接标记为按钮角色的链接时要谨慎。按钮将使用 <kbd>Space</kbd> or <kbd>Enter</kbd> 键触发，而链接被期望使用 <kbd>Enter</kbd> 键触发。换句话说，当链接被用来作为按钮的时候，仅仅添加`role="button"`是不够的。还需要添加一个 key 事件处理程序来侦听 <kbd>Space</kbd> 键，以便与原生按钮保持一致。

## 可切换的按钮

使用`role="button"`的一个优点是它允许创建切换按钮。一个切换按钮可以有两个状态:pressed，not pressed。除了 `button`角色之外，按钮是否为切换按钮，也可以用`aria-pressed`的属性来表示。

- 如果没有 `aria-pressed`表明这不是一个切换按钮。
- 如果 `aria-pressed="false"` 表示这个按钮当前是 not pressed 的。
- 如果 `aria-pressed="true"` 表示这个按钮当前是 pressed 的。
- 如果 `aria-pressed="mixed"` 则认为按钮部分是 partially pressed 的。

## Labeling buttons

按钮应该总是有一个可访问的名称。对于大多数按钮，这个名称将与按钮中的文本相同。在某些情况下，例如图标按钮，可通过 [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) 或 [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) 属性提供可访问的名称。

## 对用户代理和辅助技术的可能影响

当使用 `button` 角色时，用户代理应该将该元素公开为操作系统的易访问性 API 中的按钮控件。屏幕阅读器应该将元素声明为一个按钮并描述其可访问的名称。语音识别软件应该可以通过说："点击"+ 按钮的可访问的 name 就能激活这个按钮。

> **备注：** 关于辅助技术如何处理这种技术，意见可能有所不同。上面所提供的信息是其中之一，因此并非规范。

## Examples

### ARIA Basic Button

在下面的代码片段中，一个 span 元素已经被赋予了按钮角色。由于使用的是 `<span>` 元素，因此需要提供 `tabindex` 属性使按钮的可聚焦并成为 tab 顺序流中的一部分。注意，这段代码提供了 CSS 样式，以使 `<span>`元素看起来像一个按钮， `handleBtnClick` 和`handleBtnKeyPress` 是事件处理程序，当鼠标单击、 <kbd>Space</kbd> or <kbd>Enter</kbd> 被按下时，执行该按钮的操作。

```html
<span role="button" tabindex="0" onclick="handleBtnClick()" onKeyPress="handleBtnKeyPress()">Save</span>
```

### ARIA Toggle Button

在这个片段中，使用 `button` 角色和 `aria-pressed` 属性，来将 `<span>` 元素转换为一个切换按钮，当按钮被激活时， `aria-pressed` 的值在 true 和 false 之间切换。

#### HTML

```html
<button type="button" aria-pressed="false" onclick="handleBtnClick(event)">
  Native button toggle
</button>

<span role="button" tabindex="0"
 aria-pressed="false" onclick="handleBtnClick(event)"
 onKeyPress="handleBtnKeyPress(event)">
  Span button toggle
</span>
```

#### CSS

```css
button,
[role="button"] {
    padding: 3px;
    border: 1px solid #CCC;
}

button[aria-pressed="true"],
[role="button"][aria-pressed="true"] {
    border: 2px solid #000;
}
```

#### JavaScript

```js
function handleBtnClick(event) {
  toggleButton(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.key === " " || event.key === "Enter") {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton(event.target);
  }
}

function toggleButton(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
}
```

### Result

{{EmbedLiveSample('ARIA_Toggle_Button')}}

## Notes

### ARIA attributes used

- [`button`](https://www.w3.org/TR/wai-aria/roles#button)
- [`aria-pressed`](https://www.w3.org/TR/wai-aria/states_and_properties#aria-pressed)

### Additional resources

- [Strong native semantics in HTML5](https://www.w3.org/TR/html5/dom.html#aria-usage-note)
- [Notes on Using ARIA in HTML](https://www.w3.org/TR/aria-in-html/)
