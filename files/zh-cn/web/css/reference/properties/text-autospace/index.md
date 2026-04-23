---
title: text-autospace
slug: Web/CSS/Reference/Properties/text-autospace
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

**`text-autospace`** [CSS](/zh-CN/docs/Web/CSS) 属性允许指定中日韩（CJK）字符和非中日韩字符之间的间距行为。

## 语法

```css
text-autospace: normal;
text-autospace: no-autospace;
text-autospace: ideograph-alpha;
text-autospace: ideograph-numeric;
text-autospace: punctuation;
text-autospace: insert;
text-autospace: replace;
text-autospace: ideograph-alpha ideograph-numeric punctuation;
text-autospace: ideograph-alpha ideograph-numeric;
text-autospace: ideograph-alpha ideograph-numeric insert;
text-autospace: auto;

/* 全局值 */
text-autospace: inherit;
text-autospace: initial;
text-autospace: revert;
text-autospace: revert-layer;
text-autospace: unset;
```

### 值

- `normal`
  - : 创建默认行为，自动在 CJK 字符与非 CJK 字符之间以及标点符号周围添加间距。此值的效果等同于同时应用 [`ideograph-alpha`](#ideograph-alpha) 和 [`ideograph-numeric`](#ideograph-numeric)。
- `<autospace>`
  - : 提供对间距行为的更精细控制。支持关键字 `no-autospace`，或组合使用 `ideograph-alpha`、`ideograph-numeric` 和 `punctuation` 中的一种或多种，可选地跟随 `insert` 或 `replace`。
    - `no-autospace`
      - : 禁用 CJK 和非 CJK 字符间的自动间距行为。
    - `ideograph-alpha`
      - : 仅在表意文字（如片假名和汉字）与非表意字母（如拉丁字母）之间添加间距。不会在表意文字与非表意数字之间添加间距。
    - `ideograph-numeric`
      - : 仅在表意文字（如片假名和汉字）与非表意数字（如拉丁数字）之间添加间距。不会在表意文字与非表意字母之间添加间距。
    - `punctuation`
      - : 根据特定语言的排版规范，在标点符号周围添加不可分割的间距。
    - `insert`
      - : 仅当表意文字与非表意文字之间不存在现有空格时，才添加指定的间距。
    - `replace`
      - : 将表意文字与非表意文字之间的现有间距（例如 [U+0020](/zh-CN/docs/Glossary/Whitespace)）替换为指定的间距。
- `auto`
  - : 允许浏览器选择符合排版规范的间距。不同浏览器和平台间的间距可能存在差异。

> [!NOTE]
> 如果既未指定 `insert` 也未指定 `replace`，则行为与 `insert` 相同。

> [!NOTE]
> 该属性与 {{CSSXRef("word-spacing")}} 和 {{CSSXRef("letter-spacing")}} 属性具有累加性。`letter-spacing` 设置产生的间距量将叠加到 `text-autospace` 创建的间距之上。此规则同样适用于 `word-spacing`。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

此示例展示了 `text-autospace` 不同取值之间的差异。请尝试从下拉框中选择一个值，观察其对文本间距的影响。

```html hidden
<form>
  <label for="autospace">请选择 <code>text-autospace</code> 的取值：</label>
  <select name="autospace" id="autospace">
    <option selected value="no-autospace">no-autospace</option>
    <option value="normal">normal</option>
    <option value="ideograph-alpha">ideograph-alpha</option>
    <option value="ideograph-numeric">ideograph-numeric</option>
  </select>
</form>
<div class="unsupported">你的浏览器不支持 <code>text-autospace</code>。</div>
```

<!-- autocorrect-disable -->

```html
<main>
  <figure class="no-autospace">
    <figcaption>
      <code>
        text-autospace: <span id="autospace-value">no-autospace</span>;
      </code>
    </figcaption>
    <div>
      <p>HTML超文本标记语言</p>
      <p>42四十二</p>
    </div>
  </figure>
</main>
```

<!-- autocorrect-enable -->

```css
.no-autospace {
  text-autospace: no-autospace;
}
.auto {
  text-autospace: auto;
}
.normal {
  text-autospace: normal;
}
.ideograph-alpha {
  text-autospace: ideograph-alpha;
}
.ideograph-numeric {
  text-autospace: ideograph-numeric;
}
```

```css hidden
figure {
  margin: 1rem;
  div {
    font-size: 2rem;
    padding: 1rem;
    font-family: sans-serif;
    border: tomato solid 1px;
  }
  p {
    margin: 0;
  }
}
main {
  max-width: max-content;
}
@supports not (text-autospace: normal) {
  form {
    display: none;
  }
  .unsupported {
    color: red;
  }
}
@supports (text-autospace: normal) {
  .unsupported {
    display: none;
  }
}
```

```js hidden
const chose = document.querySelector("#autospace");
const fig = document.querySelector("figure");
const codeValue = document.querySelector("#autospace-value");
chose.addEventListener("change", (e) => {
  fig.className = e.target.value;
  codeValue.innerText = e.target.value;
});
```

{{EmbedLiveSample("Example", 200, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref('text-spacing-trim')}}
- [`ic`](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths) 和 [`ric`](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#root_font-relative_lengths) 单位
- [CSS 文本](/zh-CN/docs/Web/CSS/Guides/Text)模块
