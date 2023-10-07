---
title: SyntaxError() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError/SyntaxError
---

{{JSRef}}

**`SyntaxError`** オブジェクトは、文法的に無効なコードを解釈しようとしたときのエラーを表します。

## 構文

```
new SyntaxError([message[, fileName[, lineNumber]]])
```

### 引数

- `message` {{optional_inline}}
  - : 人間が読むためのエラーの説明です。
- `fileName` {{optional_inline}}
  - : 例外が発生したコードを含むファイルの名前です。
- `lineNumber` {{optional_inline}}
  - : 例外が発生したコードの行番号です。

## 例

### SyntaxError の捕捉

```js
try {
  eval("hoo bar");
} catch (e) {
  console.error(e instanceof SyntaxError);
  console.error(e.message);
  console.error(e.name);
  console.error(e.fileName);
  console.error(e.lineNumber);
  console.error(e.columnNumber);
  console.error(e.stack);
}
```

### SyntaxError の生成

```js
try {
  throw new SyntaxError("Hello", "someFile.js", 10);
} catch (e) {
  console.error(e instanceof SyntaxError); // true
  console.error(e.message); // Hello
  console.error(e.name); // SyntaxError
  console.error(e.fileName); // someFile.js
  console.error(e.lineNumber); // 10
  console.error(e.columnNumber); // 0
  console.error(e.stack); // @debugger eval code:3:9
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.SyntaxError.SyntaxError")}}

## 関連情報

- {{jsxref("Error")}}
