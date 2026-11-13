---
title: decodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/decodeURIComponent
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`decodeURIComponent()`** 関数は、{{jsxref("encodeURIComponent()")}} 関数あるいは同様のルーチンによって事前に作成された URI (Uniform Resource Identifier; 統一資源識別子) の構成要素をデコードします。

{{InteractiveExample("JavaScript デモ: decodeURIComponent()")}}

```js interactive-example
function containsEncodedComponents(x) {
  // ie ?,=,&,/ etc
  return decodeURI(x) !== decodeURIComponent(x);
}

console.log(containsEncodedComponents("%3Fx%3Dtest")); // ?x=test
// 予想される結果: true

console.log(containsEncodedComponents("%D1%88%D0%B5%D0%BB%D0%BB%D1%8B")); // шеллы
// 予想される結果: false
```

## 構文

```js-nolint
decodeURIComponent(encodedURI)
```

### 引数

- `encodedURI`
  - : エンコードされた URI の構成要素です。

### 返値

エンコードされた統一資源識別子 (URI) の構成要素をデコードしたものを表す新しい文字列です。

### 例外

- {{jsxref("URIError")}}
  - : `encodedURI` に 2 桁の 16 進数字が続かない `%` が含まれている場合、またはエスケープシーケンスが有効な UTF-8 文字をエンコードしていない場合に発生します。

## 解説

`decodeURIComponent()` は、グローバルオブジェクトの関数プロパティです。

`decodeURIComponent()` は、 {{jsxref("decodeURI()")}} で記述されているのと同じデコードアルゴリズムを使用します。これは、`-.!~*'()` など、 {{jsxref("encodeURIComponent")}} によって生成されていないエスケープシーケンスも、すべてデコードします。

## 例

### キリル文字の URL の構成要素をデコード

```js
decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "JavaScript_шеллы"
```

### エラーの捕捉

```js
try {
  const a = decodeURIComponent("%E0%A4%A");
} catch (e) {
  console.error(e);
}

// URIError: malformed URI sequence
```

### URL からのクエリー引数のデコード

`decodeURIComponent()` は、URL からのクエリー引数を解析するために直接使用することはできません。少し準備が必要です。

```js
function decodeQueryParam(p) {
  return decodeURIComponent(p.replace(/\+/g, " "));
}

decodeQueryParam("search+query%20%28correct%29");
// 'search query (correct)'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
