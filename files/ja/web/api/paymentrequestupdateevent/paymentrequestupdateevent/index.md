---
title: "PaymentRequestUpdateEvent: PaymentRequestUpdateEvent() コンストラクター"
slug: Web/API/PaymentRequestUpdateEvent/PaymentRequestUpdateEvent
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Payment Request API")}}{{securecontext_header}}

**`PaymentRequestUpdateEvent()`** コンストラクターは新しい {{domxref("PaymentRequestUpdateEvent")}} オブジェクトを作成します。このオブジェクトによりウェブページはユーザー操作に反応して {{domxref("PaymentRequest")}} の詳細を更新することができます。実際の更新は {{domxref('PaymentRequestUpdateEvent.updateWith','updateWith()')}} メソッドにオプションを渡すことで行われます。

## 構文

```js-nolint
new PaymentRequestUpdateEvent()
```

### 引数

なし。

### 返値

新しい `PaymentRequestUpdateEvent` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
