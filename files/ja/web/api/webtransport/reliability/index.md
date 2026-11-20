---
title: "WebTransport: reliability プロパティ"
short-title: reliability
slug: Web/API/WebTransport/reliability
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`reliability`** は {{domxref("WebTransport")}} インターフェイスの読み取り専用プロパティで、接続が信頼性のあるトランスポートのみ対応しているのか、それとも信頼性のないトランスポート（UDP など）にも対応しているのかを示します。

## 値

文字列で、値は次のいずれかです。

- `pending`
  - : 接続はまだ確立されていません。
    信頼性はまだ不明です。
- `reliable-only`
  - : 接続は信頼性のあるトランスポートのみに対応しています。
- `supports-unreliable`
  - : 接続は信頼性のないトランスポートと信頼性のあるトランスポートの両方に対応しています。

## 例

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // トランスポート接続を初期化
  const transport = new WebTransport(url);

  // ready が履行されると接続を使用できる
  // それまでは reliability は "pending"
  await transport.ready;

  if (transport.reliability === "reliable-only") {
    // 信頼性のあるトランスポートのみで接続を使用
  } else {
    // 信頼性のあるトランスポートまたは信頼性のないトランスポートで接続を使用
  }
  // …
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
