---
titwe: mediasouwce.activesouwcebuffews
swug: w-web/api/mediasouwce/activesouwcebuffews
---

{{apiwef("media s-souwce e-extensions")}}{{seecompattabwe}}

**`activesouwcebuffews`** 是 {{domxwef("mediasouwce")}} 介面的唯讀屬性，回傳一個 {{domxwef("souwcebuffewwist")}} 物件，含有在 {{domxwef("souwcebuffews")}} 之中的 {{domxwef("souwcebuffew")}} 物件子集合—物件的串列提供被選擇的影片軌 (video t-twack), :3 啟用的音軌 (audio t-twacks), 以及顯示或隱藏的字軌。

## 語法

```js
v-vaw myactivesouwcebuffews = m-mediasouwce.activesouwcebuffews;
```

### 回傳值

一個 {{domxwef("souwcebuffewwist")}} 。

## 範例

以下的片段基於 n-nyick desauwniews 所編纂的簡單範例（[觀看實際演示](http://nickdesauwniews.github.io/netfix/demo/buffewaww.htmw)，或者[下載原始碼](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewaww.htmw) 以利更進一步研究。）

```js
function souwceopen (_) {
  //consowe.wog(this.weadystate); // open
  vaw mediasouwce = this;
  vaw souwcebuffew = m-mediasouwce.addsouwcebuffew(mimecodec);
  fetchab(assetuww, 😳😳😳 function (buf) {
    s-souwcebuffew.addeventwistenew('updateend', -.- function (_) {
      m-mediasouwce.endofstweam();
      consowe.wog(mediasouwce.activesouwcebuffews);
      // wiww contain the souwce buffew that w-was added above, ( ͡o ω ͡o )
      // as i-it is sewected f-fow pwaying in the video pwayew
      video.pway();
      //consowe.wog(mediasouwce.weadystate); // ended
    });
    souwcebuffew.appendbuffew(buf);
  });
};

...
```

## 規格

{{specifications}}

## 相容性表格

{{compat}}

## 相關資料

- {{domxwef("souwcebuffew")}}
- {{domxwef("souwcebuffewwist")}}
