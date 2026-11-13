---
title: URL パターン API
slug: Web/API/URL_Pattern_API
l10n:
  sourceCommit: 13769513728de4c94e7dcc9ab4c86f9b7b40cc88
---

{{DefaultAPISidebar("URL Pattern API")}} {{AvailableInWorkers}}

**URL パターン API** は、URL パターンの照合子を作成するために使用される構文を定義します。
これらのパターンは、 URL または URL の個々の成分と照合することができます。

## 概念と使い方

パターンは {{domxref("URLPattern")}} インターフェイスを使用して指定されます。
パターン構文は、 [path-to-regexp](https://github.com/pillarjs/path-to-regexp) ライブラリーの構文に基づいています。
パターンには次のものを含めることができます。

- 文字列リテラルは、文字列をそのまま照合します。
- ワイルドカード (`/posts/*`) は、任意の文字に一致します。
- 名前付きグループ (`/books/:id`) は、一致した URL の一部を抽出します。
- 非キャプチャグループ (`/books{/old}?`) は、パターンの一部をオプションにしたり、複数回照合したりすることができます。
- 正規表現 ({{jsxref("RegExp")}}) グループ (`/books/(\\d+)`) は、自由に複雑な正規表現の照合を行います。
  なお、括弧は正規表現の一部ではなく、その内容を正規表現として定義します。
  一部の API では、`URLPattern` オブジェクト内で正規表現グループを使用することを禁止しています。
  {{domxref("URLPattern.hasRegExpGroups", "hasRegExpGroups")}} プロパティは、正規表現グループが使用されているかどうかを示します。

構文の詳細は、下記の[パターンの構文](#パターンの構文)の節を参照してください。

## インターフェイス

- {{domxref("URLPattern")}}
  - : URL または URL の一部と照合できるパターンを表現します。パターンには、一致した URL の一部を抽出するキャプチャグループを含めることができます。

## パターンの構文

パターンの構文は、 JavaScript の [path-to-regexp](https://github.com/pillarjs/path-to-regexp) ライブラリーに基づいています。
この構文は、 [Ruby on Rails](https://rubyonrails.org/) や、 [Express](https://expressjs.com/) や [Next.js](https://nextjs.org/) などの JavaScript フレームワークで使用されているものと似ています。

### 固定テキストとキャプチャグループ

各パターンには、固定テキストとグループの組み合わせを指定できます。
固定テキストは、完全に一致する文字列です。
グループは、照合規則に基いて任意の文字列と一致します。
URL のそれぞれの部分には、以下で説明する独自のデフォルトのルールが設定されていますが、これらは上書きできます。

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

デフォルトでは、URL のパス名 (`pathname`) の部分と照合するグループは、スラッシュ (`/`) 以外のすべての文字と一致します。ホスト名 (`hostname`) の部分では、グループはドット (`.`) 以外のすべての文字と一致します。
その他の部分では、グループはすべての文字と一致します。
範囲付きワイルドカードは貪欲ではないため、可能な限り短い文字列と一致します。

### 正規表現照合子

グループに対してデフォルトの照合規則を使用する代わりに、それぞれのグループごとに括弧内に正規表現を指定することができます。
この正規表現は、グループに対する照合規則を定義します。
次のものは、1 つ以上の数字を含む場合にのみグループに一致するように制限する、名前付きグループに対する正規表現照合子の例です。

```js
const pattern1 = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern1.test("https://example.com/books/123")); // true
console.log(pattern1.test("https://example.com/books/abc")); // false
console.log(pattern1.test("https://example.com/books/")); // false
```

オブジェクト構文で `URLPattern` を構築する際にも、正規表現を使用することができます。

```js
const pattern2 = new URLPattern({ pathname: "/books/:id(\\d+)" });
console.log(pattern2.test("https://example.com/books/123")); // true
console.log(pattern2.test("https://example.com/books/abc")); // false
console.log(pattern2.test("https://example.com/books/")); // false
```

#### パス名の照合

URL の `pathname` の部分は常に `/` で始まります。
正規表現で `/` を省略すると、照合に失敗します。
下記の例を参照してください。

```js example-bad
// `/` がないため一致しない
const pattern1 = new URLPattern({ pathname: "(b.*)" });
console.log(pattern1.test("https://example.com/b")); // false
console.log(pattern1.test("https://example.com/ba")); // false
```

次の例には `/` があります。

```js example-good
// パスが正確に "/b" である URL に一致
const pattern2 = new URLPattern({ pathname: "(/b)" });
console.log(pattern2.test("https://example.com/b")); // true
console.log(pattern2.test("https://example.com/ba")); // false

// パスが "/b" に任意の文字が続く URL に一致
const pattern3 = new URLPattern({ pathname: "(/b.*)" });
console.log(pattern3.test("https://example.com/b")); // true
console.log(pattern3.test("https://example.com/ba")); // true
```

#### 先頭と末尾の行アンカー

行頭アンカー (`^`) と行末アンカー (`$`) は、それぞれテスト文字列の先頭と末尾にパターンを結びつけるために使用されます。
これらは URL の部分の先頭と末尾に指定できますが、冗長です。
これは、すべての URL の部分が暗黙的に `^` アンカーで始まり、`$` アンカーで終わるためです。

以下のコードは、`^` が指定されているかどうかは問題にならないことを示しています。
この例では URL の `protocol` 部分でパターンを使用していますが、URL の他の部分でも同じ挙動を示します。

```js
// protocol が `^` 付き
const pattern1 = new URLPattern({ protocol: "(^https?)" });
console.log(pattern1.test("https://example.com/index.html")); // true

// protocol が `^` なし
const pattern2 = new URLPattern({ protocol: "(https?)" });
console.log(pattern2.test("https://example.com/index.html")); // true
```

次のコードは、`$` が指定されているかどうかは問題にならないことを示しています。

```js
// pathname が `$` 付き
const pattern1 = new URLPattern({ pathname: "(/path$)" });
console.log(pattern1.test("https://example.com/path")); // true

// pathname が `$` なし
const pattern2 = new URLPattern({ pathname: "(/path)" });
console.log(pattern2.test("https://example.com/path")); // true

// ハッシュが `$` 付き
const pattern3 = new URLPattern({ hash: "(hash$)" });
console.log(pattern3.test("https://example.com/#hash")); // true

// ハッシュが `$` なし
const pattern4 = new URLPattern({ hash: "(hash)" });
console.log(pattern4.test("https://example.com/#hash")); // true
```

#### 先読みアサーションと後読みアサーション

[先読み](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)アサーションと[後読み](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)アサーションを使用すると、現在の解析位置の前後にあるテキストが具体的なパターンと一致することを指定できます。この場合、一致した文字列は捕捉されず、消費もされません。

アサーションには 4 つの種類があります。

- `(?=...)`: 肯定先読みアサーションは、後続の文字列が一致しなければならないパターンを指定します。
- `(?!...)`: 否定先読みアサーションは、後続の文字列が一致してはならないパターンを指定します。
- `(?<=...)`: 肯定後読みアサーションは、先行する文字列が一致しなければならないパターンを指定します。
- `(?<!...)`: 否定後読みアサーションは、先行する文字列が一致してはならないパターンを指定します。

`URLPattern` で先読みおよび後読みアサーションを使用する際は注意が必要です。直感に反する動作がある可能性があるためです。
例えば、次の先読みアサーションは `pathname` が `/ab` であるものに一致すると予想されますが、実際にはそうなりません。

```js example-bad
const pattern = new URLPattern({ pathname: "(/a(?=b))" });
console.log(pattern.test("https://example.com/ab")); // false
```

`URLPattern` エンジンはテスト文字列を `pathname` パターンと照合し、まず `/a` に一致する箇所を探し、次にテスト URL の次の文字が `b` であることを確認します（ただしその文字は消費しません）。
エンジンは未消費の文字 `b` でテスト URL との照合を続けますが、照合対象となるパターンが残りません。そのため照合に失敗します。

一致するためには、パターンがテスト文字列の文字をすべて消費する必要があります。
`b` の文字を消費するには、式の末尾に `b` を追加するか、任意の文字に一致する `.` を追加するか、先読みアサーションの後に続く文字がすべて一致する `.*` を追加します。

```js example-good
// 肯定先読み
const pattern1 = new URLPattern({ pathname: "(/a(?=b).*)" });
console.log(pattern1.test("https://example.com/ab")); // true
console.log(pattern1.test("https://example.com/ax")); // false
```

次の例は、`/a` の後に `b` が続かない場合の否定先読み照合を示しています。
アサーションの後に `.*` が続くことに注意してください。これはアサーションで一致した文字を消費するためです。

```js
// 否定先読み
const pattern2 = new URLPattern({ pathname: "(/a(?!b).*)" });
console.log(pattern2.test("https://example.com/ab")); // false
console.log(pattern2.test("https://example.com/ax")); // true
```

次の例は、`/ba` のようなパス名に一致する肯定後読み照合を説明しています。
このパターンは `/` に一致し、次に `.` で次の文字を消費し、その前に `b` があったというアサーションを伴い、最後に `a` が続くという条件を満たします。

```js
// 肯定先読み
const pattern = new URLPattern({ pathname: "(/.(?<=b)a)" });
console.log(pattern.test("https://example.com/ba")); // true
console.log(pattern.test("https://example.com/xa")); // false
```

次の例は、`/<not b>a` のようなパス名に一致する否定後読み照合を示しています。
このパターンは `/` に一致し、次に `.` で次の文字 (`x`) を消費し、その前の文字が `b` でなかったというアサーションが続き、その後 `a` に一致します。

```js
// 否定先読み
const pattern4 = new URLPattern({ pathname: "(/.*(?<!b)a)" });
console.log(pattern4.test("https://example.com/ba")); // false
console.log(pattern4.test("https://example.com/xa")); // true
```

#### その他の正規表現照合子の制限

他に期待通りに動作しない正規表現パターンがあります。

- URLPattern 内の範囲式では、正規表現ではエスケープする必要のない括弧もエスケープする必要があります。

  ```js
  new URLPattern({ pathname: "([()])" }); // 例外
  new URLPattern({ pathname: "([\\(\\)])" }); // ok

  new RegExp("[()]"); // ok
  new RegExp("[\\(\\)]"); // ok
  ```

### 無名グループと名前付きグループ

グループには名前をつけることも、つけないこともできます。名前付きグループは、グループ名の前にコロン (`:`) を付けて指定します。
コロンと名前で接頭辞が付けられていない正規表現グループは、名前なしグループとなります。
名前なしグループは、パターン内の順序に基づいて、照合結果に番号が割り当てられます。

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

グループには修飾子も指定できます。
これらはグループ名（または正規表現がある場合はその後に）に指定します。
修飾子は 3 種類あります。 `?` はグループをオプションにします。 `+` はグループを 1 回以上繰り返します。 `*` はグループを 0 回以上繰り返します。

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

パターンにはグループ区切り文字も含まれることがあります。これらは、波括弧 (`{}`) で囲まれたパターンの部分です。
これらのグループ区切り文字は、キャプチャグループのように一致結果にはキャプチャされませんが、グループと同様に修飾子を適用することができます。
グループ区切り文字が修飾子によって修飾されていない場合、その中の項目は親パターンの一部として扱われます。
グループ区切り記号は他のグループ区切り記号を含めることはできませんが、他のパターン要素（キャプチャグループ、正規表現、ワイルドカード、固定テキストなど）を含めることができます。

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

URL の `pathname` 部分と一致するパターンでは、グループ定義の前にスラッシュ (`/`) が付いている場合、グループには自動的にスラッシュ (`/`) が接頭辞として追加されます。
これは、修飾子を持つグループで、繰り返しグループが期待どおりに機能するようにするために役立ちます。

自動接頭辞を追加したくない場合は、グループをグループ区切り文字 (`{}`) で囲むことで無効にすることができます。
グループ区切り文字には、自動接頭辞の機能はありません。

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

ワイルドカードトークン (`*`) は、0 回以上すべての文字に一致する、名前なしのキャプチャグループを表す省略形です。
これはパターンのどこにでも配置できます。
ワイルドカードは貪欲であり、可能な限り長い文字列に一致します。

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

### pathname の末尾のスラッシュはデフォルトでは一致しない

パス名の末尾のスラッシュは自動的には一致しません。
下記例は、`URLPattern` が `/books` というパス名に一致する場合、`https://example.com/books` には一致しますが `https://example.com/books/` には一致しないこと（その逆も同様）を示しています。

```js
const patternSlash = new URLPattern({ pathname: "/books/" });
console.log(patternSlash.test("https://example.com/books")); // false
console.log(patternSlash.test("https://example.com/books/")); // true

const patternNoSlash = new URLPattern({ pathname: "/books" });
console.log(patternNoSlash.test("https://example.com/books")); // true
console.log(patternNoSlash.test("https://example.com/books/")); // false
```

両方とも一致させたい場合は、どちらでも許容する照合パターンを使用する必要があります。
最も簡単な手法は、スラッシュを含む[グループ区切り文字](#グループ区切り文字)を使用し、その後にオプションの修飾子を付けることです。
これにより、終端スラッシュの有無にかかわらずパターンが一致します。

```js
const patternOptionalSlash = new URLPattern({ pathname: "/books{/}?" });
console.log(patternOptionalSlash.test("https://example.com/books")); // true
console.log(patternOptionalSlash.test("https://example.com/books/")); // true
```

### パターンの正規化

パターンが解釈されると、自動的に正規形に正規化されます。
例えば、pathname プロパティでは Unicode 文字は[パーセントエンコード](/ja/docs/Glossary/Percent-encoding)され、hostname では Punycode エンコードが使用され、デフォルトのポート番号は省略され、 `/foo/./bar/` のようなパスは `/foo/bar` に短縮されます。
さらに、 `foo` と `{foo}` のように、同じ意味に解釈されるパターン表現もいくつかあります。
このような場合は、最も単純な形に正規化されます。
この場合、 `{foo}` は `foo` に変更されます。

## ベース URL からの継承

{{domxref("URLPattern")}} で定義された照合パターンと、{{domxref("URLPattern.test()")}} および {{domxref("URLPattern.exec()")}} で使用されるテストされる URL の両方において、入力はオプションのベース URL を用いて指定できます（このベース URL は、URL を文字列として指定する場合は別個の引数として、URL をオブジェクトとして指定する場合は別個のプロパティとして扱われます）。

ベース URL が定義されている場合、URL の構成要素はベース URL から継承され、パターンやテストされる URL の構成要素を設定するために使用される可能性があります。
URL の解決は、ベース URL を指定して指定された {{domxref("URL")}} を解決する場合とほぼ同様です。

`username` と `password` は、ベース URL から継承されることはありません。

入力で定義された最も具体的な部分よりも「より具体的な」URL の部分のみが、ベース URL から継承されます。
次のリストは、具体性の順序を示しています。

- `protocol` （もっとも具体的）, `hostname`, `port`, `pathname`, `search`, `hash`
- `protocol`, `hostname`, `port`, `username`, `password`

これは例えば、入力 URL に `protocol` が指定されている場合、それ以上の具体性が存在しないため、ベース URL から何も継承されないことを意味します。
ただし、入力で `pathname` 部分が指定されている場合、`protocol`、`hostname`、`port` はベース URL から継承されることがありますが、`search` と `hash` は継承されません。

文字列/入力オブジェクトで指定されていない、またはベース URL から継承されない URL 要素は、`URLPattern` の場合にはワイルドカード値 (`"*"`) に、テスト URL の場合には空文字列 (`""`) にデフォルト設定されることに注意してください。

## 大文字小文字の区別

URL パターン API は、照合時に URL の多くの部分をデフォルトで大文字と小文字を区別します。これとは対照的に、多くのクライアント側の JavaScript フレームワークでは、大文字と小文字を区別しない URL 照合が使用されます。必要に応じて、大文字と小文字を区別しない照合を有効にする `ignoreCase` オプションを {{domxref("URLPattern.URLPattern", "URLPattern()")}} コンストラクターで使用できます。

```js
// デフォルトでは大文字小文字を区別する照合
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

次の例は、 `URLPattern` が特定の URL 成分をフィルターする方法を示しています。
`URLPattern()` コンストラクターが、成分のパターンの構造化オブジェクトで呼び出されると、欠落している成分は、デフォルトで `*` ワイルドカード値になります。

```js
// 特定のドメインとそのサブドメインに一致する URLPattern を構築する
// それ以外のすべての URL 要素は、デフォルトでワイルドカード `*` パターンになる
const pattern = new URLPattern({
  hostname: "{*.}?example.com",
});

console.log(pattern.hostname); // '{*.}?example.com'

console.log(pattern.protocol); // '*'
console.log(pattern.port); // '*'
console.log(pattern.username); // '*'
console.log(pattern.password); // '*'
console.log(pattern.pathname); // '*'
console.log(pattern.search); // '*'
console.log(pattern.hash); // '*'

console.log(pattern.test("https://example.com/foo/bar")); // true
console.log(pattern.test({ hostname: "cdn.example.com" })); // true
console.log(pattern.test("custom-protocol://example.com/other/path?q=1")); // true

// ホスト名要素が一致しないため、`false` が出力される
console.log(pattern.test("https://cdn-example.com/foo/bar"));
```

### 完全な URL 文字列から URLPattern を構築

次の例は、パターンが埋め込まれた完全な URL 文字列から `URLPattern` を構築する方法を示しています。
例えば `:` は、 `https:` のように URL プロトコルの接尾辞としても、 `:foo` のように名前付きパターングループの先頭としても使用できます。
文字が URL 構文の一部であるか、パターン構文の一部であるかが明確であれば、これは「そのまま動作」します。

```js
// jpg 画像を読み込む CDN サーバーの URL と一致する URLPattern を構築します。
// 明示的に指定されていないURL成分はワイルド文字列 ("*") となります
const pattern = new URLPattern("https://cdn-*.example.com/*.jpg");

console.log(pattern.protocol); // 'https'
console.log(pattern.hostname); // 'cdn-*.example.com'
console.log(pattern.pathname); // '/*.jpg'

console.log(pattern.username); // '*'
console.log(pattern.password); // '*'
console.log(pattern.search); // '*'
console.log(pattern.hash); // '*'

// `true`
console.log(
  pattern.test("https://cdn-1234.example.com/product/assets/hero.jpg"),
);

// `true` であるのは、検索パターンがデフォルトでワイルドカードになるため
console.log(
  pattern.test("https://cdn-1234.example.com/product/assets/hero.jpg?q=1"),
);
```

### 曖昧な URL 文字列を使用して URLPattern を構築

次の例は、曖昧な文字列から構築された `URLPattern` が、文字をパターン構文の一部として扱うことを優先する方法を示しています。
この場合、 `:` 文字はプロトコル要素のサフィックスである場合もあれば、パターン内の名前付きグループの接頭辞である場合もあります。
コンストラクターは、これをパターンの一部として扱うことを選択し、したがって、これが相対パス名パターンであると判断します。
ベース URL がないため、相対パス名は解決できず、エラーが発生します。

```js
// これは、名前付きグループ ":foo" を持つ単一の相対パス名パターンとして
// 解釈され、ベース URL がないため、例外が発生します。
const pattern = new URLPattern("data:foo*");
```

### URLPattern コンストラクター文字列の曖昧さを回避するためのエスケープ文字

次の例は、曖昧なコンストラクター文字列文字をエスケープして、パターン文字ではなく URL の区切り文字として扱う方法を示しています。
ここでは、 `:` は `\\:` とエスケープされています。

```js
// `:` をプロトコル接尾辞として扱う URLPattern を構築します。
const pattern = new URLPattern("data\\:foo*");

console.log(pattern.protocol); // 'data'
console.log(pattern.pathname); // 'foo*'
console.log(pattern.username); // '*'
console.log(pattern.password); // '*'
console.log(pattern.hostname); // ''
console.log(pattern.port); // ''
console.log(pattern.search); // '*'
console.log(pattern.hash); // '*'

console.log(pattern.test("data:foobar")); // true
```

### test() と exec() のベース URL の使用

次の例は、`test()` および `exec()` がベース URL を使用できることを示しています。

```js
const pattern = new URLPattern({ hostname: "example.com", pathname: "/foo/*" });

console.log(pattern.protocol); // '*'
console.log(pattern.pathname); // '/foo/*'
console.log(pattern.username); // '*'
console.log(pattern.password); // '*'
console.log(pattern.hostname); // 'example.com'
console.log(pattern.port); // '*'
console.log(pattern.search); // '*'
console.log(pattern.hash); // '*'

// ホスト名は `baseURL` プロパティから継承されるため `true` となる
// （プロトコルも同様だが、それはパターンワイルドカードで一致する）
console.log(
  pattern.test({
    pathname: "/foo/bar",
    baseURL: "https://example.com/baz",
  }),
);

// 2 つ目の引数 base URL と一致するホスト名として `true` が出力されます。
console.log(pattern.test("/foo/bar", "https://example.com/baz"));

// 2 つ目の引数は入力オブジェクトでは渡すことができないため、例外が発生します。
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

次の例は、ベース URL を使用して `URLPattern` を構築する方法を示しています。
ベース URL は厳密に URL として扱われ、パターン構文自体を含むことはできません。

パターンは、それ以外のプロパティの URL 部分よりも具体性の低い部分のみを、[ベース URL から継承](#ベース_url_からの継承)します。

この場合、`pathname` が指定されているため、プロトコルとホストは継承されますが、検索、ハッシュ、ユーザー名、パスワードは継承されません。
継承されないプロパティは、ワイルドカード文字列 (`"*"`) がデフォルト値となります。
例外はポート番号であり、これは空文字列に設定されます。これは、ホスト名がベース URL から継承されるためです（[ベース URL には暗黙の「デフォルトポート」値が存在します](/ja/docs/Web/API/URLPattern/URLPattern#url_または_baseurl_のホスト名はデフォルトポート番号へ影響する)）。

```js
const pattern1 = new URLPattern({
  pathname: "/foo/*",
  baseURL: "https://example.com",
});

console.log(pattern1.protocol); // 'https'
console.log(pattern1.hostname); // 'example.com'
console.log(pattern1.pathname); // '/foo/*'
console.log(pattern1.username); // '*'
console.log(pattern1.password); // '*'
console.log(pattern1.port); // ''
console.log(pattern1.search); // '*'
console.log(pattern1.hash); // '*'

// pattern1 と同等
const pattern2 = new URLPattern("/foo/*", "https://example.com");

// コンストラクターにおける相対文字列は、解決するためのベース URL を
// 指定する必要があります。
try {
  const pattern3 = new URLPattern("/foo/*");
} catch (e) {}
```

### 一致したグループの値へのアクセス

次の例は、パターングループに一致する入力値が、後で {{domxref("URLPattern/exec","exec()")}} の結果オブジェクトからどのようにアクセスできるかを示しています。

`input` プロパティは、パターンと照合される文字列です。この場合は `cdn.example.com` です。
`groups` プロパティにはキャプチャグループが含まれます。名前が付けられていないグループは数値で、名前付きグループは名前でインデックス付けされます。
この場合、ワイルドカードプロパティ用の名前が付けられていないグループが 1 つだけ存在し、その値は `cdn` です。

```js
const pattern = new URLPattern({ hostname: "*.example.com" });
const result = pattern.exec({ hostname: "cdn.example.com" });

console.log(result.hostname); // {"groups": {"0": "cdn"}, "input": "cdn.example.com"}
```

### 一致した名前付きグループの値へのアクセス

次の例は、グループに独自の名前を指定し、それを使用して結果オブジェクト内の対応する値にアクセスする方法を示しています。

パターン内の照合パターンは、`:` 記号に続いて名前が示されています。
同じ名前が `groups` プロパティのキーとして現れており、対応する値はテスト URL の一致した部分となります。
`input` プロパティには、`pathname` パターンに一致した URL の全体が含まれています。

```js
// 独自の名前を持つ照合グループを使用して URLPattern を構築します。

const pattern = new URLPattern({ pathname: "/:product/:user/:action" });
const result = pattern.exec({ pathname: "/store/wanderview/view" });

console.log(result.pathname);
/*
{
    "groups": {
        "product": "store",
        "user": "wanderview",
        "action": "view"
    },
    "input": "/store/wanderview/view"
}
*/

// これらの名前は、下記の "user" のように、後で結果オブジェクトの
// 一致する値にアクセスするために使用することができます。
console.log(result.pathname.groups.user); // 'wanderview'
```

### 独自の正規表現グループ

次の例は、照合グループで正規表現を使用してテスト URL 内の `/foo` または `/bar` のどちらかに一致させる方法を示しています。
このグループには名前が付けられていないため、結果ではインデックス番号で参照されます。

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

グループ名は `type` であり、`/foo` または `/bar` のどちらかのパスに一致します。

```js
const pattern = new URLPattern({ pathname: "/:type(foo|bar)" });
const result = pattern.exec({ pathname: "/foo" });

console.log(result.pathname.groups.type); // 'foo'
```

### グループの称号をオプションにする

次の例は、 `?` 修飾子をその後に置くことで、照合グループをオプションにする方法を示しています。

パス名成分の場合、これにより、その前にある `/` 文字も、そのグループのオプションの接頭辞として扱われるようになります。

```js
const pattern = new URLPattern({ pathname: "/product/(index.html)?" });

console.log(pattern.test({ pathname: "/product/index.html" })); // true
console.log(pattern.test({ pathname: "/product" })); // true

const pattern2 = new URLPattern({ pathname: "/product/:action?" });

console.log(pattern2.test({ pathname: "/product/view" })); // true
console.log(pattern2.test({ pathname: "/product" })); // true
```

ワイルドカードもオプションにすることができます。
ワイルドカードは空文字列と一致するので、これは意味がないように見えるかもしれませんが、これにより、パス名パターンで接頭辞 `/` もオプションになります。

```js
const pattern3 = new URLPattern({ pathname: "/product/*?" });

console.log(pattern3.test({ pathname: "/product/wanderview/view" })); // true
console.log(pattern3.test({ pathname: "/product" })); // true
console.log(pattern3.test({ pathname: "/product/" })); // true
```

### 照合グループを繰り返す

次の例は、照合グループの後に `+` 修飾子を置くことで、繰り返しを表現する方法を示しています。
パス名成分においても、 `/` 接頭辞は特別な扱いを受け、実質的に繰り返しグループの開始位置となります。

```js
const pattern = new URLPattern({ pathname: "/product/:action+" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname);
// { "groups": { "action": "do/some/thing/cool" }, "input": "/product/do/some/thing/cool" }
```

`/product` は、`/` と少なくとも 1 文字が続いていないため一致しません。

```js
console.log(pattern.test({ pathname: "/product" })); // false
console.log(pattern.test({ pathname: "/product/" })); // false
console.log(pattern.test({ pathname: "/product/do" })); // true
console.log(pattern.test({ pathname: "/product/do/" })); // false
```

### 照合するグループをオプションにし、繰り返す

次の例は、オプションであり、かつ繰り返し可能な照合グループを作成する方法を示しています。
これを行うには、グループの後に `*` 修飾子 を配置します。
ここでも、パス名要素は `/` 接頭辞を特別なものとして扱います。

これはオプションになり、グループとともに繰り返し行われます。

```js
const pattern = new URLPattern({ pathname: "/product/:action*" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname);
// { "groups": { "action": "do/some/thing/cool" }, "input": "/product/do/some/thing/cool" }
```

前回の例とは異なり、`/product` が一致するのは、`/` を含む繰り返し区間の要素が省略可能であるためです。
ただし、繰り返しグループに一致させるには、スラッシュの後に少なくとも 1 文字の捕捉対象文字がある必要があります。

```js
console.log(pattern.test({ pathname: "/product" })); // true
console.log(pattern.test({ pathname: "/product/" })); // false
console.log(pattern.test({ pathname: "/product/do" })); // true
console.log(pattern.test({ pathname: "/product/do/" })); // false
```

### オプションまたは繰り返し修飾子に独自の接頭辞または接尾辞を使用

次の例は、中括弧（[グループ区切り文字](#グループ区切り文字)）を名前付きグループと組み合わせることで、後続の `?`、`*`、`+` 修飾子によって操作される独自の接頭辞や接尾辞を示す方法を示しています。

例えば、`{:subdomain.}*` は `example.com` のサブドメインおよびドメイン自体に一致します。
この一致は名前付きグループ "subdomain" に代入されます。

```js
const pattern = new URLPattern({ hostname: "{:subdomain.}*example.com" });
const result = pattern.exec({ hostname: "foo.bar.example.com" });

console.log(pattern.test({ hostname: "example.com" })); // true
console.log(pattern.test({ hostname: "foo.bar.example.com" })); // true
console.log(pattern.test({ hostname: ".example.com" })); // false

console.log(result.hostname);
// { "groups": { "subdomain": "foo.bar" }, "input": "foo.bar.example.com" }
```

### 照合グループなしでテキストをオプションまたは繰り返しにする

次の例は、中括弧を使用して、照合グループを使用せずに、修正されたテキスト値をオプションまたは繰り返しとして示す方法を示しています。

次のパターンは `/product` または `/product/` のどちらかと一致しますが、[グループ区切り文字](#グループ区切り文字)はデフォルトでキャプチャされないため、対応する照合グループで結果を取得できません。

```js
const pattern = new URLPattern({ pathname: "/product{/}?" });

console.log(pattern.test({ pathname: "/product" })); // true
console.log(pattern.test({ pathname: "/product/" })); // true

const result = pattern.exec({ pathname: "/product/" });
console.log(result.pathname.groups); // {}
```

### 複数の成分および機能を同時に使用

次の例は、複数の URL 成分にまたがっていくつの機能を組み合わせることができるかを示しています。

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
