---
title: SerialPort.getSignals()
slug: Web/API/SerialPort/getSignals
l10n:
  sourceCommit: e04cb8cd3168730e0236979821d4550b5ab5a159
---

{{SecureContext_Header}}{{APIRef("Serial API")}}{{SeeCompatTable}}

{{domxref("SerialPort")}} インターフェイスの **`SerialPort.getSignals()`** メソッドは、ポートの制御信号の現在の状態が入ったオブジェクトで解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
getSignals()
```

### 引数

なし。

### 返値

以下のメンバーが入ったオブジェクトで解決する {{jsxref("Promise")}} を返します。

- `clearToSend`
  - : シリアル通信の相手がデータの送信を要求しているかを表す {{jsxref("boolean")}} 値です。
- `dataCarrierDetect`
  - : シリアル通信に必要な制御信号があるかを表す {{jsxref("boolean")}} 値です。
- `dataSetReady`
  - : デバイスがデータの送受信が可能な状態にあるかを表す {{jsxref("boolean")}} 値です。
- `ringIndicator`
  - : シリアル通信で呼出信号を受信したかを表す {{jsxref("boolean")}} 値です。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : ポートが開かれていないとき返ります。このエラーが出ないようにするには、{{domxref("SerialPort.open()")}} を呼び出してください。
- `NetworkError` {{domxref("DOMException")}}
  - : デバイスから信号を取得できなかったとき返ります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
