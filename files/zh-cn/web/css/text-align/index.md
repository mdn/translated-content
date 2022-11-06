---
title: text-align
slug: Web/CSS/text-align
---

{{CSSRef}}

`text-align` CSS 属性定义行内内容（例如文字）如何相对它的块父元素对齐。`text-align` 并不控制块元素自己的对齐，只控制它的行内内容的对齐。

```css
/* Keyword values */
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: start;
text-align: end;
text-align: match-parent;

/* Block alignment values (Non-standard syntax) */
text-align: -moz-center;
text-align: -webkit-center;

/* Global values */
text-align: inherit;
text-align: initial;
text-align: unset;
```

```html hidden
<div class="grid">
  <div class="col">
    <div class="row">
      <div class="cell">
        left
        <p class="taLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellen tesque vehicu la con vallis.</p>
      </div>
      <div class="cell">
        start (ltr)
        <p class="taStart ltr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellen tesque vehicu la con vallis.</p>
      </div>
      <div class="cell">
        start (rtl)
        <p class="taStart rtl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellen tesque vehicu la con vallis.</p>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        right
        <p class="taRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellen tesque vehicu la con vallis.</p>
      </div>
      <div class="cell">
        end (ltr)
        <p class="taEnd ltr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellen tesque vehicu la con vallis.</p>
      </div>
      <div class="cell">
        end (rtl)
        <p class="taEnd rtl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellen tesque vehicu la con vallis.</p>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        center
        <p class="taCenter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellen tesque vehicu la con vallis.</p>
      </div>
      <div class="cell">
        justify
        <p class="taJustify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellen tesque vehicu la con vallis.</p>
      </div>
      <div class="cell">
        justify-all
        <p class="taJustifyAll">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellen tesque vehicu la con vallis.</p>
      </div>
    </div>
  </div>
</div>
```

```css hidden
html,body {
  height: 100%;
  box-sizing: border-box;
}

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
}

.col {
  display: flex;
  flex: 1 auto;
  flex-direction: column;
}

.cell {
  width: calc(33.33% - 1em);
  box-sizing: border-box;
  margin: .5em;
  padding: .5em;
  background-color: #FFF;
  overflow: hidden;
}

@media (max-width: 30em) {
  .row {
    flex-direction: column;
  }
}

p {
  font: .8em sans-serif;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  resize: horizontal;
  background: #E4F0F5;
  padding: .5em;
  margin: .5em 0 0;
}

.taLeft       { text-align: left;        }
.taRight      { text-align: right;       }
.taCenter     { text-align: center;      }
.taJustify    { text-align: justify;     }
.taJustifyAll { text-align: justify-all; }
.taStart      { text-align: start;       }
.taEnd        { text-align: end;         }

.rtl { direction: rtl; }
.ltr { direction: ltr; }
```

{{EmbedLiveSample("text-align", "100%", 350)}}

{{cssinfo}}

## 语法

text-align 属性指定为从以下值列表中选择的单个关键字。

### Values

- `start` {{experimental_inline}}
  - : 如果内容方向是左至右，则等于`left`，反之则为`right`。
- `end` {{experimental_inline}}
  - : 如果内容方向是左至右，则等于`right`，反之则为`left`。
- `left`
  - : 行内内容向左侧边对齐。
- `right`
  - : 行内内容向右侧边对齐。
- `center`
  - : 行内内容居中。
- `<string>` {{experimental_inline}}
  - : 第一个出现的该（单字符）字符串被用来对齐。跟随的关键字定义对齐的方向。例如，可用于让数字值根据小数点对齐。
- `justify`
  - : 文字向两侧对齐，对最后一行无效。
- `justify-all` {{experimental_inline}}
  - : 和 justify 一致，但是强制使最后一行两端对齐。
- `match-parent`
  - : 和`inherit`类似，区别在于`start`和`end`的值根据父元素的{{cssxref("direction")}}确定，并被替换为恰当的`left`或`right`。

### 指示语法

{{csssyntax("text-align")}}

## 示例

[查看在线演示](/samples/cssref/text-align.html)

### Live Examples

div { **text-align: center**; border:solid; }

p { background:gold; width:22em; }

some more inline content...div { **text-align: center**; border:solid; }

p { background:gold; width:22em; **margin: 1em auto**; }

some more inline content...div { **text-align:-moz-center**; text-align:-webkit-center; border:solid; }

p { background:gold; width:22em; }

some more inline content...

### 备注

居中一个块元素且不居中它的行内内容的标准兼容的方法是将它的左、右`margin 设为`auto，例如：

`margin:auto;` 或`margin:0 auto;` 或`margin-left:auto; margin-right:auto;`

## 示例

### Left alignment

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius.
  Suspendisse in libero risus, in interdum massa.
  Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: left;
  border: solid;
}
```

#### Result

{{EmbedLiveSample("Left_alignment","100%","100%")}}

### Centered text

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius.
  Suspendisse in libero risus, in interdum massa.
  Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: center;
  border: solid;
}
```

#### Result

{{EmbedLiveSample("Centered_text","100%","100%")}}

### Justify

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius.
  Suspendisse in libero risus, in interdum massa.
  Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: justify;
  border: solid;
}
```

#### Result

{{EmbedLiveSample("Justify","100%","100%")}}

### Notes

The standard-compatible way to center a block itself without centering its inline content is setting the left and right {{cssxref("margin")}} to `auto`, e.g.:

```css
.something {
  margin: auto;
}
```

```css
.something {
  margin: 0 auto;
}
```

```css
.something {
  margin-left: auto;
  margin-right: auto;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref("margin","margin:auto")}}, {{Cssxref("margin-left","margin-left:auto")}}, {{Cssxref("vertical-align")}}
