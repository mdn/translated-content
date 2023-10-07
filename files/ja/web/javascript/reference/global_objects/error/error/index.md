---
title: Error() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Error/Error
---

{{JSRef}}

**`Error`** コンストラクターは、エラーオブジェクトを生成します。

## 構文

```
new Error([message[, fileName[, lineNumber]]])
```

### 引数

- `message`{{Optional_Inline}}
  - : 人間が読めるエラーの説明。
- `fileName` {{Optional_Inline}}{{Non-standard_inline}}
  - : 生成された `Error` オブジェクト上の `fileName` プロパティに設定される値。既定では、`Error()` コンストラクターを呼び出したコードを含むファイルの名前です。
- `lineNumber` {{Optional_Inline}}{{Non-standard_inline}}
  - : 生成された `Error` オブジェクト上の `lineNumber` プロパティに設定される値。既定では、`Error()` コンストラクターの呼び出しを含む行番号。

## 例

### 関数呼び出しか new による構築か

`Error` が関数のように使用された場合 — {{JSxRef("Operators/new", "new")}} がなかった場合、 `Error` オブジェクトを返します。したがって、 `Error` を呼び出すだけで `Error` オブジェクトを `new` キーワードから構築した場合と同じものを出力します。

```js
// これは...
const x = Error("関数呼び出しによって生成されました。");

// ...これと同じ機能です。
const y = new Error('"new" キーワードによって生成されました。');
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Error.Error")}}

## 関連情報

- {{JSxRef("Statements/throw", "throw")}}
- {{JSxRef("Statements/try...catch", "try...catch")}}
