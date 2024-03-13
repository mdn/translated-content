---
title: Animation.playState
slug: Web/API/Animation/playState
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

作为一个 [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API) 的属性，**`Animation.playState`** 能够返回并设置一个可枚举值来描述一个动画的回放状态。

> **备注：** 这个属性只对 CSS Animations 和 Transitions 可读。

## 语法

```
var currentPlayState = Animation.playState;

Animation.playState = newState;
```

### 可能的值

- `idle`
  - : 动画当前的时间是无法解析的，并且队列里没有处于等待执行的任务。
- `pending`
  - : 动画将一直等到某些等待中的任务完成方会执行。
- `running`
  - : 动画处于正在运行状态。
- `paused`
  - : 动画中止，并且{{domxref("Animation.currentTime")}}该项属性不会更新。
- `finished`
  - : 动画已经达到某一临界点，并且{{domxref("Animation.currentTime")}}该项属性不会更新。

## 实例

在[Growing/Shrinking Alice Game](http://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)这个例子中，玩家们可以凭[Alice crying into a pool of tears](http://codepen.io/rachelnabors/pen/EPJdJx?editors=0010)结束游戏。出于性能原因，游戏里，眼泪只当可见之时才能运动。因此，这些泪滴必须在下面的情况下刚好暂停运动：

```js
// 创建泪珠动画

tears.forEach(function (el) {
  el.animate(tearsFalling, {
    delay: getRandomMsRange(-1000, 1000), // 获取每一滴随机泪珠
    duration: getRandomMsRange(2000, 6000), // 获取每一滴随机泪珠
    iterations: Infinity,
    easing: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
  });
  el.playState = "paused";
});

// 结尾需要现出时播放眼泪降落动画

tears.forEach(function (el) {
  el.playState = "playing";
});

// 暂停并重置正在哭泣时的泪滴动画

tears.forEach(function (el) {
  el.playState = "paused";
  el.currentTime = 0;
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} 获取更多可用来控制网页动画的方法和属性
- {{domxref("Animation.play()")}}, {{domxref("Animation.pause()")}}, {{domxref("Animation.finish()")}}，这些方法可以设置一个动画的 `playState`
