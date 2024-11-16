---
title: Animation：play() 方法
slug: Web/API/Animation/play
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Web Animations") }}

[Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API) 的 {{domxref("Animation")}} 接口的 **`play()`** 方法可开始或恢复动画的播放。如果动画结束，调用 `play()` 则会重新开始动画，从头开始播放。

## 语法

```js-nolint
play()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

在 [Alice 的成长游戏](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)示例中，单击或轻触蛋糕会导致 Alice 长大的动画（`aliceChange`）向前播放，从而使她的体型变大并触发蛋糕的动画。包含两个 `Animation.play()` 和一个 `EventListener`：

```js
// 蛋糕有它自己的动画：
const nommingCake = document
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

// 该函数会在用户点击或轻触时触发
const growAlice = () => {
  // 播放 Alice 的动画。
  aliceChange.play();

  // 播放蛋糕的动画。
  nommingCake.play();
};

// 当用户保持鼠标按下或轻触的状态时，调用 growAlice 来播放所有动画。
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} 包含你可用于控制网页动画的其他方法和属性。
- {{domxref("Animation.pause()")}} 用于暂停动画。
- {{domxref("Animation.reverse()")}} 用于反向播放动画。
- {{domxref("Animation.finish()")}} 用于立即结束动画。
- {{domxref("Animation.cancel()")}} 用于取消动画。
