---
title: 关键帧格式
slug: Web/API/Web_Animations_API/Keyframe_Formats
---

{{DefaultAPISidebar("Web Animations")}}

{{domxref("Element.animate()")}}、{{domxref("KeyframeEffect.KeyframeEffect()")}} 和 {{domxref("KeyframeEffect.setKeyframes()")}} 都接受格式为一组关键帧的对象，这种格式有以下几种选项。

## 语法

关键帧格式有两种不同的方式：

1. 一个由多个关键帧的属性和值组成的对象所构成的`数组`。这是{{domxref("KeyframeEffect.getKeyframes()", "getKeyframes()")}}方法返回的规范格式。

   ```js
   element.animate(
     [
       {
         // from
         opacity: 0,
         color: "#fff",
       },
       {
         // to
         opacity: 1,
         color: "#000",
       },
     ],
     2000,
   );
   ```

   对每个关键帧的偏移可以通过提供一个`offset`来指定。

   ```js
   element.animate(
     [{ opacity: 1 }, { opacity: 0.1, offset: 0.7 }, { opacity: 0 }],
     2000,
   );
   ```

   > **备注：** `offset` 的值必须是在 **\[0.0, 1.0]** 这个区间内，且须升序排列。

   并非所有的关键帧都需要设置 `offset`。没有指定 `offset` 的关键帧将与相邻的关键帧均匀间隔。

   可以通过提供`easing`过渡来给指定关键帧之间应用过渡效果，如下所示：

   ```js
   element.animate(
     [
       { opacity: 1, easing: "ease-out" },
       { opacity: 0.1, easing: "ease-in" },
       { opacity: 0 },
     ],
     2000,
   );
   ```

   在这个例子中，指定的 easing 仅适用于指定它的关键帧到下一帧之间。但是在`options`中指定的 `easing` 值都将应用在一个动画的整个持续时间里。

2. 一个包含 key-value 键值的`对象`需要包含动画的属性和要循环变化的值`数组`。

   ```js
   element.animate(
     {
       opacity: [0, 1], // [ from, to ]
       color: ["#fff", "#000"], // [ from, to ]
     },
     2000,
   );
   ```

   使用这种格式，每个数组的元素数量不必相等。所提供的值将独立分开。

   ```js
   element.animate(
     {
       opacity: [0, 1], // offset: 0, 1
       backgroundColor: ["red", "yellow", "green"], // offset: 0, 0.5, 1
     },
     2000,
   );
   ```

   特殊键`offset`，`easing`和`composite`（如下）可以与属性值一起指定。

   ```js
   element.animate(
     {
       opacity: [0, 0.9, 1],
       offset: [0, 0.8], // [ 0, 0.8, 1 ] 的简写
       easing: ["ease-in", "ease-out"],
     },
     2000,
   );
   ```

   从属性值列表生成一组合适的关键帧后，每个提供的偏移量将应用于相应的关键帧。如果值不足或者列表包含空值`null`，则以没有指定处理（即和上面第 1 种数组格式的一样均匀间隔）.

   如果`easing` 或`composite` 值太少，将根据需要，重复相应的列表。

## 属性

关键帧可以为任何的 css 动画属性指定 property-value。使用 camel-case 的属性名将变为 camelCase 格式，例如 {{cssxref("background-color")}} 变成 `backgroundColor` ，再如 {{cssxref("background-position-x")}} 变成 `backgroundPositionX`.。速记词，例如 {{cssxref("margin")}} 也是可以用的。.

两个特色的 css 属性：

- {{cssxref("float")}}, 必须写成 `cssFloat` ，因为"float" 是 JavaScript 的保留关键字
- {{cssxref("offset")}}, 必须写成 `cssOffset` ，因为"offset" 表示如下的关键帧 offset

还可以指定以下特色属性：

- offset
  - : 关键帧的 offset 偏移量指定为介于`0.0`和`1.0`之间的数字或为`null`。这相当于使用`@keyframes`在 CSS 样式表中以百分比指定开始和结束状态。如果此值为`null`或缺失，则关键帧将在相邻关键帧之间均匀分布。
- easing
  - : 从这个关键帧直到这一级中的下一个关键帧所使用的 [timing function](/zh-CN/docs/Web/CSS/timing-function)
- composite
  - : {{domxref("KeyframeEffect.composite")}} 操作用于将此关键帧中指定的值与基础值组合在一起。如果正在使用在效果上指定的复合操作，则不会出现这种情况。

## 参见

- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Element.animate()")}}
- {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}
- {{domxref("KeyframeEffect.setKeyframes()")}}
