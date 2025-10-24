---
title: URL パターン API
slug: Web/API/URL_Pattern_API
l10n:
  sourceCommit: f9a203c4bfacf129dffa946b5c9e1345dfd5e628
---

{{DefaultAPISidebar("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

**URL パターン API** は、URLパターンのマッチャーを作成するために使用される構文を定義します。これらのパターンは、 URL または個々の URL コンポーネントと照合することができます。 URL パターン API は、 {{domxref("URLPattern")}} インターフェースで使用されます。

## 概念と使用方法

パターン構文は、 [path-to-regexp](https://github.com/pillarjs/path-to-regexp) ライブラリーの構文に基づいています。パターンには以下を含めることができます。

- 文字列リテラルは、文字列をそのまま照合します。
- ワイルドカード (`/posts/*`) は、任意の文字に一致します。
- 名前付きグループ (`/books/:id`) は、一致した URL の一部を抽出します。
- 非キャプチャグループ (`/books{/old}?`) は、パターンの一部をオプションにしたり、複数回照合したりすることができます。
- 正規表現 ({{jsxref("RegExp")}}) グループ (`/books/(\\d+)`) は、いくつかの制限付きで自由に複雑な正規表現の照合を行います。なお、括弧は正規表現の一部ではなく、その内容を正規表現として定義します。

構文の詳細は、下記の[パターンの構文](#パターンの構文)の節を参照してください。

## インターフェイス

URL パターン API には、関連するインターフェイスは 1 つしかありません。

- {{domxref("URLPattern")}} {{Experimental_Inline}}
  - : URL または URL の一部と照合できるパターンを表現します。パターンには、一致した URL の一部を抽出するキャプチャグループを含めることができます。

## パターンの構文

パターンの構文は、 JavaScript の [path-to-regexp](https://github.com/pillarjs/path-to-regexp) ライブラリーに基づいています。この構文は、 [Ruby on Rails](https://rubyonrails.org/) や、 [Express](https://expressjs.com/) や [Next.js](https://nextjs.org/) などの JavaScript フレームワークで使用されているものと似ています。

### 固定テキストとキャプチャグループ

各パターンには、固定テキストとグループの組み合わせを指定できます。固定テキストは、完全に一致する文字列です。グループは、照合ルールに基いて任意の文字列と一致します。各 URL 部分には、以下で説明する独自の既定のルールが設定されていますが、これらは上書きできます。

```js
// 固定テキストと一致するパターン
const pattern = new URLPattern({ pathname: "/books" });
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.exec("https://example.com/books").pathname.groups); // {}
```

```js
// 名前付きグループを使用したパターン照合
const pattern = new URLPattern({ pathname: "/books/:id" });
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { id: '123' }
```

### 範囲付きワイルドカード

既定では、URL の `pathname` 部分と一致するグループは、スラッシュ (`/`) 以外のすべての文字と一致します。 `hostname` 部分では、グループはドット (`.`) 以外のすべての文字と一致します。その他の部分では、グループはすべての文字と一致します。セグメントワイルドカードは貪欲ではないため、可能な限り短い文字列と一致します。

### 正規表現マッチャー

グループの既定の照合ルールを使用する代わりに、括弧で囲んだ正規表現を使用して、各グループに正規表現を使用することができます。この正規表現は、グループに対する照合ルールを定義します。以下は、1 つ以上の数字を含む場合にのみグループに一致するように制限する、名前付きグループに対する正規表現マッチャーの例です。

```js
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/abc")); // false
console.log(pattern.test("https://example.com/books/")); // false
```

### 正規表現マッチャーの制限

一部の正規表現パターンは、期待どおりに機能しません。

- `^` で始まるパターンは、 URLPattern のプロトコル部分で最初に使用された場合にのみ一致します。

  ```js
  // パス名に `^` あり
  const pattern = new URLPattern({ pathname: "(^b)" });
  console.log(pattern.test("https://example.com/ba")); // false
  console.log(pattern.test("https://example.com/xa")); // false
  ```

  ```js
  // プロトコルに `^` あり
  const pattern = new URLPattern({ protocol: "(^https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

  ```js
  // プロトコルに `^` なし
  const pattern = new URLPattern({ protocol: "(https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

- `$` で終わるものは、 URLPattern のハッシュ部分で最後に使用された場合にのみ一致します。使用しても冗長です。

  ```js
  // パス名に `$` あり
  const pattern = new URLPattern({ pathname: "(path$)" });
  console.log(pattern.test("https://example.com/path")); // false
  console.log(pattern.test("https://example.com/other")); // false
  ```

  ```js
  // ハッシュに `$` あり
  const pattern = new URLPattern({ hash: "(hash$)" });
  console.log(pattern.test("https://example.com/#hash")); // true
  console.log(pattern.test("xhttps://example.com/#otherhash")); // false
  ```

  ```js
  // ハッシュに `$` なし
  const pattern = new URLPattern({ hash: "(hash)" });
  console.log(pattern.test("https://example.com/#hash")); // true
  console.log(pattern.test("xhttps://example.com/#otherhash")); // false
  ```

- 先読みおよび後読みは、 URLPattern のどの部分とも一致することはありません。

  ```js
  // 先読み
  const pattern = new URLPattern({ pathname: "(a(?=b))" });
  console.log(pattern.test("https://example.com/ab")); // false
  console.log(pattern.test("https://example.com/ax")); // false
  ```

  ```js
  // 先読み否定
  const pattern = new URLPattern({ pathname: "(a(?!b))" });
  console.log(pattern.test("https://example.com/ab")); // false
  console.log(pattern.test("https://example.com/ax")); // false
  ```

  ```js
  // 後読み
  const pattern = new URLPattern({ pathname: "((?<=b)a)" });
  console.log(pattern.test("https://example.com/ba")); // false
  console.log(pattern.test("https://example.com/xa")); // false
  ```

  ```js
  // 後読み否定
  const pattern = new URLPattern({ pathname: "((?<!b)a)" });
  console.log(pattern.test("https://example.com/ba")); // false
  console.log(pattern.test("https://example.com/xa")); // false
  ```

- URLPattern 内の範囲式では、正規表現ではエスケープする必要のない括弧もエスケープする必要があります。

  ```js
  new URLPattern({ pathname: "([()])" }); // 例外
  new URLPattern({ pathname: "([\\(\\)])" }); // ok

  new RegExp("[()]"); // ok
  new RegExp("[\\(\\)]"); // ok
  ```

### 無名グループと名前付きグループ

グループには名前をつけることも、つけないこともできます。名前付きグループは、グループ名の前にコロン (:) を付けて指定します。コロンと名前で接頭辞が付けられていない正規表現グループは、名前なしグループとなります。名前なしグループは、パターン内の順序に基づいて、一致結果に番号が割り当てられます。

```js
// 名前付きグループ
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { id: '123' }
```

```js
// 無名グループ
const pattern = new URLPattern("/books/(\\d+)", "https://example.com");
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { '0': '123' }
```

### グループ修飾子

グループには修飾子も指定できます。これらはグループ名（または正規表現がある場合はその後に）に指定します。修飾子は 3 種類あります。 `?` はグループをオプションにします。 `+` はグループを 1 回以上繰り返します。 `*` はグループを 0 回以上繰り返します。

```js
// 任意のグループ
const pattern = new URLPattern("/books/:id?", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/books/")); // false
console.log(pattern.test("https://example.com/books/123/456")); // false
console.log(pattern.test("https://example.com/books/123/456/789")); // false
```

```js
// 最低 1 つを含む繰り返しグループ
const pattern = new URLPattern("/books/:id+", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // false
console.log(pattern.test("https://example.com/books/")); // false
console.log(pattern.test("https://example.com/books/123/456")); // true
console.log(pattern.test("https://example.com/books/123/456/789")); // true
```

```js
// 最低 0 の繰り返しグループ
const pattern = new URLPattern("/books/:id*", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/books/")); // false
console.log(pattern.test("https://example.com/books/123/456")); // true
console.log(pattern.test("https://example.com/books/123/456/789")); // true
```

### グループ区切り文字

パターンにはグループ区切り文字も含まれることがあります。これらは、波括弧 (`{}`) で囲まれたパターンの部分です。これらのグループ区切り文字は、キャプチャグループのように一致結果にはキャプチャされませんが、グループと同様に修飾子を適用することができます。グループ区切り文字が修飾子によって修飾されていない場合、その中の項目は親パターンの一部として扱われます。グループ区切り記号は他のグループ区切り記号を含めることはできませんが、他のパターン要素（キャプチャグループ、正規表現、ワイルドカード、固定テキストなど）を含めることができます。

```js
// ? （オプション）修飾子の付いたグループ区切り文字
const pattern = new URLPattern("/book{s}?", "https://example.com");
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/book")); // true
console.log(pattern.exec("https://example.com/books").pathname.groups); // {}
```

```js
// 修飾子のないグループ区切り文字
const pattern = new URLPattern("/book{s}", "https://example.com");
console.log(pattern.pathname); // /books
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/book")); // false
```

```js
// キャプチャグループ内のグループ区切り文字
const pattern = new URLPattern({ pathname: "/blog/:id(\\d+){-:title}?" });
console.log(pattern.test("https://example.com/blog/123-my-blog")); // true
console.log(pattern.test("https://example.com/blog/123")); // true
console.log(pattern.test("https://example.com/blog/my-blog")); // false
```

### パス名へのグループ接頭辞の自動付加

URL の pathname 部分と一致するパターンでは、グループ定義の前にスラッシュ (`/`) が付いている場合、グループには自動的にスラッシュ (`/`) が接頭辞として追加されます。これは、修飾子を持つグループで、繰り返しグループが期待どおりに機能するようにするために役立ちます。

自動接頭辞を追加したくない場合は、グループをグループ区切り文字 (`{}`) で囲むことで無効にすることができます。グループ区切り文字には、自動接頭辞の機能はありません。

```js
// スラッシュで始まる、オプションのグループを含むパターン
const pattern = new URLPattern("/books/:id?", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/books/")); // false
```

```js
// スラッシュで始まる、繰り返しのグループを含むパターン
const pattern = new URLPattern("/books/:id+", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/123/456")); // true
console.log(pattern.test("https://example.com/books/123/")); // false
console.log(pattern.test("https://example.com/books/123/456/")); // false
```

```js
// セグメントの接頭辞は、パス名パターン以外では発生しない
const pattern = new URLPattern({ hash: "/books/:id?" });
console.log(pattern.test("https://example.com#/books/123")); // true
console.log(pattern.test("https://example.com#/books")); // false
console.log(pattern.test("https://example.com#/books/")); // true
```

```js
// グループ区切り文字を使用して、グループに対してセグメント接頭辞を無効にする
const pattern = new URLPattern({ pathname: "/books/{:id}?" });
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // false
console.log(pattern.test("https://example.com/books/")); // true
```

### ワイルドカードトークン

ワイルドカードトークン (`*`) は、0 回以上すべての文字に一致する、名前なしのキャプチャグループを表す省略形です。これはパターンのどこにでも配置できます。ワイルドカードは貪欲であり、可能な限り長い文字列に一致します。

```js
// パターンの末尾のワイルドカード
const pattern = new URLPattern("/books/*", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // false
console.log(pattern.test("https://example.com/books/")); // true
console.log(pattern.test("https://example.com/books/123/456")); // true
```

```js
// パターンの中間にあるワイルドカード
const pattern = new URLPattern("/*.png", "https://example.com");
console.log(pattern.test("https://example.com/image.png")); // true
console.log(pattern.test("https://example.com/image.png/123")); // false
console.log(pattern.test("https://example.com/folder/image.png")); // true
console.log(pattern.test("https://example.com/.png")); // true
```

### パターンの正規化

パターンが解釈されると、自動的に正規形に正規化されます。例えば、パス名プロパティでは Unicode 文字はパーセントエンコードされ、ホスト名では Punycode エンコードが使用され、既定のポート番号は省略され、 `/foo/./bar/` のようなパスは `/foo/bar` に短縮されます。さらに、 `foo` と `{foo}` のように、同じ意味に解釈されるパターン表現もいくつかあります。このような場合は、最も単純な形に正規化されます。この場合、 `{foo}` は `foo` に変更されます。

## 大文字小文字の区別

URL パターン API は、照合時に URL の多くの部分を既定で大文字と小文字を区別します。これとは対照的に、多くのクライアント側の JavaScript フレームワークでは、大文字と小文字を区別しない URL 照合が使用されます。必要に応じて、大文字と小文字を区別しない照合を有効にする `ignoreCase` オプションを {{domxref("URLPattern.URLPattern", "URLPattern()")}} コンストラクターで使用できます。

```js
// 既定では大文字小文字を区別する照合
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

コンストラクターで `ignoreCase` オプションを `true` に設定すると、指定されたパターンに対して、すべての一致操作が大文字と小文字を区別しないように切り替わります。

```js
// 大文字小文字を区別しない照合
const pattern = new URLPattern("https://example.com/2022/feb/*", {
  ignoreCase: true,
});
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // true
```

## 例

### 特定の URL 成分でのフィルタリング

次の例は、 `URLPattern` が特定の URL 成分をフィルターする方法を示しています。`URLPattern()` コンストラクターが、成分のパターンの構造化オブジェクトで呼び出されると、欠落している成分は、既定で `*` ワイルドカード値になります。

```js
// 特定のドメインとそのサブドメインに一致する URLPattern を構築する
// それ以外のすべての URL 要素は、既定でワイルドカード `*` パターンになる
const pattern = new URLPattern({
  hostname: "{*.}?example.com",
});

console.log(pattern.hostname); // '{*.}?example.com'

console.log(pattern.protocol); // '*'
console.log(pattern.username); // '*'
console.log(pattern.password); // '*'
console.log(pattern.pathname); // '*'
console.log(pattern.search); // '*'
console.log(pattern.hash); // '*'

console.log(pattern.test("https://example.com/foo/bar")); // true

console.log(pattern.test({ hostname: "cdn.example.com" })); // true

console.log(pattern.test("custom-protocol://example.com/other/path?q=1")); // false

// ホスト名要素が一致しないため、`false` が出力される
console.log(pattern.test("https://cdn-example.com/foo/bar"));
```

### 完全な URL 文字列から URLPattern を構築

次の例は、パターンが埋め込まれた完全な URL 文字列から `URLPattern` を構築する方法を示しています。例えば `:` は、 `https:` のように URL プロトコルの接尾辞としても、 `:foo` のように名前付きパターングループの先頭としても使用できます。文字が URL 構文の一部であるか、パターン構文の一部であるかが明確であれば、これは「そのまま動作」します。

```js
// jpg 画像を読み込む CDN サーバーの URL と一致する URLPattern を構築します。
// 検索やハッシュのように明示的に指定されていない URL 成分は、
// URL() コンストラクターと同様に空文字列になる
const pattern = new URLPattern("https://cdn-*.example.com/*.jpg");

console.log(pattern.protocol); // 'https'

console.log(pattern.hostname); // 'cdn-*.example.com'

console.log(pattern.pathname); // '/*.jpg'

console.log(pattern.username); // ''
console.log(pattern.password); // ''
console.log(pattern.search); // ''
console.log(pattern.hash); // ''

// `true` と表示
console.log(
  pattern.test("https://cdn-1234.example.com/product/assets/hero.jpg"),
);

// 検索要素が一致しないため、`false` が出力される
console.log(
  pattern.test("https://cdn-1234.example.com/product/assets/hero.jpg?q=1"),
);
```

### 曖昧な URL 文字列を使用して URLPattern を構築

次の例は、曖昧な文字列から構築された `URLPattern` が、文字をパターン構文の一部として扱うことを優先する方法を示しています。この場合、 `:` 文字はプロトコル要素のサフィックスである場合もあれば、パターン内の名前付きグループの接頭辞である場合もあります。コンストラクターは、これをパターンの一部として扱うことを選択し、したがって、これが相対パス名パターンであると判断します。ベース URL がないため、相対パス名は解決できず、エラーが発生します。

```js
// これは、名前付きグループ ":foo" を持つ単一の相対パス名パターンとして
// 解釈され、ベース URL がないため、例外が発生します。
const pattern = new URLPattern("data:foo*");
```

### URLPattern コンストラクター文字列の曖昧さを回避するためのエスケープ文字

次の例は、曖昧なコンストラクター文字列文字をエスケープして、パターン文字ではなく URL の区切り文字として扱う方法を示しています。ここでは、 `:` は `\\:` とエスケープされています。

```js
// `:` をプロトコル接尾辞として扱う URLPattern を構築します。
const pattern = new URLPattern("data\\:foo*");

console.log(pattern.protocol); // 'data'

console.log(pattern.pathname); // 'foo*'

console.log(pattern.username); // ''
console.log(pattern.password); // ''
console.log(pattern.hostname); // ''
console.log(pattern.port); // ''
console.log(pattern.search); // ''
console.log(pattern.hash); // ''

console.log(pattern.test("data:foobar")); // true
```

### test() と exec() のベース URL の使用

次の例は、`test()` および `exec()` がベース URL を使用できることを示しています。

```js
const pattern = new URLPattern({ hostname: "example.com", pathname: "/foo/*" });

// 辞書 `baseURL` プロパティと一致するホスト名として `true` が出力されます。
console.log(
  pattern.test({
    pathname: "/foo/bar",
    baseURL: "https://example.com/baz",
  }),
);

// 2 つ目の引数 base URL と一致するホスト名として `true` が出力されます。
console.log(pattern.test("/foo/bar", "https://example.com/baz"));

// 2 つ目の引数は辞書入力では渡すことができないため、例外が発生します。
try {
  pattern.test({ pathname: "/foo/bar" }, "https://example.com/baz");
} catch (e) {}

// `exec()` メソッドは、`test()` と同じ引数を取ります。
const result = pattern.exec("/foo/bar", "https://example.com/baz");

console.log(result.pathname.input); // '/foo/bar'

console.log(result.pathname.groups[0]); // 'bar'

console.log(result.hostname.input); // 'example.com'
```

### URLPattern コンストラクターでのベース URL の使用

次の例は、ベース URL を使用して `URLPattern` を構築する方法を示しています。この場合、ベース URL は厳密に URL として扱われ、パターン構文自体を含むことはできません。

また、ベース URL はすべての要素の値を提供するため、結果の `URLPattern` も、たとえそれが空文字列であっても、すべての要素の値を持つことになります。つまり、「ワイルドカードを既定値とする」という動作は発生しません。

```js
const pattern1 = new URLPattern({
  pathname: "/foo/*",
  baseURL: "https://example.com",
});

console.log(pattern1.protocol); // 'https'
console.log(pattern1.hostname); // 'example.com'
console.log(pattern1.pathname); // '/foo/*'

console.log(pattern1.username); // ''
console.log(pattern1.password); // ''
console.log(pattern1.port); // ''
console.log(pattern1.search); // ''
console.log(pattern1.hash); // ''

// pattern1 と同等
const pattern2 = new URLPattern("/foo/*", "https://example.com");

// コンストラクターにおける相対文字列は、解決するためのベース URL を
// 指定する必要があります。
try {
  const pattern3 = new URLPattern("/foo/*");
} catch (e) {}
```

### 一致したグループの値へのアクセス

次の例は、パターングループと一致する入力値を、後で `exec()` の結果オブジェクトからアクセスする方法を示しています。名前がないグループには、順番にインデックス番号が割り当てられます。

```js
const pattern = new URLPattern({ hostname: "*.example.com" });
const result = pattern.exec({ hostname: "cdn.example.com" });

console.log(result.hostname.groups[0]); // 'cdn'

console.log(result.hostname.input); // 'cdn.example.com'

console.log(result.inputs); // [{ hostname: 'cdn.example.com' }]
```

### カスタム名を使用して一致したグループの値にアクセス

次の例は、グループに、結果オブジェクトの一致する値にアクセスするために使用できるカスタム名を付ける方法を示しています。

```js
// カスタム名を持つ照合グループを使用して URLPattern を構築します。
// これらの名前は、後で結果オブジェクトの一致する値にアクセスするために
// 使用することができます。
const pattern = new URLPattern({ pathname: "/:product/:user/:action" });
const result = pattern.exec({ pathname: "/store/wanderview/view" });

console.log(result.pathname.groups.product); // 'store'
console.log(result.pathname.groups.user); // 'wanderview'
console.log(result.pathname.groups.action); // 'view'

console.log(result.pathname.input); // '/store/wanderview/view'

console.log(result.inputs); // [{ pathname: '/store/wanderview/view' }]
```

### 独自の正規表現グループ

次の例は、照合グループで独自の正規表現を使用する例を示します。

```js
const pattern = new URLPattern({ pathname: "/(foo|bar)" });

console.log(pattern.test({ pathname: "/foo" })); // true
console.log(pattern.test({ pathname: "/bar" })); // true
console.log(pattern.test({ pathname: "/baz" })); // false

const result = pattern.exec({ pathname: "/foo" });

console.log(result.pathname.groups[0]); // 'foo'
```

### 独自の正規表現を使用した名前付きグループ

次の例は、名前付きグループで独自の正規表現を使用する方法を示しています。

```js
const pattern = new URLPattern({ pathname: "/:type(foo|bar)" });
const result = pattern.exec({ pathname: "/foo" });

console.log(result.pathname.groups.type); // 'foo'
```

### グループの称号をオプションにする

次の例は、 `?` 修飾子をその後に置くことで、照合グループをオプションにする方法を示しています。パス名要素の場合、これにより、その前にある `/` 文字も、そのグループのオプションの接頭辞として扱われるようになります。

```js
const pattern = new URLPattern({ pathname: "/product/(index.html)?" });

console.log(pattern.test({ pathname: "/product/index.html" })); // true
console.log(pattern.test({ pathname: "/product" })); // true

const pattern2 = new URLPattern({ pathname: "/product/:action?" });

console.log(pattern2.test({ pathname: "/product/view" })); // true
console.log(pattern2.test({ pathname: "/product" })); // true

// ワイルドカードもオプションにすることができます。ワイルドカードは
// 空文字列と一致するので、これは意味がないように見えるかもしれませんが、
// これにより、パス名パターンで接頭辞 `/` もオプションになります。
const pattern3 = new URLPattern({ pathname: "/product/*?" });

console.log(pattern3.test({ pathname: "/product/wanderview/view" })); // true
console.log(pattern3.test({ pathname: "/product" })); // true
console.log(pattern3.test({ pathname: "/product/" })); // true
```

### 照合するグループを繰り返す

次の例は、一致するグループをその後に `+` 修飾子を置くことで繰り返し表示させる方法を示しています。パス名要素では、これは `/` 接頭辞も特別なものとして扱います。これはグループとともに繰り返されます。

```js
const pattern = new URLPattern({ pathname: "/product/:action+" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

result.pathname.groups.action; // 'do/some/thing/cool'

console.log(pattern.test({ pathname: "/product" })); // false
```

### 照合するグループをオプションにし、繰り返す

次の例は、オプションであり、かつ繰り返し可能な照合グループを作成する方法を示しています。これを行うには、グループの後に `*` 修飾子 を配置します。ここでも、パス名要素は `/` 接頭辞を特別なものとして扱います。これはオプションになり、グループとともに繰り返し行われます。

```js
const pattern = new URLPattern({ pathname: "/product/:action*" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname.groups.action); // 'do/some/thing/cool'

console.log(pattern.test({ pathname: "/product" })); // true
```

### オプションまたは繰り返し修飾子に独自の接頭辞または接尾辞を使用

次の例は、中括弧を使用して、後続の `?`、`*`、`+` のいずれかの修飾子によって操作される独自の接頭辞や接尾辞を指定する方法を示しています。

```js
const pattern = new URLPattern({ hostname: "{:subdomain.}*example.com" });

console.log(pattern.test({ hostname: "example.com" })); // true
console.log(pattern.test({ hostname: "foo.bar.example.com" })); // true
console.log(pattern.test({ hostname: ".example.com" })); // false

const result = pattern.exec({ hostname: "foo.bar.example.com" });

console.log(result.hostname.groups.subdomain); // 'foo.bar'
```

### 照合グループなしでテキストをオプションまたは繰り返しにする

次の例は、中括弧を使用して、照合グループを使用せずに、修正されたテキスト値をオプションまたは繰り返しとして示す方法を示しています。

```js
const pattern = new URLPattern({ pathname: "/product{/}?" });

console.log(pattern.test({ pathname: "/product" })); // true
console.log(pattern.test({ pathname: "/product/" })); // true

const result = pattern.exec({ pathname: "/product/" });

console.log(result.pathname.groups); // {}
```

### 複数のコンポーネントおよび機能を同時に使用

次の例は、複数の URL 成分間で組み合わせることができる方法を示しています。

```js
const pattern = new URLPattern({
  protocol: "http{s}?",
  username: ":user?",
  password: ":pass?",
  hostname: "{:subdomain.}*example.com",
  pathname: "/product/:action*",
});

const result = pattern.exec(
  "http://foo:bar@sub.example.com/product/view?q=12345",
);

console.log(result.username.groups.user); // 'foo'
console.log(result.password.groups.pass); // 'bar'
console.log(result.hostname.groups.subdomain); // 'sub'
console.log(result.pathname.groups.action); // 'view'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `URLPattern` のポリフィルが
  [GitHub](https://github.com/kenchris/urlpattern-polyfill) にあります
- URLPattern で使用されるパターン構文は、 [path-to-regexp](https://github.com/pillarjs/path-to-regexp) で使用される構文と似ています。
