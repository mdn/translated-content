---
title: ReferenceError() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError/ReferenceError
---

{{JSRef}}

**`ReferenceError`** オブジェクトは、存在しない変数が参照されたときのエラーを表します。

## 構文

```
new ReferenceError([message[, fileName[, lineNumber]]])
```

### 引数

- `message` {{optional_inline}}
  - : 人間が読むためのエラーの説明です。
- `fileName` {{optional_inline}}
  - : 例外が発生したコードを含むファイルの名前です。
- `lineNumber` {{optional_inline}}
  - : 例外が発生したコードの行番号です。

## 例

### ReferenceError の捕捉

```js
try {
  let a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "undefinedVariable is not defined"
  console.log(e.name); // "ReferenceError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 6
  console.log(e.stack); // "@Scratchpad/2:2:7\n"
}
```

### ReferenceError の生成

```js
try {
  throw new ReferenceError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "ReferenceError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.ReferenceError.ReferenceError")}}

## 関連情報

- {{jsxref("Error")}}
