---
title: overflow-block
slug: Web/CSS/Reference/At-rules/@media/overflow-block
---

[CSS](/zh-CN/docs/Web/CSS) [媒体特性](/zh-CN/docs/Web/CSS/Reference/At-rules/@media#media_features) **`overflow-block`** 可用于测试输出设备如何处理沿块向轴溢出初始[包含区块](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block)的内容。

## 语法

`overflow-block` 特性可指定为下列关键词值之一。

- `none`
  - : 不显示沿块向轴溢出的内容。
- `scroll`
  - : 可通过滚动看见沿块向轴溢出的内容。
- `optional-paged`
  - : 可通过滚动看见沿块向轴溢出的内容，但可手动触发分页（例如通过 {{CSSXref("break-inside")}} 等）使后续内容显示于下一页。
- `paged`
  - : 内容按页分开；沿块向轴溢出某页的内容显示于下一页。

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
@media (overflow-block: scroll) {
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

## 参见

- [使用媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/zh-CN/docs/Web/CSS/Reference/At-rules/@media)
