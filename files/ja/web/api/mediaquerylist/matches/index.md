---
title: MediaQueryList.matches
slug: Web/API/MediaQueryList/matches
---

{{APIRef("CSSOM")}}

**`matches`** は {{DOMxRef("MediaQueryList")}} インターフェイスの読み取り専用プロパティで、 `boolean` であり、文書が現在メディアクエリーリストと一致している場合は `true` を返し、一致していない場合は `false` を返します。

`matches` の値が変化した場合は、 `MediaQueryList` で発生する {{domxref("MediaQueryList.change_event", "change")}} イベントを監視することで通知を受けることができます。

### 値

boolean。 {{DOMxRef("document")}} が現在メディアクエリーのリストに一致していれば `true` を返し、そうでなければ `false` を返します。

## 例

この例では [`orientation`](/ja/docs/Web/CSS/@media/orientation) メディア特性を使用したメディアクエリーを作成することにより、ビューポートの向きの変化を検出します。

```js
function addMQListener(mq, callback) {
  if (mq.addEventListener) {
    mq.addEventListener("change", callback);
  } else {
    mq.addListener(callback);
  }
}

addMQListener(window.matchMedia("(orientation:landscape)"), (event) => {
  if (event.matches) {
    /* 横向きの画面になった */
  } else {
    /* 縦向きの画面になった */
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.MediaQueryList.matches")}}

## 関連情報

- [メディアクエリー](/ja/docs/Web/CSS/Media_Queries)
- [プログラムによるメディアクエリーの評価](/ja/docs/Web/CSS/Media_Queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
