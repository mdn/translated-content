---
title: "WebTransport: congestionControl プロパティ"
short-title: congestionControl
slug: Web/API/WebTransport/congestionControl
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`congestionControl`** は {{domxref("WebTransport")}} インターフェイスの読み取り専用プロパティで、データの送信時に高スループットと低レイテンシーのどちらを優先するかを示します。

この値は [`WebTransport()` コンストラクターのオプション](/ja/docs/Web/API/WebTransport/WebTransport#congestioncontrol)で設定します。

## 値

文字列で、値は次のいずれかです。

- `default`
  - : トランスポートに対するデフォルトの輻輳制御設定です。
    これがデフォルト値です。
- `throughput`
  - : アプリケーションは輻輳制御をスループット向けに調整することを希望します。
- `low-latency`
  - : アプリケーションは輻輳制御を低レイテンシー向けに調整することを希望します。

## 例

この例では、`congestionControl` の設定値を取得する方法を示します。
コンストラクターで明示的に設定していないため、結果は `default` です。

```js
const url = "https://example.com:4999/wt";
const transport = new WebTransport(url);
console.log(transport.congestionControl); // default
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
