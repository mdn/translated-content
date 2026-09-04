---
title: "URLPattern: URLPattern() コンストラクター"
short-title: URLPattern()
slug: Web/API/URLPattern/URLPattern
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("URLPattern API")}} {{AvailableInWorkers}}

**`URLPattern()`** コンストラクターは、このパターンと照合する URL を表す新しい {{domxref("URLPattern")}} オブジェクトを返します。

## 構文

```js-nolint
new URLPattern(input)
new URLPattern(input, options)
new URLPattern(url)
new URLPattern(url, baseURL)
new URLPattern(url, baseURL, options)
```

### 引数

- `input` {{Optional_Inline}}
  - : URL のそれぞれの部分と照合するために使用する[パターン](/ja/docs/Web/API/URL_Pattern_API#パターンの構文)を定義するための個々のプロパティを持つオブジェクトです。

    オブジェクトのメンバーは次のいずれか（または無し）です。
    - `protocol` {{Optional_Inline}}
      - : URL の[プロトコル](/ja/docs/Web/API/URL/protocol)と照合するパターン。`http`、`https`、`"http{s}?"`（https と http の両方に一致）などです。
    - `username` {{Optional_Inline}}
      - : URL の[ユーザー名](/ja/docs/Web/API/URL/username)と照合するパターン。
    - `password` {{Optional_Inline}}
      - : URL の[パスワード](/ja/docs/Web/API/URL/password)と照合するパターン。
    - `hostname` {{Optional_Inline}}
      - : URL の[ホスト名](/ja/docs/Web/API/URL/hostname)と照合するパターン。
    - `port` {{Optional_Inline}}
      - : URL の[ポート番号](/ja/docs/Web/API/URL/port)と照合するパターン。
    - `pathname` {{Optional_Inline}}
      - : URL の[パス名](/ja/docs/Web/API/URL/pathname)と照合するパターン。
    - `search` {{Optional_Inline}}
      - : URL の[検索引数](/ja/docs/Web/API/URL/search)と照合するパターン。
    - `hash` {{Optional_Inline}}
      - : URL の[ハッシュ](/ja/docs/Web/API/URL/hash)と照合するパターン。
    - `baseURL` {{Optional_Inline}}
      - : 絶対 URL を提供する文字列で、[具体性の低いオブジェクトプロパティが継承される](#baseurl_からの継承)可能性があります。

- `url` {{Optional_Inline}}
  - : 照合する URL パターンを表す文字列です。

    これは絶対または相対 URL の形式で記述されていますが、[照合パターン](/ja/docs/Web/API/URL_Pattern_API#パターンの構文)を示すマークアップやエスケープシーケンスが含まれている場合があります。
    相対 URL の形式とする場合、[`baseURL`](#baseurl_2) も同時に指定しなければならない。

- `baseURL` {{Optional_Inline}}
  - : [具体性の低い URL の部分を継承する](#baseurl_からの継承)元となる絶対 URL を提供する文字列です。
    `url` が相対 URL の場合に設定する必要があり、`input` が使用される場合は設定してはなりません（`input` に対して継承値を提供するには、`input.baseURL` を使用できますが、このプロパティとは異なり必須ではありません）。

- `options` {{Optional_Inline}}
  - : 指定されたパターンと照合するためのオプションを提供するオブジェクト。実現可能なオブジェクトメンバーは次のとおりです。
    - `ignoreCase` {{Optional_Inline}}
      - : `true` に設定すると、大文字と小文字を区別しない照合を有効にします。省略した場合、または `false` に設定した場合は、大文字と小文字を区別して照合します。

> [!NOTE]
> `input` プロパティおよび `url` 内の URL のすべての部分はオプションです。
> これらの引数で指定されていない場合、他の URL 部分がどのように定義されているかによって、一部の値は `baseURL` から[継承される](#baseurl_からの継承)ことがあります。
> 省略された部分はワイルドカード (`*`) に正規化されます。

### 例外

- {{jsxref("TypeError")}}
  - : 次のいずれかを示します。
    - 指定された `input` または `baseURL` が無効または構文的に正しくない。
    - 指定された `input` は相対ですが、完全な絶対 URL を形成するための `baseURL` が指定されていない。
    - `baseURL` が指定されており、入力は絶対パターンまたは構造化オブジェクトである。

## 解説

`URLPattern` コンストラクターは、「入力」オブジェクトまたは URL 文字列とオプションの baseURL を受け取ることができます。
どちらの形式も、大文字小文字の区別など、追加の照合オプションを設定するオプションオブジェクト引数を受け取ることができます。

```js
new URLPattern(input);
new URLPattern(url, baseURL);
```

最初の種類のコンストラクターで使用される入力オブジェクトは、URL の個々の部分（`protocol`、`username`、`password`、`hostname`、`port`、`pathname`、`search`、`hash`、`baseURL`）に対するパターンを指定することで、照合すべき URL を記述します。
`baseURL` プロパティが指定された場合、URL として解釈され、他の不足しているプロパティの値を埋めるために使用されることがあります（詳細は次の節、[baseURL からの継承](#baseurl_からの継承)を参照）。
`baseURL` プロパティが省略されたり、値が設定されていない場合、そのプロパティはデフォルトでワイルドカード文字列 (`*`) に設定され、URL 内の対応する任意の値と照合されます。

2 つ目の種類のコンスラクターは、パターンが埋め込まれた URL 文字列を取ります。
文字列は絶対 URL または相対 URL を指定することができます。パターンが相対 URL の場合、第二引数として `baseURL` を提供しなければなりません。
文字が URL の要素を区切る文字なのか、パターンの一部なのかが曖昧な場合は、URL 文字列内の[文字をエスケープする](#特殊文字のエスケープ)必要がある場合があることに注意してください。

### baseURL からの継承

`baseURL`（または `input` の場合 `input.baseURL`）から継承される可能性があるのは、`url` で定義された最も具体性が低い部分よりも具体性が高い URL の部分です。
直感的には、入力で `pathname` の部分が指定されている場合、URL 内のその左側の部分（`protocol`、`hostname`、`port`）はベース URL から継承されることがありますが、右側の部分（`search` と `hash`）は継承されないということです。
`username` と `password` は、ベース URL から継承されることはありません。

詳細は、API 概要の[ベース URL からの継承](/ja/docs/Web/API/URL_Pattern_API#ベース_url_からの継承)を参照してください。

### `url` または `baseURL` のホスト名はデフォルトポート番号へ影響する

URL の他の部分とは異なり、`url` またはベース URL（`baseURL` 引数内またはオブジェクト内）を指定し、ポート番号を明示的に指定しなかった場合、ポート番号が暗黙的に設定されることがあります。
この場合、ポートは空文字列 (`""`) に設定され、デフォルトのポート (`443`) に一致します。

例えば、以下のパターンはすべてポート番号のパターンを `""` に設定します。

```js
new URLPattern("https://example.com");
new URLPattern("https://example.com*");
new URLPattern("https://example.com/foo");
new URLPattern({
  pathname: "/foo/*",
  baseURL: "https://example.com",
});
```

`url` または `baseURL` でホスト名を指定しなかった場合、ポートはデフォルトでワイルドカード文字列 (`*`) になります。

```js
new URLPattern({ pathname: "/foo/*" }); // ポート番号が省略され、デフォルトの '*' になる
```

#### 特殊文字のエスケープ

[パターンの構文](/ja/docs/Web/API/URL_Pattern_API#パターンの構文)には、URL に自然に現れる可能性のある以下の文字が含まれます。

- `?` は、パターン内の省略可能な文字またはグループと、URL の検索部分の両方を示します。
- `:` は、パターン内の名前付きグループの開始を示す記号であり、ユーザー名とパスワード、またはホスト名とポート番号の区切り文字として機能します。

`URLPattern` を [`url`](#url) 文字列引数で使用する場合、これらの特殊文字は（曖昧さが生じた場合に限り）パターン構文の一部と想定されます。
URLの一部を表すためにこれらの文字を使用する場合は、`\\` を文字の前に付けてエスケープする必要があります（またはオブジェクト構文を使用して `URLPattern` を構築することで問題を避けることができます）。

例えば、次のパターンは `?` 文字をエスケープしているため、このパターンは URL の検索部分にある "fred" に一致します。

```js
console.log(new URLPattern("https://example.com/*\\?fred"));
```

同様に、後述の[ユーザー名とパスワードの照合](#ユーザー名とパスワードの照合)の例では、`:` の区切り文字をエスケープする必要がある場合を示しています。

## 例

### デフォルトパターン

このコードは、URL 内で指定されていない URL の部分、または[ベース URL から継承された部分](#baseurl_からの継承)が、デフォルトでワイルドカード値に設定されることを示しています。

```js
console.log(new URLPattern());
console.log(new URLPattern({}));
/*
{
  protocol: "*",
  username: "*",
  password: "*",
  hostname: "*",
  port: "*",
  pathname: "*",
  search: "*",
  hash: "*",
  hasRegExpGroups: false,
};
*/
```

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

// or
let pattern5 = new URLPattern({
  pathname: "/books/:id",
  baseURL: "https://example.com/some/path/?search=3#param=1",
  // More-specific URL parts are discarded
});
```

### プロトコルとホスト名の照合

```js
let pattern = new URLPattern({
  protocol: "http{s}?",
  hostname: ":subdomain.example.com",
});
```

### ユーザー名とパスワードの照合

この設定は、パターン文字列を使用してユーザー名とパスワードの URL 部分を設定します。
パターン文字列を使用する際、`:` の区切り文字をエスケープする必要がある点に注意してください。
これを省略すると、ユーザー名パターンは `myusername:mypassword` となります。

```js
const pattern = new URLPattern(
  "https://myusername\\:mypassword@example.com/some/path",
);

console.log(pattern.username); // "myusername"
console.log(pattern.password); // "mypassword"
```

このため、多くの場合、オブジェクト構文を使用する方がより自然（かつ安全）です。

### できる限りすべての構成部分で照合

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

### ベース URL からの継承

これは現実世界における継承の例です。
`pathname` は明示的に指定されます。プロトコルやホスト名など、パス名よりも具体的でない値は継承されます。
より具体的な値は無視され、デフォルト値（検索引数とハッシュには `"*"`、ポート番号には `""` など）が適用されます。

```js
const pattern = new URLPattern({
  pathname: "/some/path",
  baseURL: "https://myuser:mypass@example.com/mypath?search=1&p=3#fred",
});

console.log(pattern);
// protocol: https
// username: *
// password: *
// hostname: example.com
// port:
// pathname: /some/path
// search: *
// hash: *
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `URLPattern` のポリフィルが [GitHub](https://github.com/kenchris/urlpattern-polyfill) にあります。
