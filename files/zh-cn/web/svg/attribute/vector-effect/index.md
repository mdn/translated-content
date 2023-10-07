---
title: vector-effect
slug: Web/SVG/Attribute/vector-effect
---

{{SVGRef}}

**`vector-effect`** 属性指明绘制对象时要使用的矢量效果。在任何其他合成操作（如滤镜，蒙版和剪辑等）之前，都要应用矢量效果。

**备注：** 作为显示性属性， `vector-effect` 也可以直接在 CSS 样式表中作为属性使用。

作为显示性属性，它能被应用到任何元素，但只对这 10 个元素有效果：{{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("foreignObject")}}, {{SVGElement("image")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("rect")}}, {{SVGElement("text")}}, {{SVGElement("textPath")}} {{SVGElement("tspan")}}, and {{SVGElement("use")}}

## 用法说明

| 值       | `none` \| `non-scaling-stroke` \| `non-scaling-size` \| `non-rotation` \| `fixed-position` |
| -------- | ------------------------------------------------------------------------------------------ |
| 默认值   | `none`                                                                                     |
| 可动画性 | 是                                                                                         |

- `none`
  - : 该值指定不应用矢量效果，即，使用默认的渲染行为，即首先用指定的绘画填充形状的几何形状，然后使用指定的绘画描边轮廓。
- `non-scaling-stroke`
  - : 该值修改了笔触的方式。通常，笔触涉及在当前用户坐标系中计算形状路径的笔触轮廓，并用笔触颜料（颜色或渐变）填充轮廓。该值的最终视觉效果是笔触宽度不依赖于元素的变换（包括非均匀缩放和剪切变换）和缩放级别。
- `non-scaling-size`
  - : 该值指定元素及其后代使用的特殊用户坐标系。尽管从宿主坐标空间进行任何转换更改，该用户坐标系的比例也不会更改。但是，它没有指定抑制旋转和偏斜。同样，它也不指定用户坐标系的原点。由于此值抑制了用户坐标系的缩放，因此它还具有`non-scaling-stroke`的特性。
- `non-rotation`
  - : 该值指定元素及其后代使用的特殊用户坐标系。尽管从宿主坐标空间发生任何变换更改，该用户坐标系的旋转和倾斜仍被抑制。但是，它没有指定抑制缩放。同样，它也没有指定用户坐标系的原点。
- `fixed-position`
  - : 该值指定元素及其后代使用的特殊用户坐标系。尽管从宿主坐标空间进行任何转换更改，用户坐标系的位置都是固定的。但是，它没有指定抑制旋转，偏斜和缩放。当同时指定了该矢量效果和 {{SVGAttr("transform")}} 属性， {{SVGAttr("transform")}} 属性将因该矢量效果而被消耗。

## 示例

### Example: vector-effect="non-scaling-stroke"

```html
<svg viewBox="0 0 500 240">
  <!-- normal -->
  <path
    d="M10,20L40,100L39,200z"
    stroke="black"
    stroke-width="2px"
    fill="none"></path>

  <!-- scaled -->
  <path
    transform="translate(100,0)scale(4,1)"
    d="M10,20L40,100L39,200z"
    stroke="black"
    stroke-width="2px"
    fill="none"></path>

  <!-- fixed-->
  <path
    vector-effect="non-scaling-stroke"
    transform="translate(300,0)scale(4,1)"
    d="M10,20L40,100L39,200z"
    stroke="black"
    stroke-width="2px"
    fill="none"></path>
</svg>
```

#### 结果

{{EmbedLiveSample("Example_vector-effectnon-scaling-stroke", 550, 300)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
