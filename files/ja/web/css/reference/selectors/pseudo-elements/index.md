---
title: 擬似要素
slug: Web/CSS/Reference/Selectors/Pseudo-elements
l10n:
  sourceCommit: 21d2342d16ed78d6c72c66a71599125eb2405a31
---

CSS の **擬似要素** (Pseudo-elements) は、セレクターに付加するキーワードで、選択された要素の特定の部分にスタイル付けできるようにするものです。

> [!NOTE]
> このページは CSS のすべての擬似要素の索引です。これらの擬似要素の一部（すべてではありません）を定義するモジュールについては、[CSS 擬似要素](/ja/docs/Web/CSS/Guides/Pseudo-elements)のページで説明しています。

## 構文

```css
selector::pseudo-element {
  property: value;
}
```

例えば {{CSSxRef("::first-line")}} 擬似要素は、段落の最初の行のフォントを変更するために使用することができます。

```css
/* すべての <p> 要素の最初の行です。 */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

擬似要素にはダブルコロン (`::`) を使用します。これは、単一のコロン (`:`) を使用する[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)と区別するためです。なお、ブラウザーは、当初の 4 つの擬似要素（`::before`、`::after`、`::first-line`、`::first-letter`）に対して単一のコロンの構文に対応しています。

擬似要素は独立して存在しません。擬似要素が属する要素は、その擬似要素の「対象要素」と呼ばれます。擬似要素が現れる場所は、それが現れる[複雑](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#複雑セレクター)セレクターまたは[複合](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#複合セレクター)セレクター内の他のすべての要素の後でなければなりません。セレクターの最後の要素は、擬似要素の対象要素です。例えば、`p::first-line` を使用して段落の最初の行を選択することはできますが、最初の行の子要素は選択できません。したがって、`p::first-line > *` は不正です。

擬似要素は、対象要素の現在の状態に基づいて選択することができます。例えば、`p:hover::first-line` は、段落自体にカーソルが置かれているとき（擬似クラス）、その段落の最初の行（擬似要素）を選択します。

> [!NOTE]
> [セレクターリスト](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#セレクターリスト)に無効なセレクターが含まれている場合、そのスタイルブロック全体が無効になります。

## 組版擬似要素

- {{CSSxRef("::first-line")}}
  - : 対象要素の最初の行ボックスです。
- {{CSSxRef("::first-letter")}}
  - : 対象要素の最初の行の最初の文字、数値、または記号文字です。
- {{CSSxRef("::cue")}}
  - : 選択した要素内の [WebVTT](/ja/docs/Web/API/WebVTT_API) キュー。
    これは、VTT 予定があるメディアで[キャプションや他のキューのスタイル設定](/ja/docs/Web/API/WebVTT_API#html_またはスタイルシートの中の_webvtt_のスタイル設定)を行うために使用することができます。
    [CSS 擬似要素](/ja/docs/Web/CSS/Guides/Pseudo-elements)モジュールでは、`::postfix` および `::prefix` サブ擬似要素も定義しています。これらは、どのブラウザーでもまだ対応していません。

## ハイライト擬似要素

コンテンツおよび文書の状態に基づいて文書の一部を選択し、その領域に異なるスタイルを設定して、その状態をユーザーに示すことができます。

- {{CSSxRef("::grammar-error")}}
  - : ブラウザーが文法的に間違っていると判断した部分のテキストです。
- {{CSSxRef("::highlight()")}}
  - : [ハイライト表示レジストリー](/ja/docs/Web/API/CSS/highlights_static)内の要素。独自のハイライト表示を作成するために使用されます。
- {{CSSxRef("::search-text")}}
  - : ユーザーエージェントの「検索」または「ページ内検索」テキスト検索機能によって特定された検索結果です。
- {{CSSxRef("::selection")}}
  - : 文書内の選択された部分です。
- {{CSSxRef("::spelling-error")}}
  - : ブラウザーがスペルミスであると判断した部分のテキストです。
- {{CSSxRef("::target-text")}}
  - : 文書の対象要素。対象要素は、[URL のフラグメント](/ja/docs/Web/URI/Reference/Fragment)識別子を使用して識別されます。

## ツリー構造準拠擬似要素

これらの擬似要素は、通常の要素と同様に動作し、ボックスモデルにシームレスに組み込まれます。これらは、対象要素の階層内で直接スタイル設定できる子要素として機能します。

- {{CSSxRef("::before")}}
  - : 選択した要素の最初の子である擬似要素を作成します。
- {{CSSxRef("::after")}}
  - : 選択した要素の最後の子である擬似要素を作成します。
- {{CSSxRef("::column")}}
  - : [段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout) のそれぞれの段のフラグメントです。
- {{CSSxRef("::marker")}}
  - : リストアイテムの自動的に生成されるマーカーボックスです。
- {{CSSxRef("::backdrop")}}
  - : [最上位レイヤー](/ja/docs/Glossary/Top_layer)でレンダリングされた対象要素の背景。
- {{CSSxRef("::scroll-button()")}}
  - : 適用先の{{glossary("scroll container", "スクロールコンテナー")}}のスクロールを制御できるボタンを作成します。
- {{CSSxRef("::scroll-marker")}}
  - : スクロールマーカーである擬似要素を作成します。これは、スクロールマーカーグループに組み込まれた、その対象要素のスクロールターゲットボタンです。
- {{CSSxRef("::scroll-marker-group")}}
  - : 要素またはその子孫で生成される {{cssxref("::scroll-marker")}} 擬似要素を抑制するためのコンテナーを、スクロールコンテナーの前または後に生成します。

## 要素に属する擬似要素

これらの擬似要素は、それ以外では選択できない実際の要素です。

- {{CSSxRef("::details-content")}}
  - : {{HTMLElement("details")}} 要素の展開/折りたたみ可能なコンテンツです。
- {{cssxref("::part()")}}
  - : [シャドウツリー](/ja/docs/Web/API/Web_components/Using_shadow_DOM)内に、一致する [`part`](/ja/docs/Web/HTML/Reference/Global_attributes/part) 属性を持つ要素です。
- {{cssxref("::slotted()")}}
  - : HTML テンプレート内のスロットに配置された要素です。

## フォーム関連擬似要素

この擬似要素は、フォームコントロールに関連しています。

- {{CSSxRef("::checkmark")}}
  - : [カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select) の現在選択されている `<option>` 要素内に配置されたチェックマークを対象とし、どれが選択されているかを視覚的に示します。
- {{CSSxRef("::file-selector-button")}}
  - : {{HTMLElement("input") }} の [`type="file"`](/ja/docs/Web/HTML/Reference/Elements/input/file) のボタンです。
- {{CSSxRef("::picker()")}}
  - : 要素のピッカー部分、例えば[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)のドロップダウンピッカーです。
- {{CSSxRef("::picker-icon")}}
  - : アイコンが関連付けられているフォームコントロール内のピッカーアイコン。[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select) の場合、選択が閉じられているときに下向きの矢印を選択します。
- {{CSSxRef("::placeholder")}}
  - : 入力フィールドのプレースホルダーテキストです。

## アルファベット順の索引

CSS の一連の仕様で定義される擬似要素には、以下のようなものがあります。

A

- {{CSSxRef("::after")}}

B

- {{CSSxRef("::backdrop")}}
- {{CSSxRef("::before")}}

C

- {{CSSxRef("::column")}}
- {{CSSxRef("::checkmark")}}
- {{CSSxRef("::cue")}} （および {{cssxref("::cue()")}}）

D

- {{CSSxRef("::details-content")}}

F

- {{CSSxRef("::file-selector-button")}}
- {{CSSxRef("::first-letter")}}
- {{CSSxRef("::first-line")}}

G

- {{CSSxRef("::grammar-error")}}

H

- {{CSSxRef("::highlight()")}}

M

- {{CSSxRef("::marker")}}

P

- {{cssxref("::part()")}}
- {{CSSxRef("::picker()")}}
- {{CSSxRef("::picker-icon")}}
- {{CSSxRef("::placeholder")}}

S

- {{CSSxRef("::scroll-button()")}}
- {{CSSxRef("::scroll-marker")}}
- {{CSSxRef("::scroll-marker-group")}}
- {{CSSxRef("::selection")}}
- {{cssxref("::slotted()")}}
- {{CSSxRef("::spelling-error")}}

T

- {{CSSxRef("::target-text")}}

V

- {{cssxref("::view-transition")}}
- {{cssxref("::view-transition-image-pair()")}}
- {{cssxref("::view-transition-group()")}}
- {{cssxref("::view-transition-new()")}}
- {{cssxref("::view-transition-old()")}}

### 標準外の擬似要素

標準外のベンダー接頭辞付き擬似要素には次のものがあります。

#### `-moz-` 接頭辞

- {{CSSxRef("::-moz-color-swatch")}}
- {{CSSxRef("::-moz-focus-inner")}}
- {{CSSxRef("::-moz-list-bullet")}}
- {{CSSxRef("::-moz-list-number")}}
- {{CSSxRef("::-moz-meter-bar")}}
- {{CSSxRef("::-moz-progress-bar")}}
- {{CSSxRef("::-moz-range-progress")}}
- {{CSSxRef("::-moz-range-thumb")}}
- {{CSSxRef("::-moz-range-track")}}

#### `-webkit-` 接頭辞

- {{CSSxRef("::-webkit-inner-spin-button")}}
- {{CSSxRef("::-webkit-meter-bar")}}
- {{CSSxRef("::-webkit-meter-even-less-good-value")}}
- {{CSSxRef("::-webkit-meter-inner-element")}}
- {{CSSxRef("::-webkit-meter-optimum-value")}}
- {{CSSxRef("::-webkit-meter-suboptimum-value")}}
- {{CSSxRef("::-webkit-progress-bar")}}
- {{CSSxRef("::-webkit-progress-inner-element")}}
- {{CSSxRef("::-webkit-progress-value")}}
- {{CSSxRef("::-webkit-scrollbar")}}
- {{CSSxRef("::-webkit-search-cancel-button")}}
- {{CSSxRef("::-webkit-search-results-button")}}
- {{CSSxRef("::-webkit-slider-runnable-track")}}
- {{CSSxRef("::-webkit-slider-thumb")}}

## 入れ子の擬似要素

いくつかの擬似要素セレクターを連結して、他の擬似要素の中に入れ子になった擬似要素のスタイルを設定することができます。次の入れ子になった擬似要素の組み合わせに対応しています。

- {{CSSxRef("::after")}}
  - `::after::marker`: `::after` 擬似要素が {{CSSxRef("display", "display: list-item")}} でリストアイテムとしてスタイル設定されている場合、`::after` 擬似要素の {{CSSxRef("::marker")}} 擬似要素を選択します。
- {{CSSxRef("::before")}}
  - `::before::marker`: `::before` 擬似要素が {{CSSxRef("display", "display: list-item")}} でリストアイテムとしてスタイル設定されている場合、`::before` 擬似要素の {{CSSxRef("::marker")}} 擬似要素を選択します。

例やブラウザーの互換性情報については、個々の擬似要素のリファレンスページをご覧ください。

## ハイライト擬似要素の継承

[ハイライト擬似要素](#ハイライト擬似要素)、例えば {{CSSxref("::selection")}}、{{CSSxref("::target-text")}}、{{CSSxref("::highlight()")}}、{{CSSxref("::spelling-error")}}、{{CSSxref("::grammar-error")}} などは、[通常の要素継承](/ja/docs/Web/CSS/Guides/Cascade/Inheritance)とは異なる一貫した継承モデルに従います。

擬似要素をハイライト表示するスタイルを適用すると、それらは両方から継承されます。

1. 親要素（通常の継承に従う）
2. 親要素のハイライト擬似要素（ハイライトの継承に従う）

これは、親要素のハイライト擬似要素と子要素のハイライト擬似要素の両方にスタイルを設定した場合、子要素のハイライト表示されたテキストが両方のソースのプロパティを組み合わせるということです。

具体的な例を挙げます。

まず、2 つのネストされた {{htmlelement("div")}} 要素を含む HTML があります。含まれるテキストコンテンツの一部は親 `<div>` 内に直接含まれ、一部は子 `<div>` 内にネストされています。

```html live-sample___highlight_inheritance
<div class="parent">
  親のテキスト
  <div class="child">子のテキスト</div>
