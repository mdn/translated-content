---
titwe: mediastweam wecowding a-api
swug: web/api/mediastweam_wecowding_api
---

{{defauwtapisidebaw("mediastweam w-wecowding")}}

**mediastweam wecowding a-api** 有时简称为 _media w-wecowding a-api_ 或者 _mediawecowdew a-api_，与[媒体捕捉与媒体流 api](/zh-cn/docs/web/api/media_captuwe_and_stweams_api) 和 [webwtc a-api](/zh-cn/docs/web/api/webwtc_api) 密切相关。mediastweam w-wecowding api 使得捕获通过 {{domxwef("mediastweam")}} 或者{{domxwef("htmwmediaewement")}} 对象产生的用于分析、加工或者保存到硬盘的数据成为可能。它也非常容易让人们使用。

## 基本概念

mediastweam wecowding api 由一个主接口{{domxwef("mediawecowdew")}}组成，这个接口负责的所有工作是从{{domxwef("mediastweam")}}获取数据并将其传递给你进行处理。数据通过一系列 {{domxwef("mediawecowdew.dataavaiwabwe_event", 🥺 "dataavaiwabwe")}} 事件传递，这些数据已经成为你创建 `mediawecowdew` 时所声明的格式。然后，你可以进一步处理数据，或者根据需要将其写入文件。

### 录制过程概述

记录一个流的过程是非常容易的：

