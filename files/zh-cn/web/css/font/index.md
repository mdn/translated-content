---
title: font
slug: Web/CSS/font
---

{{CSSRef}}

## 概述

`font` 属性可以用来作为 {{ Cssxref("font-style") }}, {{ Cssxref("font-variant") }}, {{ Cssxref("font-weight") }}, {{ Cssxref("font-size") }}, {{ Cssxref("line-height") }} 和 {{ Cssxref("font-family") }} 属性的简写，或将元素的字体设置为系统字体。

{{EmbedInteractiveExample("pages/css/font.html")}}

与任何简写属性一样，任何未指定的值都将设置为其对应的初始值（可能覆盖先前使用非简写属性设置的值）。虽然不能通过 font 直接设置，但是{{ cssxref("font-stretch") }}，{{ cssxref("font-size-adjust") }} 和 {{ cssxref("font-kerning") }} 也会重置为初始值。

## 语法

可以将`font`属性指定为单个关键字，它将选择系统字体，或者作为字体相关的属性的简写。

如果将 `font` 指定为系统关键字，则它必须是以下之一：[`caption`](/zh-CN/docs/Web/CSS/font#caption), [`icon`](/zh-CN/docs/Web/CSS/font#icon), [`menu`](/zh-CN/docs/Web/CSS/font#menu), [`message-box`](/zh-CN/docs/Web/CSS/font#message-box), [`small-caption`](/zh-CN/docs/Web/CSS/font#small-caption), [`status-bar`](/zh-CN/docs/Web/CSS/font#status-bar)。

如果 `font` 字体相关的属性的简写：

- 必须包含以下值：

  - {{cssxref("&lt;font-size&gt;")}}
  - {{cssxref("&lt;font-family&gt;")}}

- 可以选择性包含以下值：

  - {{cssxref("&lt;font-style&gt;")}}
  - {{cssxref("&lt;font-variant&gt;")}}
  - {{cssxref("&lt;font-weight&gt;")}}
  - {{cssxref("&lt;line-height&gt;")}}

- `font-style`, `font-variant` 和 `font-weight` 必须在 `font-size` 之前
- 在 CSS 2.1 中 `font-variant` 只可以是 `normal` 和 `small-caps`
- `line-height` 必须跟在 `font-size` 后面，由 "/" 分隔，例如 "`16px/3`"
- `font-family` 必须最后指定

### 值

- `<'font-style'>`
  - : 见 {{ Cssxref("font-style") }} 属性。
- `<'font-variant'>`
  - : 见 {{ Cssxref("font-variant") }} 属性。
- `<'font-weight'>`
  - : 见 {{ Cssxref("font-weight") }} 属性。
- `<'font-size'>`
  - : 见 {{ Cssxref("font-size") }} 属性。
- `<'line-height'>`
  - : 见 {{ cssxref("line-height") }} 属性。
- `<'font-family'>`
  - : 见 {{ Cssxref("font-family") }} 属性。

#### 系统字体

- `caption`
  - : 用于标题控件（如按钮，下拉列表等）的系统字体。
- `icon`
  - : 用于标签图标的系统字体。
- `menu`
  - : 菜单中（如下拉菜单和菜单列表）使用的系统字体。
- `message-box`
  - : 用于对话框的系统字体。
- `small-caption`
  - : 用于小标题控件的系统字体。
- `status-bar`
  - : 用于窗口状态栏的系统字体。
- 系统关键字前缀
  - : 浏览器经常会多实现几个带前缀的关键字；Gecko 实现了 `-moz-window`, `-moz-document`, `-moz-desktop`, `-moz-info`, `-moz-dialog`, `-moz-button`, `-moz-pull-down-menu`, `-moz-list`, 和 `-moz-field`.

### 形式语法

{{csssyntax("font")}}

## 示例

### 设置字体属性

```css
/* Set the font size to 12px and the line height to 14px.
   Set the font family to sans-serif */
p {
  font: 12px/14px sans-serif;
}

/* Set the font size to 80% of the parent element
   or default value (if no parent element present).
   Set the font family to sans-serif */
p {
  font: 80% sans-serif;
}

/* Set the font weight to bold,
   the font-style to italic,
   the font size to large,
   and the font family to serif. */
p {
  font: bold italic large serif;
}

/* Use the same font as the status bar of the window */
p {
  font: status-bar;
}
```

### 运行实例

```html hidden
<p>
  Change the radio buttons below to see the generated shorthand and its effect.
</p>
<form action="createShortHand()">
  <div class="cf">
    <div class="setPropCont">
      font-style<br />
      <input
        type="radio"
        id="font-style-none"
        name="font_style"
        checked=""
        value=""
        onchange="setCss()" />
      <label for="font-style-none">none</label><br />
      <input
        type="radio"
        id="font-style-normal"
        name="font_style"
        value="normal"
        onchange="setCss()" />
      <label for="font-style-normal">normal</label><br />
      <input
        type="radio"
        id="font-style-italic"
        name="font_style"
        value="italic"
        onchange="setCss()" />
      <label for="font-style-italic">italic</label><br />
      <input
        type="radio"
        id="font-style-oblique"
        name="font_style"
        value="oblique"
        onchange="setCss()" />
      <label for="font-style-oblique">oblique</label>
    </div>

    <div class="setPropCont">
      font-variant<br />
      <input
        type="radio"
        id="font-variant-none"
        name="font_variant"
        checked=""
        value=" "
        onchange="setCss()" />
      <label for="font-variant-none">none</label><br />
      <input
        type="radio"
        id="font-variant-normal"
        name="font_variant"
        value="normal"
        onchange="setCss()" />
      <label for="font-variant-normal">normal</label><br />
      <input
        type="radio"
        id="font-variant-small-caps"
        name="font_variant"
        value="small-caps"
        onchange="setCss()" />
      <label for="font-variant-small-caps">small-caps</label>
    </div>

    <div class="setPropCont">
      font-weight<br />
      <input
        type="radio"
        id="font-weight-none"
        name="font_weight"
        value=""
        onchange="setCss()" />
      <label for="font-weight-none">none</label><br />
      <input
        type="radio"
        id="font-weight-normal"
        checked=""
        name="font_weight"
        value="400"
        onchange="setCss()" />
      <label for="font-weight-normal">normal</label><br />
      <input
        type="radio"
        id="font-weight-bold"
        name="font_weight"
        value="700"
        onchange="setCss()" />
      <label for="font-weight-bold">bold</label>
    </div>

    <div class="setPropCont">
      font-size<br />
      <input
        type="radio"
        id="font-size-12px"
        name="font_size"
        value="12px"
        onchange="setCss()" />
      <label for="font-size-12px">12px</label><br />
      <input
        type="radio"
        id="font-size-16px"
        name="font_size"
        value="16px"
        checked=""
        onchange="setCss()" />
      <label for="font-size-16px">16px</label><br />
      <input
        type="radio"
        id="font-size-24px"
        name="font_size"
        value="24px"
        onchange="setCss()" />
      <label for="font-size-24px">24px</label>
    </div>

    <div class="setPropCont">
      line-height<br />
      <input
        type="radio"
        id="line-height-none"
        name="line_height"
        checked=""
        value=""
        onchange="setCss()" />
      <label for="line-height-none">none</label><br />
      <input
        type="radio"
        id="line-height-1.2"
        name="line_height"
        value="/1.2"
        onchange="setCss()" />
      <label for="line-height-1.2">1.2</label><br />
      <input
        type="radio"
        id="line-height-3"
        name="line_height"
        value="/3"
        onchange="setCss()" />
      <label for="line-height-3">3</label>
    </div>
    <br />

    <div class="setPropCont fontfamily">
      font-family<br />
      <input
        type="radio"
        id="font-family-courier"
        name="font_family"
        checked=""
        value="courier"
        onchange="setCss(5,'courier')" />
      <label for="font-family-courier">courier</label><br />
      <input
        type="radio"
        id="font-family-serif"
        name="font_family"
        value="serif"
        onchange="setCss()" />
      <label for="font-family-serif">serif</label><br />
      <input
        type="radio"
        id="font-family-sans-serif"
        name="font_family"
        value="sans-serif"
        onchange="setCss()" />
      <label for="font-family-sans-serif">sans-serif</label><br />
      <input
        type="radio"
        id="font-family-arial"
        name="font_family"
        value="arial"
        onchange="setCss()" />
      <label for="font-family-arial">Arial</label><br />
      <input
        type="radio"
        id="font-family-monospace"
        name="font_family"
        value="monospace"
        onchange="setCss()" />
      <label for="font-family-monospace">monospace</label><br />
      <input
        type="radio"
        id="font-family-cursive"
        name="font_family"
        value="cursive"
        onchange="setCss()" />
      <label for="font-family-cursive">cursive</label><br />
      <input
        type="radio"
        id="font-family-fantasy"
        name="font_family"
        value="fantasy"
        onchange="setCss()" />
      <label for="font-family-fantasy">fantasy</label><br />
      <input
        type="radio"
        id="font-family-system-ui"
        name="font_family"
        value="system-ui"
        onchange="setCss()" />
      <label for="font-family-system-ui">system-ui</label><br />
    </div>
  </div>

  <div class="cf propInputs">
    <div class="propInputCont tar">font :</div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_style" /><br />
      font-style <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_variant" /> <br />
      font-variant <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_weight" /> <br />
      font-weight <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss mandatory" id="input_font_size" /> <br />
      font-size <br />
      mandatory
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_line_height" /> <br />
      line-height <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss mandatory" id="input_font_family" />
      <br />
      font-family <br />
      mandatory
    </div>
  </div>
</form>

<div class="fontShortHand">This is some sample text.</div>
<br /><br /><br /><br /><br /><br />
```

```css hidden
body,
input {
  font: 14px arial;
  overflow: hidden;
}

.propInputCont {
  float: left;
  text-align: center;
  margin-right: 5px;
  width: 80px;
}

.setPropCont {
  float: left;
  margin-right: 5px;
  width: 120px;
}

.propInputs,
.setPropCont {
  margin-bottom: 1em;
}

.curCss {
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  width: 80px;
}

.mandatory {
  border-bottom-color: red;
}

.cf::before,
.cf::after {
  content: " ";
  display: table;
}

.cf::after {
  clear: both;
}

.tar {
  width: 40px;
  text-align: right;
}
.fontfamily {
  display: inline-block;
}
```

```js hidden
const textAreas = document.getElementsByClassName("curCss");

function getProperties() {
  return (
    `${getCheckedValue("font_style")} ` +
    `${getCheckedValue("font_variant")} ` +
    `${getCheckedValue("font_weight")} ` +
    `${getCheckedValue("font_size")}` +
    `${getCheckedValue("line_height")} ` +
    `${getCheckedValue("font_family")}`
  );
}

function getCheckedValue(radioName) {
  const radios = document.forms[0].elements[radioName];
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      const curElemName = `input_${radioName}`;
      const curElem = document.getElementById(curElemName);
      curElem.value = radios[i].value;

      return radios[i].value;
    }
  }
}

function setCss() {
  getProperties();
  injectCss(shortText);
}

function injectCss(cssFragment) {
  const old = document.body.getElementsByTagName("style");
  if (old.length > 1) {
    old[1].parentElement.removeChild(old[1]);
  }
  css = document.createElement("style");
  css.textContent = `.fontShortHand{font: ${cssFragment}}`;
  document.body.appendChild(css);
}

setCss();
```

{{ EmbedLiveSample('运行实例','100%', '440px')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
