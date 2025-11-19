---
title: width
slug: Web/CSS/Reference/Properties/width
---

The **`width`** CSS property specifies the width of an element. By default, the property defines the width of the [content area](/zh-TW/docs/Web/CSS/Guides/Box_model/Introduction#content-area). If {{cssxref("box-sizing")}} is set to `border-box`, however, it instead determines the width of the [border area](/zh-TW/docs/Web/CSS/Guides/Box_model/Introduction#border-area).

```css
/* <length> values */
width: 300px;
width: 25em;

/* <percentage> value */
width: 75%;

/* Keyword values */
width: 25em border-box;
width: 75% content-box;
width: max-content;
width: min-content;
width: available;
width: fit-content;
width: auto;

/* Global values */
width: inherit;
width: initial;
width: unset;
```

## Examples

```html hidden
<div class="grid">
  <div class="col">
    <div class="cell">
      &lt;length&gt; values
      <p class="w1">width: 150px</p>
      <p class="w2">width: 20em</p>
      <p
        class="w3 warning"
        title="this feature is experimental and might not work in your browser">
        width: 20em content-box
      </p>
      <p
        class="w4 warning"
        title="this feature is experimental and might not work in your browser">
        width: 20em border-box
      </p>
    </div>
    <div class="cell">
      &lt;percentage&gt; values
      <p class="w5">width: 75%</p>
      <p
        class="w6 warning"
        title="this feature is experimental and might not work in your browser">
        width: 75% content-box
      </p>
      <p
        class="w7 warning"
        title="this feature is experimental and might not work in your browser">
        width: 75% border-box
      </p>
    </div>
    <div class="cell">
      Keyword values
      <p>width: auto</p>
      <p
        class="w8 warning"
        title="this feature is experimental and might not work in your browser">
        width: max-content
      </p>
      <p
        class="w9 warning"
        title="this feature is experimental and might not work in your browser">
        width: min-content
      </p>
      <p
        class="w10 warning"
        title="this feature is experimental and might not work in your browser">
        width: available
      </p>
      <p
        class="w11 warning"
        title="this feature is experimental and might not work in your browser">
        width: fit-content
      </p>
    </div>
  </div>
</div>
```

```css hidden
html,
body {
  height: 100%;
  box-sizing: border-box;
}

.grid {
  width: 100%;
  height: 100%;
  display: flex;
  background: #eee;
  font: 1em monospace;
}

.col {
  display: flex;
  flex: 1 auto;
  flex-direction: column;
}

.cell {
  margin: 0.5em;
  padding: 0.5em;
  background-color: #fff;
  overflow: hidden;
  text-align: left;
  font-style: italic;
}

p {
  font-size: 1rem;
  font-style: normal;
  background: #e4f0f5;
  padding: 0.5em;
  margin: 0.5em;
}

.warning {
  background: #e4e4e4;
}

.warning:before {
  content: "⚠️ ";
}

/*  values */
.w1 {
  width: 150px;
}
.w2 {
  width: 20em;
}
.w3 {
  width: 20em content-box;
}
.w4 {
  width: 20em border-box;
}

/*  value */
.w5 {
  width: 75%;
}
.w6 {
  width: 75% content-box;
}
.w7 {
  width: 75% border-box;
}

/* Keyword values (mostly experimental) */
.w8 {
  width: max-content;
}
.w9 {
  width: min-content;
}
.w10 {
  width: available;
}
.w11 {
  width: fit-content;
}
```

{{EmbedLiveSample("examples", "100%", 660)}}

> [!NOTE]
> {{cssxref("min-width")}} 和 {{cssxref("max-width")}} 會覆寫 {{cssxref("width")}}.

{{cssinfo}}

## Syntax

The `width` property is specified as either:

- one of the following keyword values: [`available`](#available), [`min-content`](#min-content), [`max-content`](#max-content), [`fit-content`](#fit-content), [`auto`](#auto).
- a [`<length>`](#length) or a [`<percentage>`](#percentage). This may optionally be followed by one of the following keywords: [`border-box`](#border-box), [`content-box`](#content-box).

### Values

- {{cssxref("&lt;length&gt;")}}
  - : Defines the width as an absolute value.
- {{cssxref("&lt;percentage&gt;")}}
  - : Defines the width as a percentage of the containing block's width. If the width of the containing block depends on the width of the element, the resulting layout is undefined.
- `border-box`{{experimental_inline}}
  - : If present, the preceding {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} is applied to the element's border box.
- `content-box` {{experimental_inline}}
  - : If present, the preceding {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} is applied to the element's content box.
- `auto`
  - : The browser will calculate and select a width for the specified element.
- `fill` {{experimental_inline}}
  - : Use the `fill-available` inline size or `fill-available` block size, as appropriate to the writing mode.
- `max-content` {{experimental_inline}}
  - : The intrinsic preferred width.
- `min-content` {{experimental_inline}}
  - : The intrinsic minimum width.
- `available` {{experimental_inline}}
  - : The containing block width minus horizontal margin, border and padding.
- `fit-content` {{experimental_inline}}
  - : The larger of: the intrinsic minimum width
    - the smaller of the intrinsic preferred width and the available width

### Formal syntax

{{csssyntax}}

## 範例

### 預設寬度

```css
p.goldie {
  background: gold;
}
```

```html
<p class="goldie">The Mozilla community produces a lot of great software.</p>
```

{{EmbedLiveSample('預設寬度', '500px', '64px')}}

### 像素和相對大小

```css
.px_length {
  width: 200px;
  background-color: red;
  color: white;
  border: 1px solid black;
}

.em_length {
  width: 20em;
  background-color: white;
  color: red;
  border: 1px solid black;
}
```

```html
<div class="px_length">Width measured in px</div>
<div class="em_length">Width measured in em</div>
```

{{EmbedLiveSample('像素和相對大小', '500px', '64px')}}

### 百分比

```css
.percent {
  width: 20%;
  background-color: silver;
  border: 1px solid red;
}
```

```html
<div class="percent">Width in percentage</div>
```

{{EmbedLiveSample('百分比', '500px', '64px')}}

### 內容最大值

```css
p.maxgreen {
  background: lightgreen;
  width: intrinsic; /* Safari/WebKit uses a non-standard name */
  width: -moz-max-content; /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
}
```

```html
<p class="maxgreen">The Mozilla community produces a lot of great software.</p>
```

{{EmbedLiveSample('內容最大值', '500px', '64px')}}

### 內容最小值

```css
p.minblue {
  background: lightblue;
  width: -moz-min-content; /* Firefox */
  width: -webkit-min-content; /* Chrome */
}
```

```html
<p class="minblue">The Mozilla community produces a lot of great software.</p>
```

{{EmbedLiveSample('內容最小值', '500px', '155px')}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [box model](/zh-TW/docs/Web/CSS/Guides/Box_model/Introduction), {{cssxref("height")}}, {{cssxref("box-sizing")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}
