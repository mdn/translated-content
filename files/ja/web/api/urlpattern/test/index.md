---
title: "URLPattern: test() メソッド"
short-title: test()
slug: Web/API/URLPattern/test
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

**`exec()`** は {{domxref("URLPattern")}} インターフェイスのメソッドで、 URL または URL の部分オブジェクトを受け取り、指定された入力が現在のパターンと一致するかどうかを示す論理値を返します。

## 構文

```js-nolint
test(input)
test(url)
test(url, baseURL)
```

### 引数

- `input`
  - : 個々の URL の部分を記述するオブジェクトです。
    オブジェクトのメンバーは、`protocol`、`username`、`password`、`hostname`、`port`、`pathname`、`search`、`hash`、`baseURL` のいずれかです。
- `url`
  - : 絶対 URL または相対 URL を定義する文字列ｄせう。
    相対 URL の場合、[`baseURL`](#baseurl) も同時に指定されなければならず、両者を合わせて絶対 URL として解決されなければなりません。
    入力値が解釈できなかった場合、またはベース URL のない相対 URL が指定された場合、このメソッドは `false` を返します。
- `baseURL` {{optional_inline}}
  - : [`url`](#url) が相対 URL の場合に使用するベース URL を表す文字列です。
    指定されなかった場合、デフォルトで `undefined` になります。
    指定された場合でも、ベースURLが解釈できない場合、このメソッドは `false` を返します。

`url`/`input` で指定されていない URL の部分は、状況によっては [ベース URL から継承される](#inheritance_from_a_baseurl) ことがあります。
省略された部分は空文字列として扱われます。

### 返値

論理値 ({{jsxref("boolean")}}) です。

### 例外

- {{jsxref("TypeError")}}
  - : [`input`](#input) オブジェクトが渡された際に `baseURL` が指定されたことを示します（`url` 文字列のみをつけて渡されるべきです）。

## 解説

このメソッドは {{domxref("URLPattern")}} に対して呼び出され、入力 URL を文字列（オプションでベース URL をつけて）またはそれぞれの URL 部分のプロパティを持つオブジェクトとして指定します。

このメソッドは、テスト URL/入力のすべての要素がパターンのすべての要素と一致した場合に `true` を返し、いずれかの要素が一致しない場合には`false`を返します。
また、相対 `url` が渡されたが `baseURL` が指定されていない場合（テストの絶対 URL を解決できない場合）も `null` を返します。
`input` オブジェクトを渡した場合、`input.baseURL` は常にオプションであることに注意してください。

### BaseURL からの継承

`url` で定義された最も具体的でない部分よりも具体的な URL 部分は、`baseURL`（または`input`の場合は`input.baseURL`）から継承される可能性があります。
直感的には、入力で `pathname` の部分が指定されている場合、URL 内のその左側の部分（`protocol`、`hostname`、`port`）はベース URL から継承されることがありますが、右側の部分（`search` と `hash`）は継承されないということです。
`username` と `password` は、ベース URL から継承されることはありません。

詳細は、API 概要の[ベース URL からの継承](/ja/docs/Web/API/URL_Pattern_API#ベース_url_からの継承)を参照してください。

## 例

この例では `test()` メソッドを使用して URL をパターンと照合する方法を示します。
この例では `test()` の呼び出しの結果がコンソールに出力されます。

### 絶対 URL の検査

まず、URL の照合に使用するパターンを定義します。
このパターンは、`http` または `https` プロトコルを持ち、`.example.com` のサブドメインであり、`/books/` に任意の値が続くパスを持つ URL に一致します。

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

次に、2 つの絶対 URL 文字列と照合します。
最初の文字列は一致しますが、2 つ目は一致しません。テスト URL が `example.com` のサブドメインではないためです。

```js
console.log(pattern.test("https://store.example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/123")); // false
```

### 相対 URL の検査

この例では、複数の相対 URL に対して検査するために、以前と同じパターンを使用しています。

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

次に、いくつかの相対 URL との照合を行います。
この場合は、解決された URL が `https://store.example.com/books/123` であるため一致します。一方、2 つ目の場合は解決された URL が `example.com` のサブドメインではないため、一致しません。

```js
console.log(pattern.test("/books/123", "http://store.example.com")); // true
console.log(pattern.test("/books/123", "http://example.com")); // false
```

この検査は一致しません。指定された URL が相対パスであり、 baseURL が指定されていないためです。
パス名のみに一致する検査を定義することは可能ですが、その場合はオブジェクト入力を使用する必要があります。

```js
console.log(pattern.test("/books/123")); // false
```

この検査は一致しません。ベース URL が有効な URL ではなく、`/books/123` と組み合わせても絶対 URL として解決されないためです。

```js
console.log(pattern.test("/books/123", "data:text/plain,hello world!")); // false
```

### URL オブジェクトでの検査

この例では、前の例と同じパターンを、構造化オブジェクトとして定義された複数の URL に対して検査するために使用します。

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

最初の場合で一致するのは、パターンのそれぞれの部分に対して正確に一致を定義しているためです。

```js
console.log(
  pattern.test({
    protocol: "https",
    hostname: "store.example.com",
    pathname: "/books/123",
  }),
); // true
```

このコードではパス名が存在し、不足部分は`baseURL`で補完されます。
結果は前回と同じです。

```js
console.log(
  pattern.test({
    pathname: "/books/123",
    baseURL: "http://store.example.com",
  }),
); // true
```

この構造化された URL は、プロトコルが `file`（`https` や `http` ではない）であるため、パターンに一致しません。

```js
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
