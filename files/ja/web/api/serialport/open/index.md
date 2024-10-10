---
title: "SerialPort: open() メソッド"
short-title: open()
slug: Web/API/SerialPort/open
l10n:
  sourceCommit: 2de8605cc697ca93b02f0b7109082b694f8950ec
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

**`open()`** は {{domxref("SerialPort")}} インターフェイスのメソッドで、ポートを開く処理が完了したら解決する {{jsxref("Promise")}} を返します。既定では、ポートは 8 ビットのデータ、1 ビットのストップビット、パリティチェックなしで開かれます。`baudRate` 引数は必須です。

## 構文

```js-nolint
open(options)
```

### 引数

- `options`

  - : 以下の値のうち任意のものが入ったオブジェクトです。

    - `baudRate`
      - : シリアル通信を確立するボーレートを表す正の値です。
    - `bufferSize` {{Optional_Inline}}
      - : 確保する送信用と受信用のバッファーのサイズを表す `unsigned long` の整数です。指定されない場合の既定値は 255 です。
    - `dataBits` {{Optional_Inline}}
      - : 1 フレームのデータビット数を表す、7 または 8 の整数です。指定されない場合の既定値は 8 です。
    - `flowControl` {{Optional_Inline}}
      - : `"none"` または `"hardware"` のいずれかで、フロー制御の種類を表します。既定値は `"none"` です。
    - `parity` {{Optional_Inline}}
      - : `"none"`, `"even"`, `"odd"` のいずれかで、パリティの種類を表します。既定値は `"none"` です。
    - `stopBits` {{Optional_Inline}}
      - : フレームの最後のストップビットの数を表す、1 または 2の整数です。指定されない場合の既定値は 1 です。

### 返値

{{jsxref("Promise")}} を返します。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : ポートが既に開かれているとき、返されます。
- `NetworkError` {{domxref("DOMException")}}
  - : ポートを開くのに失敗したとき、返されます。

## 例

シリアルポートで通信を行う前に、ポートを開く必要があります。ポートを開くことで、サイトはデータがどのように送受信されるかを決めるために必要なパラメーターを設定できます。開発者は、適切なパラメーターを決めるために接続するデバイスのドキュメントを参照するべきです。

```js
await port.open({ baudRate: 9600 /* ボーレートを決める */ });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
