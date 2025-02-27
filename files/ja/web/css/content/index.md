---
title: content
slug: Web/CSS/content
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**`content`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ある要素を生成された値で置き換えます。これは、要素または擬似要素の内部でレンダリングされるものを定義するために使用することができます。要素の場合、 `content` プロパティは、要素が通常通りレンダリングされるか（`normal` または `none`）、画像（および関連付けられた "alt" テキスト）に置き換えられるかを指定します。擬似要素とマージンボックスの場合、 `content` は、コンテンツを画像、テキスト、その両方、またはなしとして定義し、要素が全体的にレンダリングされるかどうかを決定します。

`content` プロパティを使用して挿入されたオブジェクトは、無名の[**置換要素**](/ja/docs/Web/CSS/Replaced_element)になります。

{{EmbedInteractiveExample("pages/tabbed/content.html", "tabbed-shorter")}}

## 構文

```css
/* 他の値と組み合わせることができないキーワード */
content: normal;
content: none;

/* <image> 値 */
content: url("http://www.example.com/test.png");
content: linear-gradient(#e66465, #9198e5);
content: image-set("image1x.png" 1x, "image2x.png" 2x);

/* 生成コンテンツの代替テキスト、レベル 3 の仕様書で追加 */
content: url("../img/test.png") / "This is the alt text";

/* <string> 値 */
content: "unparsed text";

/* <counter> 値、任意で <list-style-type> */
content: counter(chapter_counter);
content: counter(chapter_counter, upper-roman);
content: counters(section_counter, ".");
content: counters(section_counter, ".", decimal-leading-zero);

/* HTML 属性値にリンクした attr() 値 */
content: attr(href);

/* 言語や位置に依存したキーワード */
content: open-quote;
content: close-quote;
content: no-open-quote;
content: no-close-quote;

/* normal と none を除き、複数の値が同時に使用可 */
content: "prefix" url(http://www.example.com/test.png);
content: "prefix" url("/img/test.png") "suffix" / "Alt text";
content: open-quote counter(chapter_counter);

/* グローバル値 */
content: inherit;
content: initial;
content: revert;
content: revert-layer;
content: unset;
```

### 値

値は次のいずれかです。

