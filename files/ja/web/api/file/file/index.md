---
title: "File: File() コンストラクター"
short-title: File()
slug: Web/API/File/File
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File")}}

**`File()`** コンストラクターは、新しい {{domxref("File")}} オブジェクトのインスタンスを生成します。

## 構文

```js-nolint
new File(bits, name)
new File(bits, name, options)
```

### 引数

- `bits`
  - : [反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)オブジェクト、例えば {{jsxref("Array")}}、{{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}}、{{domxref("Blob")}}、文字列、またはそのような要素を混合させたものを {{domxref("File")}} 内に格納します。なお、文字列は JavaScript の UTF-16 文字列ではなく、UTF-8 でエンコードされます。
- `name`
  - : 文字列で、ファイル名またはファイルへのパスを表します。
- `options` {{optional_inline}}

  - : ファイルのオプション属性を含むオプションオブジェクト。利用可能なオプションは以下の通りです。

    - `type`
      - : ファイルの中に入るコンテンツの MIME タイプを表す文字列です。既定値は `""` です。
    - `lastModified`
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
