---
title: WebAssembly.LinkError() コンストラクター
slug: WebAssembly/JavaScript_interface/LinkError/LinkError
---

{{WebAssemblySidebar}}

**`WebAssembly.LinkError()`** コンストラクターは、新しい WebAssembly `LinkError` オブジェクトを生成します。これは、 (関数開始後の[トラップ](https://webassembly.org/docs/semantics/#traps)ではなく) モジュールがインスタンス化される間に発生したエラーを発生します。

## 構文

```js
new WebAssembly.LinkError();
new WebAssembly.LinkError(message);
new WebAssembly.LinkError(message, fileName);
new WebAssembly.LinkError(message, fileName, lineNumber);
```

### 引数

- `message` {{optional_inline}}
  - : 人間が読めるエラーの説明です。
- `fileName` {{optional_inline}}
  - : 例外が発生したコードを含むファイル名です。
- `lineNumber` {{optional_inline}}
  - : 例外が発生したコードの行番号です。

## 例

### 新しい LinkError のインスタンスの生成

以下のスニペットは新しい `LinkError` のインスタンスを生成し、コンソールに詳細を記録します。

```js
try {
  throw new WebAssembly.LinkError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof WebAssembly.LinkError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "LinkError"
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
