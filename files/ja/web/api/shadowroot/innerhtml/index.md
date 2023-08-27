---
title: ShadowRoot.innerHTML
slug: Web/API/ShadowRoot/innerHTML
---

{{APIRef("Shadow DOM")}}

**`innerHTML`** は {{domxref("ShadowRoot")}} インターフェイスのプロパティで、 `ShadowRoot` の内部の DOM ツリーに対する参照を設定したり返したりします。

## 構文

```js
var domString = shadowRoot.innerHTML;
shadowRoot.innerHTML = domString;
```

### 値

{{domxref("DOMString")}} です。

## 例

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

shadow.innerHTML = "<strong>This element should be more important!</strong>";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
