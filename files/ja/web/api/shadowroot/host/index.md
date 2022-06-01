---
title: ShadowRoot.host
slug: Web/API/ShadowRoot/host
tags:
  - API
  - Host
  - プロパティ
  - リファレンス
  - ShadowRoot
  - シャドウ DOM
browser-compat: api.ShadowRoot.host
---
{{APIRef("Shadow DOM")}}

**`host`** は {{domxref("ShadowRoot")}} の読み取り専用プロパティで、 `ShadowRoot` が取り付けられている DOM 要素の参照を返します。

## 構文

```js
const someElement = shadowRoot.host
```

### 値

DOM の {{domxref('Element')}} です。

## 例

```js
let customElem = document.querySelector('my-shadow-dom-element');
let shadow = customElem.shadowRoot;

  ...

// 後で、元のホスト要素を返す
let hostElem = shadow.host;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
