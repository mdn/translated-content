---
title: "Window: online イベント"
slug: Web/API/Window/online_event
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef}}

**`online`** は {{domxref("Window")}} インターフェイスのイベントで、ブラウザーがネットワークにアクセスできるようになり、 {{domxref("Navigator.onLine")}} の値が `true` に切り替わると発行されます。

> **メモ:** このイベントは、特定のウェブサイトの利用可能性を判断するために使用されるべきではありません。ネットワークの問題やファイアウォールが原因で、そのウェブサイトに到達できない可能性があります。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('online', (event) => { });
ononline = (event) => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## イベントハンドラーの別名

`Window` インターフェイスに加え、 `ononline` イベントハンドラープロパティは以下のターゲットでも使用できます。

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 例

```js
// addEventListener 版
window.addEventListener('online', (event) => {
    console.log("You are now connected to the network.");
});

// ononline 版
window.ononline = (event) => {
  console.log("You are now connected to the network.");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`offline`](/ja/docs/Web/API/Window/offline_event)
