---
title: "URLPattern: test() メソッド"
short-title: test()
slug: Web/API/URLPattern/test
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

**`exec()`** は {{domxref("URLPattern")}} インターフェイスのメソッドで、 URL または URL の部分オブジェクトを受け取り、指定された入力が現在のパターンと一致するかどうかを示す論理値を返します。

## 構文

```js-nolint
test(input)
test(input, baseURL)
```

### 引数

- `input`
  - : 照合する URL または URL の部分です。これは文字列、または個々の URL の部分を記述するオブジェクトです。
    オブジェクトのメンバーは、`protocol`、`username`、`password`、`hostname`、`port`、`pathname`、`search`、`hash`、`baseURL` のいずれかです。オブジェクトで省略されている部分は、空文字列として扱われます。入力が解釈できない場合、またはベースのない相対 URL が指定された場合、このメソッドは `null` を返します。
- `baseURL` {{optional_inline}}
  - : `input` が相対 URL の場合に使用するベース URL を表す文字列です。指定しない場合、既定では `undefined` になります。この引数を解釈できない場合、メソッドは `false` を返します。

### 返値

論理値 ({{jsxref("boolean")}}) です。

## 例

この例では `test()` メソッドを使用して URL をパターンと照合する方法を示します。この例では `test()` の呼び出しの結果がコンソールに出力されます。

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");

// 絶対 URL 文字列
console.log(pattern.test("https://store.example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/123")); // false

// 相対 URL 文字列
console.log(pattern.test("/books/123", "http://store.example.com")); // true
console.log(pattern.test("/books/123", "data:text/plain,hello world!")); // false
console.log(pattern.test("/books/123")); // false

// 構造化オブジェクト
console.log(
  pattern.test({
    pathname: "/books/123",
    baseURL: "http://store.example.com",
  }),
); // true
console.log(
  pattern.test({
    protocol: "https",
    hostname: "store.example.com",
    pathname: "/books/123",
  }),
); // true
console.log(
  pattern.test({
    protocol: "file",
    hostname: "store.example.com",
    pathname: "/books/123",
  }),
); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `URLPattern` のポリフィルが [GitHub](https://github.com/kenchris/urlpattern-polyfill) にあります。
