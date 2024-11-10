---
title: mask-border-repeat
slug: Web/CSS/mask-border-repeat
---

{{CSSRef}}

**`mask-border-repeat`** [CSS](/zh-CN/docs/Web/CSS) 属性设置如何调整源图像的边缘区域以适应元素遮罩边框的尺寸。

## 语法

```css
/* Keyword value */
mask-border-repeat: stretch;
mask-border-repeat: repeat;
mask-border-repeat: round;
mask-border-repeat: space;

/* vertical | horizontal */
mask-border-repeat: round stretch;

/* Global values */
mask-border-repeat: inherit;
mask-border-repeat: initial;
mask-border-repeat: unset;
```

可以从下面的列表中选择一个或两个值来指定 `mask-border-repeat` 属性。

- 指定一个值时，它会在**四个边**应用相同的行为。
- 指定**两个**值时，第一个应用于**顶部和底部**，第二个应用于**左侧和右侧**。

### Values

- `stretch`
  - : 拉伸源图像的边缘区域以填充每个边界之间的间隙。
- `repeat`
  - : 源图像的边缘区域被平铺（重复）以填充每个边界之间的间隙，可以裁剪平铺图形以达到合适的贴合效果。
- `round`
  - : 源图像的边缘区域被平铺（重复）以填充每个边界之间的间隙，可以拉伸平铺图形以实现适当的贴合。
- `space`
  - : 源图像的边缘区域被平铺（重复）以填充每个边框之间的间隙。平铺图形之间将分配额外的空间，以实现适当的贴合。

### 正式语法

{{csssyntax}}

## 规范

{{Specifications}}{{cssinfo}}

## 浏览器兼容性

{{Compat}}
