---
title: Error.isError()
short-title: isError()
slug: Web/JavaScript/Reference/Global_Objects/Error/isError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Error.isError()`** は静的メソッドで、渡された値が {{jsxref("Error")}} であるかどうかを判定します。

## 構文

```js-nolint
Error.isError(value)
```

### 引数

- `value`
  - : チェックされる値です。

### 返値

`value` が {{jsxref("Error")}} の場合、`true` を返します。それ以外の場合は `false` を返します。

## 解説

`Error.isError()` は、渡された値が {{jsxref("Error")}} であるかどうかを確認します。これは、{{jsxref("Error/Error", "Error()")}} コンストラクターによって初期化されたプライベートフィールドに対する「ブランドチェック」を実行することで行われます。
これは {{jsxref("Array.isArray()")}} で使用されているのと同じ仕組みであり、さらに [`in`](/ja/docs/Web/JavaScript/Reference/Operators/in) 演算子で使用されている仕組みと類似しています。

これは、[`instanceof Error`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) よりも堅牢な代替手段あり、誤検知や誤否認を回避することができます。

- `Error.isError()` は、プロトタイプチェーンに `Error.prototype` が存在する場合でも、実際の `Error` インスタンスではない値を拒否します。`instanceof Error` はプロトタイプチェーンをチェックするため、これらの値を受け入れます。
- `Error.isError()` は別の領域で構築された `Error` オブジェクトを受け入れます。 この場合、`instanceof Error` は `false` を返します。これは、`Error` コンストラクターの同一性が領域間で異なるためです。

`Error.isError()` は、{{domxref("DOMException")}} インスタンスに対して `true` を返します。これは、`DOMException` が `Error` の真のサブクラスとして指定されていないにもかかわらず（`Error` コンストラクタは `DOMException` コンストラクターのプロトタイプではない）、`DOMException` はすべてのブランドチェックの目的において `Error` と同様の振る舞いをするためです。

## 例

### Error.isError() の使用

```js
// 以下のものはすべて true を返す
Error.isError(new Error());
Error.isError(new TypeError());
Error.isError(new DOMException());
try {
  1 + 1n;
} catch (e) {
  console.log(Error.isError(e)); // この操作は TypeError を発生するので、true を返す
}

// 以下のものはすべて false を返す
Error.isError();
Error.isError({});
Error.isError(null);
Error.isError(undefined);
Error.isError(17);
Error.isError("Error");
Error.isError(true);
Error.isError(false);
// これはエラーではない。オブジェクトが Error コンストラクターによって
// 初期化されたプライベートフィールドを持たないため
Error.isError({ __proto__: Error.prototype });
```

### instanceof と Error.isError()

`Error` インスタンスをチェックする際は、 `Error.isError()` を `instanceof` よりも使用することを推奨します。これは領域を超えて動作するためです。

```js
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const xError = window.frames[window.frames.length - 1].Error;
const error = new xError();

// 正しく Error をチェックした
Error.isError(error); // true
// このエラーのプロトタイプは xError.prototype であり、
// Error.prototype とは異なるオブジェクトである
error instanceof Error; // false
```

### 捕捉されたエラーの正規化

`Error.isError()` を使用して、捕捉された値がエラーかどうかを検出し、エラーオブジェクトに正規化できます。

```js
try {
  throw "おっと、これは Error オブジェクトではありません";
} catch (e) {
  if (!Error.isError(e)) {
    e = new Error(e);
  }
  console.error(e.message);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Error.isError` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#erroriserror)
- [es-shims による `Error.isError` のポリフィル](https://www.npmjs.com/package/error.iserror)
- {{jsxref("Error")}}
