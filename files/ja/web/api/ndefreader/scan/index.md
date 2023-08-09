---
title: NDEFReader.scan()
slug: Web/API/NDEFReader/scan
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

`scan()` は {{DOMxRef("NDEFReader")}} インターフェイスのメソッドで、読み取り機器を起動し、 {{jsxref("Promise")}} を返します。このプロミスは NFC タグの読み取りを開始したときに解決し、ハードウェアや権限のエラーが発生したときは拒否されます。このメソッドは、 "nfc" の権限が事前に許可されていない場合は、許可を問い合わせるプロンプトを起動します。

## 構文

```js
var readerPromise = NDEFReader.scan(options);
```

### 引数

- `options` {{optional_inline}}

  - : 以下のプロパティを持つオブジェクトです。

    - `signal` — {{DOMxRef("AbortSignal")}} で、これによってこの `scan()` 操作をキャンセルすることができます。

### 返値

{{JSxRef("Promise")}} で、 NFC アダプターで読み取り操作のスケジューリングが終わると直ちに解決します。

## 例外

このメソッドからは例外は発生しません。代わりに返されるプロミスが拒否され、 {{domxref("DOMException")}} が `name` を何れかの一つとして渡されます。

- `AbortError`
  - : `options` 引数で渡された {{DOMxRef("AbortSignal")}} によってスキャン操作が中止された場合に返されます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 既に進行中のスキャンがある場合に返されます。
- `NotAllowedError`
  - : この操作の権限が拒否された場合に返されます。
- `NotSupportedError`
  - : ウェブ NFC と互換性のある NFC アダプターがない、または接続が確立できなかった場合に返されます。

## 例

### スキャン中のエラーの取り扱い

この例では、スキャンのプロミスが拒否され、 `readingerror` が発生したときの様子を示しています。

```js
const ndef = new NDEFReader();
ndef.scan().then(() => {
  console.log("Scan started successfully.");
  ndef.onreadingerror = (event) => {
    console.log("Error! Cannot read data from the NFC tag. Try a different one?");
  };
  ndef.onreading = (event) => {
    console.log("NDEF message read.");
  };
}).catch(error => {
  console.log(`Error! Scan failed to start: ${error}.`);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
