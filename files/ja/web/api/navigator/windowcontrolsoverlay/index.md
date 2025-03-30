---
title: "Navigator: windowControlsOverlay プロパティ"
short-title: windowControlsOverlay
slug: Web/API/Navigator/windowControlsOverlay
l10n:
  sourceCommit: b0c8b07682c8d2cecc544f60468f3cf6fc20ac99
---

{{SecureContext_Header}}{{APIRef("")}}

**`windowControlsOverlay`** は {{domxref("Navigator")}} インターフェイスの読み取り専用プロパティで、{{domxref("WindowControlsOverlay")}} インターフェイスを返します。このインターフェイスは、[ウィンドウ制御オーバーレイ API](/ja/docs/Web/API/Window_Controls_Overlay_API) を使用するデスクトップのプログレッシブウェブアプリのタイトルバーの形状に関する情報を公開します。

デスクトップのオペレーティングシステムにインストールされたプログレッシブウェブアプリは、ウェブアプリマニフェストのメンバーの [`display_override`](/ja/docs/Web/Progressive_web_apps/Manifest/display_override) で `window-controls-overlay` 値を使用することで、ウィンドウ制御オーバーレイ機能を有効にすることができます。

そうすることで、既定のウィンドウタイトルバーが非表示になり、アプリがアプリウィンドウの全領域にアクセスできるようになります。

## 値

{{domxref("WindowControlsOverlay")}} インターフェイスです。

## 例

```js
if ("windowControlsOverlay" in navigator) {
  const rect = navigator.windowControlsOverlay.getTitlebarAreaRect();
  // タイトルバーの領域の長方形に対して何かをする。
} else {
  // ウィンドウ制御オーバーレイ機能が利用できない。
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
