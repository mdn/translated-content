---
title: CSS `column-height` プロパティ
short-title: column-height
slug: Web/CSS/Reference/Properties/column-height
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

**`column-height`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)における各段の高さを指定します。

{{cssxref("columns")}} 一括指定プロパティを使用すると、`column-height`、{{cssxref("column-count")}}、{{cssxref("column-width")}} の各プロパティ値を、単一の宣言で設定することができます。

## 構文

```css
/* キーワード */
column-height: auto;

/* <length> 値 */
column-height: 300px;
column-height: 25em;
column-height: 70vh;

/* グローバル値 */
column-height: inherit;
column-height: initial;
column-height: revert;
column-height: revert-layer;
column-height: unset;
```

### 値

- `auto`
  - : 初期値です。コンテンツのコンテナーの高さが設定されている場合、コンテンツの段はその高さまで引き伸ばされ、コンテンツがコンテナーの中に収まらない場合は、オーバーフローして横に広がります。コンテンツのコンテナーが高さを設定していない場合、コンテンツはコンテナー内で生成された段に均等に配分されます。
- {{cssxref("&lt;length>")}}
  - : 段の高さです。負の値であってはなりません。

## 解説

`column-height` プロパティは、[段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)におけるそれぞれの段の高さを設定します。これは、{{cssxref("column-count")}} や {{cssxref("column-width")}} プロパティを使用して複数の段を設定する際、読みやすさを確保するために段の高さを制約するのに役立ちます。

`column-height` を指定しない場合、段のコンテンツの高さがビューポートの高さを超えると、読者は 1 つの段の最後までスクロールし、それから次の段の先頭までスクロールし直さなければなりません。解決策の一つとして、コンテンツのコンテナーに固定の高さを設定する方法がありますが、その場合、余分な段が横方向にはみ出してしまい、読者はすべてのコンテンツを読むために横方向にスクロールしなければならなくなります。

`column-height` プロパティと {{cssxref("column-wrap")}} を組み合わせることで、段の高さを個別に設定し、コンテナーの端に達した際に段を新しい行に折り返すことができます。

`column-wrap` のデフォルト値は `auto` ですが、`column-height` が `<length>` 値に設定されている場合は `wrap` として解釈されます。`wrap` を指定すると、高さが固定された段が複数行にまたがって表示されるようになります。`column-height` が `auto` の場合、`column-wrap: auto` は `nowrap` として解釈され、コンテナーの高さが固定されている場合でも、段が水平方向にあふれる可能性があります。このデフォルトの動作により、通常は `column-wrap` プロパティを明示的に設定する必要はありません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、`column-height` プロパティの基本的な使い方を示しており、折り返される段組みレイアウトを作成しています。

#### HTML

ドクター・スースの詩を、28 個の {{htmlelement("li")}} が含まれている {{htmlelement("ol")}} で表示し、その後に {{htmlelement("p")}} で作成者の名前を記載します。

```html
<ol>
  <li>One fish</li>
  <li>Two fish</li>
  <li>Red fish</li>
  <li>Blue fish</li>
  ...
</ol>
<p>-- Dr. Seuss</p>
```

```html hidden live-sample___basic-example
<ol>
  <li>One fish</li>
  <li>Two fish</li>
  <li>Red fish</li>
  <li>Blue fish</li>
  <li>Black fish</li>
  <li>Blue fish</li>
  <li>Old fish</li>
  <li>New fish.</li>
  <li>This one has a little star.</li>
  <li>This one has a little car.</li>
  <li>Say! What a lot</li>
  <li>Of fish there are.</li>
  <li>Yes. Some are red. And some are blue.</li>
  <li>Some are old. And some are new.</li>
  <li>Some are sad.</li>
  <li>And some are glad.</li>
  <li>And some are very, very bad.</li>
  <li>Why are they</li>
  <li>Sad and glad and bad?</li>
  <li>I do not know.</li>
  <li>Go ask your dad.</li>
  <li>Some are thin.</li>
  <li>And some are fat.</li>
  <li>The fat one has</li>
  <li>A yellow hat.</li>
  <li>From there to here, from here to there,</li>
  <li>Funny things</li>
  <li>Are everywhere.</li>
</ol>
<p>--Dr. Seuss</p>
```

