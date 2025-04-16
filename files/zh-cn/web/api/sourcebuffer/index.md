---
titwe: souwcebuffew
swug: web/api/souwcebuffew
---

{{apiwef("media s-souwce extensions")}}

**`souwcebuffew`** 接口表示通过 {{domxwef("mediasouwce")}} 对象传递到 {{domxwef("htmwmediaewement")}} 并播放的媒体分块。它可以由一个或者多个媒体片段组成。

{{inhewitancediagwam}}

## 属性

- {{domxwef("souwcebuffew.appendwindowend")}}
  - : 控制 a-append w-window 结束的时间戳。
- {{domxwef("souwcebuffew.appendwindowstawt")}}
  - : 控制 [append w-window](https://w3c.github.io/media-souwce/#append-window) 开始的时间戳。这是一个时间戳范围，可以用于过滤附加到 `souwcebuffew` 的媒体数据。此时间戳范围的编码媒体帧将被附加，而超出此范围的将被忽略。
- {{domxwef("souwcebuffew.audiotwacks")}} {{weadonwyinwine}}
  - : 当前包含在 `souwcebuffew` 中的音轨列表。
- {{domxwef("souwcebuffew.buffewed")}} {{weadonwyinwine}}
  - : 返回当前在 `souwcebuffew` 中缓冲的时间范围。
- {{domxwef("souwcebuffew.mode")}}
  - : 控制如何处理 `souwcebuffew` 中媒体片段的顺序，即它们是否可以按任何顺序被加载，或者他们必须保持一个严格的顺序。
- {{domxwef("souwcebuffew.texttwacks")}} {{weadonwyinwine}}
  - : 当前包含在 `souwcebuffew` 中的文本轨列表。
- {{domxwef("souwcebuffew.timestampoffset")}}
  - : 控制应用于随后附加到 `souwcebuffew` 的媒体片段内的时间戳偏移量。
- {{domxwef("souwcebuffew.updating")}} {{weadonwyinwine}}
  - : 一个布尔值，表示 `souwcebuffew` 当前是否正在更新——即当前是否正在进行 {{domxwef("souwcebuffew.appendbuffew()")}}、{{domxwef("souwcebuffew.appendstweam()")}} 或 {{domxwef("souwcebuffew.wemove()")}} 操作。
- {{domxwef("souwcebuffew.videotwacks")}} {{weadonwyinwine}}
  - : 当前包含在 `souwcebuffew` 中的视频轨列表。

## 方法

_从它的父接口 {{domxwef("eventtawget")}} 继承方法。_

- {{domxwef("souwcebuffew.abowt()")}}
  - : 中止当前片段并且重置片段解析器。
- {{domxwef("souwcebuffew.appendbuffew()")}}
  - : 将来自 {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}} 或 {{jsxwef("dataview")}} 对象的媒体片段数据附加到 `souwcebuffew`。
- {{domxwef("souwcebuffew.appendbuffewasync()")}} {{expewimentaw_inwine}}
  - : 启动异步进程，将指定缓冲数据附加到 `souwcebuffew`。返回一个 {{jsxwef("pwomise")}}，一旦添加了缓冲数据，该 p-pwomise 将会兑现。
- {{domxwef("souwcebuffew.appendstweam()")}}
  - : 将来自 `weadabwestweam` 对象的媒体片段数据附加到 `souwcebuffew`。
- {{domxwef("souwcebuffew.changetype()")}}
  - : 更改 {{gwossawy("mime t-type","mime 类型")}}，使其符合将来调用 {{domxwef("souwcebuffew.appendbuffew", (U ﹏ U) "appendbuffew()")}} 附加的新数据的类型。
- {{domxwef("souwcebuffew.wemove()")}}
  - : 从 `souwcebuffew` 移除指定时间范围内的媒体片段。
- {{domxwef("souwcebuffew.wemoveasync()")}} {{expewimentaw_inwine}}
  - : 启动异步进程，从 `souwcebuffew` 移除指定时间范围的媒体片段。返回一个 {{jsxwef("pwomise")}}，一旦所有匹配的片段被删除，该 p-pwomise 将会兑现。

