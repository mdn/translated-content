---
title: ":nth-of-type"
slug: Web/CSS/:nth-of-type
---

{{CSSRef}}

**`:nth-of-type()`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)基于相同类型（标签名称）的兄弟元素中的位置来匹配元素。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-nth-of-type.html", "tabbed-shorter")}}

## 语法

`nth-of-type` 伪类用单个参数指定，该参数表示匹配元素的模式。

有关其语法的详细说明，请参阅 {{Cssxref(":nth-child")}}。

```css-nolint
:nth-of-type(<an-plus-b> | even | odd) {
  /* ... */
}
```

## 示例

### 基本示例

#### HTML

```html
<div>
  <div>这段不参与计数。</div>
  <p>这是第一段。</p>
  <p class="fancy">这是第二段。</p>
  <div>这段不参与计数。</div>
  <p class="fancy">这是第三段。</p>
  <p>这是第四段。</p>
</div>
```

#### CSS

```css
/* 奇数段 */
p:nth-of-type(2n + 1) {
  color: red;
}

/* 偶数段 */
p:nth-of-type(2n) {
  color: blue;
}

/* 第一段 */
p:nth-of-type(1) {
  font-weight: bold;
}

/* 这将匹配第三个段落，因为它匹配的元素是 2n+1 并且具有 fancy 类。
   第二个段落具有 fancy 类，但不匹配，因为它不是:nth-of-type(2n+1)。
*/
p.fancy:nth-of-type(2n + 1) {
  text-decoration: underline;
}
```

#### 结果

{{EmbedLiveSample('基本示例', 250, 200)}}

> **备注：** 使用此选择器无法选择 nth-of-class。选择器仅在创建匹配列表时查找类型。但是你可以基于 `:nth-of-type` 的位置**和**类名为元素应用 CSS，就像上面的示例中所示。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref(":nth-child")}}、{{Cssxref(":nth-last-of-type")}}
