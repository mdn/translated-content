---
title: "Window: hashchange イベント"
short-title: hashchange
slug: Web/API/Window/hashchange_event
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef}}

**`hashchange`** イベントは、 URL のフラグメント識別子 (URL の `#` 記号で始まり続く部分) が変化したときに発生します。

このイベントは、ハッシュが {{domxref("history.pushState()")}} や {{domxref("history.replaceState()")}} を使用して変更された場合は発生しません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("hashchange", (event) => { })

onhashchange = (event) => { }
```

## イベント型

{{domxref("HashChangeEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PageTransitionEvent")}}

## イベントプロパティ

- {{domxref("HashChangeEvent.newURL")}} {{ReadOnlyInline}}
  - : ウィンドウのナビゲーション先となる新しい URL を表す文字列です。
- {{domxref("HashChangeEvent.oldURL")}} {{ReadOnlyInline}}
  - : ウィンドウのナビゲーション元である前回の URL を表す文字列です。

## イベントハンドラーの別名

`Window` インターフェイスに加え、イベントハンドラープロパティ `onhashchange` は、以下のターゲットでも利用可能です。

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 例

`hashchange` イベントは {{domxref("EventTarget/addEventListener", "addEventListener")}} メソッドの中で使用することができます。

```js
window.addEventListener("hashchange", () => {
  console.log("ハッシュが変更されました。");
});
```

または `onhashchange` イベントハンドラープロパティを使用して、

```js
function locationHashChanged() {
  if (location.hash === "#cool-feature") {
    console.log("cool feature にアクセスしました。");
  }
}

window.onhashchange = locationHashChanged;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window/popstate_event", "popstate")}} イベント
