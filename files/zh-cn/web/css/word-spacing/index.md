---
title: word-spacing
slug: Web/CSS/word-spacing
---

{{ CSSRef() }}

## Summary

属性 `word-spacing` 用于声明标签和单词直接的间距行为。

{{cssinfo}}

## Syntax

```html
word-spacing: normal;    /* Keyword value */
word-spacing: 3px;       /* <length> values */
word-spacing: 0.3em;

word-spacing: inherit;
```

### Values

- `normal`
  - : 正常的单词间距，由当前字体和/或浏览器定义。
- `<length>`
  - : 通过指定具体的额外间距来增加字体的单词间距。查看 {{cssxref("&lt;length&gt;")}} 了解可用单位。
- `<percentage>`
  - : 通过指定受影响字符的宽度的百分比的方式来增加的间距。

### Formal syntax

[How to read CSS syntax.](/docs/Web/CSS/Value_definition_syntax)

{{csssyntax("word-spacing")}}

## Examples

以下 CSS 代码：

```css
#mozdiv1 {
  word-spacing: 15px;
}

#mozdiv2 {
  word-spacing: 5em;
}
```

会为两个包含如下内容 {{ HTMLElement("div") }} 标签添加如下样式：

![example.png](/@api/deki/files/6103/=example.png)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
