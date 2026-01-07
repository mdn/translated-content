---
title: unset
slug: Web/CSS/Reference/Values/unset
---

CSS 关键字 **`unset`** 可以分为两种情况，如果这个属性本来有从父级继承的值（这个属性默认可以继承，且父级有定义），则将该属性重新设置为继承的值，如果没有继承父级样式，则将该属性重新设置为初始值。换句话说，在第一种情况下（继承属性）它的行为类似于{{cssxref("inherit")}} ，在第二种情况下（非继承属性）类似于{{cssxref("initial")}}。它可以应用于任何 CSS 属性，包括 CSS 简写属性 {{cssxref("all")}} 。

## 示例

### Color

#### HTML

```html
<p>This text is red.</p>
<div class="foo">
  <p>This text is also red.</p>
</div>
<div class="bar">
  <p>This text is green (default inherited value).</p>
</div>
```

#### CSS

```css
.foo {
  color: blue;
}
.bar {
  color: green;
}

p {
  color: red;
}
.bar p {
  color: unset;
}
```

#### 结果

{{ EmbedLiveSample('Color') }}

### Border

#### HTML

```html
<p>This text has a red border.</p>
<div>
  <p>This text has a red border.</p>
</div>
<div class="bar">
  <p>This text has has a black border (initial default, not inherited).</p>
</div>
```

#### CSS

```css
div {
  border: 1px solid green;
}

p {
  border: 1px solid red;
}

.bar p {
  border-color: unset;
}
```

#### 结果

{{ EmbedLiveSample('Border', 'auto', 200) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{ Compat}}

## 参见

- 使用{{cssxref("initial")}}将属性设置为其初始值。
- 使用{{cssxref("revert")}}将属性重置为 user-agent 样式表规定的值（或用户样式，如果存在）。
- 使用{{cssxref("inherit")}}使元素的属性与其父元素相同。
- {{cssxref("all")}}属性允许你一次将所有属性重置为其初始，继承，恢复或未设置状态。
