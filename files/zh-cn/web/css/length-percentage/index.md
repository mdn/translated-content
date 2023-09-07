---
title: <length-percentage>
slug: Web/CSS/length-percentage
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **`<length-percentage>`** [数据类型](/zh-CN/docs/Web/CSS/CSS_Types)表示一个值，该值可以是 {{Cssxref("length")}} 或 {{Cssxref("percentage")}}。

## 语法

参考 {{Cssxref("length")}} 和 {{Cssxref("percentage")}} 的文档以具体了解该类型允许使用的语法。

## 形式语法

{{csssyntax}}

## 示例

### length-percentage 示例

以下简单示例描述了使用 `<length-percentage>` 值的一些属性。

#### HTML

```html
<p>你可以在很多地方使用百分比（percentage）和长度（length）值。</p>
```

#### CSS

```css
p {
  /* length-percentage 示例 */
  width: 75%;
  height: 200px;
  margin: 3rem;
  padding: 1%;
  border-radius: 10px 10%;
  font-size: 250%;
  line-height: 1.5em;

  /* 长度值示例 */
  text-shadow: 1px 1px 1px red;
  border: 5px solid red;
  letter-spacing: 3px;

  /* 百分比值示例 */
  text-size-adjust: 20%;
}
```

#### 结果

{{EmbedLiveSample('length-percentage_示例', '100%', 320)}}

## 在 calc() 中使用

当 `<length-percentage>` 被指定为允许类型时，这意味着百分比解析为长度，因此可以在 {{cssxref("calc", "calc()")}} 表达式中使用。因此，{{cssxref("width")}} 可以接受以下所有值：

```css example-good
width: 200px;
width: 20%;
width: calc(100% - 200px);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("&lt;percentage&gt;")}}
- {{cssxref("&lt;length&gt;")}}
- [CSS 值和单位](/zh-CN/docs/Web/CSS/CSS_Values_and_Units)
