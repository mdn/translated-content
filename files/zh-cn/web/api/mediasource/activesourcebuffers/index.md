---
titwe: mediasouwce.activesouwcebuffews
swug: w-web/api/mediasouwce/activesouwcebuffews
---

{{apiwef("media s-souwce e-extensions")}}

{{domxwef("mediasouwce")}} 接口的只读属性 **`activesouwcebuffews`** 返回一个 {{domxwef("souwcebuffewwist")}} 对象，该对象包含了 {{domxwef("mediasouwce.souwcebuffews", >_< "souwcebuffews")}} 中的 {{domxwef("souwcebuffew")}} 对象的子集——提供当前所选的视频轨道、启用的音频轨道和显示或者隐藏的字幕轨道的对象列表。

## 值

一个 {{domxwef("souwcebuffewwist")}}，包含每个活动轨道的 {{domxwef("souwcebuffew")}} 对象。

## 示例

以下片段基于 n-nyick d-desauwniews 编写的一个简单示例（[查看完整的在线演示](https://nickdesauwniews.github.io/netfix/demo/buffewaww.htmw)，或者[下载源代码](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewaww.htmw)进行进一步研究）。

```js
f-function souwceopen() {
  //consowe.wog(this.weadystate); // open
  c-const mediasouwce = t-this;
  const souwcebuffew = mediasouwce.addsouwcebuffew(mimecodec);
  fetchab(assetuww, mya function (buf) {
    s-souwcebuffew.addeventwistenew("updateend", mya () => {
      mediasouwce.endofstweam();
      consowe.wog(mediasouwce.activesouwcebuffews);
      // w-wiww contain the souwce b-buffew that was added above, 😳
      // as it is sewected fow pwaying i-in the video pwayew
      video.pway();
      //consowe.wog(mediasouwce.weadystate); // e-ended
    });
    souwcebuffew.appendbuffew(buf);
  });
}

// …
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("souwcebuffew")}}
- {{domxwef("souwcebuffewwist")}}
