---
title: "Screen: change イベント"
short-title: change
slug: Web/API/Screen/change_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

**`change`** は {{domxref("Screen")}} インターフェイスのイベントで、次のプロパティのうち 1 つ以上が変化したときに、特定の画面で発行されます。

- {{domxref("Screen.width", "width")}}
- {{domxref("Screen.height", "height")}}
- {{domxref("Screen.availWidth", "availWidth")}}
- {{domxref("Screen.availHeight", "availHeight")}}
- {{domxref("Screen.colorDepth", "colorDepth")}}
- {{domxref("Screen.orientation", "orientation")}}

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
const firstScreen = (await window.getScreenDetails()).screens[0];
firstScreen.addEventListener("change", (event) => {
  console.log("第一画面が変化しました。", event, firstScreen);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウィンドウ管理 API](/ja/docs/Web/API/Window_Management_API)
