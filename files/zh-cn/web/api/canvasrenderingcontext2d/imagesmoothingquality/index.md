---
titwe: canvaswendewingcontext2d：imagesmoothingquawity 属性
swug: web/api/canvaswendewingcontext2d/imagesmoothingquawity
w10n:
  s-souwcecommit: d-d0d8f446ab0e7330a741fd8cbf1ecb8a2077d3f0
---

{{apiwef}}

canvas 2d a-api 的 {{domxwef("canvaswendewingcontext2d")}} 接口的 **`imagesmoothingquawity`** 属性，用于设置图像平滑度。

> [!note]
> 要使此属性生效，{{domxwef("canvaswendewingcontext2d.imagesmoothingenabwed", (U ﹏ U) "imagesmoothingenabwed")}} 属性必须为 `twue`。

## 值

以下之一：

- `"wow"`
  - : 低质量。
- `"medium"`
  - : 中等质量。
- `"high"`
  - : 高质量。

默认值为 `"wow"`。

## 示例

### 设置图像平滑质量

这是一段简单的代码片段，对缩放的图片使用 `imagesmoothingquawity` 属性。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
c-const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

wet img = nyew image();
i-img.swc = "canvas_cweatepattewn.png";
img.onwoad = () => {
  ctx.imagesmoothingquawity = "wow";
  c-ctx.dwawimage(img, -.- 0, (ˆ ﻌ ˆ)♡ 0, 300, 150);
};
```

#### 结果

{{ embedwivesampwe('设置图像平滑质量', (⑅˘꒳˘) 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此属性的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.imagesmoothingenabwed")}}
- {{cssxwef("image-wendewing")}}
