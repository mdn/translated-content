---
title: text-align-last
slug: Web/CSS/Reference/Properties/text-align-last
---

CSS 属性 **`text-align-last`** 指定一行或者块中的最后一行在被强制换行之前的对齐规则。

## 语法

```css
/* 关键字值 */
text-align-last: auto;
text-align-last: start;
text-align-last: end;
text-align-last: left;
text-align-last: right;
text-align-last: center;
text-align-last: justify;

/* 全局值 */
text-align-last: inherit;
text-align-last: initial;
text-align-last: revert;
text-align-last: revert-layer;
text-align-last: unset;
```

{{cssinfo}}

### 值

- `auto`
  - : 受影响的行会根据 {{cssxref("text-align")}} 的值来对齐，除非 {{cssxref("text-align")}} 的值是 `justify`，在这种情况下，其效果等同于将 `text-align-last` 的值设置为 `start`。
- `start`
  - : 如果内容方向是左至右，则等于 `left`，反之则为 `right`。
- `end`
  - : 如果内容方向是左至右，则等于 `right`，反之则为 `left`。
- `left`
  - : 行内内容对齐到行框的左边缘。
- `right`
  - : 行内内容对齐到行框的右边缘。
- `center`
  - : 行内内容在行框中居中。
- `justify`
  - : 最后一行文字的开头与内容盒子的左侧对齐，末尾与右侧对齐。

### 形式语法

{{csssyntax}}

## 示例

### 对齐最后一行

```html hidden
<p>
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

```css
p {
  font-size: 1.4em;
  text-align: justify;
  text-align-last: center;
}
```

{{EmbedLiveSample('对齐最后一行','560')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("text-align")}}
