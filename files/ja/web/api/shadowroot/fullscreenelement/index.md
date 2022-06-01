---
title: ShadowRoot.fullscreenElement
slug: Web/API/ShadowRoot/fullscreenElement
tags:
  - API
  - プロパティ
  - リファレンス
  - ShadowRoot
  - ウェブコンポーネント
  - シャドウ DOM
browser-compat: api.ShadowRoot.fullscreenElement
translation_of: Web/API/ShadowRoot/fullscreenElement
---
{{APIRef("Shadow DOM")}}

**`fullscreenElement`** は {{domxref("ShadowRoot")}} インターフェイスの読み取り専用プロパティで、現在全画面モードで表示されているシャドウツリー内の要素を返します。

## 構文

```js
shadowRoot.fullscreenElement
```

### 値

現在全画面モードで表示されている {{domxref('Element')}}、または全画面モードの要素がなければ `null` を返します。

## 例

```js
let customElem = document.querySelector('my-shadow-dom-element');
let shadow = customElem.shadowRoot;
let fullscreenElem = shadow.fullscreenElement;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.fullscreenElement")}}
