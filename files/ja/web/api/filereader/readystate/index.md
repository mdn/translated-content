---
title: FileReader.readyState
slug: Web/API/FileReader/readyState
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("File API")}}

{{domxref("FileReader")}} の **`readyState`** プロパティは、 `FileReader` がいる読み取り操作の現在の状態を提供します。 `FileReader` は以下のいずれかの状態にあります。

| 値  | 状態      | 説明                                                                |
| --- | --------- | ------------------------------------------------------------------- |
| `0` | `EMPTY`   | Reader が作成されました。まだ読み込まれているメソッドはありません。 |
| `1` | `LOADING` | read メソッドが呼び出されました。                                   |
| `2` | `DONE`    | 操作が完了しています。                                              |

- `EMPTY`
  - : `FileReader` は作成されましたが、 readAs メソッドはまだ呼び出されていません。
- `LOADING`
  - : readAs メソッドが呼び出されました。 {{domxref("File")}} または {{domxref("Blob")}} が読み取り中であり、まだエラーは発生していません。
- `DONE`
  - : 読み取り操作が完了しています。これは、 {{domxref("File")}} または {{domxref("Blob")}} の全体がメモリに読み込まれたか、ファイル読み取りエラーが発生したか、 {{domxref("FileReader.abort()", "abort()")}} が呼び出され、読み取りがキャンセルされたか、いずれかを意味します。

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

## 値

{{domxref("FileReader")}} API のために定義されている、状態を表す 3 つの定数のうちの 1 つです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Blob")}}
