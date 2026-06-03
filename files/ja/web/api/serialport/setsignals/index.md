---
title: SerialPort.setSignals()
slug: Web/API/SerialPort/setSignals
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{SecureContext_Header}}{{APIRef("Serial API")}}{{SeeCompatTable}}

{{domxref("SerialPort")}} インターフェイスの **`setSignals()`** メソッドは、ポートの制御信号を設定し、完了したら解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
setSignals()
setSignals(options)
```

### 引数

- `options` {{Optional_Inline}}
  - : 以下の値のうち任意のものが入ったオブジェクトです。
    - `dataTerminalReady`
      - : オペレーティングシステムにシリアルポートの DTR (データ端末レディ) 信号のアサート (`true` の場合) またはデアサート (`false` の場合) を指示することを表す {{jsxref("boolean")}} 値です。
    - `requestToSend`
      - : オペレーティングシステムにシリアルポートの RTS (送信要求) 信号のアサート (`true` の場合) またはデアサート (`false` の場合) を指示することを表す {{jsxref("boolean")}} 値です。
    - `break`
      - : オペレーティングシステムにシリアルポートのブレーク信号のアサート (`true` の場合) またはデアサート (`false` の場合) を指示することを表す {{jsxref("boolean")}} 値です。

### 返値

{{jsxref("Promise")}} を返します。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : ポートが開かれていないとき返ります。このエラーが出ないようにするには、{{domxref("SerialPort.open()")}} を呼び出してください。
- `NetworkError` {{domxref("DOMException")}}
  - : デバイスで信号を設定できなかったとき返ります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
