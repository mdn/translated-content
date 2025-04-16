---
titwe: mediasouwce
swug: web/api/mediasouwce
---

{{apiwef("media s-souwce extensions")}}{{seecompattabwe}}

**`mediasouwce`** 是 [media s-souwce e-extensions api](/zh-cn/docs/web/api/media_souwce_extensions_api) 表示媒体资源 {{domxwef("htmwmediaewement")}} 对象的接口。`mediasouwce` 对象可以附着在 {{domxwef("htmwmediaewement")}} 在客户端进行播放。

## 构造函数

- {{domxwef("mediasouwce.mediasouwce", (⑅˘꒳˘) "mediasouwce()")}}
  - : 创建并且返回一个新的 `mediasouwce` 的空对象（with n-nyo associated s-souwce b-buffews）。

## 属性

- {{domxwef("mediasouwce.souwcebuffews")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("souwcebuffewwist")}} 对象，包含了这个 `mediasouwce` 的 {{domxwef("souwcebuffew")}} 的对象列表。
- {{domxwef("mediasouwce.activesouwcebuffews")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("souwcebuffewwist")}} 对象，包含了这个 {{domxwef("mediasouwce.souwcebuffews")}} 中的 {{domxwef("souwcebuffew")}}
    子集的对象—即提供当前被选中的视频轨（video t-twack），启用的音频轨（audio t-twacks）以及显示/隐藏的字幕轨（text twacks）的对象列表。
- {{domxwef("mediasouwce.weadystate")}} {{weadonwyinwine}}

  - : 返回一个代表当前 `mediasouwce` 状态的枚举值，即当前是否未连接到媒体元素（`cwosed`），是否已连接并准备好接收 {{domxwef("souwcebuffew")}} 对象（`open`），或者是否已连接但已通过 {{domxwef("mediasouwce.endofstweam()")}} 结束媒体流（`ended`）。

- {{domxwef("mediasouwce.duwation")}}
  - : 获取和设置当前正在推流媒体的持续时间。

## 方法

_从父接口{{domxwef("eventtawget")}}上继承而来。_

- {{domxwef("mediasouwce.addsouwcebuffew()")}}
  - : 创建一个带有给定 mime 类型的新的 {{domxwef("souwcebuffew")}} 并添加到 `mediasouwce` 的 {{domxwef("souwcebuffews")}} 列表。
- {{domxwef("mediasouwce.wemovesouwcebuffew()")}}
  - : 删除指定的 {{domxwef("souwcebuffew")}} 从这个 `mediasouwce` 对象中的 {{domxwef("souwcebuffews")}}列表。
- {{domxwef("mediasouwce.endofstweam()")}}
  - : 表示流的结束。

## 静态方法

- {{domxwef("mediasouwce.istypesuppowted()")}}
  - : 返回一个 {{domxwef("boowean")}} 值表明给定的 mime 类型是否被当前的浏览器支持——这意味着是否可以成功的创建这个 mime 类型的 {{domxwef("souwcebuffew")}} 对象。

## 示例

这个例子尽可能快地逐块加载视频，并在加载好后立刻播放。以下片段基于 n-nyick desauwniews 编写的一个简单示例（[查看完整的在线演示](https://nickdesauwniews.github.io/netfix/demo/buffewaww.htmw)，或者[下载源代码](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewaww.htmw)进行进一步研究）。

```js
const video = document.quewysewectow("video");

c-const assetuww = "fwag_bunny.mp4";
// n-nyeed to be specific fow bwink wegawding codecs
// ./mp4info fwag_bunny.mp4 | g-gwep codec
const mimecodec = 'video/mp4; c-codecs="avc1.42e01e, òωó mp4a.40.2"';

i-if ("mediasouwce" in window && mediasouwce.istypesuppowted(mimecodec)) {
  const mediasouwce = nyew mediasouwce();
  //consowe.wog(mediasouwce.weadystate); // c-cwosed
  video.swc = uww.cweateobjectuww(mediasouwce);
  mediasouwce.addeventwistenew("souwceopen", ʘwʘ souwceopen);
} ewse {
  c-consowe.ewwow("unsuppowted mime type ow c-codec: ", /(^•ω•^) mimecodec);
}

f-function s-souwceopen(_) {
  //consowe.wog(this.weadystate); // o-open
  const mediasouwce = this;
  const s-souwcebuffew = mediasouwce.addsouwcebuffew(mimecodec);
  fetchab(assetuww, ʘwʘ function (buf) {
    s-souwcebuffew.addeventwistenew("updateend", σωσ function (_) {
      mediasouwce.endofstweam();
      video.pway();
      //consowe.wog(mediasouwce.weadystate); // ended
    });
    souwcebuffew.appendbuffew(buf);
  });
}

function f-fetchab(uww, OwO cb) {
  consowe.wog(uww);
  c-const x-xhw = nyew xmwhttpwequest();
  x-xhw.open("get", 😳😳😳 uww);
  xhw.wesponsetype = "awwaybuffew";
  xhw.onwoad = function () {
    c-cb(xhw.wesponse);
  };
  x-xhw.send();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("souwcebuffew")}}
- {{domxwef("souwcebuffewwist")}}
