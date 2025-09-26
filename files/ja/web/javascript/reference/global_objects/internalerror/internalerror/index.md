---
title: InternalError() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/InternalError/InternalError
---

{{JSRef}} {{non-standard_header}}

**`InternalError()`** コンストラクターは、 JavaScript エンジンで内部的に発生したエラーを示すエラーを生成します。例えば、 "**InternalError**: too much recursion" などです。

## 構文

```
new InternalError([message[, fileName[, lineNumber]]])
```

### 引数

- `message` {{optional_inline}}
  - : 人間が読むためのエラーの説明です。
- `fileName` {{optional_inline}}
  - : 例外が発生したコードを含むファイルの名前です。
- `lineNumber` {{optional_inline}}
  - : 例外が発生したコードの行番号です。

## 例

### 新しい InternalError の生成

```js
new InternalError("Engine failure");
```

## 仕様書

標準の一部ではありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error")}}
