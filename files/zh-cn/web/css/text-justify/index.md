---
title: text-justify
slug: Web/CSS/text-justify
---

{{CSSRef}}

CSS 属性 **`text-justify`** 定义的是当文本的 {{cssxref("text-align")}} 属性被设置为 `:justify` 时的齐行方法。

```css
text-justify: none;
text-justify: auto;
text-justify: inter-word;
text-justify: inter-character;
text-justify: distribute; /* 已被废除，不提倡使用 */
```

{{cssinfo}}

## 语法

`text-justify` 属性的值只能取下面列表中的单个关键词值。

### 值

- `none`
  - : 表示关闭掉齐行的设置。表现的效果和没有设置 {{cssxref("text-align")}} 一样，当你因为某种原因需要在已经设置了 {{cssxref("text-align")}} 的元素上禁用齐行效果的时候，这个属性值很有用。
- `auto`
  - : 默认值，浏览器根据显示的效果和质量来确定符合当前状态的最佳对齐方式，当然这种对齐方式将是最适合某种语言文字的排版（例如：英语，中文，日语，韩语等）。如果没有对 `text-justify` 进行设置的话，则是默认使用这样子的对齐规则。
- `inter-word`
  - : 通过在文本中的单词之间添加空间来实现行对齐（这将会改变 {{cssxref("word-spacing")}} 的值），比如英语或韩语就是最适合使用这个属性来用空格分隔单词的语言。
- `inter-character`
  - : 通过在文本中的字符之间添加空间来实现行对齐（这将会改变 {{cssxref("letter-spacing")}} 的值），比如日语就是最适合使用这个属性的语言。
- `distribute` {{deprecated_inline}}
  - : 显示效果与设置了 `inter-word` 一致，不提倡使用这个属性，现在这个属性或许还能有效果，但那完全是为了向后兼容而被保留着。

### 语法

{{csssyntax}}

## 示例

```html hidden
<p class="none">
  <code>text-justify: none</code> —<br />Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id
  mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat
  justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="auto">
  <code>text-justify: auto</code> —<br />Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id
  mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat
  justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="dist">
  <code>text-justify: distribute</code> —<br />Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
  dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar,
  consequat justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="word">
  <code>text-justify: inter-word</code> —<br />Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
  dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar,
  consequat justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="char">
  <code>text-justify: inter-character</code> —<br />Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
  dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar,
  consequat justo id, feugiat leo. Cras eu elementum dui.
</p>
```

```css
p {
  font-size: 1.5em;
  border: 1px solid black;
  padding: 10px;
  width: 95%;
  margin: 10px auto;
  text-align: justify;
}

.none {
  text-justify: none;
}

.auto {
  text-justify: auto;
}

.dist {
  text-justify: distribute;
}

.word {
  text-justify: inter-word;
}

.char {
  text-justify: inter-character;
}
```

{{EmbedLiveSample("示例","100%",400)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("text-align")}}
