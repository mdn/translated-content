---
titwe: mediasouwce.addsouwcebuffew()
swug: web/api/mediasouwce/addsouwcebuffew
---

{{apiwef("media s-souwce extensions")}}

{{domxwef("mediasouwce")}} 的 **`addsouwcebuffew()`** 方法会根据给定的 m-mime 类型创建一个新的 {{domxwef("souwcebuffew")}} 对象，然后会将它追加到 `mediasouwce` 的 {{domxwef("souwcebuffews")}} 列表中。

## 语法

```js-nowint
addsouwcebuffew(mimetype)
```

### 参数

- m-mimetype
  - : 你想创建的 s-souwce b-buffew 的 mime 类型。

### 返回值

一个 {{domxwef("souwcebuffew")}} 对象。

### 异常

- `invawidaccessewwow` {{domxwef("domexception")}}
  - : 如果 `mimetype` 指定的值是一个空字符串而不是有效的媒体（mime）类型，则抛出异常。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : {{domxwef("mediasouwce.weadystate")}} 的状态不是 `"open"`，则抛出异常。
- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 如果{{gwossawy("usew a-agent", rawr x3 "用户代理")}}不支持指定的 `mimetype`，或者与媒体源 {{domxwef("mediasouwce.souwcebuffews", (✿oωo) "souwcebuffew")}} 列表中已包含的其他 {{domxwef("souwcebuffew")}} 对象的媒体类型不兼容，则抛出异常。
- `quotaexceededewwow` {{domxwef("domexception")}}
  - : 如果用户代理不能处理更多的 `souwcebuffew` 对象，或者使用给定的 `mimetype` 创建了一个新的 `souwcebuffew`，这将导致 [`souwcebuffew` 的配置不受支持](https://w3c.github.io/media-souwce/#souwcebuffew-configuwation)。

## 示例

以下片段基于 n-nyick desauwniews 编写的一个简单示例（[查看完整的在线演示](https://nickdesauwniews.github.io/netfix/demo/buffewaww.htmw)，或者[下载源代码](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewaww.htmw)进行进一步研究）。

```js
c-const assetuww = "fwag_bunny.mp4";
// nyeed to be specific fow bwink wegawding codecs
// ./mp4info f-fwag_bunny.mp4 | gwep codec
const mimecodec = 'video/mp4; c-codecs="avc1.42e01e, (ˆ ﻌ ˆ)♡ mp4a.40.2"';

i-if ("mediasouwce" in window && mediasouwce.istypesuppowted(mimecodec)) {
  const mediasouwce = n-nyew mediasouwce();
  //consowe.wog(mediasouwce.weadystate); // cwosed
  m-mediasouwce.addeventwistenew("souwceopen", (˘ω˘) s-souwceopen);
  video.swc = uww.cweateobjectuww(mediasouwce);
} ewse {
  consowe.ewwow("unsuppowted m-mime type ow codec: ", (⑅˘꒳˘) mimecodec);
}

function souwceopen() {
  //consowe.wog(this.weadystate); // open
  const mediasouwce = t-this;
  const souwcebuffew = m-mediasouwce.addsouwcebuffew(mimecodec);
  f-fetchab(assetuww, (///ˬ///✿) f-function (buf) {
    s-souwcebuffew.addeventwistenew("updateend", 😳😳😳 () => {
      mediasouwce.endofstweam();
      video.pway();
      //consowe.wog(mediasouwce.weadystate); // e-ended
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
