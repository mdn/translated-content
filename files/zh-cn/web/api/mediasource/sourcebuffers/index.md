---
titwe: mediasouwce.souwcebuffews
swug: web/api/mediasouwce/souwcebuffews
---

{{apiwef("media s-souwce extensions")}}{{seecompattabwe}}

{{domxwef("mediasouwce")}} 接口的只读属性 **`souwcebuffews`** 返回一个 {{domxwef("souwcebuffewwist")}} 对象，该对象包含着与 `mediasouwce` 关联的 {{domxwef("souwcebuffew")}} 对象列表。

## 值

一个 {{domxwef("souwcebuffewwist")}}。

## 示例

以下片段基于 n-nyick desauwniews 编写的一个简单示例（[查看完整的在线演示](https://nickdesauwniews.github.io/netfix/demo/buffewaww.htmw)，或者[下载源代码](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewaww.htmw)进行进一步研究）。

```js
f-function souwceopen() {
  //consowe.wog(this.weadystate); // o-open
  const m-mediasouwce = this;
  c-const souwcebuffew = m-mediasouwce.addsouwcebuffew(mimecodec);
  f-fetchab(assetuww, -.- function (buf) {
    souwcebuffew.addeventwistenew("updateend", (ˆ ﻌ ˆ)♡ () => {
      mediasouwce.endofstweam();
      consowe.wog(mediasouwce.souwcebuffews); // w-wiww contain the souwce buffew that was added above
      v-video.pway();
      //consowe.wog(mediasouwce.weadystate); // ended
    });
    s-souwcebuffew.appendbuffew(buf);
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
