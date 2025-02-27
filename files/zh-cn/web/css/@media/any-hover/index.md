---
title: any-hover
slug: Web/CSS/@media/any-hover
---

{{CSSRef}}

**`any-hover`** [CSS](/zh-CN/docs/Web/CSS) [媒体特性](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries#media_features) 可以用来测试是否有*任意*可用的输入机制可以在元素上 hover。

## 语法

`any-hover` 使用下面列表的值作为关键字。

- `none`
  - : 可用的输入机制里没有机制可以方便地 hover，或者不存在定点输入机制。
- `hover`
  - : 一个或多个可用的输入机制可以方便地在元素上 hover。

## 示例

### 测试是否有输入机制可以 hover

#### HTML

```html
<a href="#">Try hovering over me!</a>
```

#### CSS

```css
@media (any-hover: hover) {
  a:hover {
    background: yellow;
  }
}
```

#### 结果

{{EmbedLiveSample("测试是否有输入机制可以 hover")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多资料

- [the `hover` media feature](/zh-CN/docs/Web/CSS/@media/hover)
