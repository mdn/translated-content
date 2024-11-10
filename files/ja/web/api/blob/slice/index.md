---
title: "Blob: slice() メソッド"
short-title: slice()
slug: Web/API/Blob/slice
l10n:
  sourceCommit: 84a9afd94f497d4173bde131731ef6bdf0b6135d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`slice()`** は {{domxref("Blob")}} インターフェイスのメソッドで、呼び出された blob のサブセットのデータを含む新しい `Blob` オブジェクトを作成して返します。

## 構文

```js-nolint
slice()
slice(start)
slice(start, end)
slice(start, end, contentType)
```

### 引数

- `start` {{optional_inline}}
  - : 新しい {{domxref("Blob")}} に入れる最初のバイトを示す {{domxref("Blob")}} 内の位置です。負の値を指定すると、{{domxref("Blob")}} の末尾から先頭へのオフセットとして扱われます。例えば、 -10 は {{domxref("Blob")}} の最後のバイトから 10 番目になります。既定値は 0 です。`start` にもとの {{domxref("Blob")}} のサイズよりも大きい値を指定すると、返される {{domxref("Blob")}} のサイズは 0 で、データは何も含まれません。
- `end` {{optional_inline}}
  - : 新しい {{domxref("Blob")}} に**含まれない**最初のバイトを示す {{domxref("Blob")}} 内の位置です（つまり、ちょうどこの位置にあるバイトは含まれません）。負の値を指定すると、{{domxref("Blob")}} の末尾から先頭へのオフセットとして扱われます。例えば、-10 は {{domxref("Blob")}} の最後のバイトから 10 番目になります。既定値は `size` です。
- `contentType` {{optional_inline}}
  - : 新しい {{domxref("Blob")}} に割り当てるコンテンツの型。これはその `type` プロパティの値になります。既定値は空文字列です。

### 返値

このメソッドが呼び出された Blob 内に含まれるデータの指定されたサブセットを含む新しい {{domxref("Blob")}} オブジェクトです。元の Blob は変更されません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Blob")}}
- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
