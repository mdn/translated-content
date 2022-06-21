---
title: 構文の節
slug: MDN/Structures/Syntax_sections
tags:
  - API
  - CSS
  - HTML
  - MDN メタ
  - 構造
  - 構文
  - 進行中
translation_of: MDN/Structures/Syntax_sections
---
{{MDNSidebar}}

MDN リファレンスページの構文の節には、機能が持つ正確な構文を定義する構文ボックスがあります（例えば、どのような引数が受け入れられるか、どれがオプションかなど）。この記事では、リファレンス記事の構文ボックスの書き方を説明します。

## API リファレンスの構文

API リファレンスページの構文の節は手作業で書かれており、文書化される機能によって若干異なる場合があります。
この節は、「構文」という見出し（通常はレベル 2 の見出し `##`）で始まり、リファレンスページの一番上（導入部分のすぐ下）に記述する必要があります。
見出しの下にはその機能の正確な構文を示すコードブロックがあり、コードフェンス `` ``` [markup-language] `` クラスを使って区分けされています。

以下の例では典型的な構文セクション（JavaScript 関数）の Markdown コードを示しています。

````
## 構文

```js
slice()
slice(start)
slice(start, end)
```
````

### 全般的なスタイル規則

構文ブロック内をマークアップするために従うべき規則がいくつかあります。

- 行をセミコロン `;` で終わらせ**ない**でください。 構文の節は、実行可能なコードを表示するためのものではありません。だから、セミコロンを表示するのは意味がありません。
- 構文ブロック内で（または MDN のコードサンプルブロック内でも） \<code> を使用し**ない**でください。一般的に役に立たないだけでなく、マークアップはこれを必要としないので、これを含むと見た目の通りにレンダリングされません。
- 関数と引数のみを指定してください。以下、「修正」した例を示します。

  ```js
  querySelector(selector)
  //responseStr = element.querySelector(selector);

  new IntersectionObserver(callback, options)
  // var observer = new IntersectionObserver(callback, options);
  ```

### コンストラクターやメソッドの場合

#### 構文ブロック

構文ブロックは、次のように始めてください（{{DOMxRef("IntersectionObserver.IntersectionObserver", "IntersectionObserver constructor")}} ページを参照）。

```js
new IntersectionObserver(callback, options)
```

または、次のようにします（{{DOMxRef("Document.hasStorageAccess")}} を参照）。

```js
hasStorageAccess()
```

##### オプション引数は複数行で

多くの異なる方法で使用することができるメソッドは、複数の行に展開し、利用可能な変化形をすべて表示する必要があります。

各オプションはそれ自身の行に記述し、各オプションのコメントと代入は省略する必要があります。例えば、 {{jsxref("Array.prototype.slice()")}} は 2 つのオプションの引数を持っており、以下のように文書化されます。

```js
slice()
slice(begin)
slice(begin, end)
```

同様に、 {{DOMxRef("CanvasRenderingContext2D.drawImage")}} の場合です。

```js
drawImage(image, dx, dy)
drawImage(image, dx, dy, dWidth, dHeight)
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

同様に、 {{jsxref("Date")}} コンストラクターの場合です。

```js
new Date()
new Date(value)
new Date(dateString)
new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
```

##### 形式文法

