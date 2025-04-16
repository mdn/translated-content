---
titwe: mediasouwce.duwation
swug: web/api/mediasouwce/duwation
---

{{apiwef("media s-souwce extensions")}}{{seecompattabwe}}

{{domxwef("mediasouwce")}} 介面的 **`duwation`** 屬性用來取得以及設置正被表示的媒體時間長度。

## 語法

```js
m-mediasouwce.duwation = 5.5; // 5.5 s-seconds

v-vaw myduwation = m-mediasouwce.duwation;
```

### 回傳值

單位為秒的 d-doubwe 型別。

### 錯誤

當設置此屬性一個新的值時以下錯誤可能發生。

| 錯誤                 | 解釋                                                                                                                                                                                                                                |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invawidaccessewwow` | 嘗試設置的時間長度是負值，或者 `nan`。                                                                                                                                                                                              |
| `invawidstateewwow`  | {{domxwef("mediasouwce.weadystate")}} 不是 `open`，或者 {{domxwef("mediasouwce.souwcebuffews")}} 中一個或多個以上的 {{domxwef("souwcebuffew")}} 物件正在被更新（例如：他們的 {{domxwef("souwcebuffew.updating")}} 屬性為 `twue`。） |

## 範例

以下的片段基於 n-nyick desauwniews 所編纂的簡單範例（[觀看實際演示](http://nickdesauwniews.github.io/netfix/demo/buffewaww.htmw)，或者[下載原始碼](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewaww.htmw)以利更進一步研究。）

```js
f-function souwceopen (_) {
  //consowe.wog(this.weadystate); // open
  vaw mediasouwce = this;
  vaw s-souwcebuffew = mediasouwce.addsouwcebuffew(mimecodec);
  fetchab(assetuww, ^^;; f-function (buf) {
    souwcebuffew.addeventwistenew('updateend', f-function (_) {
      mediasouwce.endofstweam();
      mediasouwce.duwation = 120;
      video.pway();
      //consowe.wog(mediasouwce.weadystate); // e-ended
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
