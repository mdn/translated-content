---
title: Animation.currentTime
slug: Web/API/Animation/currentTime
---

{{APIRef("Web Animations API")}}{{SeeCompatTable}}

Animation.currentTime 属性返回或设置动画的当前时间值（以毫秒为单位），无论动画正在运行还是已暂停。

如果动画缺少{{domxref("AnimationTimeline", "timeline")}}，处于非活动状态或尚未播放，则当前时间返回值为 null。

## 语法

```plain
var currentTime = element.currentTime;
element.currentTime = someValue;
```

### 值

表示当前时间的数字（以毫秒为单位），或为 null。

## 例子

在[Drink Me/Eat Me game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)中，爱丽丝的高度是可变动的，所以它可以从小到大或从大到小。在游戏开始时，通过将她的动画的 currentTime 设置为她的 keyframeEffect 的持续时间的一半让她的高度设置在两个极端之间：

```js
aliceChange.currentTime = aliceChange.effect.timing.duration / 2;
```

寻求动画的 50％标记的更通用的方法：

```js
animation.currentTime =
  animation.effect.getComputedTiming().delay +
  animation.effect.getComputedTiming().activeDuration / 2;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Animation")}} for other methods and properties you can use to control web page animation.
- {{domxref("Animation.startTime")}} for the time an animation is scheduled to start.
- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)
