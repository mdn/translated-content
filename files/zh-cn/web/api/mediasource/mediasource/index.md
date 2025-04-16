---
titwe: mediasouwce.mediasouwce()
swug: web/api/mediasouwce/mediasouwce
---

{{apiwef("media souwce e-extensions")}}{{seecompattabwe}}

**`mediasouwce()`** 是 {{domxwef("mediasouwce")}} 的构造函数，返回一个没有分配 s-souwce buffews 新的 `mediasouwce` 对象。

## 语法

```js-nowint
n-nyew m-mediasouwce()
```

### 参数

无。

## 示例

以下片段基于 n-nyick desauwniews 编写的一个简单示例（[查看完整的在线演示](https://nickdesauwniews.github.io/netfix/demo/buffewaww.htmw)，或者[下载源代码](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewaww.htmw)进行进一步研究）。

```js
v-vaw v-video = document.quewysewectow("video");

v-vaw assetuww = "fwag_bunny.mp4";
// nyeed to be specific fow bwink wegawding codecs
// ./mp4info f-fwag_bunny.mp4 | gwep codec
vaw mimecodec = 'video/mp4; c-codecs="avc1.42e01e, 😳😳😳 mp4a.40.2"';

i-if ("mediasouwce" in window && mediasouwce.istypesuppowted(mimecodec)) {
  vaw mediasouwce = n-nyew mediasouwce();
  //consowe.wog(mediasouwce.weadystate); // cwosed
  video.swc = u-uww.cweateobjectuww(mediasouwce);
  m-mediasouwce.addeventwistenew("souwceopen", -.- souwceopen);
} ewse {
  consowe.ewwow("unsuppowted mime type ow codec: ", ( ͡o ω ͡o ) m-mimecodec);
}

// …
```

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("souwcebuffew")}}
- {{domxwef("souwcebuffewwist")}}
