---
title: Animation.play()
slug: Web/API/Animation/play
---

{{ APIRef("Web Animations") }}{{SeeCompatTable}}

[Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)的{{ domxref("Animation") }}接口中的**`play()`** 方法 可开始或恢复动画的播放。如果动画结束，则调用`play()`重新启动动画，从头开始播放。

## 语法

```plain
animation.play();
```

### 参数

无。

### 返回值

{{jsxref("undefined")}}

## 例子

在 [Growing/Shrinking Alice Game](http://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) 示例中，单击或点击蛋糕会导致 Alice 的增长动画 (`aliceChange`) 播放，导致她体型变大并触发蛋糕的动画。在以下示例中，使用了一个事件监听器来触发两者的动画：

```js
// 蛋糕拥有其自己的动画：
var nommingCake = document
  .getElementById("eat-me_sprite")
  .animate(
    [{ transform: "translateY(0)" }, { transform: "translateY(-80%)" }],
    {
      fill: "forwards",
      easing: "steps(4, end)",
      duration: aliceChange.effect.timing.duration / 2,
    },
  );

// 暂停蛋糕的动画，以避免动画立即播放。
nommingCake.pause();

// 该函数会在用户点击时触发
var growAlice = function () {
  // Play Alice's animation.
  aliceChange.play();

  // Play the cake's animation.
  nommingCake.play();
};

// 当用户持续按下或点击时，调用 growAlice 函数使得所有的动画播放。
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

## 标准

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 了解更多

- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} for other methods and properties you can use to control web page animation.
- {{domxref("Animation.pause()")}} to pause an animation.
- {{domxref("Animation.reverse()")}} to play an animation backwards.
- {{domxref("Animation.finish()")}} to finish an animation.
- {{domxref("Animation.cancel()")}} to cancel an animation.
