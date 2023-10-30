---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
---

{{jsSidebar("Objects")}}

**`decodeURI()`** 関数は、{{jsxref("encodeURI", "encodeURI()")}} 関数あるいは同様のルーチンによって事前に作成された URI (Uniform Resource Identifier; 統一資源識別子) をデコードします。

{{EmbedInteractiveExample("pages/js/globalprops-decodeuri.html")}}

## 構文

```
decodeURI(encodedURI)
```

### 引数

- `encodedURI`
  - : 完全にエンコードされた URI。

### 返値

与えられたエンコードされた統一資源識別子 (URI) のエンコードされていないバージョンを表す新しい文字列。

### 例外

`encodedURI` が無効な文字の並びを含む場合、{{jsxref("URIError")}} ("malformed URI sequence") 例外が発生します。

## 解説

エンコードされた URI のエスケープシーケンスを、それぞれが表す文字に置き換えます。ただし、{{jsxref("encodeURI")}} によって生成されないエスケープシーケンスはデコードしません。また、"`#`" の文字はエスケープシーケンスからデコードされません。

## 使用例

### キリル文字の URL をデコード

```js
decodeURI(
  "https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B",
);
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
```

### エラーの捕捉

```
try {
  var a = decodeURI('%E0%A4%A');
} catch(e) {
  console.error(e);
}

// URIError: malformed URI sequence
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.decodeURI")}}

## 関連情報

- {{jsxref("decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}
