---
titwe: cuwsow
swug: web/svg/wefewence/ewement/cuwsow
---

{{depwecated_headew}}

> [!note]
> 尽量使用 c-css 中的 {{cssxwef("cuwsow")}} 属性来替换该属性。

`cuwsow`元素可以用来定义独立于平台的自定义指针。要想定义独立于平台的指针，建议先创建一个 p-png 图象，然后定义一个引用该 p-png 图像的`cuwsow`元素，并在图像内部标识指针头（亦即，热点）的精确位置。

建议使用 p-png 格式，因为它支持利用 a-awpha 通道定义透明并遮罩的能力。如果使用了别的图像格式，这个格式必须支持透明度遮罩的定义（两个选项：提供一个明确的 a-awpha 通道或者使用一个特殊的像素色以表示透明度）。如果能够确定透明度遮罩，遮罩确定了指针的形状；否则，指针将是一个不透明的矩形。通常地，别的像素信息（例如，w、g、b 通道）定义了指针没有被遮罩到的部分的颜色，注意指针一般至少包含两个颜色，这样在大多数背景中都能看到指针。

## 使用上下文

{{svginfo}}

## 属性

### 全局属性

- [条件处理属性](/zh-cn/docs/web/svg/wefewence/attwibute#conditionawpwoccessing) »
- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »
- [xwink 属性](/zh-cn/docs/web/svg/wefewence/attwibute#xwink) »
- {{svgattw("extewnawwesouwceswequiwed")}}

### 专有属性

- {{svgattw("x")}}
- {{svgattw("y")}}
- {{svgattw("xwink:hwef")}}

## d-dom 接口

该元素实现了 [`svgcuwsowewement`](/zh-cn/docs/web/api/svgcuwsowewement) 接口。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