- 2 つのキーワード値のうちの 1 つ - `none` または `normal`
- DOM ノードを置き換える場合は `<content-replacement>`。 `<content-replacement>` は常に `<image>` です。
- 擬似要素とマージンボックスを置き換える場合は `<content-list>`。 `<content-list>` は、指定された順で現れる 1 つ以上の無名ボックスのリストです。 `<content-list>` のアイテムは [`<string>`](#string)、[`<image>`](#image)、[`<counter>`](#counter)、[`<quote>`](#quote)、[`<target>`](#target)、[`<leader()>`](#leader) のいずれかです。
- オプションの代替テキスト値として、スラッシュ (`/`) で始まる `<string>` または `<counter>` を使用できます。

上記で挙げたキーワードとデータ型については、下記でさらに詳しく説明します。

- `none`

  - : 擬似要素に適用された場合は、その擬似要素は生成されません。
    要素に適用された場合は、この値は効果がありません。

- `normal`

  - : 既定値です。 {{cssxref("::before")}} および {{cssxref("::after")}} 擬似要素では `none` として計算されます。それ以外の擬似要素では、 {{cssxref("::marker")}}、{{cssxref("::placeholder")}}、{{cssxref("::file-selector-button")}} において、コンテンツは初期（または通常）コンテンツが期待されます。通常の要素またはページマージンボックスの場合、これは要素の子孫に計算されます。

- {{cssxref("&lt;string&gt;")}}

  - : 一致する単一引用符または二重引用符で囲まれた文字の並び。複数の文字列値は連結されます（CSS には連結演算子はありません）。

- {{cssxref("&lt;image&gt;")}}

  - : {{cssxref("&lt;image&gt;")}} で、表示する画像を表します。 {{cssxref("url_value", "&lt;url&gt;")}}、{{cssxref("image/image-set", "image-set()")}}、{{cssxref("&lt;gradient&gt;")}} のデータ型、または {{cssxref("element", "element()")}} 関数で定義されるウェブページ自身の一部です。

- `<counter>`

  - : `<counter>` の値は [CSS カウンター](/ja/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)の値で、通常は {{cssxref("&lt;counter-reset&gt;")}} および {{cssxref("&lt;counter-increment&gt;")}} プロパティで定義され、計算によって生み出される数値です。 {{cssxref("counter", "counter()")}} または {{cssxref("counters", "counters()")}} 関数を使用して表示することができます。
    - {{cssxref("counter", "counter()")}}
      - : {{cssxref("counter", "counter()")}} 関数には、 'counter(_名前_)' または 'counter(_名前_, スタイル)' の二つの形式があります。生成されるテキストは、その擬似要素のスコープにおけるその名前の最も内側のカウンターです。 {{cssxref("&lt;list-style-type&gt;")}} で指定されたスタイルで整形されます（`decimal` が既定値です）。
    - {{cssxref("counters", "counters()")}}
      - : {{cssxref("counters", "counters()")}} 関数も、 'counters(_名前_, _文字列_)' または 'counters(_名前_, _文字列_, _スタイル_)' の二つの形式があります。生成されるテキストは、その擬似要素のスコープにおけるその名前のすべてのカウンターの値であり、外側から内側に向けて、指定された文字列で区切られます。 {{cssxref("&lt;list-style-type&gt;")}} で指定されたスタイルで整形されます（`decimal` が既定値です）。

- `<quote>`

  - : `<quote>` データ型には、言語または位置に依存したキーワードです。
    - `open-quote` および `close-quote`
      - : これらの値は、適切な {{cssxref("quotes")}} プロパティで指定された適切な文字列に置き換えられます。
    - `no-open-quote` および `no-close-quote`
      - : コンテンツには何も挿入されませんが、引用符の入れ子レベルが増加（減少）します。

- `<target>`

  - : `<target>` データ型には、リンクのターゲット側から取得した相互参照を作成する 3 つのターゲット関数、`<target-counter()>`、`<target-counters()>`、`<target-text()>` が含まれます。[形式文法](#形式文法)を参照してください。

- `<leader()>`

  - : `<leader()>` データ型には、リーダー関数として `leader( <leader-type> )` が含まれます。この関数は、キーワード値 `dotted`、`solid`、または `space` （それぞれ `leader(".")`、`leader("_")`、`leader(" ")` に相当）、または `<string>` を引数として受け入れます。対応していて、`content` の値として使用された場合、指定されたリーダーの種類は繰り返しパターンとして挿入され、水平線上のコンテンツを視覚的に接続します。

- `attr(x)`

  - : CSS 関数 `attr(x)` は、選択された要素、または擬似要素の元となる要素の属性値を取得します。要素の属性 `x` の値は、属性名を表す解釈前の文字列です。属性 `x` が存在しない場合は、空文字列が返値として返されます。 属性名引数の大文字小文字の区別は、文書内の言語に依存します。

- 代替テキスト: `/ <string> | <counter>`
  - : 画像や `<content-list>` アイテムには、スラッシュとテキスト文字列またはカウンターを追加することで代替テキストが指定できます。代替テキストは、スクリーンリーダーによる音声出力に意図通りに機能しますが、一部のブラウザーでも表示される場合があります。ブラウザーが代替テキストに対応していない場合、 `content` 宣言は不正なものと見なされ、無視されますのでご注意ください。 {{cssxref("string", "/ &lt;string>")}} または {{cssxref("counter", "/ &lt;counter>")}} データ型で、この要素の「代替テキスト」を表します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## アクセシビリティ

CSS で生成されるコンテンツは、 [DOM](/ja/docs/Web/API/Document_Object_Model/Introduction) には含まれません。そのため、これは[アクセシビリティツリー](/ja/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#アクセシビリティの_api_群)では表現されず、支援技術とブラウザーの組み合わせによってはアナウンスされないことがあります。そのコンテンツがページの目的を理解する上で重要な情報を含んでいるのであれば、メイン文書に含めたほうが適切です。

挿入されたコンテンツが装飾的なものでない場合は、支援技術に情報が指定され、 CSS が無効の場合にも利用できることを確認してください。

- [Accessibility support for CSS generated content – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG の解説、ガイドライン 1.3 – MDN](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.3_—_さまざまな方法で提示できるコンテンツの作成)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Failure of Success Criterion 1.3.1: inserting non-decorative generated content](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F87) Techniques for WCAG 2.0

## 例

最初の 5 つの例は、擬似要素に生成コンテンツを生成させるものです。残りの 3 つは[要素の置換の例](#url_による要素の置換)です。

### 要素のクラスに基づいて文字列を追加

例えば、この例では、特定のクラス名を持つ要素のテキストの後に、生成されたテキストが挿入されます。テキストは赤色で表示されます。

#### HTML

```html
<h2>Paperback Best Sellers</h2>
<ol>
  <li>Political Thriller</li>
  <li class="new-entry">Halloween Stories</li>
  <li>My Biography</li>
  <li class="new-entry">Vampire Romance</li>
</ol>
```

#### CSS

```css
.new-entry::after {
  content: " New!"; /* 先頭の空白は、 DOM ノードのコンテンツと
                       追加する生成コンテンツを分離するための
                       ものです。 */
  color: red;
}
```

#### 結果

{{EmbedLiveSample('Appending_strings_based_on_an_elements_class', '100%', 160)}}

### 引用符

この例では、引用部分の周りに異なる色の引用符を挿入します。

#### HTML

```html
<p>
  According to Sir Tim Berners-Lee,
  <q cite="http://www.w3.org/People/Berners-Lee/FAQ.html#Internet">
    I was lucky enough to invent the Web at the time when the Internet already
    existed - and had for a decade and a half.
  </q>
  We must understand that there is nothing fundamentally wrong with building on
  the contributions of others.
</p>
<p lang="fr-fr">
  Mais c'est Magritte qui a dit,
  <q lang="fr-fr"> Ceci n'est pas une pipe. </q>.
</p>
```

#### CSS

```css
q {
  color: #00f;
}

q::before,
q::after {
  font-size: larger;
  color: #f00;
  background: #ccc;
}

q::before {
  content: open-quote;
}

q::after {
  content: close-quote;
}
```

#### 結果

{{EmbedLiveSample('Quotes', '100%', 200)}}

[生成される引用符の種類](/ja/docs/Web/CSS/quotes#自動引用符)は、言語によって異なります。 ブラウザーは既定では、 {{HTMLElement("q")}} 要素の前後に開始引用符と終了引用符を追加します。例えば、この例の引用符は、明示的に設定されていない場合でも表示されます。 `content` プロパティの値をそれぞれ `no-open-quote` と `no-close-quote` に設定するか、または両方を `none` に設定することで、引用符を無効にすることができます。 また、代わりに {{cssxref("quotes")}} プロパティを `none` に設定することで、引用符を無効にすることもできます。

### テキストをリストアイテムカウンターに追加

この例では、すべてのリストアイテムの先頭に追加された 2 つの文字列で挟まれたカウンターを結合し、順序なしリスト ({{HTMLElement("ol")}}) 内のリストアイテム ({{HTMLElement("li")}}) に対して、より詳細なマーカーを作成します。

#### HTML

```html
<ol>
  <li>犬</li>
  <li>猫</li>
  <li>
    鳥
    <ol>
      <li>フクロウ</li>
      <li>オウム</li>
      <li>飛べない鳥</li>
    </ol>
  <li>有袋類</li>
  </li>
</ol>
```

#### CSS

```css
ol {
  counter-reset: items;
  margin-left: 2em;
}
li {
  counter-increment: items;
}
li::marker {
  content: "item " counters(items, ".", numeric) ": ";
}
```

#### 結果

{{EmbedLiveSample('Adding_text_to_list_item_counters', '100%', 200)}}

各リストアイテムのマーカーで生成されたコンテンツには、接頭辞として "item" というテキストが追加され、接頭辞とカウンターを区切る空白が含まれ、次の ": "、コロン、さらに空白が続きます。 {{cssxref("counters", "counters()")}} 関数は、数値アイテムカウンターを定義し、その数値は、ほとんどのブラウザーではピリオド (`.`) で区切られます。

### 属性値の文字列

この例は、印刷用スタイルで有用です。このスタイルシートは[属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)を使用して、完全修飾された保護されたリンクをすべて選択し、リンクテキストの後に `href` 属性の値を {{cssxref("::after")}} 擬似要素のコンテンツとして追加します。

#### HTML

```html
<ul>
  <li><a href="https://mozilla.com">Mozilla</a></li>
  <li><a href="/">MDN</a></li>
  <li><a href="https://openwebdocs.org">OpenWebDocs</a></li>
</ul>
```

#### CSS

```css
a[href^="https://"]::after
{
  content: " (URL: " attr(href) ")";
  color: darkgreen;
}
```

#### 結果

{{EmbedLiveSample('Strings_with_attribute_values', '100%', 200)}}

生成されたコンテンツは、空白付きの "URL: " と `href` 属性の値の全体を括弧で囲んだものです。

### 代替テキスト付きの画像を追加

この例では、すべてのリンクの前に画像を挿入します。2つの`content`値が提供されています。後の方の`content`値には、スクリーンリーダーが音声として出力できる代替テキスト付きの画像が記載されています。ブラウザーが代替テキストに対応していない場合、この宣言は無効と見なされ、前の`content`値が表示されます。この代替コンテンツのリストには、画像と「- alt テキストに対応していません - 」というメッセージが含まれています。

#### HTML

```html
<a href="https://www.mozilla.org/ja/">Mozilla Home Page</a>
```

#### CSS

画像を表示させ、代替テキストを設定するCSSは下記に示します。
また、コンテンツのフォントと色も設定します。
これは、代替テキストを「表示」するブラウザーで使われ、代替テキストに対応していないブラウザーでは、代替の `content` 値を表示します。

```css
a::before {
  /* 代替コンテンツ */
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico")
    " - alt テキストに対応していません - ";
  /* 代替テキスト付きのコンテンツ */
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") /
    " MOZILLA: ";
  font:
    x-small Arial,
    sans-serif;
  color: gray;
}
```

#### 結果

{{EmbedLiveSample('Adding_an_image_with_alternative_text', '100%', 60)}}

> [!NOTE]
> 代替テキストの構文に対応している場合、値はブラウザーのアクセシビリティツリーに公開されます。ブラウザーごとのアクセシビリティパネルについては、[関連情報](#関連情報)の節を参照してください。

スクリーンリーダーを使用している場合は、画像に到達したときに "MOZILLA" という単語が読み上げられるはずです。対応している場合場合（「alt テキストに対応していません」と表示されていない場合）、開発者ツールの選択ツールで `::before` 擬似要素を選択し、アクセシビリティパネルで{{glossary("accessible name", "アクセシブル名")}}を表示することができます。

代替テキストの構文に対応していないブラウザーでは、代替テキストを含む宣言全体が無効となります。この場合、前の `content` 値が使用され、画像と「代替テキストに対応していません」というテキストが表示されます。

### URL による要素の置換

この例では、通常の要素が置き換えられます。要素のコンテンツは、 {{cssxref("url_value", "&lt;url&gt;")}} 型を使用して SVG に置き換えられます。

擬似要素は置換要素ではレンダリングされません。この要素が置換されるため、`::after` または `::before` と一致するものは生成も適用もされません。これを示すために、 `::after` 宣言ブロックを記載し、生成コンテンツとして `id` を追加しようとします。この擬似要素は、要素が置換されるため生成されません。

#### HTML

```html
<div id="replaced">このコンテンツが置き換えられます。</div>
```

#### CSS

```css
#replaced {
  content: url("mdn.svg");
}

/* 要素の置き換えに対応している場合は表示されない */
div::after {
  content: " (" attr(id) ")";
}
```

#### 結果

{{EmbedLiveSample('Element_replacement_with_url', '100%',400)}}

（擬似要素ではなく）通常の要素でコンテンツを生成する場合、要素全体が置き換えられます。すなわち、 `::before` および `::after` 擬似要素が生成されないということを意味しています。

### `<gradient>` による要素の置換

この例では、要素のコンテンツを任意の種類の `<image>` （この場合は CSS グラデーション）に置き換える方法を示しています。 要素のコンテンツは {{cssxref("gradient/linear-gradient", "linear-gradient()")}} に置き換えられています。 {{cssxref("@supports")}} により、代替テキストの対応と、 alt テキストに対応しているブラウザー用の {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} が指定されています。

#### HTML

```html
<div id="replaced">ここは消えます</div>
```

#### CSS

```css
div {
  border: 1px solid;
  background-color: #ccc;
  min-height: 100px;
  min-width: 100px;
}

#replaced {
  content: linear-gradient(#639f, #c96a);
}

@supports (content: linear-gradient(#000, #fff) / "代替テキスト") {
  #replaced {
    content: repeating-linear-gradient(blue 0, orange 10%) /
      "グラデーションと代替テキストに対応しています";
  }
}
```

#### 結果

{{EmbedLiveSample('Element_replacement_with_gradient', '100%', 200)}}

[ブラウザーの互換性一覧表](#ブラウザーの互換性)を確認してください。 すべてのブラウザーがグラデーションに対応しており、また、すべてのブラウザーが要素を画像で置き換えることができますが、コンテンツ値としてグラデーションに対応しているブラウザーは限られており、また、代替テキストつきで要素を置き換えることに対応しているブラウザーも限られています。グラデーションのないボックスが表示されるブラウザーでは、要素の置き換えは対応していますが、コンテンツの置き換え値としてグラデーションは対応していません。 要素が縞模様のグラデーションで置き換えられている場合、ブラウザーはどちらにも対応しています。

### `image-set()` による要素の置換

この例では、要素のコンテンツを {{cssxref("image/image-set", "image-set()")}} で置き換えます。ユーザーの画面の解像度が標準であれば、 `1x.png` が画面に表示され、高解像度の画面では `2x.png` の画像が表示されます。

#### HTML

```html
<div id="replaced">Mozilla</div>
```

#### CSS

```css hidden
div {
  width: 100px;
  border: 1px solid lightgrey;
}
```

```css-nolint
#replaced {
  content: image-set(
    "1x.png" 1x,
    "2x.png" 2x
  );
}
```

#### 結果

{{EmbedLiveSample('Element_replacement_with_image-set', '100%', 110)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("::after")}}
- {{Cssxref("::before")}}
- {{Cssxref("::marker")}}
- {{Cssxref("contain")}}
- {{Cssxref("quotes")}}
- {{cssxref("gradient", "&lt;gradient&gt;")}}
- {{cssxref("image/image-set", "image-set()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- [置換要素](/ja/docs/Web/CSS/Replaced_element)
- [CSS 生成コンテンツ](/ja/docs/Web/CSS/CSS_generated_content)モジュール
- [CSS リストとカウンター](/ja/docs/Web/CSS/CSS_lists)モジュール

- ブラウザーのアクセシビリティパネル: [Firefox アクセシビリティインスペクター](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/)、[Chrome のアクセシビリティパネル](https://developer.chrome.com/docs/devtools/accessibility/reference#pane)、[Safari のアクセシビリティツリー](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
