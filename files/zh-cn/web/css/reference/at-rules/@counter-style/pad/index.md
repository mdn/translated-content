---
title: pad
slug: Web/CSS/Reference/At-rules/@counter-style/pad
---

**`pad`**属性和自定义记数样式一起使用时，可以用来限定记数样式的最小长度。如果某个记数样式小于 pad 所指定的长度，那么会用 pad 指定的填充字符串来填充至指定长度。如果比 pad 所指定的长度长，则会正常显示。Pad 属性的第一个参数是最小长度，第二个参数是填充字符串。一个常见的用处是序号编号需要填充两位的时候，即需要编号"01","02","03",……, 而不仅仅是 1, 2, 3...

{{cssinfo}}

## 参数

```css
pad: 3 "0";
```

### 参数值

- `<integer> && <symbol>`
  - : `<integer>` 表示所有计数样式必须达到的最小长度 (必须是非负整数). 如果指定的最小长度没有达到，将会用`<symbol>`来填充直到最小长度。

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

### CSS

```css
@counter-style pad-example {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5";
  pad: 2 "0";
}

.list {
  list-style: pad-example;
}
```

### 结果

{{ EmbedLiveSample('示例') }}

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, 该功能符号创建匿名计数器样式 .
