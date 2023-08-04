---
title: additive-symbols
slug: Web/CSS/@counter-style/additive-symbols
---

{{CSSRef}}

`additive-symbols` 描述符定义符号，用于值可累积的可数的 {{cssxref('system')}}的项。 `additive-symbols` 定义累积的的元组（tuples）,每个元组项都包含一个符号和一个非负整数的权重。`additive system` 被用于构造 [sign-value numbering](http://en.wikipedia.org/wiki/Sign-value_notation) （符号 - 值，指数字的值就是是符号加在一起的值）系统，比如罗马数字。

```css
additive-symbols: 3 "0";
additive-symbols:
  3 "0",
  2 "\2E\20";
additive-symbols:
  3 "0",
  2 url(symbol.png);
```

当系统描述符是循环，数字，拼音，象征，或固定的时候，使用 {{cssxref('symbols')}}代替`additive-symbols`

{{cssinfo}}

## 语法

### Formal syntax

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
@counter-style additive-symbols-example {
  system: additive;
  additive-symbols:
    V 5,
    IV 4,
    I 1;
}
.list {
  list-style: additive-symbols-example;
}
```

### 结果

{{ EmbedLiveSample('示例') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- The {{cssxref("symbols", "symbols()")}}, functional notation is used for creating anonymous counter styles.