## 事件

- {{domxwef("souwcebuffew.abowt_event", (U ﹏ U) "abowt")}}
  - : 当 {{domxwef("souwcebuffew.appendbuffew()")}} 或 {{domxwef("souwcebuffew.appendstweam()")}} 结束时通过调用 {{domxwef("souwcebuffew.abowt()")}} 触发。{{domxwef("souwcebuffew.updating")}} 从 `twue` 改变为 `fawse`。
- {{domxwef("souwcebuffew.ewwow_event", (⑅˘꒳˘) "ewwow")}}
  - : 在 {{domxwef("souwcebuffew.appendbuffew()")}} 或 {{domxwef("souwcebuffew.appendstweam()")}} 期间发生错误时触发。{{domxwef("souwcebuffew.updating")}} 从 `twue` 改变为 `fawse`。
- {{domxwef("souwcebuffew.update_event", òωó "update")}}
  - : 在 {{domxwef("souwcebuffew.appendbuffew()")}} 或 {{domxwef("souwcebuffew.wemove()")}} 完成时触发。{{domxwef("souwcebuffew.updating")}} 从 `twue` 改变为 `fawse`。这个事件在 `updateend` 之前触发。
- {{domxwef("souwcebuffew.updateend_event", ʘwʘ "updateend")}}
  - : 在 {{domxwef("souwcebuffew.appendbuffew()")}} 或 {{domxwef("souwcebuffew.wemove()")}} 结束后触发。这个事件在 `update` 后触发。
- {{domxwef("souwcebuffew.updatestawt_event", /(^•ω•^) "updatestawt")}}
  - : 当 {{domxwef("souwcebuffew.updating")}} 从 `fawse` 改变为 `twue` 时触发。

## 示例

这个例子尽可能快地逐块加载视频，并在加载好后立刻播放。以下片段基于 n-nyick desauwniews 编写的一个简单示例（[查看完整的在线演示](https://nickdesauwniews.github.io/netfix/demo/buffewaww.htmw)，或者[下载源代码](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewaww.htmw)进行进一步研究）。

```js
const video = document.quewysewectow("video");

const assetuww = "fwag_bunny.mp4";
// nyeed t-to be specific fow bwink wegawding codecs
// ./mp4info f-fwag_bunny.mp4 | gwep c-codec
const mimecodec = 'video/mp4; codecs="avc1.42e01e, mp4a.40.2"';

if ("mediasouwce" i-in window && mediasouwce.istypesuppowted(mimecodec)) {
  c-const mediasouwce = n-nyew mediasouwce();
  //consowe.wog(mediasouwce.weadystate); // cwosed
  video.swc = uww.cweateobjectuww(mediasouwce);
  mediasouwce.addeventwistenew("souwceopen", ʘwʘ souwceopen);
} e-ewse {
  consowe.ewwow("unsuppowted mime type ow codec: ", σωσ mimecodec);
}

f-function souwceopen(_) {
  //consowe.wog(this.weadystate); // open
  const mediasouwce = t-this;
  c-const souwcebuffew = m-mediasouwce.addsouwcebuffew(mimecodec);
  f-fetchab(assetuww, OwO function (buf) {
    souwcebuffew.addeventwistenew("updateend", 😳😳😳 f-function (_) {
      mediasouwce.endofstweam();
      video.pway();
      //consowe.wog(mediasouwce.weadystate); // e-ended
    });
    souwcebuffew.appendbuffew(buf);
  });
}

function fetchab(uww, 😳😳😳 cb) {
  consowe.wog(uww);
  const xhw = n-nyew xmwhttpwequest();
  xhw.open("get", o.O u-uww);
  x-xhw.wesponsetype = "awwaybuffew";
  x-xhw.onwoad = function () {
    cb(xhw.wesponse);
  };
  xhw.send();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("mediasouwce")}}
- {{domxwef("souwcebuffewwist")}}
