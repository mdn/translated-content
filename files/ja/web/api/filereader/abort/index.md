---
title: "FileReader: abort() メソッド"
short-title: abort()
slug: Web/API/FileReader/abort
l10n:
  sourceCommit: e43bfd9b4a6c363a4ba7ef6ffa64c09b38fd111b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`abort()`** は {{domxref("FileReader")}} インターフェイスのメソッドで、読み取り操作を中止します。戻る時に、 {{domxref("FileReader.readyState","readyState")}} が `DONE` になります。

## 構文

```js-nolint
abort()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("FileReader")}}
