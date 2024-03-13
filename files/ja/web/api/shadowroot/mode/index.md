---
title: ShadowRoot.mode
slug: Web/API/ShadowRoot/mode
---

{{APIRef("Shadow DOM")}}

**`mode`** は {{domxref("ShadowRoot")}} の読み取り専用プロパティで、モードを `open` と `closed` のどちらかで示します。これはシャドウルートの内部機能を JavaScript からアクセスできるかどうかを定義します。

シャドウルートの `mode` が "`closed`" であった場合、シャドウルートの内部的な実装は JavaScript からアクセスできず、変更できなくなります。例えば、 {{HTMLElement("video")}} の内部の実装は JavaScript からアクセスも変更もできないのと同様になります。

## 構文

```js
var mode = shadowRoot.mode;
```

### 値

[`ShadowRootMode`](https://dom.spec.whatwg.org/#enumdef-shadowrootmode) 列挙型で定義された値です。 `open` か `closed` のどちらかです。

## 例

```js
  // アクセスできない closed のシャドウルートを作成します
  let element = document.createElement("div");
  element.attachShadow({ mode: "closed" });
  element.shadowRoot // シャドウルートが closed なので null

  // アクセスできる open のシャドウルートを作成します
  let element2 = document.createElement("div");
  element2.attachShadow({ mode: "open" });
  console.log("The shadow is" + element2.shadowRoot.mode) // "The shadow is open" と出力
  element2.shadowRoot.innerHTML("

Opened shadow

") // シャドウは open なので、外部からアクセスできます
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
