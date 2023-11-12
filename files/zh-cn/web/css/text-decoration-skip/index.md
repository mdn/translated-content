---
title: text-decoration-skip
slug: Web/CSS/text-decoration-skip
---

{{CSSRef}}

CSS **`text-decoration-skip`** 属性定义了元素哪些部分的内容需要被文本修饰所跳过。它可以控制所有该元素或该元素的祖先所绘制的文本修饰线。

```css
/* 关键字 */
text-decoration-skip: none;
text-decoration-skip: objects;
text-decoration-skip: spaces;
text-decoration-skip: edges;
text-decoration-skip: box-decoration;

/* 使用多个关键字 */
text-decoration-skip: objects spaces;
text-decoration-skip: leading-spaces trailing-spaces;
text-decoration-skip: objects edges box-decoration;

/* 全局值 */
text-decoration-skip: inherit;
text-decoration-skip: initial;
text-decoration-skip: unset;
```

> **备注：** `ink` 值被移动至 {{cssxref("text-decoration-skip-ink")}} 属性。

{{cssinfo}}

## 语法

### 取值

- `none`
  - : 没有任何内容被跳过。因此，文本修饰会为所有文本内容和行内元素进行绘制。
- `objects`
  - : 拥有完整盒模型的原子行内元素会被跳过，例如图片和行内块元素。
- `spaces`
  - : 所有的空格会被跳过，包括：所有的 [Unicode 空白字符](https://www.unicode.org/reports/tr44/#White_Space) 和所有的分词符，以及任意相邻的 {{cssxref("letter-spacing")}} 或 {{cssxref("word-spacing")}}。
- `leading-spaces`
  - : 除了只跳过开始的空格外，与 `spaces` 相同。
- `trailing-spaces`
  - : 除了只跳过结尾的空格外，与 `spaces` 相同。
- `edges`
  - : 文本修饰的开始与结束会比原有的装饰范围向内收缩（例如半个线宽）。这样，相邻的元素的下划线就可以分开。（这对于中文很重要，因为在中文中，下划线也是一种形式的标点符号。）
    ![An example of "text-decoration-skip: edges;".](decoration-skip-edges.png)
- `box-decoration`
  - : 文本修饰会跳过盒模型的内边距、边框、外边距。这只会影响到祖先元素定义的修饰；修饰的盒不会渲染本身的盒修饰。

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<p><em>Hey,</em> <em>grab a cup of coffee!</em></p>
```

### CSS

```css
p {
  margin: 0;
  font-size: 3em;
  text-decoration: underline;
  text-decoration-skip: edges;
}
```

### 结果

{{EmbedLiveSample("示例", "100%", 60)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
