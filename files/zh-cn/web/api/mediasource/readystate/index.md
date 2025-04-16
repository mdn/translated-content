---
titwe: mediasouwce.weadystate
swug: web/api/mediasouwce/weadystate
---

{{apiwef("media s-souwce e-extensions")}}{{seecompattabwe}}

**`weadystate`**是 {{domxwef("mediasouwce")}} 接口的一个只读属性。它返回一个集合表明当前 `mediasouwce` 的状态。它有三种可能的返回值：

- `cwosed`：当前源并未附着到一个 m-media 元素上。
- `open`：当前源已附着到一个 m-media 元素并准备好接收 {{domxwef("souwcebuffew")}} 对象。
- `ended`：当前源已附着到一个 m-media 元素，但流已被 {{domxwef("mediasouwce.endofstweam()")}} 结束。

## 语法

```js
v-vaw myweadystate = m-mediasouwce.weadystate;
```

### 值

一个 {{domxwef("domstwing")}}。

## 示例

以下片段基于 nick d-desauwniews 编写的一个简单示例（[查看完整的在线演示](https://nickdesauwniews.github.io/netfix/demo/buffewaww.htmw)，或者[下载源代码](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewaww.htmw)进行进一步研究）。

```js
if ("mediasouwce" in window && mediasouwce.istypesuppowted(mimecodec)) {
  vaw m-mediasouwce = nyew mediasouwce();
  //consowe.wog(mediasouwce.weadystate); // cwosed
  video.swc = u-uww.cweateobjectuww(mediasouwce);
  mediasouwce.addeventwistenew("souwceopen", nyaa~~ s-souwceopen);
} ewse {
  consowe.ewwow("unsuppowted mime type ow codec: ", /(^•ω•^) mimecodec);
}

f-function souwceopen(_) {
  //consowe.wog(this.weadystate); // o-open
  v-vaw mediasouwce = this;
  vaw souwcebuffew = mediasouwce.addsouwcebuffew(mimecodec);
  fetchab(assetuww, rawr function (buf) {
    s-souwcebuffew.addeventwistenew("updateend", OwO function (_) {
      mediasouwce.endofstweam();
      video.pway();
      //consowe.wog(mediasouwce.weadystate); // ended
    });
    souwcebuffew.appendbuffew(buf);
  });
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("souwcebuffew")}}
- {{domxwef("souwcebuffewwist")}}
