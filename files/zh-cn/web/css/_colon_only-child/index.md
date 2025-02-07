---
title: :only-child
slug: Web/CSS/:only-child
---

{{CSSRef}}

**`:only-child`** CSS [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)表示没有任何兄弟元素的元素。这与 `:first-child:last-child` 或 `:nth-child(1):nth-last-child(1)` 相同，但前者具有更小的权重性。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-only-child.html", "tabbed-shorter")}}

> [!NOTE]
> 按照最初的定义，被选择的元素必须拥有一个父级元素。从选择器 Level 4 开始，这不再是必须的了。

## 语法

```css
:only-child {
  /* ... */
}
```

## 示例

### 基础示例

#### HTML

```html
<div>
  <div>我是唯一子元素。</div>
</div>

<div>
  <div>我是第一个兄弟元素。</div>
  <div>我是第二个兄弟元素。</div>
  <div>
    我是第三个兄弟元素。
    <div>但这又是唯一的子元素。</div>
  </div>
</div>
```

#### CSS

```css
div:only-child {
  color: red;
}

div {
  display: inline-block;
  margin: 6px;
  outline: 1px solid;
}
```

#### 结果

{{EmbedLiveSample('基础示例','100%',180)}}

### 一个列表示例

#### HTML

```html
<ol>
  <li>
    第一
    <ul>
      <li>该列表仅有一个元素。</li>
    </ul>
  </li>
  <li>
    第二
    <ul>
      <li>该列表有三个元素。</li>
      <li>该列表有三个元素。</li>
      <li>该列表有三个元素。</li>
    </ul>
  </li>
</ol>
```

#### CSS

```css
li li {
  list-style-type: disc;
}

li:only-child {
  color: red;
  list-style-type: square;
}
```

#### 结果

{{EmbedLiveSample('一个列表示例', '100%', 210)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref(":only-of-type")}}
- {{Cssxref(":first-child")}}
- {{Cssxref(":last-child")}}
- {{Cssxref(":nth-child")}}
