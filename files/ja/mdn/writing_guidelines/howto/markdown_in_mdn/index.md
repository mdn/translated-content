---
title: Markdown で書くには
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: 9ce57d5046baf5d25c8eb066e60227f0fbd017cf
---

{{MDNSidebar}}

このページでは、 Markdown を使用してどのように MDN Web Docs のドキュメントを書くかを説明します。ベースラインとして GitHub-Flavored Markdown (GFM) を選択し、 GFM では容易にサポートされていない MDN で行う必要のあるいくつかのことに対応するために、いくつかの拡張機能を追加しました。

## ベースライン: GitHub-Flavored Markdown

MDN Markdown のベースラインは GitHub-Flavored Markdown (GFM、 <https://github.github.com/gfm/>) です。このページで特に明記されていないものについては、 GFM の仕様を参照してください。また、 GFM は CommonMark ([https://spec.commonmark.org/](https://spec.commonmark.org/)) の上位互換です。

## リンク

GFM 仕様書では、基本的に2種類のリンクを定義しています。

- [インラインリンク](https://github.github.com/gfm/#inline-link)は、リンク先をリンクテキストの直後に指定します。
- [リファレンスリンク](https://github.github.com/gfm/#reference-link)は、リンク先を文書内の他の場所で定義します。

MDN では、インラインリンクのみが利用できます。

MDN で GFM リンクを書くには、これが正しい方法です。

```md example-good
[Macarons](https://en.wikipedia.org/wiki/Macaron) are delicious but tricky to make.
```

これは MDN でリンクを書くのに間違った方法です。

```md example-bad
[Macarons][macaron] are delicious but tricky to make.

[macaron]: https://en.wikipedia.org/wiki/Macaron
```

## コードブロックの例

GFM や CommonMark では、「コードフェンス」を使用して `<pre>` ブロックを区切ることができます。冒頭のコードフェンスの後には、「情報文字列」と呼ばれるテキストが続くことがあります。仕様書によると、次の通りです。

> 情報文字列の最初の単語は、通常、コードサンプルの言語を指定するために使用され、コードタグの class 属性に表示されます。

情報文字列には、次のように複数の単語を含めることができます。

````plain
```fee fi fo fum
// some example code
```
````

MDN では、書き手はコードブロックのサンプルにコードフェンスを使用します。ライターは情報文字列の最初の単語を使用してコードサンプルの言語を指定する必要があり、これはブロックの構文強調表示を提供するために使用されます。以下の単語に対応しています。

- `bash`
- `batch`
- `cpp` (C/C++ 向け)
- `css`
- `html`
- `java`
- `js` (JavaScript 向け)
- `json`
- `php`
- `python`
- `sql`
- `svg`
- `xml`
- `wasm` (WebAssembly テキスト書式向け)

例えば、次のようにします。

````plain
```js
const greeting = "I will get syntax highlighting";
```
````

書き手は以下の追加の単語のいずれかを使用することができますが、これらの単語は言語の単語の後に置く必要があります。

- `example-good`: この例を良い例 (採用すべきもの) としてスタイル付けする
- `example-bad`: この例を悪い例 (避けるべきもの) としてスタイル付けする
- `hidden`: このコードブロックをページに表示しません。これはライブサンプルで使用するためのものです。

例:

````plain
```js example-good
const greeting = "I'm a good example";
```

```js example-bad
const greeting = "I'm a bad example";
```
````

これらは以下のように表示されます。

```js example-good
const greeting = "I'm a good example";
```

```js example-bad
const greeting = "I'm a bad example";
```

### 議論リファレンス

この課題は <https://github.com/mdn/content/issues/3512> で解決しました。

## メモ、警告、コールアウト

コンテンツの一部に特別な注意を喚起したい場合があります。そのためには、特別な最初の段落を持つ GFM ブロック引用を使用します。 GFM ブロック引用には、「メモ」「警告」「コールアウト」の 3 種類があります。

- メモを追加するには、 GFM ブロック引用の最初の段落を `**メモ:**` で始めてください。
- 警告を追加するには、 GFM ブロック引用の最初の段落を `**警告:**` で始めてください。
- コールアウトを追加するには、 GFM ブロック引用の最初の段落を `**注目:**` で始めてください。

メモと警告は、出力に **メモ:** または **警告:** というテキストが表示されますが、コールアウトは表示されません。このため、コールアウトは、独自のタイトルを提供したい場合に適しています。

マークアップの処理は、指定された正確な文字ではなく、生成された AST に基づいて行われます。つまり、 `<strong>Note:</strong>` もメモを生成します。ただし、スタイルの問題として Markdown の構文が必要です。

複数行は、通常の段落と同じように、空のブロック引用行によって生成されます。さらに、スペースのない複数の行は通常の Markdown の行と同様に扱われ、連結されます。

ブロック引用には、コードブロックやその他のブロック要素を含めることができます。

"Note:" や "Warning:" というテキストは、レンダリングされた出力にも表示されるため、翻訳に配慮する必要があります。実際には、 MDN で対応しているすべてのロケールがこれらの文字列の独自の翻訳を提供しなければならず、プラットフォームは構成が特別な処理を必要とすることを示すものとして認識しなければならないことを意味します。

#### 例

##### 注

```
> **メモ:** これがメモの書き方です。
>
> 複数行を入れることもできます。
```

これで次のような HTML が生成されます。

```html
<div class="notecard note">
  <p><strong>Note:</strong> これがメモの書き方です。</p>
  <p>複数行を入れることもできます。</p>
</div>
```

この HTML は次のように、強調ボックスとして描画されます。

> **メモ:** これがメモの書き方です。
>
> 複数行を入れることもできます。

##### 警告

```
> **警告:** これが警告の書き方です。
>
> 複数の段落を入れることもできます。
```

これで次のような HTML が生成されます。

```html
<div class="notecard warning">
  <p><strong>Warning:</strong> これが警告の書き方です。</p>
  <p>複数の段落を入れることもできます。</p>
</div>
```

この HTML は次のように、強調ボックスとして描画されます。

> **警告:** これが警告の書き方です。
>
> 複数の段落を入れることもできます。

##### コールアウト

```plain
> **注目:** **これがコールアウトの書き方です。**
>
> 複数の段落を入れることもできます。
```

これで次のような HTML が生成されます。

```html
<div class="callout">
  <p><strong>これがコールアウトの書き方です。</strong></p>
  <p>複数の段落を入れることもできます。</p>
</div>
```

この HTML は次のように、強調ボックスとして描画されます。

> **注目:**
>
> **これがコールアウトの書き方です。**
>
> 複数の段落を入れることもできます。

##### 翻訳された警告

(訳注: 現時点では日本語の見出しには対応していません。)
例えば、ドイツ語で "Warning" を "Warnung" としたい場合、ドイツ語のページで次のように書きます。

```plain
> **Warnung:** So schreibt man eine Warnung.
```

これは次のように表示されます。

```html
<div class="notecard warning">
  <p><strong>Warnung:</strong> So schreibt man eine Warnung.</p>
</div>
```

##### コードブロックを含むメモ

この例はコードブロックを含んでいます。

````
> **メモ:** これがメモの書き方です。
>
> コードブロックを含むことができます。
>
> ```js
> const s = "コードブロックの中です";
> ```
> こんな感じです。
````

これで次のような HTML が生成されます。

```html
<div class="notecard note">
  <p><strong>Note:</strong> これがメモの書き方です。</p>
  <p>コードブロックを含むことができます。</p>
  <pre class="brush: js">const s = "コードブロックの中です";</pre>
  <p>こんな感じです。</p>
</div>
```

この HTML は次のようにコードブロックと一緒に描画されます。

> **メモ:** これがメモの書き方です。
>
> コードブロックを含むことができます。.
>
> ```js
> const s = "コードブロックの中です";
> ```
>
> こんな感じです。

### 議論リファレンス

この課題は <https://github.com/mdn/content/issues/3483> で解決されました。

## 定義リスト

MDN で定義リストを作成するためには、 GFM 順序なしリスト ({{HTMLElement("ul")}}) を変更した書き方をします。

- GFM `<ul>` は任意の数の最上位の GFM `<li>` 要素を含みます。
- 最上位の GFM `<li>` 要素は、最後の要素として GFM `<ul>` 要素を含みます。
- 最終的に含まれる `<ul>` は、単一の GFM `<li>` 要素を含み、この中身は ": " (コロンに続いて空白) で始まるテキストでなければなりません。この要素はブロック要素、例えば段落、コードブロック、埋め込みリスト、メモなどを含むことができます。

最上位の GFM `<li>` 要素は、次のように
`<dt>`/`<dd>` の組に変換されます。

- 最上位の GFM `<li>` 要素は、GFM `<li>` 要素として解析され、その内部コンテンツは、 `<dt>` の内容を構成しますが、最後に入れ子になった `<ul>` については例外で、 `<dt>` には含まれません。
- 最後に入れ子になった `<ul>` の中の `<li>` 要素は、GFM `<li>` 要素として解析され、その内容は `<dd>` の内容を構成しますが、先頭の `:` は捨てられます。

例えば、これは `<dl>` です。

````plain
- term1
    - : My description of term1

- `term2`
    - : My description of term2

      It can have multiple paragraphs, and code blocks too:

      ```js
      const thing = 1;
      ```
````

GFM/CommonMark では、これは次の HTML を生成します。

```html
<ul>
  <li>
    <p>term1</p>
    <ul>
      <li>: My description of term1</li>
    </ul>
  </li>
  <li>
    <p><code>term2</code></p>
    <ul>
      <li>
        <p>: My description of term2</p>
        <p>It can have multiple paragraphs, and code blocks too:</p>
        <pre>
          <code class="brush: js">const thing = 1;</code>
        </pre>
      </li>
    </ul>
  </li>
</ul>
```

MDN では、これは次の HTML を生成します。

```html
<dl>
  <dt>
    <p>term1</p>
  </dt>
  <dd>My description of term1</dd>
  <dt>
    <p><code>term2</code></p>
  </dt>
  <dd>
    <p>My description of term2</p>
    <p>It can have multiple paragraphs, and code blocks too:</p>
    <pre>
       <code class="brush: js">const thing = 1;</code>
    </pre>
  </dd>
</dl>
```

この構文で書かれた定義リストは、 `<dt>`/`<dd>` 要素のペアで構成されます。この構文では、 2 つ以上の連続した `<dt>` 要素、または 2 つ以上の連続した `<dd>` 要素を持つリストを書くことはできません。パーサーはこれをエラーとして扱います。 MDN 上のほとんどすべての定義リストがこの制限で動作することを期待しており、動作しないものについては、生の HTML に戻ることができます。

複数の `<dt>` 項目を 1 つの `<dd>` に関連付ける必要がある場合の回避策として、以下のように複数の用語をカンマで区切って 1 つの `<dt>` として提供することを検討してください。

```plain
- `param1`, `param2`, `param3`
    - : My description of params 1, 2, and 3
```

ここで説明する構文の根拠は、 CommonMark を期待するツール (Prettier や GitHub のプレビューなど) で十分に機能すると同時に、記述と解析が適度に簡単であることです。

### 議論リファレンス

この課題は <https://github.com/mdn/content/issues/4367> で解決されました。

## 表

GFM には (ただし CommonMark を除く)、表の構文として <https://github.github.com/gfm/#tables-extension-> があります。これを利用していますが、

- GFM の構文は HTML で利用可能な機能の一部しか対応していません。 GFM で対応していない表の機能を使う必要がある場合は、表を表現するのに HTML を使用してください。
- GFM による表の表現が幅 150 文字を超える場合は、 HTML の表を使用してください。
- 「プロパティ表」と呼ばれる特殊な種類の表があり、独自の CSS クラスがあります。その場合は常に HTML を使用してください。

ですから、ここでの一般的な原則は、可能な限り GFM Markdown の構文を使用しあすが、 HTML を使用する必要がある場合、その方が読みやすい場合は生の HTML に立ち戻ってください。下記の「HTML 表を使用する場合」を参照してください。

### GFM の表の構文

GFM の表の構文では、行の最初と最後のパイプ記号を省略することができます。 MDN の編集者は、読みやすさのためにこれらのパイプ記号を記入する必要があります。

つまり、 MDN の編集者はこのスタイルを使用する必要があります。

```
| Heading 1 | Heading 2 | Heading 3 |
|-----------|-----------|-----------|
| cell 1    | cell 2    | cell 3    |
| cell 4    | cell 5    | cell 6    |
```

このスタイルではありません。

```
Heading 1 | Heading 2 | Heading 3
 --- | --- | ---
cell 1    | cell 2    | cell 3
cell 4    | cell 5    | cell 6
```

### HTML 表を使用する場合

GFM 構文ではなく HTML 表を使うべき主な状況は、 GFM が対応していない機能を表に使う場合、 GFM 表では幅が広すぎて読みにくい場合、「プロパティ表」という特殊な表を書きたい場合、の 3 つです。

#### GFM が対応していない表機能

GFM 表構文の主な制限事項は以下の通りです。

- GFM の表ではヘッダー行が必要です。
- GFM の表ではヘッダー列を設定することができません。
- GFM は表のセル内にある GFM ブロック要素を解析しません。例えば、表のセル内にリストを入れることはできません。
- GFM は `<table>`, `<tr>`, `<th>`, `<td>` 以外の表要素に対応していません。
- GFM は `colspan`, `rowspan`, `scope` のような表要素の属性に対応していません。

もし、対応していない機能を使う必要がある場合は、 HTML で表を作成する必要があります。

なお、表に `<caption>` 要素を使うことは、 GFM 構文からも排除されるため、一般的にはお勧めしません。

#### GFM 表の最大幅

GFM では、表を「ASCII アート」で表現しているため、表が長くなると読みづらくなります。たとえば、こんな表があるとします。

```html
<table>
  <tr>
    <th>見出し 1</th>
    <th>見出し 2</th>
    <th>見出し 3</th>
    <th>見出し 4</th>
    <th>見出し 5</th>
    <th>見出し 6</th>
  </tr>
  <tr>
    <td>短めのもの</td>
    <td>
      GFM
      の書式では表組みが崩れてしまうほど、何かについて本当に詳しく書かれている長いもの。
    </td>
    <td>短めのもの</td>
    <td>
      また、何かについて実に詳しく書かれている、大量のテキストを含むセルは、 GFM
      の書式では表の書式が崩れ始めてしまいます。
    </td>
    <td>短めのもの</td>
    <td>短めのもの</td>
  </tr>
</table>
```

GFM ではこのようになります。

```plain
  | 見出し 1   | 見出し 2                                                                               | 見出し 3   | 見出し 4                                                                                                              | 見出し 5   | 見出し 6   |
  | ---------- | -------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
  | 短めのもの | GFM の書式では表組みが崩れてしまうほど、何かについて本当に詳しく書かれている長いもの。 | 短めのもの | また、何かについて実に詳しく書かれている、大量のテキストを含むセルは、 GFM の書式では表の書式が崩れ始めてしまいます。 | 短めのもの | 短めのもの |
```

このような場合は、HTML を使用するのがよいでしょう。

これは以下のガイドラインを導きます。表の Markdown 表現が幅 150 文字以上になる場合、その表には HTML を使用してください\_。

#### プロパティ表

プロパティ表は特定の種類の表で、特定の型のページ同士でまたがって使用される、構造化されたプロパティ値を表示するために使用されるものです。これらの表には 2 つの列があります。最初の列はヘッダー列で、プロパティを列挙し、2 番目の列にはこの特定の項目に関する値を列挙します。例えば、以下は {{domxref("PannerNode")}} インターフェイスのプロパティ表です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">入力数</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">出力数</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネルの数え方</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネル数</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネルの意味</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

このようなページは、ヘッダー列があるため、 GFM で表現することはできません。そのため、 HTML で記述する必要があります。特殊なスタイルにするには、 `"properties"` クラスを表に適用する必要があります。

```html
<table class="properties"></table>
```

### 議論リファレンス

この課題は <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342>, <https://github.com/mdn/content/issues/7898#issuecomment-913265900> で解決しました。

## 上付き・下付き文字

HTML の {{HTMLElement("sup")}} および {{HTMLElement("sub")}} 要素を必要に応じて使用することができますが、可能な限り代替策を採ってください。具体的には次のようにします。

- べき乗については、 `2^53` のようにキャレットを使用してください。
- 1<sup>st</sup> のような序数表現では、 "first" のように言葉を使用してください。
- 脚注については、脚注参照を `<sup>[1]</sup>` のようにマークアップしないでください。必要ありません。

### 議論リファレンス

この課題は <https://github.com/mdn/content/issues/4578> で解決しました。

## ページ概要

*ページ概要*はページの最初の「コンテンツ」の段落、すなわち、ページの先頭部分、[サイドバー、ページバナーのマクロ](#kumascript)の後に表示される最初のテキストです。

この概要は検索エンジン最適化 (SEO) のために使用され、また、マクロによってはページリストに自動的に含まれます。
したがって、最初の段落は、簡潔で説明的なものでなければなりません。

### 議論リファレンス

この課題は <https://github.com/mdn/content/issues/3923> で解決しました。

## KumaScript

文章のコンテンツに、 KumaScript のマクロ呼び出しを含めることができます。

```plain
**`margin`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の全 4 辺のマージン領域を設定します。
これは \{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}}, \{{cssxref("margin-left")}} の一括指定です。

\{{EmbedInteractiveExample("pages/css/margin.html")}}

上下のマージンは置換インライン要素、例えば \{{HTMLElement("span")}} や \{{HTMLElement("code")}} では効果がありません。
```
