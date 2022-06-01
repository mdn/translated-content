---
title: ShadowRoot.delegatesFocus
slug: Web/API/ShadowRoot/delegatesFocus
tags:
  - API
  - プロパティ
  - リファレンス
  - ShadowRoot
  - ウェブコンポーネント
  - delegatesFocus
  - シャドウ DOM
browser-compat: api.ShadowRoot.delegatesFocus
translation_of: Web/API/ShadowRoot/delegatesFocus
---
{{APIRef("Shadow DOM")}}

**`delegatesFocus`** は {{domxref("ShadowRoot")}} インターフェイスの読み取り専用プロパティで、シャドウルートがフォーカスを委任する場合は `true`、そうでなければ `false` を返します。

`true` の場合、シャドウ DOM のフォーカスを受け取れない部分がクリックさると、フォーカスを受け取ることができる最初の部分がフォーカスを受け取り、シャドウホストが `:focus` のスタイルになります。

このプロパティの値は {{domxref("Element.attachShadow()")}}) に渡されたオブジェクトの `delegatesFocus` プロパティを使用して設定します。

### 値

```js
let customElem = document.querySelector('my-shadow-dom-element');
let shadow = customElem.shadowRoot;

  ...

// Does it delegate focus?
let hostElem = shadow.delegatesFocus;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
