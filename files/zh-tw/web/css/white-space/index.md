---
title: white-space
slug: Web/CSS/white-space
---

{{CSSRef}}

此 CSS **`white-space`** 屬性決定如何處理元素內的空白字元。

> **備註：** 如果要讓文字本身斷行，請改用 {{cssxref("overflow-wrap")}}、{{cssxref("word-break")}} 或 {{cssxref("hyphens")}}。

```css
/* Keyword values */
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;

/* Global values */
white-space: inherit;
white-space: initial;
white-space: unset;
```

```html hidden
<div class="grid">
<div class="col">
  <div class="cell">
    <div class="label">normal</div>
    <div>
  <p class="wspNormal">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nulla pellentesque metus eget massa feugiat lobortis.
  </p>
    </div>
  </div>
  <div class="cell">
    <div class="label">pre-wrap</div>
    <div>
  <p class="wspPreWrap">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nulla pellentesque metus eget massa feugiat lobortis.
  </p>
    </div>
  </div>
  <div class="cell">
    <div class="label">pre-line</div>
    <div>
  <p class="wspPreLine">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nulla pellentesque metus eget massa feugiat lobortis.
  </p>
    </div>
  </div>
  <div class="cell">
    <div class="label">nowrap</div>
    <div>
  <p class="wspNowrap">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nulla pellentesque metus eget massa feugiat lobortis.
  </p>
    </div>
  </div>
  <div class="cell">
    <div class="label">pre</div>
    <div>
  <p class="wspPre">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nulla pellentesque metus eget massa feugiat lobortis.
  </p>
    </div>
  </div>
  <div class="note">
    Examples above are applied to the following HTML (square represents white spaces):
    <pre>☐☐&lt;p&gt;
☐☐☐☐Lorem ipsum dolor sit amet, consectetur adipiscing elit.
☐☐☐☐Nulla pellentesque metus eget massa feugiat lobortis.
☐☐&lt;/p&gt;</pre>
  </div>
</div>
</div>
```

```css hidden
html,body {
  height: 100%;
  box-sizing: border-box;
}

pre { margin-bottom: 0; }

.grid {
  width: 100%;
  height: 100%;
  display: flex;
  background: #EEE;
  font: 1em monospace;
}

.row {
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.col {
  display: flex;
  flex: 1 auto;
  flex-direction: column;
}

.cell {
  box-sizing: border-box;
  margin: .5em;
  padding: 0;
  background-color: #FFF;
  overflow: hidden;
  text-align: center;
}

.note {
  background: #fff3d4;
  padding: 1em;
  margin: .5em;
  font: .8em sans-serif;
  text-align: left;
  flex: none;
}

p {
  width: 50%;
  font: .8em sans-serif;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  resize: horizontal;
  background: #E4F0F5;
  padding: .5em;
  margin: .5em auto 0;
  text-align: left;
}

.wspNormal  { white-space: normal; }
.wspNowrap  { white-space: nowrap; }
.wspPre     { white-space: pre; }
.wspPreWrap { white-space: pre-wrap; }
.wspPreLine { white-space: pre-line; }
```

{{EmbedLiveSample("white-space", "100%", 530, "", "", "example-outcome-frame")}}

{{cssinfo}}

## Syntax

`white-space` 的特性值為下列其中之一。

### Values

- `normal`
  - : 連續的空白字元會被合併(collapse)，換行字元被視為空白字元。換行只在被文字空間限制時發生。
- `nowrap`
  - : 對待空白字元的方式跟 `normal` 一樣，且會強制不換行。
- `pre`
  - : 連續的空白字元都會被保留。換行在有換行字元以及{{HTMLElement("br")}}時發生。
- `pre-wrap`
  - : 連續的空白字元都會被保留。換行會在換行字元、有{{HTMLElement("br")}}元素以及被文字空間限制時發生。
- `pre-line`
  - : 連續的空白字元會被合併(collapse)。換行在換行字元、 {{HTMLElement("br")}}以及被文字空間限制時發生。

下列表格整理了各項 `white-space` 值的行為：

|            | New lines | Spaces and tabs | Text wrapping |
| ---------- | --------- | --------------- | ------------- |
| `normal`   | Collapse  | Collapse        | Wrap          |
| `nowrap`   | Collapse  | Collapse        | No wrap       |
| `pre`      | Preserve  | Preserve        | No wrap       |
| `pre-wrap` | Preserve  | Preserve        | Wrap          |
| `pre-line` | Preserve  | Collapse        | Wrap          |

### Formal syntax

{{csssyntax}}

## Examples

### Basic example

```css
code {
  white-space: pre;
}
```

### Line breaks inside {{HTMLElement("pre")}} elements

```css
pre {
  word-wrap: break-word;      /* IE 5.5-7 */
  white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
  white-space: pre-wrap;      /* Modern browsers */
}
```

## See it in action

```html hidden
    <div id="css-code" class="box">
     p { white-space: <select>
       <option>normal</option>
       <option>nowrap</option>
       <option>pre</option>
       <option>pre-wrap</option>
       <option>pre-line</option>
     </select> }
    </div>
    <div id="results" class="box">
    <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
```

```css hidden
.box {
  width: 300px;
  padding: 16px;
  border-radius: 10px;
}

#css-code {
  background-color: rgb(220,220,220);
  font-size: 16px;
}

#results {
  background-color: rgb(230,230,230);
  overflow-x: scroll;
  height: 400px;
  white-space: normal;
  font-size: 14px;
}
```

```js hidden
var select  = document.querySelector("#css-code select");
var results = document.querySelector("#results p");
select.addEventListener("change", function(e) {
  results.setAttribute("style", "white-space: "+e.target.value);
})
```

### Source

```plain
    <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
```

### CSS + Result

{{ EmbedLiveSample('See_in_action', '80%', '500px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that define how words break _within themselves_: {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}}, {{cssxref("hyphens")}}
