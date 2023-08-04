---
title: word-break
slug: Web/CSS/word-break
---

{{CSSRef}}

CSS 属性 `word-break` 指定了怎样在单词内断行。

{{EmbedInteractiveExample("pages/css/word-break.html")}}

## 语法

```
/* Keyword values */
word-break: normal;
word-break: break-all;
word-break: keep-all;
word-break: break-word; /* deprecated */

/* Global values */
word-break: inherit;
word-break: initial;
word-break: unset;
```

### 值

- `normal`
  - : 使用默认的断行规则。
- `break-all`
  - : 对于 non-CJK (CJK 指中文/日文/韩文) 文本，可在任意字符间断行。
- `keep-all`
  - : CJK 文本不断行。Non-CJK 文本表现同 `normal`。
- `break-word` {{Deprecated_Inline}}
  - : 他的效果是`word-break: normal` 和 `overflow-wrap: anywhere` 的合，不论 {{cssxref("overflow-wrap")}}的值是多少。

> **备注：** 与 `word-break: break-word` 和 `overflow-wrap: break-word`（详见 {{cssxref("overflow-wrap")}}）对比，`word-break: break-word` 将在文本可能溢出其容器的确切位置创建一个断点。

## 规范

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<p>1. <code>word-break: normal</code></p>
<p class="normal narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>2. <code>word-break: break-all</code></p>
<p class="breakAll narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>3. <code>word-break: keep-all</code></p>
<p class="keepAll narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>4. <code>word-break: break-word</code></p>
<p class="breakWord narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>
```

### CSS

```css
.narrow {
  padding: 10px;
  border: 1px solid;
  width: 500px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 1px;
}

.normal {
  word-break: normal;
}

.breakAll {
  word-break: break-all;
}

.keepAll {
  word-break: keep-all;
}

.breakWord {
  word-break: break-word;
}
```

{{EmbedLiveSample('示例', '100%', 600)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("overflow-wrap")}}
