---
title: "FileReader: readyState プロパティ"
short-title: readyState
slug: Web/API/FileReader/readyState
l10n:
  sourceCommit: e932acf254c5dd06e26798b9d8fe01ce8dab1fb7
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`readyState`** は {{domxref("FileReader")}} の読み取り専用プロパティで、読み取り操作の現在の状態を提供します。
これは `EMPTY`, `LOADING`, `DONE` のいずれかの状態です。

## 値

{{domxref("FileReader")}} インターフェイスで定義されている 3 つの状態定数のうちの 1 つである数値です。

- `FileReader.EMPTY` (0)
  - : リーダーは作成されましたが、読み取りメソッドは呼び出されていません。
- `FileReader.LOADING` (1)
  - : 読み取りメソッドが呼び出されました。{{domxref("File")}} または {{domxref("Blob")}} が読み取り中であり、まだエラーは発生していません。
- `FileReader.DONE` (2)
  - : 読み取り操作が完了しています。これは、 {{domxref("File")}} または {{domxref("Blob")}} の全体がメモリーに読み込まれたか、ファイル読み取りエラーが発生したか、 {{domxref("FileReader.abort()", "abort()")}} が呼び出され、読み取りがキャンセルされたか、いずれかを意味します。

## 例

```js
const reader = new FileReader();
console.log("EMPTY", reader.readyState); // readyState は 0 になります。

reader.readAsText(blob);
console.log("LOADING", reader.readyState); // readyState は 1 になります。

reader.onloadend = () => {
  console.log("DONE", reader.readyState); // readyState は 2 になります。
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Blob")}}
