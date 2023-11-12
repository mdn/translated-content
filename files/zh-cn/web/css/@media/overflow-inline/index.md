---
title: overflow-inline
slug: Web/CSS/@media/overflow-inline
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [媒体特性](/zh-CN/docs/Web/CSS/@media#media_features#媒体特性) **`overflow-inline`** 可用于测试输出设备如何处理沿行向轴溢出初始[包含区块](/zh-CN/docs/Web/CSS/Containing_block)的内容。

## 语法

`overflow-inline` 特性可指定为下列关键词值之一。

- `none`
  - : 不显示沿行向轴溢出的内容。
- `scroll`
  - : 可通过滚动看见沿行向轴溢出的内容。

## 示例

### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac turpis
  eleifend, fringilla velit ac, aliquam tellus. Vestibulum ante ipsum primis in
  faucibus orci luctus et ultrices posuere cubilia Curae; Nunc velit erat,
  tempus id rutrum sed, dapibus ut urna. Integer vehicula nibh a justo imperdiet
  rutrum. Nam faucibus pretium orci imperdiet sollicitudin. Nunc id facilisis
  dui. Proin elementum et massa et feugiat. Integer rutrum ullamcorper eleifend.
  Proin sit amet tincidunt risus. Sed nec augue congue eros accumsan tincidunt
  sed eget ex.
</p>
```

### CSS

```css
p {
  white-space: nowrap;
}

@media (overflow-inline: scroll) {
  p {
    color: red;
  }
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
