---
title: line-clamp
slug: Web/CSS/line-clamp
---

{{CSSRef}}

**`line-clamp`** [CSS](/zh-CN/docs/Web/CSS) 属性可以把{{Glossary("Block", "块容器")}}中的内容限制为指定的行数。

> [!NOTE]
> 为了兼容旧版本，供应商前缀的 `-webkit-line-clamp` 属性仅在与 {{cssxref("display")}} 属性设置为 `-webkit-box` 或 `-webkit-inline-box` 且 {{cssxref("box-orient", "-webkit-box-orient")}} 属性设置为 `vertical` 时生效。尽管这些带前缀的属性已被废弃，但这三个属性的相互依赖关系是一种完全规范化的行为，并将继续得到支持。

它只有在 {{cssxref("display")}} 属性设置成 `-webkit-box` 或者 `-webkit-inline-box` 并且 {{cssxref("box-orient")}} 属性设置成 `vertical`时才有效果。

在大部分情况下，也需要设置 {{cssxref("overflow")}} 属性为 `hidden`，否则，里面的内容不会被裁减，并且在内容显示为指定行数后还会显示省略号。

当应用于锚（anchor）元素时，截断可以发生在文本中间，而不必在末尾。

## 语法

```css
/* 关键词值 */
line-clamp: none;

/* 整数值 */
line-clamp: 3;
line-clamp: 10;

/* 全局值 */
line-clamp: inherit;
line-clamp: initial;
line-clamp: revert;
line-clamp: revert-layer;
line-clamp: unset;
```

- `none`
  - : 这个值表明内容显示不会被限制。
- {{cssxref("integer")}}
  - : 这个值表明内容显示了多少行之后会被限制。必须大于 0。

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
