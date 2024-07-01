---
title: WebAssembly.RuntimeError() コンストラクター
slug: WebAssembly/JavaScript_interface/RuntimeError/RuntimeError
---

{{WebAssemblySidebar}}

**`WebAssembly.RuntimeError()`** コンストラクターは、新しい WebAssembly `RuntimeError` オブジェクトを生成します。これは、 WebAssembly が[トラップ](https://webassembly.org/docs/semantics/#traps)を指定するたびに例外として発生する型です。

## 構文

```js
new WebAssembly.RuntimeError();
new WebAssembly.RuntimeError(message);
new WebAssembly.RuntimeError(message, fileName);
new WebAssembly.RuntimeError(message, fileName, lineNumber);
```

### 引数

- `message` {{optional_inline}}
  - : 人間が読めるエラーの説明です。
- `fileName` {{optional_inline}}
  - : 例外が発生したコードを含むファイル名です。
- `lineNumber` {{optional_inline}}
  - : 例外が発生したコードの行番号です。

## 例

### 新しい RuntimeError のインスタンスの生成

以下のスニペットは新しい `RuntimeError` のインスタンスを生成し、コンソールに詳細を記録します。

```js
try {
  throw new WebAssembly.RuntimeError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof WebAssembly.RuntimeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "RuntimeError"
  console.log(e.fileName); // "someFile"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // コードの実行されていた位置を返す
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