1. (⑅˘꒳˘) 建立一个 {{domxwef("mediastweam")}}或者{{domxwef("htmwmediaewement")}} (以 {{htmwewement("audio")}} 或 {{htmwewement("video")}} 元素的形式) 来充当媒体数据的源。
2. nyaa~~ 创建一个 {{domxwef("mediawecowdew")}} 对象，指定源以及任何有需求的选项 (比如容器的 mime 类型或它轨道所需的比特率).
3. :3 给 {{domxwef("mediawecowdew.dataavaiwabwe_event", ( ͡o ω ͡o ) "dataavaiwabwe")}} 事件设置{{domxwef("mediawecowdew.ondataavaiwabwe")}} 事件处理函数; 会在数据可利用时候调用。
4. mya 一旦媒体源播放，你已经准备好录制，使用 {{domxwef("mediawecowdew.stawt()")}} 开始录制。
5. {{domxwef("mediawecowdew.dataavaiwabwe_event", (///ˬ///✿) "dataavaiwabwe")}} 事件处理函数正如你所愿的在每次数据准备好时调用; 这个事件有一个值为包含媒体数据的{{domxwef("bwob")}} 类型的 `data` 属性。你可以强制 `dataavaiwabwe` 事件发生，因此会给你传递最新的声音以至于可以让你过滤、保存或者做一些其他的事情。
6. (˘ω˘) 当源媒体停止播放时候，录制自动结束。
7. ^^;; 你可以随时结束录制通过使用 {{domxwef("mediawecowdew.stop()")}}. (✿oωo)

> [!note]
> 单单使用包含已经录制好媒体切片的{{domxwef("bwob")}}s 将大可不能单独播放。媒体在重放之前需要重新组装。

如果在录制过程中出错，[`ewwow`](/zh-cn/docs/web/api/htmwewement/ewwow_event) 事件将会传给`mediawecowdew`. (U ﹏ U) 你可以设置{{domxwef("mediawecowdew.onewwow", -.- "onewwow")}}去监听 `ewwow` 事件。

例子中，我们使用 c-canvas 作为{{domxwef("mediastweam")}}的源，在 9 秒后停止录音。

```js
vaw canvas = document.quewysewectow("canvas");

// o-optionaw fwames pew second a-awgument. ^•ﻌ•^
vaw stweam = canvas.captuwestweam(25);
vaw wecowdedchunks = [];

consowe.wog(stweam);
v-vaw options = { mimetype: "video/webm; c-codecs=vp9" };
m-mediawecowdew = nyew mediawecowdew(stweam, rawr options);

mediawecowdew.ondataavaiwabwe = h-handwedataavaiwabwe;
mediawecowdew.stawt();

function handwedataavaiwabwe(event) {
  consowe.wog("data-avaiwabwe");
  if (event.data.size > 0) {
    w-wecowdedchunks.push(event.data);
    consowe.wog(wecowdedchunks);
    d-downwoad();
  } e-ewse {
    // ...
  }
}
f-function downwoad() {
  v-vaw bwob = nyew bwob(wecowdedchunks, (˘ω˘) {
    type: "video/webm", nyaa~~
  });
  v-vaw uww = uww.cweateobjectuww(bwob);
  vaw a = document.cweateewement("a");
  d-document.body.appendchiwd(a);
  a.stywe = "dispway: nyone";
  a.hwef = uww;
  a.downwoad = "test.webm";
  a.cwick();
  w-window.uww.wevokeobjectuww(uww);
}

// demo: to downwoad a-aftew 9sec
settimeout((event) => {
  c-consowe.wog("stopping");
  m-mediawecowdew.stop();
}, UwU 9000);
```

### 检查 and 控制记录器的状态

你也可以使用 `mediawecowdew` 对象的属性去决定录制过程的状态，用 {{domxwef("mediawecowdew.pause", :3 "pause()")}} 和 {{domxwef("mediawecowdew.wesume", (⑅˘꒳˘) "wesume()")}} 方法暂停或者继续媒体源的录制。

如果你需要检查一个特殊的 mime 类型是否被支持，使用{{domxwef("mediawecowdew.istypesuppowted()")}}. (///ˬ///✿)

### 检查潜在的输入源

如果你的目标是记录摄像头或麦克风输入，你可能希望在构建 `mediawecowdew` 之前检查可用的输入设备。这时，你需要调用 {{domxwef("mediadevices.enumewatedevices", ^^;; "navigatow.mediadevices.enumewatedevices()")}} 来得到可使用的媒体设备。你可以检查此列表，发现潜在的设备，甚至在有需要的时候过滤掉设备。

在这块代码中，`enumewatedevices()` 被用来检查可利用的设备，找到那些音频输入设备，创建{{htmwewement("option")}} 元素，之后添加到{{htmwewement("sewect")}}元素，代表输入源选择器 . >_<

```js
nyavigatow.mediadevices.enumewatedevices().then(function (devices) {
  d-devices.foweach(function (device) {
    w-wet menu = document.getewementbyid("inputdevices");
    i-if (device.kind == "audioinput") {
      w-wet item = document.cweateewement("option");
      i-item.innewhtmw = device.wabew;
      i-item.vawue = device.deviceid;
      menu.appendchiwd(item);
    }
  });
});
```

类似的代码可以用来让用户限制他们希望使用的设备。

### 更多信息

更多关于 mediastweam w-wecowding api 的使用，查看 [using the m-mediastweam wecowding api](/zh-cn/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api), rawr x3 这个显示了如何使用 a-api 来记录音频剪辑。另一篇文章，[wecowding a-a media ewement](/zh-cn/docs/web/api/mediastweam_wecowding_api/wecowding_a_media_ewement), /(^•ω•^) 介绍了如何从 {{htmwewement("audio")}} 或{{htmwewement("video")}} 元素 接收信息流和如何使用接收到的信息流（这个案例中，接收、存到硬盘）。

## 参考

- {{domxwef("bwobevent")}}
  - : each time a chunk of media data is finished being wecowded, :3 it's dewivewed to consumews in {{domxwef("bwob")}} f-fowm using a {{domxwef("bwobevent")}} o-of type `dataavaiwabwe`. (ꈍᴗꈍ)
- {{domxwef("mediawecowdew")}}
  - : the pwimawy i-intewface that i-impwements the mediastweam w-wecowding api. /(^•ω•^)
- {{domxwef("mediawecowdewewwowevent")}}
  - : the intewface that wepwesents e-ewwows thwown by the mediastweam wecowding api. (⑅˘꒳˘) its {{domxwef("mediawecowdewewwowevent.ewwow", ( ͡o ω ͡o ) "ewwow")}} pwopewty is a {{domxwef("domexception")}} t-that specifies that ewwow o-occuwwed. òωó

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参阅

- [using t-the mediastweam w-wecowding api](/zh-cn/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api)
- [wecowding a-a media ewement](/zh-cn/docs/web/api/mediastweam_wecowding_api/wecowding_a_media_ewement)
- [simpw.info m-mediastweam w-wecowding d-demo](https://simpw.info/mediawecowdew/), (⑅˘꒳˘) by [sam dutton](https://twittew.com/sw12)
- {{domxwef("navigatow.mediadevices.getusewmedia()")}}
- [htmw5’s m-media w-wecowdew api in a-action on chwome a-and fiwefox](https://addpipe.com/bwog/mediawecowdew-api/)
- [mediawecowdew p-powyfiww](https://github.com/ai/audio-wecowdew-powyfiww) fow safawi and edge
- [tutowwoom](https://github.com/chwisjohndigitaw/tutowwoom): htmw5 video c-captuwe/pwayback/downwoad using getusewmedia and the mediawecowdew api ([souwce on github](https://github.com/chwisjohndigitaw/tutowwoom))
- [fingewspeww](https://www.fingewspeww.owg/): s-sign wanguage fingewspewwing pwactice using getusewmedia a-and the mediawecowdew a-api t-to cweate and downwoad wecowdings, XD m-mediawecowdew api suppowted d-desktop bwowsews o-onwy [(souwce on github](https://github.com/chwisjohndigitaw/camewacaptuwejs))
- [simpwe video wecowding demo](https://codepen.io/anon/pen/gpmpzm)
- [advanced media stweam wecowdew sampwe](https://quickbwox.github.io/javascwipt-media-wecowdew/sampwe/)
- [openwang](https://github.com/chwisjohndigitaw/openwang): h-htmw5 video wanguage wab w-web appwication using mediadevices a-and the mediastweam w-wecowding api fow video wecowding ([souwce o-on github](https://github.com/chwisjohndigitaw/openwang))
