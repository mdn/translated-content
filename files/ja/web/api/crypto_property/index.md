---
title: self.crypto
slug: Web/API/crypto_property
tags:
  - API
  - Crypto
  - 暗号技術
  - エンコーディング
  - 暗号化
  - HTML DOM
  - プロパティ
  - 読み取り専用
  - リファレンス
  - セキュリティ
browser-compat: api.crypto
translation_of: Web/API/Window/crypto
original_slug: Web/API/Window/crypto
---
{{APIRef}}

グローバルの **`crypto`** プロパティは読み取り専用で、グローバルオブジェクトに関連付けられた {{domxref("Crypto")}} オブジェクトを返します。このオブジェクトは、ウェブページが暗号に関連したサービスにアクセスできるようにします。

このプロパティ自体は読み取り専用ですが、そのメソッドすべて（加えて子オブジェクトのメソッドと {{domxref("SubtleCrypto")}}）は読み取り専用ではありません。そのため{{glossary("polyfill", "ポリフィル")}}による攻撃には脆弱です。

`crypto` はすべてのウィンドウで使用できますが、返される `Crypto` オブジェクトは安全でないコンテキストで使用できる機能は 1 つしかありません。 {{domxref("Crypto.getRandomValues", "getRandomValues()")}} メソッドです。一般的に、この API は安全なコンテキストでのみ使用する必要があります。

## 構文

{{domxref("Crypto")}} インターフェイスのインスタンスで、一般用途の暗号技術と強力な乱数生成器を提供します。

## 例

この例では、 `crypto` プロパティを使用して {{domxref("Crypto.getRandomValues", "getRandomValues()")}} メソッドへアクセスします。

### JavaScript

```js
genRandomNumbers = function getRandomNumbers() {
  const array = new Uint32Array(10);
  crypto.getRandomValues(array);

  const randText = document.getElementById("myRandText");
  randText.textContent = "乱数: "
  for (let i = 0; i < array.length; i++) {
    randText.textContent += array[i] + " ";
  }
}
```

### HTML

```html
<p id="myRandText">乱数: </p>
<button type="button" onClick='genRandomNumbers()'>10 個の乱数を生成</button>
```

### 結果

{{EmbedLiveSample('Example')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window")}} グローバルオブジェクト
- {{domxref("Crypto")}} インターフェイス
