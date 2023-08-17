---
title: EvalError() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/EvalError/EvalError
---

{{JSRef}}

**`EvalError`** コンストラクターは、グローバルの {{jsxref("Global_Objects/eval", "eval()")}} 関数に関する新しいエラーを生成します。この例外はもう JavaScript からは使用されていませんが、 `EvalError` オブジェクトは互換性のために残っています。object

## 構文

```
new EvalError([message[, fileName[, lineNumber]]])
```

### 引数

- `message` {{optional_inline}}
  - : 人間が読むためのエラーの説明です。
- `fileName` {{optional_inline}}
  - : 例外が発生したコードを含むファイルの名前です。
- `lineNumber` {{optional_inline}}
  - : 例外が発生したコードの行番号です。

## 例

`EvalError` は現在の ECMAScript 仕様書では使用されておらず、ランタイムから発生することもありません。しかし、このオブジェクト自身は仕様書の以前のバージョンとの後方互換性のために残っています。

### EvalError の生成

```js
try {
  throw new EvalError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "EvalError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.EvalError.EvalError")}}

## 関連情報

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/eval", "eval()")}}
