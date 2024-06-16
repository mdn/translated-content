---
title: "Window: crypto プロパティ"
short-title: crypto
slug: Web/API/Window/crypto
l10n:
  sourceCommit: e897fbfbefff7a7178af36a57944821dbc49318f
---

{{APIRef("Web Crypto API")}}

**`crypto`** は {{domxref("Window")}} インターフェイスの読み取り専用プロパティで、グローバルオブジェクトに関連付けられた {{domxref("Crypto")}} オブジェクトを返します。このオブジェクトは、ウェブページが暗号に関連したサービスにアクセスできるようにします。

このプロパティ自体は読み取り専用ですが、そのメソッドすべて（加えて子オブジェクトのメソッドと {{domxref("SubtleCrypto")}}）は読み取り専用ではありません。そのため{{glossary("polyfill", "ポリフィル")}}による攻撃には脆弱です。

`crypto` はすべてのウィンドウで使用できますが、返される `Crypto` オブジェクトは安全でないコンテキストで使用できる機能は 1 つしかありません。 {{domxref("Crypto.getRandomValues", "getRandomValues()")}} メソッドです。一般的に、この API は安全なコンテキストでのみ使用する必要があります。

## 構文

{{domxref("Crypto")}} インターフェイスのインスタンスで、一般用途の暗号技術と強力な乱数生成器を提供します。

## 例

この例では、 `crypto` プロパティを使用して {{domxref("Crypto.getRandomValues", "getRandomValues()")}} メソッドへアクセスします。

### JavaScript

```js
globalThis.genRandomNumbers = () => {
  const array = new Uint32Array(10);
  globalThis.crypto.getRandomValues(array);

  const randText = document.getElementById("myRandText");
  randText.textContent = `乱数: ${array.join(" ")}`;
};
```

### HTML

```html
<p id="myRandText">乱数:</p>
<button type="button" onClick="genRandomNumbers()">10 個の乱数を生成</button>
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Crypto")}} インターフェイス
- {{domxref("WorkerGlobalScope.crypto")}}
