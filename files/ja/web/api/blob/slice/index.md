---
title: Blob.slice()
slug: Web/API/Blob/slice
---

{{APIRef("File API")}}

{{domxref("Blob")}} インターフェイスの **`slice()`** メソッドは、呼び出された blob のサブセットのデータを含む新しい `Blob` オブジェクトを作成して返します。

## 構文

```
var newBlob = blob.slice(start, end, contentType);
```

### パラメータ

- `start` {{optional_inline}}
  - : 新しい {{domxref("Blob")}} に含める最初のバイトを示す {{domxref("Blob")}} へのインデックス。負の値を指定すると、{{domxref("Blob")}} の末尾から先頭へのオフセットとして扱われます。例えば、-10 は {{domxref("Blob")}} の最後のバイトから 10 番目になります。デフォルト値は 0 です。`start` にもとの {{domxref("Blob")}} のサイズよりも大きい値を指定すると、返される {{domxref("Blob")}} のサイズは 0 で、データは何も含まれません。
- `end` {{optional_inline}}
  - : 新しい {{domxref("Blob")}} に**含まれない**最初のバイトを示す {{domxref("Blob")}} へのインデックス。(つまり、このインデックスに正確に位置するバイトは含まれません)。負の値を指定すると、{{domxref("Blob")}} の末尾から先頭へのオフセットとして扱われます。例えば、-10 は {{domxref("Blob")}} の最後のバイトから 10 番目になります。デフォルト値は `size` です。
- `contentType` {{optional_inline}}
  - : 新しい {{domxref("Blob")}} に割り当てるコンテンツの型。これはその `type` プロパティの値になります。デフォルト値は空の文字列です。

### 戻り値

このメソッドが呼び出された Blob 内に含まれるデータの指定されたサブセットを含む新しい {{domxref("Blob")}} オブジェクト。元の Blob は変更されません。

## 仕様

| 仕様                                                                     | ステータス                   | コメント   |
| ------------------------------------------------------------------------ | ---------------------------- | ---------- |
| {{SpecName("File API", "#dfn-slice", "Blob.slice()")}} | {{Spec2("File API")}} | 初期定義。 |

## ブラウザの実装状況

{{Compat("api.Blob.slice")}}

## あわせて参照

- {{domxref("Blob")}}
- [Web アプリケーションからのファイルの使用](/ja/docs/Web/API/File/Using_files_from_web_applications)
