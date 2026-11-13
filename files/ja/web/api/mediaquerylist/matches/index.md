---
title: "MediaQueryList: matches プロパティ"
short-title: matches
slug: Web/API/MediaQueryList/matches
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}

**`matches`** は {{DOMxRef("MediaQueryList")}} インターフェイスの読み取り専用プロパティで、論理値です。 {{DOMxRef("document")}} が現在メディアクエリーリストと一致している場合は `true` を返し、一致していない場合は `false` を返します。

`matches` の値が変化した場合は、 `MediaQueryList` で発生する {{domxref("MediaQueryList.change_event", "change")}} イベントを監視することで通知を受けることができます。

### 値

boolean。 {{DOMxRef("document")}} が現在メディアクエリーのリストに一致していれば `true` を返し、そうでなければ `false` を返します。

## 例

この例では [`orientation`](/ja/docs/Web/CSS/Reference/At-rules/@media/orientation) メディア特性を使用したメディアクエリーを作成することにより、ビューポートの向きの変化を検出します。

```js
const mql = window.matchMedia("(orientation:landscape)");
mql.addEventListener("change", (event) => {
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

{{Compat}}

## 関連情報

- [メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [プログラムによるメディアクエリーの評価](/ja/docs/Web/CSS/Guides/Media_queries/Testing)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
