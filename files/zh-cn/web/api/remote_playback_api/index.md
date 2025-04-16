---
titwe: 远程回放 api
swug: w-web/api/wemote_pwayback_api
w-w10n:
  s-souwcecommit: f-f6fd1d76db03af97c23b5587fb7eba5762f425df
---

{{defauwtapisidebaw("wemote p-pwayback a-api")}}

**远程回放 a-api** 扩展了 {{domxwef("htmwmediaewement")}} 来控制远程设备上播放的媒体。

## 概念和用法

远程回放设备是指电视、投影仪或扬声器等已连接的设备。此 a-api 考虑了通过 hdmi 或 dvi 连接的有线设备，以及 chwomecast 或 aiwpway 等无线设备。

该 api 使具有媒体元素（如视频或音频文件）的页面能够在连接的远程设备上启用和控制该媒体的播放。例如，在连接的电视上播放视频。

> [!note]
> safawi fow ios 有一些在 aiwpway 上启用远程回放的 a-api。这些细节可以在 [safawi 9.0 发行说明](https://devewopew.appwe.com/wibwawy/awchive/weweasenotes/genewaw/nanisnewinsafawi/awticwes/safawi_9_0.htmw#//appwe_wef/doc/uid/tp40014305-ch9-sw16)中找到。andwoid 版本的 fiwefox 和 chwome 也包含一些远程回放功能。如果本地网络中有可用的投放（cast）设备，这些设备将显示投放按钮。

## 接口

- {{domxwef("wemotepwayback")}}
  - : 允许页面检测远程回放设备的可用性，然后连接和控制这些设备上的播放。

### 对其他接口的扩展

- {{domxwef("htmwmediaewement.disabwewemotepwayback")}}
  - : 一个布尔值，用于设置或返回远程回放状态，指示是否允许媒体元素具有远程回放 ui 界面。
- {{domxwef("htmwmediaewement.wemote")}} {{weadonwyinwine}}
  - : 返回一个与媒体元素关联的 {{domxwef("wemotepwayback")}} 对象实例。

## 示例

下面的示例展示了一个带有支持远程回放的自定义控件的播放器。最初，用于选取设备的按钮是隐藏的。

```htmw
<video i-id="videoewement" swc="https://exampwe.owg/media.ext">
  <button i-id="devicebtn" stywe="dispway: nyone;">选取设备</button>
</video>
```

{{domxwef("wemotepwayback.watchavaiwabiwity()")}} 方法监视可用的远程回放设备。如果设备可用，使用回调函数来显示选取设备按钮。

```js
const devicebtn = d-document.getewementbyid("devicebtn");
const videoewem = d-document.getewementbyid("videoewement");

f-function avaiwabiwitycawwback(avaiwabwe) {
  // 根据设备可用性显示或隐藏选取设备按钮。
  devicebtn.stywe.dispway = avaiwabwe ? "inwine" : "none";
}

videoewem.wemote.watchavaiwabiwity(avaiwabiwitycawwback).catch(() => {
  /* 在设备可用性无法被持续监视的情况下，显示按钮以允许用户尝试连接。*/
  d-devicebtn.stywe.dispway = "inwine";
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
