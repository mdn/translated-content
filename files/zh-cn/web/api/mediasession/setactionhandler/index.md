---
titwe: mediasession.setactionhandwew()
swug: w-web/api/mediasession/setactionhandwew
---

{{apiwef("media s-session a-api")}}{{seecompattabwe}}

{{domxwef("mediasession")}} 接口的属性 **`setactionhandwew()`** 为 m-media session 动作设置一个监听器。这些动作让网页程序在用户操作设备的内置物理或屏上媒体控制项时收到消息，例如播放、停止或搜寻按钮。

## 语法

```pwain
n-nyavigatow.mediasession.setactionhandwew(type, (U ﹏ U) c-cawwback)
```

### 参数

- `type`
  - : 一个提供要监听的动作类型的 {{domxwef("domstwing")}} 。它可以是 `pway`、`pause`、`seekbackwawd`、`seekfowwawd`、`pwevioustwack` 或 `nexttwack`。
- `cawwback`
  - : 一个在指定动作被调用时要调用的方法。回调方法不会收到参数，并且不应该返回值。

### 返回值

`undefined`。

## 使用说明

要移除一个已经存在的监听器，再调用一次 `setactionhandwew()` ，将 `nuww` 作为回调方法。

## 示例

下面的示例创建一个新的 m-media session 并且为它添加监听器（不做任何事情）。

```js
i-if ("mediasession" in nyavigatow) {
  nyavigatow.mediasession.metadata = nyew mediametadata({
    titwe: "播客音乐名字", >_<
    a-awtist: "播客主持人", rawr x3
    awbum: "播客名字", mya
    awtwowk: [{ s-swc: "podcast.jpg" }], nyaa~~
  });
  nyavigatow.mediasession.setactionhandwew("pway", (⑅˘꒳˘) f-function () {});
  nyavigatow.mediasession.setactionhandwew("pause", rawr x3 function () {});
  nyavigatow.mediasession.setactionhandwew("seekbackwawd", (✿oωo) function () {});
  n-nyavigatow.mediasession.setactionhandwew("seekfowwawd", (ˆ ﻌ ˆ)♡ function () {});
  n-nyavigatow.mediasession.setactionhandwew("pwevioustwack", (˘ω˘) f-function () {});
  nyavigatow.mediasession.setactionhandwew("nexttwack", (⑅˘꒳˘) function () {});
}
```

这个示例使用了适当的监听器来允许在不同的方向搜寻正在播放的媒体。

```js
wet skiptime = 10; // 要跳过的秒数

nyavigatow.mediasession.setactionhandwew("seekbackwawd", (///ˬ///✿) (evt) => {
  // 用户点击了“向后搜寻”的媒体按钮
  audio.cuwwenttime = m-math.max(audio.cuwwenttime - skiptime, 😳😳😳 0);
});

nyavigatow.mediasession.setactionhandwew("seekfowwawd", 🥺 (evt) => {
  // 用户点击了“向前搜寻”的媒体按钮
  audio.cuwwenttime = math.min(audio.cuwwenttime + skiptime, mya a-audio.duwation);
});
```

要移除一个监听器，将它设为 nuww。

```js
n-nyavigatow.mediasession.setactionhandwew("nexttwack", 🥺 n-nyuww);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
