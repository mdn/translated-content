---
title: decodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/decodeURIComponent
---

{{jsSidebar("Objects")}}

**`decodeURIComponent()`** 関数は、{{jsxref("encodeURIComponent", "encodeURIComponent()")}} 関数あるいは同様のルーチンによって事前に作成された URI (Uniform Resource Identifier; 統一資源識別子) の構成要素をデコードします。

{{InteractiveExample("JavaScript Demo: Standard built-in objects - decodeURIComponent()")}}

```js interactive-example
function containsEncodedComponents(x) {
  // ie ?,=,&,/ etc
  return decodeURI(x) !== decodeURIComponent(x);
}

console.log(containsEncodedComponents("%3Fx%3Dtest")); // ?x=test
// Expected output: true

console.log(containsEncodedComponents("%D1%88%D0%B5%D0%BB%D0%BB%D1%8B")); // шеллы
// Expected output: false
```

## 構文

```
decodeURIComponent(encodedURI)
```

### 引数

- `encodedURI`
  - : エンコードされた URI の構成要素です。

### 返値

エンコードされた統一資源識別子 (URI) の構成要素をデコードしたものを表す新しい文字列です。

### 例外

不正に利用された場合は {{jsxref("URIError")}} ("malformed URI sequence") 例外が発生します。

## 解説

エンコードされた URI の構成要素のエスケープシーケンスを、それぞれが表す文字に置き換えます。

## 例

### キリル文字の URL の構成要素をデコード

```js
decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "JavaScript_шеллы"
```

### エラーの捕捉

```js
try {
  var a = decodeURIComponent("%E0%A4%A");
} catch (e) {
  console.error(e);
}

// URIError: malformed URI sequence
```

### URL からのクエリパラメータのデコード

decodeURIComponent は、URL からのクエリパラメータを解析するために直接使用することはできません。少し準備が必要です。

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
