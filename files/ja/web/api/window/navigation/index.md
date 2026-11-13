---
title: "Window: navigation プロパティ"
short-title: navigation
slug: Web/API/Window/navigation
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

**`navigation`** は {{domxref("Window")}} インターフェイスの読み取り専用のプロパティであり、現在の `window` に関連付けられた {{domxref("Navigation")}} オブジェクトを返します。

これは{{domxref("Navigation API", "ナビゲーション API", "", "nocode")}} のエントリーポイントです。

## 値

{{domxref("Navigation")}} オブジェクトインスタンスです。

## 例

```js
let currentNavEntries = window.navigation.entries();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Navigation API live demo](https://mdn.github.io/dom-examples/navigation-api/) ([view demo source](https://github.com/mdn/dom-examples/tree/main/navigation-api))