#### CSS

`<ol>` を段組みのコンテナーとして定義するために、{{cssxref("column-width")}} プロパティを `150px` に設定します。これにより、コンテナーには可能な限り多くの段が含まれており、それぞれの段の幅は少なくとも `150px` になります。`2em` の {{cssxref("gap")}} プロパティは、段間の水平方向の隙間と、段の行間の垂直方向の隙間を設定します。そして、`column-height` を `2em` に設定することで、`column-wrap` プロパティのデフォルト値である `auto` が `wrap` として解決され、段の行が折り返されるようになります。

```css live-sample___basic-example
ol {
  column-width: 150px;
  gap: 2em;
  column-height: 3em;
}
```

#### 結果

{{EmbedLiveSample("basic-example", "100%", "300")}}

### スクロールスナップする段

この例では、段組みレイアウトと [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)を組み合わせています。これにより、スクロールするたびに新しい段がビューポートの全体の高さにきれいに収まり、快適に読み進められるような使い勝手の良い体験を実現しています。

#### HTML

MDN の HTML、CSS、JavaScript の各ホームページから引用した複数の段落分のコンテンツを含む HTML で、簡潔にするために非表示にしています。

```html-nolint hidden live-sample___scroll-snapped live-sample___column-playground
<h1>HTML、CSS、JavaScript の概要</h1>
<p>
  <strong>HTML</strong> (HyperText Markup Language) はウェブのもっとも基本的な構成要素です。 HTML はウェブページの基本レイアウトに従ってウェブページの*コンテンツ*を記述し定義するものです。HTML に隣接する他の技術としては、ウェブページの表示や表現を記述するもの (CSS) または機能や振る舞いを記述するもの (JavaScript) があります。
</p>
<p>
  「ハイパーテキスト」はウェブページから別なページに、ウェブサイト内でもウェブサイト間でも、接続するリンクを示します。リンクはウェブの基礎的な特徴です。コンテンツをインターネットにアップロードして他の人々が作成したページにリンクすれば、 World Wide Web の活発な参加者になれます。
</p>
<p>
  HTML ではウェブブラウザーのテキスト、画像、その他のコンテンツを記述するために「マークアップ」を使用します。 HTML のマークアップには、
  <a href="/ja/docs/Web/HTML/Reference/Elements/head"
    ><code>&lt;head&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/title"
    ><code>&lt;title&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/body"
    ><code>&lt;body&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/header"
    ><code>&lt;header&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/footer"
    ><code>&lt;footer&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/article"
    ><code>&lt;article&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/section"
    ><code>&lt;section&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/p"><code>&lt;p&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/div"
    ><code>&lt;div&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/span"
    ><code>&lt;span&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/img"
    ><code>&lt;img&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/aside"
    ><code>&lt;aside&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/audio"
    ><code>&lt;audio&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/canvas"
    ><code>&lt;canvas&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/datalist"
    ><code>&lt;datalist&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/details"
    ><code>&lt;details&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/embed"
    ><code>&lt;embed&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/nav"
    ><code>&lt;nav&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/search"
    ><code>&lt;search&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/output"
    ><code>&lt;output&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/progress"
    ><code>&lt;progress&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/video"
    ><code>&lt;video&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/ul"
    ><code>&lt;ul&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/ol"
    ><code>&lt;ol&gt;</code></a
  >,
  <a href="/ja/docs/Web/HTML/Reference/Elements/li"
    ><code>&lt;li&gt;</code></a
  >
  その他のたくさんの特殊な「要素」を用います。
</p>
<p>
  HTML 要素は文書中で、<code>&lt;</code> および <code>&gt;</code> で囲まれた要素名で構成される「タグ」によって区別されます。タグ内の要素名は、大文字と小文字の区別がありません。つまり、大文字でも、小文字でも、混在して書いても構いません。
  例えば、<code>&lt;title&gt;</code> タグは <code>&lt;Title&gt;</code> や <code>&lt;TITLE&gt;</code> やその他の方法で書くことができます。ただし、タグを小文字で書くのが慣習となっており、推奨されています。
</p>

<hr />

<p>
  <strong>カスケーディングスタイルシート</strong> (Cascading Style Sheets、<strong>CSS</strong>) は<a href="/ja/docs/Web/API/StyleSheet">スタイルシート</a>言語であり、<a href="/ja/docs/Web/HTML">HTML</a> や <a href="/ja/docs/Web/XML/Guides/XML_introduction">XML</a>（派生言語である <a href="/ja/docs/Web/SVG">SVG</a>、<a href="/ja/docs/Web/MathML">MathML</a>、<a href="/ja/docs/Glossary/XHTML">XHTML</a> などを含む）で記述された文書の体裁や見栄えを表現するために用いられます。CSS は、要素が画面上で (あるいは紙や音声といった別のメディア上で) どのように表現されるのかを定義します。
</p>
<p>
  CSS は<strong>オープンウェブ</strong>の核となる言語に含まれており、<a href="https://www.w3.org/Style/CSS/#specs" class="external" target="_blank"
    >W3C 標準仕様</a
  >によってウェブブラウザー間で標準化されています。以前は CSS 仕様書の様々な部分が同時に開発されており、最新勧告の版数付けができていました。皆さんも CSS1、CSS2.1、また CSS3 についても聞いたことがあるでしょう。CSS3 や CSS4 にはなりません。すべて単なる "CSS" と、バージョン番号を持つ個々の CSS モジュールとなりました。
</p>
<p>
  CSS 2.1 以降、仕様の範囲が大幅に拡大し、CSS モジュールごとに進捗状況が大きく異なるようになったため、
  <a
    href="https://www.w3.org/Style/CSS/current-work"
    class="external"
    target="_blank"
    >モジュールごとに勧告を開発して公開する</a
  >ことがより効果的になりました。W3C では、CSS 仕様のバージョン管理の代わりに、
  <a href="https://www.w3.org/TR/css/" class="external" target="_blank"
    >最新の CSS 仕様の安定した状態</a
  >のスナップショットと独立したモジュールの進捗を定期的に取得するようになりました。
  CSS のモジュールは、
  <a
    href="https://drafts.csswg.org/css-color-5/"
    class="external"
    target="_blank"
    >CSS Color Module Level 5</a
  > のように、バージョン番号またはレベルを持つようになりました。
</p>

<hr />

<p>
  <strong>JavaScript</strong> (<strong>JS</strong>) は軽量でインタープリター型（あるいは<a href="/ja/docs/Glossary/Just_In_Time_Compilation"
    >実行時コンパイルされる</a
  >）<a href="/ja/docs/Glossary/First-class_Function">第一級関数</a>を備えたプログラミング言語です。
  ウェブページでよく使用されるスクリプト言語として知られ、
  <a
    href="https://ja.wikipedia.org/wiki/JavaScript#その他の環境での利用"
    class="external"
    target="_blank"
    >多くのブラウザー以外の環境</a
  >、例えば <a href="/ja/docs/Glossary/Node.js">Node.js</a> や <a href="https://couchdb.apache.org/" class="external" target="_blank"
    >Apache CouchDB</a
  >
  や
  <a
    href="https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/"
    class="external"
    target="_blank"
    >Adobe Acrobat</a
    > などでも使用されています。 JavaScript は<a href="/ja/docs/Glossary/Prototype-based_programming">プロトタイプベース</a>で、<a href="/ja/docs/Glossary/Garbage_collection">ガベージコレクションのある</a>、<a href="/ja/docs/Glossary/Dynamic_typing">動的</a>な言語であり、命令型、関数型、オブジェクト指向など、複数のパラダイムに対応しています。
</p>
<p>
  JavaScript の動的な機能には、ランタイムオブジェクトの構築、可変引数リスト、関数変数、動的スクリプトの作成（<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval"
    ><code>eval</code></a
  > で）、オブジェクトの内包（<a href="/ja/docs/Web/JavaScript/Reference/Statements/for...in"
    ><code>for...in</code></a
  >
  と
  <a
    href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#静的メソッド"
    ><code>Object</code> ユーティリティ</a
  >で）、ソースコードの復元（JavaScript 関数はそのソーステキストを格納し
  <a
    href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/toString"
    ><code>toString()</code></a
  > で復元可能）が含まれます。
</p>
<p>
  この章では JavaScript 言語自体について、すなわちウェブページや他のホスト環境に限定されないコアの部分に限定して解説しています。ウェブページ特有の <a href="/ja/docs/Glossary/API">API</a> 群の情報を得たい場合は <a href="/ja/docs/Web/API">Web API</a> と <a href="/ja/docs/Glossary/DOM">DOM</a> を参照してください。
</p>
<p>
  JavaScript の規格書は
  <a href="https://tc39.es/ecma262/" class="external" target="_blank"
    >ECMAScript Language Specification</a
  >
  (ECMA-262)および
  <a href="https://tc39.es/ecma402/" class="external" target="_blank"
    >ECMAScript Internationalization API specification</a
  > (ECMA-402) です。私たちは、あるブラウザーが機能を実装するとすぐに、それを文書化するように努めています。このことは、 <a href="https://github.com/tc39/proposals" class="external" target="_blank"
    >ECMAScript の新しい機能に関するいくつかの提案</a
  >がすでにブラウザーに実装されている場合、MDN の記事の文書や例ではそれらの新しい機能のいくつかを使用する可能性があることを示しています。ほとんどの場合、これは<a href="https://tc39.es/process-document/" class="external" target="_blank"
    >ステージ</a
  > 3 と 4 の間で起こることで、通常は仕様が正式に公開される前です。
</p>
<p>
  JavaScript を<a
    href="https://ja.wikipedia.org/wiki/Java"
    class="external"
    target="_blank"
    >プログラミング言語 Java</a
  >
  と混同しないでください。
  <strong>JavaScript は「インタープリター版の Java」では <em>ありません</em></strong>。 "Java" と "JavaScript" は両方ともアメリカやその他の国においてオラクルの商標または登録商標です。
  しかし、この 2 つのプログラミング言語は構文、セマンティック、利用形態が大きく異なります。
</p>
<p>
  コア言語機能の JavaScript ドキュメントは（多くの部分は純粋な
  <a
    href="/ja/docs/Web/JavaScript/Reference/JavaScript_technologies_overview"
    >ECMAScript</a
  >）、以下のものがあります。
</p>
```

