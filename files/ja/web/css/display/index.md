---
title: display
slug: Web/CSS/display
tags:
  - CSS
  - CSS 表示方法
  - CSS プロパティ
  - リファレンス
  - display
  - recipe:css-property
browser-compat: css.properties.display
translation_of: Web/CSS/display
---
{{CSSRef}}

**`display`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素を[ブロック要素とインライン要素](/ja/docs/Web/CSS/CSS_Flow_Layout)のどちらとして扱うか、およびその子要素のために使用されるレイアウト、例えば [フローレイアウト](/ja/docs/Web/CSS/CSS_Flow_Layout)、[グリッド](/ja/docs/Web/CSS/CSS_Grid_Layout)、[フレックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)などを設定します。

正式には、 **`display`** プロパティは要素の内側と外側の表示種別を設定します。外側の型は要素の[フローレイアウト](/ja/docs/Web/CSS/CSS_Flow_Layout)への参加方法を設定し、内側の型は子要素のレイアウトを設定します。 `display` のいくつかの値は、それ自身の個別の仕様書で完全に定義されています。例えば、 `display: flex` が宣言されたときに何が起こるかの詳細は、 CSS Flexible Box Model 仕様書で定義されています。個々の仕様書については、[この文書の最後にある表](#仕様書)を参照してください。

## 構文

`display` プロパティは、キーワード値を使用して指定します。

```css
/* 旧来の値 */
display: block;
display: inline;
display: inline-block;
display: flex;
display: inline-flex;
display: grid;
display: inline-grid;
display: flow-root;

/* ボックスの生成 */
display: none;
display: contents;

/* 2 値の構文 */
display: block flow;
display: inline flow;
display: inline flow-root;
display: block flex;
display: inline flex;
display: block grid;
display: inline grid;
display: block flow-root;

/* その他の値 */
display: table;
display: table-row; /* すべての表の要素が同等の CSS display 値を持っています */
display: list-item;

/* グローバル値 */
display: inherit;
display: initial;
display: revert;
display: unset;
```

## 値のグループ

キーワード値は 6 つの値のカテゴリーにグループ分けすることができます。

### 外側

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : これらのキーワードは、本質的に要素のフローレイアウトにおける役割を表す、要素の外側の表示種別を指定します。

    - `block`
      - : この要素はブロック要素のボックスを生成し、通常のフローでは要素の前後で改行を生成します。
    - `inline`
      - : この要素は、自身の前後に改行を生成しない 1 つ以上のインライン要素ボックスを生成します。通常のフローでは、次の要素は、空間があれば同じ行になります。

> **Note:** 2 値構文に対応しているブラウザーでは、`display: block` や `display: inline` が指定されている場合など、外側の値のみを見つけると、内側の値を `flow` に設定します。
> これは期待通りに動作します。例えば、ある要素を block に指定した場合、その要素の子要素は block と inline の通常フローレイアウトに参加することが期待されます。

### 内側

- {{CSSxRef("&lt;display-inside&gt;")}}
  - : これらのキーワードは、要素の内側の表示種別を指定します。これは、要素 (置換要素ではないものとする) の内容物をレイアウトする整形コンテキストの種類を定義します。

    - `flow` {{Experimental_Inline}}

      - : 要素は、フローレイアウト (ブロックおよびインラインのレイアウト) を使用して、内容物をレイアウトします。

        外側の表示種別が `inline` または `run-in` であり、またブロックまたはインラインの整形コンテキストに関係する場合は、インラインボックスを生成します。そうでない場合は、ブロックコンテナーボックスを生成します。

        ほかのプロパティ ({{CSSxRef("position")}}, {{CSSxRef("float")}}, {{CSSxRef("overflow")}} など) の値や、要素自体がブロックまたはインラインの整形コンテキストに関係するかによって、新たな[ブロック整形コンテキスト](/ja/docs/Web/Guide/CSS/Block_formatting_context) (BFC) を生成する、または内容物が親の整形コンテキストに吸収されます。

    - `flow-root`
      - : 要素は、新たな[ブロック整形コンテキスト](/ja/docs/Web/Guide/CSS/Block_formatting_context)を確立するブロック要素ボックスを生成し、整形ルートがある場所を定義します。
    - `table`
      - : HTML の {{HTMLElement("table")}} 要素と同じように動作します。これは、ブロックレベルボックスを定義します。
    - `flex`
      - : 要素は、ブロック要素のように動作しつつ、そのコンテンツを[フレックスボックスモデル](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)に従ってレイアウトします。
    - `grid`
      - : 要素は、ブロック要素のように動作しつつ、そのコンテンツを[グリッドモデル](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)に従ってレイアウトします。
    - `ruby` {{Experimental_Inline}}
      - : 要素は、インライン要素のように動作しつつ、そのコンテンツをルビ (ruby) モデルに従ってレイアウトします。HTML の {{HTMLElement("ruby")}} 要素のように動作します。

> **Note:** 2 値の構文に対応しているブラウザーは、 `display: flex` や `display: grid` などの内側の表示種別のみが指定されていると、外側の表示種別を `block` に設定します。これで期待通りに動作します。例えば、ある要素を `display: grid` に指定した場合、そのボックスはブロックレベルボックスのグリッドコンテナーとして生成されることが期待されるでしょう。


### リスト項目

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : 要素は内容のためにブロックボックスと、個別のリスト項目のインラインボックスを生成します。

`list-item` 単独の値を指定すると、要素はリスト項目のように動作します。これは {{CSSxRef("list-style-type")}} や {{CSSxRef("list-style-position")}} と共に使用することができます。

`list-item` は {{CSSxRef("&lt;display-outside&gt;")}} キーワードのいずれかと、 {{CSSxRef("&lt;display-inside&gt;")}} の `flow` または `flow-root` キーワードと組み合わせることもできます。

> **Note:** 2 値の構文に対応しているブラウザーでは、内側の表示種別がないと既定で `flow` になります。外側の表示種別が指定されないと、基本ボックスは外側の表示種別が `block` になります。

### 内部

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : `table` や `ruby` のような一部のレイアウトモデルでは、複雑な内部構造があり、様々なその子要素や子孫要素が担う様々な役割があります。
    この節ではこれらを「内部」表示値として定義し、特定のレイアウトモードでのみ意味を持ちます。

    - `table-row-group`
      - : これらの要素は HTML の {{HTMLElement("tbody")}} 要素のように動作します。
    - `table-header-group`
      - : これらの要素は HTML の {{HTMLElement("thead")}} 要素のように動作します。
    - `table-footer-group`
      - : これらの要素は HTML の {{HTMLElement("tfoot")}} 要素のように動作します。
    - `table-row`
      - : これらの要素は HTML の {{HTMLElement("tr")}} 要素のように動作します。
    - `table-cell`
      - : これらの要素は HTML の {{HTMLElement("td")}} 要素のように動作します。
    - `table-column-group`
      - : これらの要素は HTML の {{HTMLElement("colgroup")}} 要素のように動作します。
    - `table-column`
      - : これらの要素は HTML の {{HTMLElement("col")}} 要素のように動作します。
    - `table-caption`
      - : これらの要素は HTML の {{HTMLElement("caption")}} 要素のように動作します。
    - `ruby-base` {{Experimental_Inline}}
      - : これらの要素は HTML の {{HTMLElement("rb")}} 要素のように動作します。
    - `ruby-text` {{Experimental_Inline}}
      - : これらの要素は HTML の {{HTMLElement("rt")}} 要素のように動作します。
    - `ruby-base-container` {{Experimental_Inline}}
      - : これらの要素は無名のボックスとして生成された HTML の {{HTMLElement("rbc")}} 要素のように動作します。
    - `ruby-text-container` {{Experimental_Inline}}
      - : これらの要素は HTML の {{HTMLElement("rtc")}} 要素のように動作します。

### ボックス

- {{CSSxRef("&lt;display-box&gt;")}}
  - : これらのキーワードは、要素が表示ボックスを作るかどうかを定義します。

    - `contents`
      - : これらの要素は自身のために特定のボックスを生成しません。擬似ボックスやその子ボックスで置き換えられます。なお、 CSS Display Level 3 仕様書では、 `contents` の値が「普通ではない要素」 — 置換要素のように、 CSS ボックスの純粋な概念に従って表示されない要素に影響する方法を定義しています。詳しくは [Appendix B: Effects of display: contents on Unusual Elements](https://drafts.csswg.org/css-display/#unbox) を参照してください。

        _ブラウザーのバグにより、現在のところ、この値を使用するとアクセシビリティツリーから要素を削除します。 — 読み上げソフトは中に何があるかを見ません。詳しくは後述の[アクセシビリティの考慮](#アクセシビリティの考慮)の節をご覧ください。_

    - `none`
      - : 要素の表示を無くし、レイアウトに影響を与えなくなります (文書は要素が存在しないかのように表示されます)。すべての子孫要素も表示がなくなります。
        要素が通常占める空間を確保しつつ、実際には何も表示しないようにしたいのであれば、代わりに {{CSSxRef("visibility")}} プロパティを使用してください。

### 旧来のもの

- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 では `display` プロパティで単一のキーワードによる構文を採用しており、同じレイアウトモードのブロックレベルとインラインレベルで別々のキーワードが必要でした。

    - `inline-block`

      - : この要素はブロック要素ボックスを生成しますが、周囲のコンテンツに対しては単一のインラインボックスであるかのように流れるようになります (置換要素の場合と似ています)。

        これは `inline flow-root` と等価です。

    - `inline-table`

      - : `inline-table` は、 HTML には直接的に対応するものがありません。これは、 HTML の {{HTMLElement("table")}} 要素と同じようにふるまいつつ、ブロックレベルボックスではなく、インラインボックスのようにふるまいます。表ボックスの内側はブロックレベルのコンテキストになります。

        これは `inline table` と等価です。

    - `inline-flex`

      - : 要素は、インライン要素のようにふるまいつつ、その内容物をフレックスボックスモデルに従ってレイアウトします。

        これは `inline flex` と等価です。
    - `inline-grid`

      - : 要素は、インライン要素のようにふるまいつつ、その内容物をグリッドモデルに従ってレイアウトします。

        これは `inline grid` と等価です。

### 現在はどちらの構文を使用するべきか

Level 3 仕様書は `display` プロパティに 2 つの値を — 外側および内側の表示種別の指定を明示的に行うために — 説明しています。しかし、これはブラウザーの互換性が不十分です。

`<display-legacy>` による方法は、単一のキーワード値で同じ結果を生み出すので、二つのキーワード値による指定の対応が進むまで使用してください。例えば、 2 つの値でインラインのフレックスコンテナーは次のように指定することができます。

```css
.container {
  display: inline flex;
}
```

現在は、単一の値を使用して指定することができます。

```css
.container {
  display: inline-flex;
}
```

これらの仕様変更の詳細については、[display の新しい 2 つの値の構文への対応](/ja/docs/Web/CSS/display/two-value_syntax_of_display)の記事を参照してください。

### グローバル

```css
/* グローバル値 */
display: inherit;
display: initial;
display: unset;
```

## 解説

`display` に設定できる様々な種類の値の個々のページでは、それらの値が動作する機能の複数の例をを設定しています。 — {{anch("構文")}}の節を参照してください。なお、 display の様々な値については、以下の資料で詳しく解説していますので、ご覧ください。

- [display の 2 値構文への対応](/ja/docs/Web/CSS/display/two-value_syntax_of_display)

### CSS フローレイアウト (display: block, display: inline)

- [通常フローでのブロックおよびインラインレイアウト](/ja/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [フローレイアウトとオーバーフロー](/ja/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow)
- [フローレイアウトと書字方向](/ja/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes)
- [整形コンテキストの紹介](/ja/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
- [フロー内とフローの外](/ja/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow)

### display: flex

- [フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
- [主軸に沿ったフレックスアイテムの比率の制御](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)
- [フレックスアイテムの折り返しのマスター](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
- [フレックスアイテムの並べ替え](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)
- [フレックスボックスと他のレイアウト方法の関係](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)
- [フレックスボックスの後方互換性](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
- [フレックスボックスの典型的な用途](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)

### display: grid

- [グリッドレイアウトの基本概念](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [グリッドレイアウトと他のレイアウト方法との関係](/ja/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [線に基づく配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [グリッドテンプレート領域](/ja/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [名前付きグリッド線を使用したレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [グリッドレイアウトでの自動配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [グリッドと論理的な値と書字方向](/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)
- [CSS グリッドレイアウトとアクセシビリティ](/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [CSS グリッドレイアウトとプログレッシブエンハンスメント](/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [グリッドを使用したよくあるレイアウトの実現](/ja/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

## アクセシビリティの考慮

### display: none

要素の `display` の値に `none` を使用すると、その要素は[アクセシビリティツリー](/ja/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis)から削除されます。すなわち、その要素とすべての子孫要素は読み上げ技術によって読み上げられなくなります。

要素を視覚的に隠したい場合は、よりアクセシブルな代替手段として、画面から視覚的に要素を削除しますが、画面リーダーのような支援技術が解析可能な状態を維持するための、[プロパティの組み合わせ](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link)を使用できます。

### display: contents

大部分のブラウザーの現在の実装では、[アクセシビリティツリー](/ja/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis)から `display` の値が `contents` であるすべての要素を削除します (ただし子孫は残ります)。これにより、その要素自身は読み上げソフトでは読み上げられなくなります。これは [CSS 仕様書](https://drafts.csswg.org/css-display/#valdef-display-contents)によれば正しくありません。

- [More accessible markup with display: contents | Hidde de Vries](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### 表

{{HTMLElement("table")}} 要素の `display` の値を `block`、`grid`、あるいは `flex` に変更すると、[アクセシビリティツリー](/ja/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis)での表現が変わります。これにより、表が読み上げ技術によって適切に読み上げられなくなります。

- [Short note on what CSS display properties do to table semantics — The Paciello Group](https://developer.paciellogroup.com/blog/2018/03/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Hidden content for better a11y | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN WCAG を理解する ― ガイドライン 1.3 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### display 値の比較

この例では、 2 つのブロックレベルのコンテナー要素があり、それぞれに 3 つのインラインの子要素があります。その下には、コンテナーに異なる `display` の値を適用するための選択メニューがあり、異なる値が要素のレイアウトとその子要素のレイアウトにどのように影響するかを比較対照することができます。

コンテナーとその子要素には {{CSSxRef("padding")}} と {{CSSxRef("background-color")}} が含まれているので、表示値の効果がわかりやすくなっています。

> **Note:** 新しい2つの値の構文は、対応がまだかなり限られているため、ここでは一切含めていません。

#### HTML

```html
<article class="container">
  <span>First</span>
  <span>Second</span>
  <span>Third</span>
</article>

<article class="container">
  <span>First</span>
  <span>Second</span>
  <span>Third</span>
</article>

<div>
  <label for="display">Choose a display value:</label>
  <select id="display">
    <option selected>block</option>
    <option>inline</option>
    <option>inline-block</option>
    <option>none</option>
    <option>flex</option>
    <option>inline-flex</option>
    <option>grid</option>
    <option>inline-grid</option>
    <option>table</option>
    <option>list-item</option>
  </select>
</div>
```

#### CSS

```css
html {
  font-family: helvetica, arial, sans-serif;
  letter-spacing: 1px;
  padding-top: 10px;
}

article {
  background-color: red;
}

article span {
  background-color: black;
  color: white;
  margin: 1px;
}

article, span {
  padding: 10px;
  border-radius: 7px;
}

article, div {
  margin: 20px;
}
```

#### JavaScript

```js
const articles = document.querySelectorAll('.container');
const select = document.querySelector('select');

function updateDisplay() {
  articles.forEach((article) => {
    article.style.display = select.value;
  });
}

select.addEventListener('change', updateDisplay);

updateDisplay();
```

#### 結果

{{EmbedLiveSample('display_value_comparison','100%', 440)}}

> **Note:** 上記にリンクされている各個別の表示データ型のページには、より多くの例があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通常フローでのブロックおよびインラインレイアウト](/ja/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [整形コンテキストの紹介](/ja/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
