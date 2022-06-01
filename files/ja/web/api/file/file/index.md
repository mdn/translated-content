---
title: File()
slug: Web/API/File/File
tags:
  - API
  - コンストラクター
  - File API
  - リファレンス
browser-compat: api.File.File
translation_of: Web/API/File/File
---
{{APIRef("File")}}

**`File()`** コンストラクターは、新しい {{domxref("File")}} オブジェクトのインスタンスを生成します。

## 構文

```js
new File(bits, name[, options]);
```

### 引数

- `bits`
  - : {{jsxref("Array")}}、{{jsxref("ArrayBuffer")}}、{{domxref("ArrayBufferView")}}、{{domxref("Blob")}}、{{domxref("USVString")}} の {{jsxref("Array")}} オブジェクト、またはそれらをあわせたものを {{domxref("File")}} 内に格納します。`USVString` オブジェクトは UTF-8 でエンコードされます。
- `name`
  - : {{domxref("USVString")}} で、ファイル名またはファイルへのパスを表します。
- `options` {{optional_inline}}

  - : ファイルのオプション属性を含むオプションオブジェクト。利用可能なオプションは以下の通りです。

    - `type`: ファイルの中に入るコンテンツの MIME タイプを表す {{domxref("DOMString")}} です。既定値は `""` です。
    - `lastModified`: UNIX 元期からのミリ秒単位で、ファイルが最後に更新された時刻を表す数値です。既定値は {{jsxref("Date.now()")}} です。

## 例

```js
var file = new File(["foo"], "foo.txt", {
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