形式文法記法（[BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form) を使用したもの）は構文の節で使用すべきではありません。代わりに[前述](#オプション引数は複数行で)のような複数行の書式に展開したものを使用してください。

形式的な記法により、複雑な構文を簡潔に記述することができますが、多くの開発者には馴染みがなく、特定のプログラミング言語で有効な構文と_矛盾する可能性があります。例えば、「`[ ]`」は「オプション引数」と JavaScript の配列 ({{jsxref("Array")}}) の両方の意味があります。これは以下の {{jsxref("Array.prototype.slice()")}} の形式文法で見ることができます。

```js
arr.slice([begin[, end]])
```

有益と思われる特定のケースについては、別な**形式文法**の節で正式な表記を用いて宣言することができます。

##### 構文ブロックは簡潔に

構文ブロックを簡潔にし、その機能の構文の定義の曖昧さをなくすために — 無関係な構文を含めないでください。例えば、このサイトの多くの場所で、プロミスを説明するために次のような形をよく見かけます。

```js
caches.match(request, options).then(function(response) {
  // Do something with the response
});
```

しかし、次のものははるかに簡潔で、余計な {{JSxRef("Promise.prototype.then()")}} メソッド呼び出しを含んでいません。

```js
match(request, options)
```

##### コールバックの構文ブロック

コールバック関数を持つメソッドについては、アロー関数、関数、インライン関数の構文を示してください。

```js
// アロー関数
filter((currentValue) => { /* ... */ } )
filter((currentValue, index) => { /* ... */ } )
filter((currentValue, index, array) => { /* ... */ } )

// コールバック関数
filter(callbackFn)
filter(callbackFn, thisArg)

// インラインコールバック関数
filter(function(currentValue) { /* ... */ })
filter(function(currentValue, index) { /* ... */ })
filter(function(currentValue, index, array){ /* ... */ })
filter(function(currentValue, index, array) { /* ... */ }, thisArg)
```

##### 任意の数の引数を取る構文

任意の数の引数を受け取るメソッドの場合、構文の節は次のように記述してください。

```js
unshift(element0)
unshift(element0, element1)
unshift(element0, element1, /* ... ,*/ elementN)
```

#### 引数の項

次に、「引数」の項を設置して、それぞれの引数が何であるべきかを説明リストの形で説明してください。複数のメンバーを含むことができるオブジェクトの引数は、入れ子の説明リストで記述し、その中にそれぞれのメンバーが何であるべきかを記述してください。省略可能な引数は、説明する用語の名前の隣に \{{optional_inline}} マクロでマークしてください。

リスト内の各引数の名前は {{HTMLElement("code")}} ブロックの中に含めてください。

> **Note:** その機能が何も引数を取らない場合は、「引数」の項を設置する必要はありませんが、中身を「なし」として設置しても構いません。

#### 返値の項

その次に、「返値」の項を設置して、コンストラクターやメソッドの返値が何であるかを説明してください。例については前述のリンクを参照して下さい。

返値がない場合は、下記のテキストを使用してください。

なし (\\{{jsxref("undefined")}})。

#### 例外の項

最後に、「例外」の項を設置して、コンストラクターやメソッドの呼び出し時に問題が発生した場合にどの例外が発生するかを説明してください。発生する原因としては、引数名の綴りが間違っていたり、間違ったデータ型の値が与えられたり、呼び出された環境に問題があったり (例えば、安全なコンテキストで実行する機能を安全でないコンテキストで実行しようとした場合など)、その他の理由であったりする場合などです。

メソッドで発生する例外を特定するには、仕様を十分に精査する必要があります。機能がどのように動作するかについて、仕様書の一つ一つの説明を調べると、一般に例外とそれが発生する状況の確実な一覧を得ることができます。

例外の名前と説明を説明リストに記述してください。

> **Note:** その機能で発生する例外がない場合は「例外」の項を設置する必要はありませんが、中身を「なし」として設置しても構いません。

### プロパティの場合

#### 値の項

構文ブロックの下に「値」の項を設置する必要があり、そこでプロパティの値を — データ型とその用途について — 説明してください。

#### 例外の項

プロパティにアクセスする際に例外が発生する可能性がある場合、「例外」の項を設置してそれぞれの例外を説明してください。これは前述のメソッドやコンストラクターの説明と同様のことをしてください。

## JavaScript リファレンスの構文

JavaScript の組み込みオブジェクトのリファレンスページは、 API リファレンスページと同様の基本規則に従います。例えばメソッドやプロパティについてです。多少の違いが見られることがあります。

- 組込みオブジェクトで単一のコンストラクターを持つものは、コンストラクターの構文がオブジェクトのランディングページに含まれていることが良くあります。例えば {{JSxRef("Date")}} を参照してください。（`Date` オブジェクト自身が持つ）静的メソッドは、「メソッド」の下の「Date.prototype メソッド」で記述されていることが分かるでしょう。
- また、引数も例外もないメソッドは、 JavaScript リファレンスページにこれらの節が全く含まれていないことに気が付くでしょう。例えば {{JSxRef("Date.getDate()")}} や {{JSxRef("Date.now()")}} を参照してください。

## CSS リファレンスの構文

### プロパティ

CSS プロパティページには「構文」の節があり、ふつうはページの先頭にありますが、次第に、機能の典型的な使用方法を示すブロックを含む節や、その機能が何を行うかを説明するライブデモ（例えば {{CSSxRef("animation")}} を参照）の下に見られるようになっています。

> **Note:** このようにしているのは、 CSS の形式文法が複雑であり、 MDN の読者の多くが必要としておらず、初心者にとってとっつきにくいからです。実際の構文と例が多くの人にとってより有用です。

構文の節の中には、次のような内容が見られるでしょう。

#### 説明文は任意

CSS プロパティによってはそれ自体が説明的であり、それ以上の説明が本当に必要ない場合があります (例えば {{CSSxRef("color")}})。一方、より複雑で、複数の値などを含む構文の順序の説明が必要なものもあります ({{CSSxRef("animation")}} を参照)。そのような場合、項が始まる前に追加の説明を加えることができます。

#### 値の項

次に、「値」の項を入れてください。 — これには説明リストが入り、プロパティの値を構成する値の型を説明します。値の型はそれぞれ山括弧で囲み、その値の型を説明する MDN のリファレンスページがあれば、そこへリンクしてください。例えば、 {{CSSxRef("border")}} プロパティのリファレンスを参照してください。 — これは3つの値の型を参照しており、そのうちの一つ ({{CSSxRef("&lt;color&gt;")}}) だけがリンクになっています。

#### 形式文法

最後の項、「形式文法」は [MDN data リポジトリー](https://github.com/mdn/data)の CSS ディレクトリーにあるデータから自動的に生成されます。タイトルの下で `CSSSyntax` マクロ呼び出しを記述するだけで、残りのことはマクロがやってくれます。

唯一の問題は、必要なデータが存在することを確認することです。 [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) ファイルに、文書化しているプロパティの項目が含まれている必要があり、 [types.json](https://github.com/mdn/data/blob/main/css/types.json) ファイルには、プロパティの値で使用されるすべての値の型の項目が含まれている必要があります。

これを行うには、 [MDN data リポジトリー](https://github.com/mdn/data)をフォークし、フォークをローカルにクローンし、新しいブランチに変更を行い、上流のリポジトリーに向けてプルリクエストを送信してください。 [Git の使用についての詳細はこちらにあります](/ja/docs/MDN/Structures/Compatibility_tables#データを追加する準備)。

### セレクター

セレクターのリファレンスページの「構文」の節は、プロパティページよりもずっと簡潔です。ここには "Syntax Box" を使用してスタイル付けされたブロックが 1 つ入り、ここでセレクターの基本的な構文を、単純なキーワードだけ (例えば {{CSSxRef(":hover")}}) または引数を取るより複雑な関数値（例えば {{CSSxRef(":not", ":not()")}}）のどちらかで示します。引数を構文ブロックの中の別な項目で説明している場合もあります（例えば {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}} を参照してください）。

このブロックは、 [MDN data リポジトリー](https://github.com/mdn/data)の CSS ディレクトリにあるデータから自動的に生成されます。題名の下で `CSSSyntax` マクロ呼び出しを追加するだけで、残りのことはマクロがやってくれます。

唯一の問題は、必要なデータが存在することを確認することです。 [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) ファイルに、文書化しているセレクターの項目が含まれている必要があります。

これを行うには、 [MDN data リポジトリー](https://github.com/mdn/data)をフォークし、フォークをローカルにクローンし、新しいブランチに変更を行い、上流のリポジトリーに向けてプルリクエストを送信してください。 [Git の使用についての詳細はこちらにあります](/ja/docs/MDN/Structures/Compatibility_tables#データを追加する準備)。

## HTML リファレンスの構文

HTML リファレンスページには「構文」の節がありません。 — 構文は常に要素名を山括弧で囲んだものであるため、必要ないからです。 HTML 要素について主に知っておかなければならないことは、どのような属性を取りうるか、その値は何になるかであり、これは別の「属性」の節で扱います。例としては、 {{htmlelement("ol")}} や {{htmlelement("video")}} をご覧ください。

## HTTP リファレンスの構文

HTTP リファレンスの構文はすべて手作業で作成され、文書化する HTTP の機能によって異なります。

### HTTP ヘッダー/Content-Security-Policy

HTTP ヘッダーの構文（および Content-Security-Policy）ページ上で 2 つの節に分けて記述します。 — 「構文」と「ディレクティブ」です。

#### 構文の節

「構文」の節は、ヘッダーの構文がどのようなものかを、 "Syntax Box" スタイルを使用してスタイル付けされた構文ブロックを用いて、値にどのディレクティブが含まれるか、どのような順番かなどの形式文法を含めて示します。例えば、 {{HTTPHeader("If-None-Match")}} ヘッダーの構文ブロックは次のようになります。

```plain
If-None-Match: <etag_value>
If-None-Match: <etag_value>, <etag_value>, …
If-None-Match: *
```

ヘッダーによっては個別にリクエストディレクティブ、レスポンスディレクティブ、拡張構文があることがあります。存在する場合、それぞれの項の下にある個別の構文ブロックの中に設置する必要があります。例としては {{HTTPHeader("Cache-Control")}} をご覧ください。

#### ディレクティブの節

「ディレクティブ」の節には、構文に現れる可能性があるすべてのディレクティブの名前と解説を記述した説明リストを設定します。

### HTTP リクエストメソッド

リクエストメソッドの構文は実に単純で、構文ブロックを設置し、 "Syntax Box" スタイルを用いてスタイル付けし、どのようにメソッドの構文を構成するかを示すだけです。 [GET メソッド](/ja/docs/Web/HTTP/Methods/GET)の構文は次のようになります。

```plain
GET /index.html
```

### HTTP レスポンスステータスコード

HTTP レスポンスステータスコードの構文も、実に単純です。 — コードと名前を含む構文ブロックです。例えば次のようになります。

```plain
404 Not Found
```

## SVG リファレンスの構文

### SVG 要素

SVG 要素に構文の節は存在しません。 — HTML 要素の構文の節と同様です。それぞれの SVG 要素のリファレンスページは、その要素に適用することができる属性の一覧を含みます。例えば {{SVGElement("feTile")}} を参照してください。

### SVG 属性

SVG 属性のリファレンスページにも、構文の節はありません。

## 関連情報

- [MDN での Markdown](/ja/docs/MDN/Contribute/Markdown_in_MDN#example_code_blocks)
