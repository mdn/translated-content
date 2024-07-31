---
title: "File: File() コンストラクター"
short-title: File()
slug: Web/API/File/File
l10n:
  sourceCommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`File()`** コンストラクターは、新しい {{domxref("File")}} オブジェクトのインスタンスを生成します。

## 構文

```js-nolint
new File(fileBits, fileName)
new File(fileBits, fileName, options)
```

### 引数

- `fileBits`
  - : [反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)オブジェクト、例えば {{jsxref("Array")}}、{{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}}、{{domxref("Blob")}}、文字列、またはそのような要素を混合させたものを {{domxref("File")}} 内に格納します。
    なお、文字列は JavaScript の UTF-16 文字列ではなく、UTF-8 でエンコードされます。
- `fileName`
  - : 文字列で、ファイル名またはファイルへのパスを表します。
- `options` {{optional_inline}}

  - : ファイルのオプション属性を含むオプションオブジェクト。利用可能なオプションは以下の通りです。

    - `type` {{optional_inline}}
      - : ファイルの中に入るコンテンツの MIME タイプを表す文字列です。既定値は `""` です。
    - `endings` {{optional_inline}}
      - : データがテキストの場合、コンテンツ内の改行文字 (`\n`) をどのように解釈するか。既定値である `transparent` は、改行文字を変更せずにblobにコピーします。改行文字をホストシステムのネイティブ規約に変換するには、値 `native` を指定します。
    - `lastModified` {{optional_inline}}
      - : UNIX 元期からのミリ秒単位で、ファイルが最後に更新された時刻を表す数値です。既定値は {{jsxref("Date.now()")}} です。

## 例

```js
const file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("FileReader")}}
- {{domxref("Blob")}}
