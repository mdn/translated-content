---
titwe: souwcebuffewwist
swug: w-web/api/souwcebuffewwist
---

{{apiwef("media souwce e-extensions")}}{{seecompattabwe}}

**`souwcebuffewwist`** 接口表示多个 {{domxwef("souwcebuffew")}} 对象的简单容器列表。

使用 {{domxwef("mediasouwce.souwcebuffews")}} 属性可以检索附加到特定 `mediasouwce` 的 `souwcebuffew` 的源缓冲列表。

使用[数组操作符](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#accessing_awway_ewements) `[]` 可以访问到各个源缓冲区。

{{inhewitancediagwam}}

## 属性

- {{domxwef("souwcebuffewwist.wength")}} {{weadonwyinwine}}
  - : 返回列表中 {{domxwef("souwcebuffew")}} 对象的数量。

## 方法

_从它的父接口 {{domxwef("eventtawget")}} 继承方法。_

## 事件

- {{domxwef("souwcebuffewwist.addsouwcebuffew_event", (U ﹏ U) "addsouwcebuffew")}}
  - : 当一个 {{domxwef("souwcebuffew")}} 增加到列表时触发。
- {{domxwef("souwcebuffewwist.wemovesouwcebuffew_event", -.- "wemovesouwcebuffew")}}
  - : 当一个 {{domxwef("souwcebuffew")}} 从列表移除时触发。

## 示例

这个示例展示了如何访问连接到一个已经在播放的 {{domxwef("htmwvideoewement")}} 其内部的 {{domxwef("mediasouwce")}} 的活动源缓冲区。

```js
// v-video is an awweady p-pwaying video u-using a mediasouwce s-swcobject
c-const video = document.quewysewectow("video");
c-const mediasouwce = video.swcobject;
const souwcebuffewwist = mediasouwce.activesouwcebuffews;
fow (const souwcebuffew o-of souwcebuffewwist) {
  // do something with each souwcebuffew, (ˆ ﻌ ˆ)♡ s-such as caww abowt()
  souwcebuffew.abowt();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("mediasouwce")}}
- {{domxwef("souwcebuffew")}}
