---
title: line-clamp
slug: Web/CSS/Reference/Properties/line-clamp
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`line-clamp`** 用于将{{Glossary("block", "区块")}}容器的内容限制为指定的行数。

> [!NOTE]
> 为了兼容旧版本，带有供应商前缀的 `-webkit-line-clamp` 属性只有在 {{cssxref("display")}} 属性设置为 `-webkit-box` 或 `-webkit-inline-box`，并且 {{cssxref("box-orient", "-webkit-box-orient")}} 属性设置为 `vertical` 时才会生效。尽管这些带前缀的属性已经被弃用，但这三者之间的依赖关系属于明确规范的行为，并且仍会继续受到支持。

在大多数情况下，你还需要将 {{cssxref("overflow")}} 设置为 `hidden`，否则内容不会被裁剪，但在达到指定行数后仍然会显示省略号。

当应用于锚点元素时，截断可能会发生在文本的中间，而不一定在末尾。

## 语法

```css
/* 关键字值 */
line-clamp: none;

/* <integer> 值 */
line-clamp: 3;
line-clamp: 10;

/* 全局值 */
line-clamp: inherit;
line-clamp: initial;
line-clamp: revert;
line-clamp: revert-layer;
line-clamp: unset;
```

### 值

- `none`
  - : 该值表示内容不会被截断。
- {{cssxref("integer")}}
  - : 该值表示内容在指定的行数之后会被截断。其值必须大于 0。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 截断段落

#### HTML

```html
<p>
  在此示例中，<code>-webkit-line-clamp</code> 属性设置为
  <code>2</code>，即文本在超过两行后将被截断。文本截断处将显示省略号。
</p>
```

#### CSS

```css
p {
  width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
```

#### 结果

{{EmbedLiveSample("截断段落", "100%", "130")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [行截断（截断多行文本）](https://css-tricks.com/line-clampin/)
