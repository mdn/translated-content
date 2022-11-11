---
title: word-spacing
slug: Web/CSS/word-spacing
---

{{ CSSRef() }}

## Summary

属性 `word-spacing` 设置标签、单词之间的空格长度。

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

### Accessibility concerns
过大的正或负的 `word-spacing` 将使应用样式的句子不可读。对于使用非常大正值样式的文本，单词将相距非常远甚至不再显示为句子。对于使用非常大负值样式的文本，单词将相互重叠，甚至每个单词的开头和结尾都无法识别。
清晰的 `word-spacing` 必须根据具体情况确定，因为不同的字体具有不同的字符宽度。没有一个值可以确保所有字体系列都自动保持其易读性。

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
