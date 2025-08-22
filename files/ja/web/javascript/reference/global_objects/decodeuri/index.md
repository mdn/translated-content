---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`decodeURI()`** 関数は、{{jsxref("encodeURI()")}} 関数あるいは同様のルーチンによって事前に作成された URI (Uniform Resource Identifier; 統一資源識別子) をデコードします。

{{InteractiveExample("JavaScript デモ: decodeURI()")}}

```js interactive-example
const uri = "https://mozilla.org/?x=шеллы";
const encoded = encodeURI(uri);
console.log(encoded);
// 予想される結果: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
  console.log(decodeURI(encoded));
  // 予想される結果: "https://mozilla.org/?x=шеллы"
} catch (e) {
  // 正しくない形の URI を捕捉
  console.error(e);
}
```

## 構文

```js-nolint
decodeURI(encodedURI)
```

### 引数

- `encodedURI`
  - : 完全にエンコードされた URI。

### 返値

与えられたエンコードされた統一資源識別子 (URI) のエンコードされていないバージョンを表す新しい文字列。

### 例外

- {{jsxref("URIError")}}
  - : `encodedURI` に 2 桁の 16 進数字が続かない `%` が含まれている場合、またはエスケープシーケンスが有効な UTF-8 文字をエンコードしていない場合に発生します。

## 解説

`decodeURI()` は、グローバルオブジェクトの関数プロパティです。

`decodeURI()` 関数は、 `%XX` という形のエスケープシーケンスを 1 つの UTF-8 コード単位（1 バイト）として扱い、 URI をデコードします。 UTF-8 では、最初のバイトの先頭にある 1 ビットの数は、 0 （1 バイトの {{Glossary("ASCII")}} 文字の場合）になることがあり、2、3、4 ビット目は、文字のバイト数を示します。したがって、最初のエスケープシーケンスを読み込むことで、 `decodeURI()` は、さらに消費すべきエスケープシーケンスの数を決定することができます。 `decodeURI()` が予想した数のシーケンスを見つけられなかった場合、またはエスケープシーケンスが有効な UTF-8 文字をエンコードしていない場合、 {{jsxref("URIError")}} が発生します。

`decodeURI()` はすべてのエスケープシーケンスをデコードしますが、エスケープシーケンスが次の文字のいずれかをエンコードしている場合、そのエスケープシーケンスは出力文字列に保持されます（これらは URI 構文の一部であるため）。

```plain
; / ? : @ & = + $ , #
```

## 例

### キリル文字の URL をデコード

```js
decodeURI(
  "https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B",
);
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
```

### decodeURI() と decodeURIComponent()

`decodeURI()` は、入力が完全な URI であると仮定するため、URI 構文の一部である文字はデコードしません。

```js
decodeURI(
  "https://developer.mozilla.org/docs/JavaScript%3A%20a_scripting_language",
);
// "https://developer.mozilla.org/docs/JavaScript%3A a_scripting_language"

decodeURIComponent(
  "https://developer.mozilla.org/docs/JavaScript%3A%20a_scripting_language",
);
// "https://developer.mozilla.org/docs/JavaScript: a_scripting_language"
```

### エラーの捕捉

```js
try {
  const a = decodeURI("%E0%A4%A");
} catch (e) {
  console.error(e);
}

// URIError: malformed URI sequence
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("decodeURIComponent()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
