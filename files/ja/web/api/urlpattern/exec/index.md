---
title: "URLPattern: exec() メソッド"
short-title: exec()
slug: Web/API/URLPattern/exec
l10n:
  sourceCommit: f06142077fabbb1e0fe791d74b856ae4f8d058b4
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

**`exec()`** は {{domxref("URLPattern")}} インターフェイスのメソッドで、 URL または URL の部分オブジェクトを受け取り、 URL とパターンとの照合結果を含むオブジェクトを返します。 URL がパターンと一致しない場合は `null` を返します。

## 構文

```js-nolint
exec(input)
exec(url)
exec(url, baseURL)
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

照合する要素とグループを定義するオブジェクト ({{jsxref("Object")}})、または渡された入力がパターンに一致しない場合は `null` です。

このオブジェクトには以下のプロパティがあります。

- `inputs`
  - : `exec()` 関数に渡された入力値を格納する配列です。
    渡された `input` オブジェクト、絶対 `url` 文字列、または相対 `url` と `baseURL` のいずれかが含まれています。

- `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash`
  - : それぞれの URL 部分の名前付きプロパティです。
    それぞれのプロパティには、次のプロパティを持つオブジェクトが含まれています。
    - `input`
      - : 現在の URL 部分プロパティに対応する入力部分（パターンに一致しなければならない）。
        これは空文字列 (`""`) である可能性があります。
    - `groups`
      - : URL 部分（存在する場合）のそれぞれの照合グループに対応するプロパティと、入力フィールド内の対応する一致値を持つオブジェクト。
        グループプロパティは、名前が付けられていない照合グループ（ワイルドカードなど）を 0 として数値が付けられます。
        名前付き照合グループの場合、プロパティ名はグループ名となります。

### 例外

- {{jsxref("TypeError")}}
  - : [`input`](#input) オブジェクトが渡された際に `baseURL` が指定されたことを示します（`url` 文字列のみをつけて渡されるべきです）。

## 解説

このメソッドは {{domxref("URLPattern")}} に対して呼び出され、入力 URL を文字列（オプションでベース URL をつけて）またはそれぞれの URL 部分のプロパティを持つオブジェクトとして指定します。

このメソッドは、URL がパターンと照合した場合の結果を含むオブジェクトを返します。URL がパターンと一致しない場合は `null` を返します。
また、相対 `url` が渡されたが `baseURL` が指定されていない場合（テストの絶対 URL を解決できない場合）も `null` を返します。
`input` オブジェクトを渡した場合、`input.baseURL` は常にオプションであることに注意してください。

### BaseURL からの継承

`url` で定義された最も具体的でない部分よりも具体的な URL 部分は、`baseURL`（または`input`の場合は`input.baseURL`）から継承される可能性があります。
直感的には、入力で `pathname` の部分が指定されている場合、URL 内のその左側の部分（`protocol`、`hostname`、`port`）はベース URL から継承されることがありますが、右側の部分（`search` と `hash`）は継承されないということです。
`username` と `password` は、ベース URL から継承されることはありません。

詳細は、API 概要の[ベース URL からの継承](/ja/docs/Web/API/URL_Pattern_API#ベース_url_からの継承)を参照してください。

## 例

この例では `exec()` メソッドを使用して URL をパターンと照合する方法を示します。

### 絶対 URL の照合

まず、URL の照合に使用するパターンを定義します。
このパターンは、`http` または `https` プロトコルを持ち、`.example.com` のサブドメインであり、`/books/` に任意の値が続くパスを持つ URL に一致します。

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

次に、URL 文字列 `"https://store.example.com/books/123"` をこのパターンに対して検査し、それぞれのプロパティのオブジェクトを個別にログに記録します。
`input` には、パターンに一致する URL 内の入力値が表示されることに注意してください。
多くの場合、これは空文字列 (`""`) になります。これは入力 URL が具体的なURL部分を指定していないためです（デフォルトで未指定の URL 部分に対してワイルドカード一致を使用するため、このパターンに一致します）。

```js
let match = pattern.exec("https://store.example.com/books/123");

console.log(match.inputs); // ['https://store.example.com/books/123']
console.log(match.protocol); // { input: "https", groups: {} }
console.log(match.username); // { input: "", groups: {"0": ""} }
console.log(match.password); // { input: "", groups: {"0": ""} }
console.log(match.hostname); // { input: "store.example.com", groups: { "0": "store" } }
console.log(match.port); // { input: "", groups: {} }
console.log(match.pathname); // { input: "/books/123", groups: { "id": "123" } }
console.log(match.search); // { input: "", groups: {"0": ""} }
console.log(match.hash); // { input: "", groups: {"0": ""} }
```

また、`pathname` の入力値 `"/books/123"` がパターン `/books/:id` にどのように一致するか、そして `groups` が一致した入力値を含む名前付きプロパティ `id` を含んでいる点にも注意してください。

### 相対 URL の照合

この例では、前の例と同じパターンを使用して、複数の相対 URL とその対応するベース URL に対して照合を行っています。

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

次のコードは、前の例と実質的に同じ絶対 URL と照合しますが、相対 `url` 文字列とベース URL に分割されています。
返されるオブジェクトは `inputs` のみが異なります。

```js
match = pattern.exec("/books/123", "http://store.example.com"); // returns object
console.log(match.inputs); // ['/books/123', 'https://store.example.com']
```

次の 2 つの例はいずれも `null` を返します。
最初の例は、相対 URL とベース URL が有効な絶対 URL に解決されないため一致しません。
2 番目の例は、ベース URL が指定されていないため一致しません。

```js
pattern.exec("/books/123", "data:text/plain,hello world!"); // returns null
pattern.exec("/books/123"); // returns null
```

### URL オブジェクトでの照合

この例では、前の例と同じパターンを、構造化オブジェクトとして定義された複数の URL に対して照合するために使用します。

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

このコードは、先の例である[絶対 URL の照合](#絶対_url_の照合)で使用したのと同じ URL に対してテストを行います。
ただし今回は、構造化されたオブジェクトとして渡されます。
URL 自体は同じであるため、変更点は `inputs` プロパティの配列が下記で渡されるオブジェクトを含むようになることだけです。

```js
pattern.exec({
  protocol: "https",
  hostname: "store.example.com",
  pathname: "/books/123",
}); // オブジェクトを返す
```

次のコードも一致しますが、今回は `protocol` が `http` であり、`baseURL` から継承されています。
返されるオブジェクトは、`protocol.input` が `http` となる点と、`inputs` 配列が渡されたオブジェクトと一致する点を除いて、同様のものになります。

```js
pattern.exec({
  pathname: "/books/123",
  baseURL: "http://store.example.com",
}); // オブジェクトを返す
```

次のコードは一致しません。プロトコル `file` がパターンで指定されたオプション（`http` または `https`）に含まれていないためです。
これは `null` を返します。

```js
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
