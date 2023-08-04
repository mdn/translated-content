---
title: column-count
slug: Web/CSS/column-count
---

{{CSSRef}}

**column-count** CSS 属性，描述元素的列数。

```plain
column-count: 3;
column-count: auto;

column-count: inherit;
column-count: initial;
column-count: unset;
```

## 语法

{{cssinfo}}

### 取值

- `auto`
  - : 用来表示列的数量由其他 CSS 属性指定，例如 {{cssxref("column-width")}}.
- `<number>`
  - : 是个严格的正数 {{cssxref("&lt;integer&gt;")}} ，用来描述元素内容被划分的理想列数。假如 {{cssxref("column-width")}}也被设置为非零值，此参数仅表示所允许的最大列数。

## 例子

```css
.content-box {
  border: 10px solid #000000;
  column-count: 3;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