#### CSS

まず、{{cssxref("column-width")}} を {{htmlelement("body")}} 要素に設定し、段の推奨幅を定義します。{{cssxref("gap")}} を `3em 2em` に設定すると、行間が `3em`、段間が `2em` になります。{{cssxref("column-rule")}} は、段間の中央に線を追加します。`column-height` を `95vh` に設定すると、段の高さはビューポートの高さにほぼ等しくなります。

適用された折り返し動作を明確にするため、{{cssxref("column-wrap")}} を明示的に `wrap` に設定しました。値を `auto` に設定したり、プロパティを省略したりすることもできます。`column-height` が `<length>` 値に設定されている場合、デフォルトで `column-wrap` は `wrap` として解決されるためです。

```css live-sample___scroll-snapped
body {
  column-width: 150px;
  column-rule: 2px solid red;
  gap: 3em 2em;
  padding: 0 2em;
  column-height: 95vh;
  column-wrap: wrap;
}
```

次に、[`<h1>`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements) 要素の {{cssxref("column-span")}} プロパティを `all` に設定し、見出しがすべての段にまたがるようにします。また、最初の {{htmlelement("p")}} の {{cssxref("margin-top")}} プロパティを `0` に設定し、段の上端と揃うようにします。

```css live-sample___scroll-snapped live-sample___column-playground
h1 {
  column-span: all;
}

p:first-of-type {
  margin-top: 0;
}
```

