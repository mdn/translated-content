---
title: "URLPattern: URLPattern() コンストラクター"
short-title: URLPattern()
slug: Web/API/URLPattern/URLPattern
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URLPattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

**`URLPattern()`** コンストラクターは、引数で定義された URL パターンを表す新しい {{domxref("URLPattern")}} オブジェクトを返します。

## 構文

```js-nolint
new URLPattern(input)
new URLPattern(input, baseURL)
new URLPattern(input, options)
new URLPattern(input, baseURL, options)
```

### 引数

- `input`
  - : 照合に使用する入力パターン。これは、文字列、または各 URL 部分ごとにパターンを提供するオブジェクトのいずれかです。オブジェクトのメンバーは、次のいずれかです。
    - `protocol`
    - `username`
    - `password`
    - `hostname`
    - `port`
    - `pathname`
    - `search`
    - `hash`
    - `baseURL`

    > [!NOTE]
    > このオブジェクトで省略された部分は、ワイルドカード (`*`) として扱われます。

- `baseURL` {{Optional_Inline}}
  - : `input` が相対パターンである場合に使用するベース URL を表す文字列。指定しなかった場合、既定では `undefined` になります。
- `options` {{Optional_Inline}}
  - : 指定されたパターンと照合するためのオプションを提供するオブジェクト。実現可能なオブジェクトメンバーは次のとおりです。
    - `ignoreCase` {{Optional_Inline}}
      - : `true` に設定すると、大文字と小文字を区別しない照合を有効にします。省略した場合、または `false` に設定した場合は、大文字と小文字を区別して照合します。

### 例外

- {{jsxref("TypeError")}}
  - : 次のいずれかを示します。
    - 指定された `input` または `baseURL` が無効または構文的に正しくない。
    - 指定された `input` は相対ですが、完全な絶対 URL を形成するための `baseURL` が指定されていない。
    - `baseURL` が指定されており、入力は絶対パターンまたは構造化オブジェクトである。

## 例

### パス名の照合

```js
let pattern1 = new URLPattern("https://example.com/books/:id");

// 次のものと同等
let pattern2 = new URLPattern("/books/:id", "https://example.com");

// または
let pattern3 = new URLPattern({
  protocol: "https",
  hostname: "example.com",
  pathname: "/books/:id",
});

// または
let pattern4 = new URLPattern({
  pathname: "/books/:id",
  baseURL: "https://example.com",
});
```

### プロトコルとホスト名の照合

```js
let pattern = new URLPattern({
  protocol: "http{s}?",
  hostname: ":subdomain.example.com",
});
```

### できる限りすべての部分で照合

```js
let pattern = new URLPattern({
  protocol: "http{s}?",
  username: ":username",
  password: ":password",
  hostname: ":subdomain.example.com",
  port: ":port(80|443)",
  pathname: "/:path",
  search: "*",
  hash: "*",
});
```

### 大文字小文字の区別なしで照合

```js
// 既定では大文字小文字を区別する
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

コンストラクターで `ignoreCase` オプションを `true` に設定すると、指定されたパターンに対して、すべての大文字と小文字を区別しない照合操作に切り替わります。

```js
// 大文字小文字の区別なしで照合
const pattern = new URLPattern("https://example.com/2022/feb/*", {
  ignoreCase: true,
});
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // true
```

## 使用上のメモ

`URLPattern` コンストラクターの入力パターンは、パターンオブジェクト、またはパターン文字列とオプションの baseURL の 2 つの形を取ります。

```js
new URLPattern(obj);
new URLPattern(pattern);
new URLPattern(pattern, baseURL);
```

最初の種類のコンストラクターは、 URL の個々の部分ごとにパターンを指定して、照合すべき URL を記述するオブジェクトを引数として受け取ります。
そのメンバーは、`protocol`、`username`、`password`、`hostname`、`port`、`pathname`、`search`、`hash`、`baseURL` のいずれかです。`baseURL` プロパティが指定されている場合、それは URL として解釈され、欠落しているその他のプロパティの値として使用されます。`baseURL` プロパティが指定されていない場合、その他の欠落しているプロパティは、既定でパターン `*` ワイルドカードとなり、あらゆる入力を受け入れます。

2 つ目の種類のコンスラクターは、パターンが埋め込まれた URL 文字列を取ります。この URL 文字列は、2 番目の引数として `baseURL` が指定されていれば、相対 URL にすることもできます。文字が URL の要素を区切る文字なのか、パターンの一部なのかが曖昧な場合は、 URL 文字列内の文字をエスケープする必要がある場合があることに注意してください。例えば、`:` がプロトコル接尾辞であり、名前付きグループパターン `:blank` の開始ではないことを示すには、`about\\:blank` と記述する必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `URLPattern` のポリフィルが [GitHub](https://github.com/kenchris/urlpattern-polyfill) にあります。
