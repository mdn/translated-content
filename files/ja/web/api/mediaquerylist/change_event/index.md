---
title: "MediaQueryList: change イベント"
slug: Web/API/MediaQueryList/change_event
---

{{APIRef("CSSOM")}}

{{DOMxRef("MediaQueryList")}} インターフェイスの **`change`** イベントは、メディアクエリーの状態が変化した時に発生します。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドでイベント名を利用するか、イベントハンドラープロパティを設定します。

```js
addEventListener('change', event => { });

onchange = event => { };
```

## イベントタイプ

{{domxref("MediaQueryListEvent")}} です。 {{domxref("Event")}} から継承します。

## イベントプロパティ

_`MediaQueryListEvent` インタフェースは、親インタフェースである {{domxref("Event")}} からプロパティを継承します。_

- {{DOMxRef("MediaQueryList.matches", "MediaQueryListEvent.matches")}}{{ReadOnlyInline}}
  - : {{DOMxRef("Boolean")}}。 {{DOMxRef("document")}} が現在メディアクエリーのリストに一致していれば `true` を返し、そうでなければ `false` を返します。

- {{DOMxRef("MediaQueryList.media", "MediaQueryListEvent.media")}}{{ReadOnlyInline}}
  - : {{DOMxRef("DOMString")}} で、シリアライズされたメディアクエリーを表します。

## 例

```js
var mql = window.matchMedia('(max-width: 600px)');

mql.onchange = (e) => {
  if (e.matches) {
    /* ビューポートが 600 ピクセル幅以下 */
    console.log('This is a narrow screen — less than 600px wide.')
  } else {
    /* ビューポートが 600 ピクセル幅より広い */
    console.log('This is a wide screen — more than 600px wide.')
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリー](/ja/docs/Web/CSS/Media_Queries)
- [プログラムによるメディアクエリーの評価](/ja/docs/Web/CSS/Media_Queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
