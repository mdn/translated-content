---
title: ":only-of-type"
slug: Web/CSS/:only-of-type
---

{{CSSRef}}

**`:only-of-type`** CSS [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)代表了任意一个元素，这个元素没有其他相同类型的兄弟元素。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-only-of-type.html", "tabbed-shorter")}}

> **备注：** 根据原来的定义，被选择的元素必须具有父元素。直到 Selectors Level 4 开始，这个要求就不是必须的了。

## 语法

```css
:only-of-type {
  /* ... */
}
```

## 示例

### 为没有同类型兄弟元素的元素设置样式

#### HTML

```html
<main>
  <div>I am `div` #1.</div>
  <p>I am the only `p` among my siblings.</p>
  <div>I am `div` #2.</div>
  <div>
    I am `div` #3.
    <i>I am the only `i` child.</i>
    <em>I am `em` #1.</em>
    <em>I am `em` #2.</em>
  </div>
</main>
```

#### CSS

```css
main :only-of-type {
  color: red;
}
```

#### 结果

{{EmbedLiveSample('为没有同类型兄弟元素的元素设置样式','100%',180)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref(":only-child")}}
- {{Cssxref(":first-of-type")}}
- {{Cssxref(":last-of-type")}}
- {{Cssxref(":nth-of-type")}}