最後に、 {{htmlelement("html")}} 要素の {{cssxref("scroll-snap-type")}} を `y mandatory` に設定し、生成されたそれぞれの列を表す {{cssxref("::column")}} 擬似要素に対して {{cssxref("scroll-snap-align")}} を `start` に設定することで、スクロールスナップ機能を追加します。これにより、スクロールするたびにコンテンツが新しい段の先頭にスナップするようになります。

```css live-sample___scroll-snapped
html {
  scroll-snap-type: y mandatory;
}

::column {
  scroll-snap-align: start;
}
```

```css hidden live-sample___scroll-snapped live-sample___column-playground
* {
  box-sizing: border-box;
}

html {
  font-family: "Arial", sans-serif;
}

p {
  line-height: 1.5;
}

@supports not (column-height: 15em) {
  body::before {
    content: "このブラウザーは 'column-height' プロパティに対応していません。";
    background-color: wheat;
    position: fixed;
    inset: 40% 0;
    height: fit-content;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### 結果

{{EmbedLiveSample("scroll-snapped", "100%", "400")}}

コンテンツをスクロールしてみてください。それぞれの新しい段の行がビューポートいっぱいに表示される様子や、スクロールするたびにコンテンツが新しい行の先頭にきれいに収まる様子に注目してください。

### `column-height` と `column-count` の遊び場

この例は、前回の例を基に、段組みのレイアウトの列数と列の高さを調整することができる 2 つの範囲スライダーを記載したものです。

#### HTML および JavaScript

HTML は前の例と同じですが、JavaScript を介して `column-count` および `column-height` の値を更新する 2 つの [`<input="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range) 要素を含むフォームが追加されています。簡潔にするため、HTML と JavaScript のコードは省略しています。

