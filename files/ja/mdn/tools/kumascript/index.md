---
title: KumaScript
slug: MDN/Tools/KumaScript
---

{{MDNSidebar}}

MDN を動かしている [Yari](/ja/docs/MDN/Yari) プラットフォームでは、コンテンツの特定の側面を自動化するために、 [KumaScript](https://github.com/mdn/yari/tree/main/kumascript) と呼ばれる古くからのテンプレート/マクロシステムがまだ利用可能です。このシステムの使用をいつか中止したいと考えていますが、それまでは MDN はこのシステムに依存しています。この記事では、 KumaScript の使用に関する基本的な情報を提供します。

### KumaScript とは

- 文書間で繰り返し現れるコンテンツの再利用やローカライズを行う手段 (互換性のラベル、セクションナビゲーション、警告バナーなど)。
- 他の文書からコンテンツを引用して文書を構築する手段。
- 他のウェブサイトやサービス (Bugzilla など) からコンテンツを取得して含める手段。

### KumaScript が持たないもの

KumaScript は次のことは行いません。

- フォーム送信を受け付けるような対話型スクリプトには対応していません。
- データベースやファイルにアクセスしたり、情報を永続的に格納したりする仕組みはありません。
- ログイン中のユーザー情報に基づくサイトのパーソナライズには対応していません。
- ユーザー情報にアクセスすることはできず、コンテンツとページのメタデータにのみアクセス可能です。

## 基本

KumaScript は MDN で[埋め込み JavaScript テンプレート](https://github.com/mde/ejs)に利用されています。これらのテンプレートは MDN の筆者ならば誰でも文書内で、マクロを使用して呼び出すことができます。

KumaScript のスクリプトは*テンプレート*であり、それぞれのテンプレートは Github の `mdn/yari` リポジトリーの [macros ディレクトリー](https://github.com/mdn/yari/tree/main/kumascript/macros)に格納されているファイルです。テンプレートは以下のようなものです。

```js
<% for (let i = 0; i < $0; i++) { %>
  Hello #<%= i %>
<% } %>
```

テンプレートの呼び出しには_マクロ*を使用します。これはすべてのページコンテンツのすべてどこでも利用できます。上記のテンプレートを呼び出すと、次のようになります (macros ディレクトリーに `hello.ejs` というファイル名で保存されている場合)。

```plain
\{{hello(3)}}
```

マクロの出力は以下のようなものです。

```html
Hello #0
Hello #1
Hello #2
```

### マクロの構文

マクロの呼び出しは、次のような一般的な形を取ります。

```plain
\{{templateName("arg0", "arg1", /* …, */ "argN")}}
```

マクロの構文は、以下の規則に基づいて構成されます。

- マクロの先頭と末尾は `\{{` と `\}}` の文字です。
- このマクロの最初の部分は、テンプレートの名前です。この名前の小文字の値は、 macros ディレクトリーの下にあるファイル名のいずれかの小文字の値と一致する必要があります。
- テンプレートは引数を受け付けます。括弧内にカンマ区切りで複数の引数を記述することができます。
- 数値以外の引数は引用符で囲む必要があります。数値は囲む必要はありません。

#### マクロの引数に JSON を用いる

半実験的な機能（動作保証なし）として、以下のように引数が一つだけの場合は、引数に JSON オブジェクトを指定できます。

```plain
\{{templateName({ "Alpha": "one", "Beta": ["a", "b", "c"], "Foo": "https:\/\/mozilla.org\/" })}}
```

このマクロからのデータは、テンプレートコード内で `$0` 引数のオブジェクトとして利用できます（例えば、 `$0.Alpha`, `$0.Beta`, `$0.Foo`）。これにより、引数の単純なリストで実現することが難しい又は不可能な複雑なデータ構造を、マクロ引数で表すことができます。

なお、この引数の形はとても繊細です。 — 正確に [JSON の構文](https://json.org/)に従っていなければならず、間違いを犯しやすいエスケープ文字の要件が求められます (例えば、すべてのスラッシュをエスケープするなど)。疑わしい場合は、 [JSON をバリデーターに掛けてみてください](https://jsonlint.com/)。

#### "\\{{" を記述する方法

"`\{{`" という文字の並びはマクロの開始を示すため、実際にページ内で "`\{{`" および "`\}\}`" を使用したい場合は問題になります。おそらく `DocumentParsingError` メッセージが発生するでしょう。

この場合、 `\\{{` のように最初の中括弧をバックスラッシュでエスケープすることができます。

### テンプレートの構文

それぞれの KumaScript テンプレートは、 `mdn/yari` リポジトリーの [macros ディレクトリー](https://github.com/mdn/yari/tree/main/kumascript/macros)に格納されているファイルです。これらのファイルは GitHub 上の何らかのオープンソースプロジェクトのファイルとして作成したり編集したりします。

KumaScript テンプレートは、いくつかの簡単な規則で、[組み込み JavaScript テンプレートエンジン](https://ejs.co)によって処理されます。

- テンプレート内では、マクロから渡された引数は `$0`, `$1`, `$2`, などのような変数として利用できます。引数のリスト全体は、テンプレート内で変数 `arguments` として利用できます。
- 多くのテキストは出力として扱われ、出力ストリームに入ります。
- JavaScript の変数や式は、以下のブロックを用いて出力ストリームに挿入可能です。

  - `<%= expr %>` — 出力される前に HTML エスケープされた JavaScript の式の値 (`<` および `>` は `&lt;` および `&gt;` となる)
  - `<%- expr %>` — エスケープされない JavaScript の式の値 (マークアップを動的に構築したり、マークアップを含むことができる他のテンプレートの結果に使用してください)
  - このブロック直下にセミコロンを含めるとエラーとなる。

- `<% %>` の間は JavaScript として解釈される。すなわち、ループ、条件文、関数などを含めることが可能。
- `<% %>` ブロック内は出力ストリームに含まれない。ブロック内の変数などをブロック外で使用する場合は、以下のように `<%= %>` を用いる。

  ```js
  <% for (let i = 0; i < $0; i++) { %>
    Hello #<%= i %>
  <% } %>
  ```

  JavaScriptのコードは `<% … %>` に含まれており、 `%> … <%` の間に現れるものは出力されることに注意してください。 JS の `for` ループは、1つ目の `<% %>` ブロックで始まり、出力モードに移行して、2つ目の `<% %>` の JS ブロックで終わらせることができます。

- EJS の構文の詳細については、[上流モジュールのドキュメント](https://ejs.co)でご確認ください。

## 高度な機能

KumaScript には前章までに紹介したもの以外に、高度な機能もあります。

### 環境変数

Wiki が KumaScript サービスを呼び出す際には、KumaScript がテンプレートに変数として利用できるようにする、現在の文書に関するいくつかのコンテキストを渡します。

- `env.path`
  - : 現在の MDN 文書へのパス
- `env.url`
  - : 現在の MDN 文書への絶対 URL
- `env.id`
  - : 現在の MDN 文書のユニーク ID
- `env.files`
  - : 現在の MDN 文書に添付されているファイルの配列で、配列内の各オブジェクトは、下記の [File オブジェクト](#file_オブジェクト)で説明されています。
- `env.review_tags`
  - : 記事のレビュータグ配列 ("technical"、 "editorial"など。)
- `env.locale`
  - : 現在の MDN 文書のロケール
- `env.title`
  - : 現在の MDN 文書のタイトル
- `env.slug`
  - : 現在の MDN 文書の URL スラッグ
- `env.tags`
  - : 現在の MDN 文書に付与されたタグの名称のリスト
- `env.modified`
  - : 現在の MDN 文書の最終更新日を示すタイムスタンプ
- `env.cache_control`
  - : `Cache-Control` ヘッダーで、現在の MDN 文書がリクエストされた際に送信されたものであり、キャッシュを無効にするかどうかの判断をするのに便利です

#### File オブジェクト

個々の file オブジェクトは以下の様なフィールドを持ちます。

- `title`
  - : 添付ファイルのタイトル
- `description`
  - : 現行版の添付ファイルに関する説明
- `filename`
  - : 添付ファイルのファイル名
- `size`
  - : 添付ファイルのサイズ（※単位 = bytes )
- `author`
  - : 添付ファイルをアップロードした人のユーザ名
- `mime`
  - : 添付ファイルの MIME type
- `url`
  - : 添付ファイルの URL

#### タグリストでの作業

変数 `env.tags` および `env.review_tags` がタグの配列を返します。これらを使って作業するには、もちろんたくさんの方法がありますが、ここではいくつかを提案します。

##### 特定のタグが設定されているかどうかの確認

ページに特定のタグが存在するかどうかを調べるには、このようにします。

```js
if (env.tags.indexOf("tag") !== −1) {
  // The page has the tag "tag"
}
```

##### ページのすべてのタグを反復処理

次のようにして、ページのすべてのタグを反復処理するようにすることもできます。

```js
env.tag.forEach(function(tag) {
  // do whatever you need to do, such as:
  if (tag.indexOf("a") === 0) {
    // this tag starts with "a" - woohoo!
  }
});
```

### API とモジュール

KumaScript は、 KumaScript マクロ用にいくつかの組み込みメソッドと API を提供します。マクロは、 `module.exports` を使用して新しい API メソッドをエクスポートすることもできます。

#### 組み込みメソッド

この文書は手動で管理されているので、コードとともに古くなってしまう可能性があります。この点を考慮して、[KumaScript のソース](https://github.com/mdn/yari/tree/main/kumascript/src/api)にある組み込み API の最新状態を常にチェックしましょう。しかし、ここではテンプレートに公開されている便利なメソッドの一部を紹介します。

- `md5(string)`
  - : 与えられた文字列の MD5 ダイジェストを16 進で返します。
- `template("name", ["arg0", "arg1", …, "argN"])`

  - : 指定されたテンプレートを、指定された引数のリストを使って実行し、その結果を返します。

  例: `<%- template("warning", ["foo", "bar", "baz"]) %>`.

    `DOMxRef` マクロを使用した例: `<%- template("DOMxRef", ["Event.bubbles", "bubbles"]) %>`.

    これは JavaScript の関数です。ですから、引数が `$2` のような引数の変数である場合は、引用符で囲まないでください。 `<%- template("warning", [$1, $2, "baz"]) %>` のようにします。コードのブロック内から他のテンプレートを呼び出す必要がある場合は、 `<%` … `%>` を使用しないでください。例えば `myvar = "<li>" + template("LXRSearch", ["ident", "i", $1]) + "</li>";` のようにします。

- `require(name)`
  - : 別なテンプレートをモジュールとして読み込みます。すべての出力は無視されます。テンプレート内で `module.exports` に代入されたものをすべて返します。テンプレート内で、 `<% const my_module = require('MyModule'); %>` のように使用されます。
- `cacheFn(key, timeout, function_to_cache)`
  - : 指定されたキーとキャッシュ生存時間を使用して、指定された関数の結果をキャッシュします。 `env.cache_control` の値を尊重し、ログイン中のユーザーが Shift を押しながら更新を押すことで送信される `no-cache` でキャッシュを無効化します。
- `request`
  - : HTTP リクエストを作成するためのライブラリーである [`request/request`](https://github.com/request/request) にアクセスします。 KumaScript テンプレート内でこのモジュールを使用するにはあまり使い勝手が良くないので、簡単にするためにモジュール API の中でラップすると良いでしょう。
- `log.debug(string)`
  - : ページ上のスクリプトログにデバッグメッセージを出力します (通常はエラーを表示する大きな赤いボックスです)。

#### 組み込み API モジュール

環境スクリプトによって自動的に読み込まれ、すべてのテンプレートで利用可能になる一連の組み込み API があます。 MDN が何年も前に依存していた古い DekiScript システムからいくつかの機能を提供しています。

これらは、テンプレート間で共通の変数やメソッドを共有するために使用されます。

- `kuma.*` - [Kuma](https://github.com/mdn/yari/blob/main/kumascript/src/api/kuma.js)
- `MDN.*` - [MDN:Common](https://github.com/mdn/yari/blob/main/kumascript/src/api/mdn.js)
- `page.*` - [DekiScript:Page](https://github.com/mdn/yari/blob/main/kumascript/src/api/page.js)
- `string.*` - [DekiScript:String](https://github.com/mdn/yari/blob/main/kumascript/src/api/string.js)
- `web.*` - [DekiScript:Web](https://github.com/mdn/yari/blob/main/kumascript/src/api/web.js)
- `wiki.*` - [DekiScript:Wiki](https://github.com/mdn/yari/blob/main/kumascript/src/api/wiki.js)

他に利用可能な API には以下のようなものがあります。

- `kuma.inspect(object)`
  - : 任意の JS オブジェクトを文字列として出力します。 `log.debug()` と共に良く使用します。 [node.js の `util.inspect()`](https://nodejs.org/api/util.html#util_util_inspect_object_options) も参照してください。
- `kuma.htmlEscape(string)`
  - : `&, <, >, "` の文字を `&amp, &lt;, &gt;, &quot;` にそれぞれエスケープします。
- `kuma.url`
  - : [node.js の `url` モジュール](https://nodejs.org/api/url.html)も参照してください。
- `kuma.fetchFeed(url)`
  - : RSS フィードを読み取り JS オブジェクトに解釈します。

#### モジュールの作成

組み込みの `require()` メソッドを使って、テンプレートをモジュールとして読み込み、テンプレート間で共通の変数やメソッドを共有することができます。モジュールはテンプレートの中で次のように定義できます。

```js
<%
module.exports = {
    add(a, b) {
        return a + b;
    }
}
%>
```

このテンプレートが macros ディレクトリーに `MathLib.ejs` として保存されていたとすると、次のように別のテンプレートで使用することができます。

```js
<%
const math_lib = require("MathLib");
%>
The result of 2 + 2 = <%= math_lib.add(2, 2) %>
```

このテンプレートの出力は以下の様になるでしょう。

```html
The result of 2 + 2 = 4
```

## ヒントと注意点

### デバッグ

デバッグ時に役立つヒントです。 `log.debug()` メソッドを使うと、テンプレートを実行しているページの上部にあるスクリプトメッセージ領域にテキストを出力することができます。ただし、これらのメッセージはすべてのユーザーが見ることができるため、デバッグが終わったら確実に削除する必要があります。これを使うには、次のようにしてください。

```js
<%- log.debug("Some text goes here"); %>
```

もちろん、役立つのであれば、スクリプトコードを使ってより複雑な出力を作ることもできます。

### キャッシュ

KumaScript テンプレートは、パフォーマンスを向上させるために深くキャッシュされます。ほとんどの場合、これは頻繁に変更されないコンテンツを提供するのに適しています。しかし、ログインしたユーザーがスクリプトの問題に気づいたときに、ページを強制的に再生成するための 2 つのオプションがあります。

- ブラウザーで再読み込みしてください。これにより、 KumaScript は `Cache-Control: max-age=0` ヘッダーのリクエストを発行することで、現在のページのコンテンツのキャッシュを無効にします。
- ブラウザーで Shift を押しながら再読み込みを実行してください。これにより `Cache-Control: no-cache` ヘッダー付きのリクエストを発行することで、 KumaScript は、現在のページ、および現在のページで使用されているテンプレートやコンテンツのキャッシュを無効にします。

## クックブック

このセクションでは、MDN で使用されるテンプレートの一般的なパターンの例をリストアップします。これには、古い DekiScript テンプレートと新しい KumaScript の同等品のサンプルがあります。

### ページ上で使用されているテンプレートを強制的に再読み込みさせる

繰り返しになりますが、ページで使用されているテンプレートを編集後に強制的に再読み込みさせるには、Shift を押しながら再読み込みします。再読み込みを使用するだけで、ページのコンテンツが再生成されますが、キャッシュされたテンプレートやインクルードされたコンテンツが使用されます。ページ自体のコンテンツ以外のキャッシュを無効にするには、 Shift を押しながらの再読み込みが必要です。

### "Unknown Error" からの回復

時々、ページ読込時に、次のようなスクリプティングメッセージが表示されることがあります。

```plain
Kumascript service failed unexpectedly: <class 'httplib.BadStatusLine'>
```

これはおそらく、 KumaScript サービスの一時的な障害です。ページを更新すると、このエラーは消えるかもしれません。それがうまくいかない場合は、Shift を押しながら再読み込みを試してみてください。何度か試してみてもエラーが消えない場合は、 Mozilla Developer Network に [IT バグを提出](https://bugzilla.mozilla.org/enter_bug.cgi?product=mozilla.org&format=itrequest)して調査を依頼してください。

### Broken wiki.languages() マクロ

いくつかのページで、以下の様なスクリプトエラーメッセージを見かける場合があるでしょう。

```plain
Syntax error at line 436, column 461: Expected valid JSON object as the parameter of the preceding macro but…
```

その様なページを編集状態にした場合、ページ下部に以下の様なマクロが見つかるかもしれません。

```plain
\{{ wiki.languages({ "zh-tw": "zh_tw/Core_JavaScript_1.5_教學/JavaScript_概要", … }) }}
```

この問題を解決するには、マクロを削除してください。または、情報を温存するために次のように両側の中括弧を HTML コメント `<!-- -->` で置き換えてください。

```html
<!-- wiki.languages({ "zh-tw": "zh_tw/Core_JavaScript_1.5_教學/JavaScript_概要", ... }) -->
```

Kuma は様々な方法でローカライズに対応しているため、これらのマクロは実際にはもう必要ありません。しかし、ローカライズされたページ間の関係を再検討する必要がある場合に備えて、これらのマクロはそのまま残されています。残念ながら、マイグレーションではいくつかのマクロを正しく変換できなかったようです。

### ページの言語の取得

KumaScript では、現在の文書のロケールは環境変数から取得することができます。

```js
const lang = env.locale;
```

変数 `env.locale` は信頼すべきものであり、すべての文書で定義されています。

### ページの添付ファイルの内容の読み取り

以下のように `mdn.getFileContent()` 関数を用いることで、添付ファイルの内容を読み取ることができます。

```js
<%
  let contents = mdn.getFileContent(fileUrl);
  // do stuff with the contents…
%>
```

または

```js
<%- mdn.getFileContent(fileObject); %>
```

つまり、読み込むファイルのURLを指定する場合と、ファイルオブジェクトとして指定する場合があります。あるページのファイルオブジェクトは、配列 `env.files` を通じてアクセスできます。ですから、例えば、記事に添付された最初のファイルの内容を埋め込むには、次のようにします。

```js
<%- mdn.getFileContent(env.files[0]); %>
```

> **メモ:** テキスト以外のファイルのコンテンツをこの方法で埋め込もうとすると、生のコンテンツがテキストとして注入されてしまうので、おそらく避けた方がいいでしょう。これは、テキストの添付ファイルの内容にアクセスするためのものです。

ファイルが見つからない場合は、空の文字列が返されます。現在のところ、空のファイルと存在しないファイルの違いを見分ける方法はありません。しかし、もし空のファイルを wiki に置いているのであれば、それは間違っています。

### テンプレートのローカライズ

テンプレートは wiki ページのように翻訳されるわけではなく、 1 つのテンプレートをいくつものロケールで使用することになります。

テンプレートは `mdn.localString()` メソッドを用いてローカライズすることができます。このメソッドは、ロケールと文字列の対応表を含むオブジェクトを受け取ります。例えば

```js
<%
const text = mdn.localString({
  "en-US": "Hello world!",
  "es": "¡Hola mundo!",
  // ...
});
%>
```

各ロケールは、複数の文字列に対するキーと文字列の対応表を含むオブジェクトを取ることもできます。たとえば、

```js
<%
const text = mdn.localStringMap({
  'en-US': {
    'Complete_beginners_start_here': 'Complete beginners start here!',
    'Getting_started_with_the_web': 'Getting started with the web',
  },
  'de': {
    'Complete_beginners_start_here': 'Anfänger starten hier!',
    'Getting_started_with_the_web': 'Lernen Sie das Internet kennen',
  },
  'fr': {
    'Complete_beginners_start_here': 'Bienvenue aux débutants !',
    'Getting_started_with_the_web': 'Commencer avec le Web',
  },
  // ...
});
%>
```

`mdn.localString()` 関数は適切なロケールの文字列を自動的に読み込みます。あるロケールの文字列が見つからない場合、その文字列は `en-US` で代替されます。 例えば、

```js
<%
const s_title = mdn.localString({
  "en-US": "Firefox for Developers",
  "de": "Firefox für Entwickler",
  "es": "Firefox para desarrolladores"
});

const body = mdn.localString({
  "en-US": {
    "hello": "Hello!",
    "goodbye": "Goodbye!",
  },
  "de": {
    "hello": "Hallo!",
    "goodbye": "Auf Wiedersehen!",
  },
  "es": {
    "hello": "¡Hola!"
  }
});
%>
<%= s_title %> / <%= body['hello'] %> / <%= body['goodbye'] %>
```

`de` で表示するとこのようになります。

```
Firefox für Entwickler / Hallo! / Auf Wiedersehen!
```

`es` ではこうなります。

```
Firefox para desarrolladores / ¡Hola! / Goodbye!
```

`en-US` / `ko` ではこうなります。

```
Firefox for Developers / Hello! / Goodbye!
```
