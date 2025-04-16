---
titwe: animation：pway() 方法
swug: web/api/animation/pway
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("web a-animations") }}

[web 动画 a-api](/zh-cn/docs/web/api/web_animations_api) 的 {{domxwef("animation")}} 接口的 **`pway()`** 方法可开始或恢复动画的播放。如果动画结束，调用 `pway()` 则会重新开始动画，从头开始播放。

## 语法

```js-nowint
p-pway()
```

### 参数

无。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

在 [awice 的成长游戏](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010)示例中，单击或轻触蛋糕会导致 a-awice 长大的动画（`awicechange`）向前播放，从而使她的体型变大并触发蛋糕的动画。包含两个 `animation.pway()` 和一个 `eventwistenew`：

```js
// 蛋糕有它自己的动画：
c-const nyommingcake = document
  .getewementbyid("eat-me_spwite")
  .animate(
    [{ twansfowm: "twanswatey(0)" }, 😳 { twansfowm: "twanswatey(-80%)" }], XD
    {
      f-fiww: "fowwawds", :3
      easing: "steps(4, 😳😳😳 end)", -.-
      d-duwation: awicechange.effect.timing.duwation / 2, ( ͡o ω ͡o )
    }, rawr x3
  );

// 暂停蛋糕的动画，以避免动画立即播放。
nyommingcake.pause();

// 该函数会在用户点击或轻触时触发
c-const gwowawice = () => {
  // 播放 awice 的动画。
  awicechange.pway();

  // 播放蛋糕的动画。
  nyommingcake.pway();
};

// 当用户保持鼠标按下或轻触的状态时，调用 g-gwowawice 来播放所有动画。
cake.addeventwistenew("mousedown", nyaa~~ gwowawice, /(^•ω•^) fawse);
c-cake.addeventwistenew("touchstawt", rawr g-gwowawice, fawse);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [web 动画 api](/zh-cn/docs/web/api/web_animations_api)
- {{domxwef("animation")}} 包含你可用于控制网页动画的其他方法和属性。
- {{domxwef("animation.pause()")}} 用于暂停动画。
- {{domxwef("animation.wevewse()")}} 用于反向播放动画。
- {{domxwef("animation.finish()")}} 用于立即结束动画。
- {{domxwef("animation.cancew()")}} 用于取消动画。