</div>
```

次にCSSを組み込みます。親と子の`<div>`要素を別個に選択し、それぞれに異なる {{cssxref("color")}} 値を適用します。さらに親と子の選択テキスト ({{cssxref("::selection")}}) も選択します。これにより、それぞれの `<div>` に異なる {{cssxref("background-color")}} が適用され、親要素の選択範囲には異なるテキスト `color` が設定されます。

```css live-sample___highlight_inheritance
/* 親要素のスタイル設定 */
.parent {
  color: blue;
}

/* 親要素の選択テキストのスタイル設定 */
.parent::selection {
  background-color: yellow;
  color: red;
}

/* 子要素のスタイル設定 */
.child {
  color: green;
}

/* 子が選択したテキストのスタイル設定 */
.child::selection {
  background-color: orange;
}
```

この例は次のように表示されます。

{{EmbedLiveSample("highlight_inheritance", , "150")}}

親要素と子要素の両方でテキストを選択してみてください。次の点に注意してください。

1. 親テキストを選択すると、`.parent::selection` で定義された黄色の背景と赤色のテキスト色が使用されます。
2. 子テキストを選択すると、次のものを使用します。
   - `.child::selction` のオレンジ色の背景。
   - 親要素の `::selection` 擬似要素から継承された赤いテキスト色。

これは、子要素のハイライト擬似要素が、親要素とその親のハイライト擬似要素の両方から継承されることを示しています。

ハイライト擬似要素における [CSS カスタムプロパティ（変数）](/ja/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)は、ハイライトの継承チェーンを通じてではなく、元の要素（適用されている要素）から継承されます。例を示します。

```css
:root {
  --selection-color: lightgreen;
}

::selection {
  color: var(--selection-color);
}

.blue {
  --selection-color: blue;
}
```

全称セレクターをハイライト擬似要素と併用すると、ハイライトの継承が防止されます。例を示します。

```css
/* この操作によりハイライトの継承が防止される */
*::selection {
  color: lightgreen;
}

/* 継承をすることができるようにこれを優先する */
:root::selection {
  color: lightgreen;
}
```

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 擬似要素](/ja/docs/Web/CSS/Guides/Pseudo-elements)モジュール
- [擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール
- [学習: 擬似クラスと擬似要素](/ja/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Inheritance changes for CSS selection styling](https://developer.chrome.com/blog/selection-styling) - Chrome 134におけるハイライト擬似要素の継承モデル変更の詳細な説明
