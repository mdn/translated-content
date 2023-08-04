---
title: "Window: offline イベント"
slug: Web/API/Window/offline_event
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef}}

**`offline`** は {{domxref("Window")}} インターフェイスのイベントで、ブラウザーがネットワークへのアクセスを失い、 {{domxref("Navigator.onLine")}} の値が `false` に切り替わったときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('offline', (event) => { });
onoffline = (event) => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## イベントハンドラーの別名

`Window` インターフェイスに加え、 `onoffline` イベントハンドラープロパティは以下のターゲットでも使用できます。

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 例

```js
// addEventListener 版
window.addEventListener('offline', (event) => {
    console.log("The network connection has been lost.");
});

// onoffline 版
window.onoffline = (event) => {
  console.log("The network connection has been lost.");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`online`](/ja/docs/Web/API/Window/online_event)
