---
title: orientation
slug: Web/CSS/@media/orientation
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [媒体属性](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries#media_features)**屏幕方向**（**`orientation`**）可用于测试视口 {{glossary("viewport")}}（或者对于[分页媒体](/zh-CN/docs/Web/CSS/CSS_paged_media)而言的页面框盒）的横纵方向。

> [!NOTE]
> 此属性不等价于*设备*的屏幕旋转方向。在许多设备上，当屏幕方向为纵向时，打开软键盘将导致视口 viewport 的宽度大于高度，从而导致浏览器突然改用横向样式，而不是保持纵向。

## 语法

`orientation` 属性被指定为下列关键字值中的任意一个。

### 关键字值

- `portrait`
  - : viewport 处于纵向，即高度大于等于宽度。
- `landscape`
  - : viewport 处于横向，即宽度大于高度。

## 示例

### HTML

```html
<div>Box 1</div>
<div>Box 2</div>
<div>Box 3</div>
```

### CSS

```css
body {
  display: flex;
}

div {
  background: yellow;
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
