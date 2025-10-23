---
title: "URLPattern: exec() メソッド"
short-title: exec()
slug: Web/API/URLPattern/exec
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

**`exec()`** は {{domxref("URLPattern")}} インターフェイスのメソッドで、 URL または URL の部分オブジェクトを受け取り、 URL とパターンとの照合結果を含むオブジェクト、または URL がパターンと一致しない場合は `null` を返します。

## 構文

```js-nolint
exec(input)
exec(input, baseURL)
```

### 引数

- `input`
  - : 照合する URL または URL の部分です。これは文字列、または個々の URL の部分を記述するオブジェクトです。
    オブジェクトのメンバーは、`protocol`、`username`、`password`、`hostname`、`port`、`pathname`、`search`、`hash`、`baseURL` のいずれかです。オブジェクトで省略されている部分は、空文字列として扱われます。入力が解釈できない場合、またはベースのない相対 URL が指定された場合、このメソッドは `null` を返します。
- `baseURL` {{optional_inline}}
  - : `input` が相対 URL の場合に使用するベース URL を表す文字列です。指定しない場合、既定では `undefined` になります。この引数を解釈できない場合、メソッドは `null` を返します。

### 返値

関数に渡された引数の配列を含む `inputs` キー、および一致した入力を含む URL 部分の各キー、その部分の一致したグループを含む{{jsxref("object", "オブジェクト", "", "nocode")}}です。

## 例

この例では `exec()` メソッドを使用して URL をパターンと照合する方法を示します。この例では `exec()` の呼び出しの結果がコンソールに出力されます。

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");

// 絶対 URL 文字列
console.log(pattern.exec("https://example.com/books/123")); // null
let match = pattern.exec("https://store.example.com/books/123");
console.log(match.inputs); // ['https://store.example.com/books/123']
console.log(match.protocol); // { input: "https", groups: {} }
console.log(match.username); // { input: "", groups: {} }
console.log(match.password); // { input: "", groups: {} }
console.log(match.hostname); // { input: "store.example.com", groups: { "0": "store" } }
console.log(match.port); // { input: "", groups: {} }
console.log(match.pathname); // { input: "/books/123", groups: { "id": "123" } }
console.log(match.search); // { input: "", groups: {} }
console.log(match.hash); // { input: "", groups: {} }

// 相対 URL 文字列
pattern.exec("/books/123", "http://store.example.com"); // オブジェクトを返す
pattern.exec("/books/123", "data:text/plain,hello world!"); // オブジェクトを返す
pattern.exec("/books/123"); // null を返す

// 構造化オブジェクト
pattern.exec({
  pathname: "/books/123",
  baseURL: "http://store.example.com",
}); // オブジェクトを返す
pattern.exec({
  protocol: "https",
  hostname: "store.example.com",
  pathname: "/books/123",
}); // オブジェクトを返す
pattern.exec({
  protocol: "file",
  hostname: "store.example.com",
  pathname: "/books/123",
}); // null を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `URLPattern` のポリフィルが [GitHub](https://github.com/kenchris/urlpattern-polyfill) にあります。
