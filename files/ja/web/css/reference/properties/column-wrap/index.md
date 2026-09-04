---
title: CSS `column-wrap` プロパティ
short-title: column-wrap
slug: Web/CSS/Reference/Properties/column-wrap
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

**`column-wrap`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)におけるあふれた段の折り返し動作を指定します。

## 構文

```css
/* キーワード */
column-wrap: auto;
column-wrap: nowrap;
column-wrap: wrap;

/* グローバル値 */
column-wrap: inherit;
column-wrap: initial;
column-wrap: revert;
column-wrap: revert-layer;
column-wrap: unset;
```

### 値

- `auto`
  - : 初期値です。コンテンツコンテナーの {{cssxref("column-height")}} が {{cssxref("&lt;length>")}} に設定されている場合、`auto` は `wrap` として解釈されます。それ以外の場合は、`nowrap` として解釈されます。
- `nowrap`
  - : 段組みは行方向にあふれます。
- `wrap`
  - : オーバーフローした段は、ブロック方向の新しい行に配置されます。

## 解説

`column-wrap` プロパティを使用すると、[CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)において、段組みの幅が収まりきらない場合に、新しい行に折り返すように設定できます。このプロパティを使用することで、{{cssxref("column-count")}} や {{cssxref("column-width")}} プロパティを使用して複数列を設定する際に、読みやすいレイアウトを作成するのに有益です。

`column-wrap` を指定しない場合、余分な段は横方向にあふれ、読者はすべてのコンテンツを読むためにインライン方向へスクロールする必要があります。{{cssxref("column-height")}} プロパティを `column-wrap` と合わせて使用することで、各段を特定の高さに設定し、コンテナーの端に達した際に新しい段へと折り返すように設定できます。

`column-wrap` のデフォルト値は `auto` ですが、`column-height` が `<length>` 値に設定されている場合は `wrap` として解釈されます。`wrap` を指定すると、高さが固定された段が複数行にまたがって表示されるようになります。`column-height` が `auto` の場合、`column-wrap: auto` は `nowrap` として解釈され、コンテナーの高さが設定されている場合でも、段が水平方向にあふれることがあります。

このデフォルトの動作により、通常は `column-wrap` プロパティを明示的に設定する必要はありません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、`column-wrap` プロパティの基本的な使い方を示しており、`column-height` プロパティを設定することで、折り返される段組みレイアウトを作成しています。

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

`<ol>` を段組みのコンテナーとして定義するために、{{cssxref("column-width")}} プロパティを `150px` に設定します。これにより、コンテナーには可能な限り多くの段が含まれており、それぞれの段の幅は少なくとも `150px` になります。{{cssxref("gap")}} プロパティは、段間の水平方向の隙間と、段の行間の垂直方向の隙間を設定します。そして、`column-height` を `3em` に設定することで、`column-wrap` プロパティのデフォルト値である `auto` が `wrap` として解決され、段の行が折り返されるようになります。

```css live-sample___basic-example
ol {
  column-width: 150px;
  gap: 2em;
  column-height: 3em;
}
```

#### 結果

{{EmbedLiveSample("basic-example", "100%", "300")}}

### `wrap` と `nowrap` の比較

この例では、段組みレイアウトを用いて、段組みコンテナーの `column-wrap` プロパティの値を `wrap` と `nowrap` の間で切り替えることができ、`wrap` と `nowrap` の違いを視覚的に確認できます。その結果、レイアウトが水平スクロールと垂直スクロールの間で動的に切り替わります。

#### HTML と JavaScript

この例のマークアップには、MDN の HTML、CSS、JavaScript の各ホームページから引用した複数の段落のコンテンツと、コンテナーの `column-wrap` プロパティの値を `nowrap` と `wrap` の間で切り替えるための JavaScript を使用した [`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox) 要素が含まれています。簡潔にするため、HTML と JavaScript は省略しています。

```html-nolint hidden live-sample___wrap-nowrap
<form>
  <label for="set-wrap"
    ><code>column-wrap</code> を <code>wrap</code> に設定</label
  >
  <input type="checkbox" id="set-wrap" />
</form>
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

```js hidden live-sample___wrap-nowrap
const checkbox = document.getElementById("set-wrap");
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.body.style.columnWrap = "wrap";
  } else {
    document.body.style.columnWrap = "nowrap";
  }
});
```

#### CSS

{{htmlelement("body")}} 要素の {{cssxref("column-count")}} を `3` に設定することで、段組みコンテナーにします。そして、{{cssxref("gap")}} を `3em 2em` に設定することで、行間の間隔を `3em`、列間の間隔を `2em` にします。

次に、`column-height` を `90vh` に設定し、段組みの高さをビューポートの高さにほぼ合わせるようにします。同時に、`column-wrap` を `nowrap` に設定することで、コンテンツが列の幅を超えた場合に水平方向にあふれて発生するようにします。これは、初期値の `column-wrap` が `auto` であり、`column-height` が `<length>` 値に設定されると `wrap` として解釈されるため、この設定が必要になります。

チェックボックスにより、`column-wrap` プロパティを `nowrap` と `wrap` の間で切り替えます。`wrap` に設定すると、余ったコンテンツの段が縦方向に新しい段組みの行にあふれて、縦方向のレイアウトが作成されます。`column-height` の値により、それぞれの段の行がビューポートいっぱいに表示されます。

```css live-sample___wrap-nowrap
body {
  column-count: 3;
  gap: 3em 2em;
  padding: 0 2em;
  column-height: 90vh;
  column-wrap: nowrap;
}
```

次に、[`<h1>`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements) 要素の {{cssxref("column-span")}} プロパティを `all` に設定し、見出しがすべての段にまたがるようにします。また、最初の {{htmlelement("p")}} の {{cssxref("margin-top")}} プロパティを `0` に設定し、段の上端と揃うようにします。

```css live-sample___wrap-nowrap
h1 {
  column-span: all;
}

p:first-of-type {
  margin-top: 0;
}
```

```css hidden live-sample___wrap-nowrap
* {
  box-sizing: border-box;
}

html {
  font-family: "Arial", sans-serif;
}

p {
  line-height: 1.5;
}

@supports not (column-wrap: wrap) {
  body::before {
    content: "このブラウザーは 'column-wrap' プロパティに対応していません。";
    background-color: wheat;
    position: fixed;
    inset: 40% 0;
    height: fit-content;
    text-align: center;
    padding: 1rem 0;
  }
}

form {
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  padding: 5px;
  border: 1px solid black;
}
```

#### 結果

{{EmbedLiveSample("wrap-nowrap", "100%", "400")}}

チェックボックスを切り替えることで、`column-wrap` プロパティの値を変更し、レイアウトを水平スクロールと垂直スクロールの間で切り替えることができます。`column-wrap` が `nowrap` に設定されている場合、段は水平方向にあふれます。`column-wrap` が `wrap` に設定されている場合、新しい段組みの行が垂直方向に追加されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("column-count")}}
- {{cssxref("column-width")}}
- {{cssxref("columns")}} 一括指定
- {{Cssxref("column-height")}}
- [CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)モジュール