```html hidden live-sample___column-playground
<form>
  <div>
    <label for="columns">
      <code>column-count <output id="columns-output">3</output></code>
    </label>
    <input type="range" min="3" max="6" value="3" id="columns" />
  </div>
  <div>
    <label for="column-height">
      <code>column-height <output id="column-height-output">20em</output></code>
    </label>
    <input type="range" min="10" max="30" value="20" id="column-height" />
  </div>
</form>
```

```js hidden live-sample___column-playground
const columnsRange = document.getElementById("columns");
const columnsOutput = document.getElementById("columns-output");
const columnHeightRange = document.getElementById("column-height");
const columnHeightOutput = document.getElementById("column-height-output");

columnsRange.addEventListener("input", () => {
  document.body.style.columnCount = columnsRange.value;
  columnsOutput.textContent = columnsRange.value;
});

columnHeightRange.addEventListener("input", () => {
  document.body.style.columnHeight = `${columnHeightRange.value}em`;
  columnHeightOutput.textContent = `${columnHeightRange.value}em`;
});
```

#### CSS

{{cssxref("column-rule")}} と {{cssxref("gap")}} には、前回の例と同じ値を指定します。`column-width` は指定せず、代わりに {{cssxref("column-count")}} プロパティを使用して段組みレイアウトを生成し、JavaScript で段数と段の高さを動的に設定します。この例ではスクロールスナップは含まれていません。

```css live-sample___column-playground
body {
  column-count: 3;
  column-height: 20em;
  column-rule: 2px solid red;
  gap: 3em 2em;
  padding: 0 2em;
}
```

```css hidden live-sample___column-playground
form {
  border: 1px solid black;
  background-color: white;
  padding: 10px;
  position: fixed;
  bottom: 1px;
  right: 1px;
}

form div {
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: space-between;
}
```

#### 結果

{{EmbedLiveSample("column-playground", "100%", "400")}}

段数と段の高さを調整して、これらのプロパティがどのように効果があるのかを確認してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("column-count")}}
- {{cssxref("column-width")}}
- {{cssxref("columns")}} 一括指定
- {{Cssxref("column-wrap")}}
- [CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)モジュール
