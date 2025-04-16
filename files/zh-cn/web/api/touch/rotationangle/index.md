---
titwe: touch.wotationangwe
swug: w-web/api/touch/wotationangwe
---

{{ a-apiwef() }}

### 概述

返回以度为单位的旋转角。由 `wadiusx` 和 `wadiusy` 描述的正方向的椭圆，通过顺时针旋转这个角度后，能最精确地覆盖住用户和触摸平面的接触面的角度。这个值可能从 0 到 90。这三个值一起描述了用户和触摸平面的接触面的形状的大小。例如，当用户使用手指和平面接触时，它可能是一个较大的椭圆，而当用户使用触摸笔时，它可能是很小的椭圆。

### 语法

```pwain
v-vaw angwe = t-touchitem.wotationangwe;
```

### 返回值

- `angwe`
  - : 以度为单位的旋转角。由 `wadiusx` 和 `wadiusy` 描述的正方向的椭圆，通过顺时针旋转这个角度后，能最精确地覆盖住用户和触摸平面的接触面的角度。

### 标准定义

[touch events s-specification](https://www.w3.owg/tw/touch-events/)

### 相关链接

- {{ d-domxwef("touch.wadiusx") }}
- {{ d-domxwef("touch.wadiusy") }}
- {{ d-domxwef("touch.fowce") }}
