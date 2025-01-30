---
title: display
slug: Web/CSS/display
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**`display`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素を[ブロックボックスとインラインボックス](/ja/docs/Web/CSS/CSS_flow_layout)のどちらとして扱うか、およびその子要素のために使用されるレイアウト、例えば [フローレイアウト](/ja/docs/Web/CSS/CSS_flow_layout)、[グリッド](/ja/docs/Web/CSS/CSS_grid_layout)、[フレックス](/ja/docs/Web/CSS/CSS_flexible_box_layout)などを設定します。

正式には、 **`display`** プロパティは要素の内側と外側の表示種別を設定します。外側の型は要素の[フローレイアウト](/ja/docs/Web/CSS/CSS_flow_layout)への参加方法を設定し、内側の型は子要素のレイアウトを設定します。 `display` のいくつかの値は、それ自身の個別の仕様書で完全に定義されています。例えば、 `display: flex` が宣言されたときに何が起こるかの詳細は、 CSS Flexible Box Model 仕様書で定義されています。

{{EmbedInteractiveExample("pages/css/display.html")}}

## 構文

```css
/* 構成済みの値 */
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

/* 複数キーワードの構文 */
display: block flex;
display: block flow;
display: block flow-root;
display: block grid;
display: inline flex;
display: inline flow;
display: inline flow-root;
display: inline grid;

/* その他の値 */
display: table;
display: table-row; /* すべての表の要素が同等の CSS display 値を持っています */
display: list-item;

/* グローバル値 */
display: inherit;
display: initial;
display: revert;
display: revert-layer;
display: unset;
```

CSS の `display` プロパティは、キーワード値を使用して指定されます。

## 値のグループ

キーワード値は 6 つの値のカテゴリーにグループ分けすることができます。

### 外側

- {{CSSxRef("&lt;display-outside&gt;")}}

  - : これらのキーワードは、本質的に要素のフローレイアウトにおける役割を表す、要素の外側の表示種別を指定します。

    - `block`
      - : この要素はブロックボックスを生成し、通常のフローでは要素の前後で改行を生成します。
    - `inline`
      - : この要素は、自身の前後に改行を生成しない 1 つ以上のインラインボックスを生成します。通常のフローでは、次の要素は、空間があれば同じ行になります。

> [!NOTE]
> 複数キーワードの構文に対応しているブラウザーでは、**外側**の値のみがあるのを見つけると（`display: block` や `display: inline` が指定されている場合など）、内側の値を `flow` に設定します。（例えば、 `display: block flow` や `display: inline flow` のように。）

> [!NOTE]
> 古いブラウザーでも確実にレイアウトが機能するように、 1 つの値の構文を使用することができます。例えば、 `display: inline flex` には次のように代替を指定することができます。
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> 詳しくは [CSS display の複数キーワード構文の使用](/ja/docs/Web/CSS/display/multi-keyword_syntax_of_display)を参照してください。

### 内側

- {{CSSxRef("&lt;display-inside&gt;")}}

  - : これらのキーワードは、要素の内側の表示種別を指定します。これは、要素 (置換要素ではないものとする) のコンテンツをレイアウトする整形コンテキストの種類を定義します。

    - `flow`

      - : 要素は、フローレイアウト (ブロックおよびインラインのレイアウト) を使用して、コンテンツをレイアウトします。

        外側の表示種別が `inline` であり、またブロックまたはインラインの整形コンテキストに関係する場合は、インラインボックスを生成します。そうでない場合は、ブロックボックスを生成します。

        ほかのプロパティ ({{CSSxRef("position")}}, {{CSSxRef("float")}}, {{CSSxRef("overflow")}} など) の値や、要素自体がブロックまたはインラインの整形コンテキストに関係するかによって、新たな[ブロック整形コンテキスト](/ja/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) を生成する、またはコンテンツが親の整形コンテキストに吸収されます。

    - `flow-root`
      - : 要素は、新たな[ブロック整形コンテキスト](/ja/docs/Web/CSS/CSS_display/Block_formatting_context)を確立するブロック要素ボックスを生成し、整形ルートがある場所を定義します。
    - `table`
      - : HTML の {{HTMLElement("table")}} 要素と同じように動作します。これは、ブロックレベルボックスを定義します。
    - `flex`
      - : 要素は、ブロックレベル要素のように動作しつつ、そのコンテンツを[フレックスボックスモデル](/ja/docs/Web/CSS/CSS_flexible_box_layout)に従ってレイアウトします。
    - `grid`
      - : 要素は、ブロックレベル要素のように動作しつつ、そのコンテンツを[グリッドモデル](/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)に従ってレイアウトします。
    - `ruby`
      - : 要素は、インラインレベル要素のように動作しつつ、そのコンテンツをルビ (ruby) 整形モデルに従ってレイアウトします。HTML の {{HTMLElement("ruby")}} 要素のように動作します。

> [!NOTE]
> 複数キーワードの構文に対応しているブラウザーは、**内側**の表示種別のみが指定されていると（`display: flex` や `display: grid` など）、外側の表示種別を `block` に設定します（`display: block flex` や `display: block grid` など）。

### リストアイテム

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : 要素はコンテンツのためにブロックボックスと、個別のリストアイテムのインラインボックスを生成します。

`list-item` 単独の値を指定すると、要素はリストアイテムのように動作します。これは {{CSSxRef("list-style-type")}} や {{CSSxRef("list-style-position")}} と共に使用することができます。

`list-item` は {{CSSxRef("&lt;display-outside&gt;")}} キーワードのいずれかと、 {{CSSxRef("&lt;display-inside&gt;")}} の `flow` または `flow-root` キーワードと組み合わせることもできます。

> [!NOTE]
> 複数キーワードの構文に対応しているブラウザーでは、内側の表示種別がないと既定で `flow` になります。
> 外側の表示種別が指定されないと、基本ボックスは外側の表示種別が `block` になります。

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
    - `ruby-base`
      - : これらの要素は HTML の {{HTMLElement("rb")}} 要素のように動作します。
    - `ruby-text`
      - : これらの要素は HTML の {{HTMLElement("rt")}} 要素のように動作します。
    - `ruby-base-container`
      - : これらの要素は無名のボックスとして生成されます。
    - `ruby-text-container`
      - : これらの要素は HTML の {{HTMLElement("rtc")}} 要素のように動作します。

### ボックス

- {{CSSxRef("&lt;display-box&gt;")}}

  - : これらのキーワードは、要素が表示ボックスを作るかどうかを定義します。

    - `contents`

      - : これらの要素は自身のために特定のボックスを生成しません。擬似ボックスやその子ボックスで置き換えられます。なお、 CSS Display Level 3 仕様書では、 `contents` の値が「普通ではない要素」 — 置換要素のように、 CSS ボックスの純粋な概念に従って表示されない要素に影響する方法を定義しています。詳しくは [Appendix B: Effects of display: contents on Unusual Elements](https://drafts.csswg.org/css-display/#unbox) を参照してください。

    - `none`
      - : 要素の表示を無くし、レイアウトに影響を与えなくなります (文書は要素が存在しないかのように表示されます)。すべての子孫要素も表示がなくなります。
        要素が通常占める空間を確保しつつ、実際には何も表示しないようにしたいのであれば、代わりに {{CSSxRef("visibility")}} プロパティを使用してください。

### 構成済みのもの

- {{CSSxRef("&lt;display-legacy&gt;")}}

  - : CSS 2 では `display` プロパティで単一のキーワードによる構成済みの構文を採用しており、同じレイアウトモードのブロックレベルとインラインレベルで別々のキーワードが必要でした。

    - `inline-block`

      - : この要素はブロックボックスを生成しますが、周囲のコンテンツに対しては単一のインラインボックスであるかのように流れるようになります (置換要素の場合と似ています)。

        これは `inline flow-root` と等価です。

    - `inline-table`

      - : `inline-table` は、 HTML には直接的に対応するものがありません。これは、 HTML の {{HTMLElement("table")}} 要素と同じようにふるまいつつ、ブロックレベルボックスではなく、インラインボックスのようにふるまいます。表ボックスの内側はブロックレベルのコンテキストになります。

        これは `inline table` と等価です。

    - `inline-flex`

      - : 要素は、インラインレベル要素のようにふるまいつつ、そのコンテンツをフレックスボックスモデルに従ってレイアウトします。

        これは `inline flex` と等価です。

    - `inline-grid`

      - : 要素は、インラインレベル要素のようにふるまいつつ、そのコンテンツをグリッドモデルに従ってレイアウトします。

        これは `inline grid` と等価です。

### どちらの構文を使用するべきか

[CSS 表示モジュール](/ja/docs/Web/CSS/CSS_display)では、 `display` プロパティに使用できる値を使って複数キーワードの構文を使用すると、明示的に**外側**と**内側**の表示方法を定義することができると説明しています。
単一キーワードの値（構成済みの `<display-legacy>` 値）は後方互換性のために対応しています。

例えば、 2 つの値を用いると、インラインのフレックスコンテナーを次のように指定することができます。

```css
.container {
  display: inline flex;
}
```

古い単一の値を使用して指定することもできます。

```css
.container {
  display: inline-flex;
}
```

これらの変更の詳細については、 [CSS display の複数キーワード構文の使用](/ja/docs/Web/CSS/display/multi-keyword_syntax_of_display)の記事を参照してください。

### グローバル

```css
/* グローバル値 */
display: inherit;
display: initial;
display: unset;
```

## 解説

`display` に設定できる様々な種類の値の個々のページでは、それらの値が動作する機能の複数の例をを設定しています。 — [構文](#構文)の節を参照してください。なお、 display の様々な値については、以下の資料で詳しく解説していますので、ご覧ください。

### 複数キーワード値

- [CSS display の複数キーワード構文の使用](/ja/docs/Web/CSS/display/multi-keyword_syntax_of_display)

### CSS フローレイアウト (display: block, display: inline)

- [通常フローでのブロックおよびインラインレイアウト](/ja/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [フローレイアウトとオーバーフロー](/ja/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow)
- [フローレイアウトと書字方向](/ja/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [整形コンテキストの紹介](/ja/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
- [フロー内とフローの外](/ja/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)

### display: flex

- [フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [主軸方向のフレックスアイテムの比率の制御](/ja/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [フレックスアイテムの折り返しをマスターする](/ja/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [フレックスアイテムの順序](/ja/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [フレックスボックスと他のレイアウト方法の関係](/ja/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [フレックスボックスの典型的な用途](/ja/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

### display: grid

- [グリッドレイアウトの基本概念](/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [グリッドレイアウトと他のレイアウト方法との関係](/ja/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [線に基づく配置を使用したグリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [グリッドテンプレート領域](/ja/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [名前付きグリッド線を使用したレイアウト](/ja/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [グリッドレイアウトでの自動配置](/ja/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [グリッド、論理的な値、書字方向](/ja/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [グリッドレイアウトとアクセシビリティ](/ja/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS グリッドレイアウトとプログレッシブエンハンスメント](/ja/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement)
- [グリッドを使用したよくあるレイアウトの実現](/ja/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

### display のアニメーション

[対応しているブラウザー](#ブラウザーの互換性)では、 `display` を[離散アニメーション型](/ja/docs/Web/CSS/CSS_animated_properties#離散)でアニメーションします。これは一般的に、 2 つのプロパティ値の間をアニメーションの 50% で切り替わることを意味しています。

例外が一つあり、それは `display: none` との間でアニメーションする場合です。この場合、ブラウザーはアニメーションの間中、トランジションしたコンテンツが表示されるように、 2 つの値を切り替えます。

- `display` を `none` から `block` （または他の表示可能な `display` 値）にアニメーションさせるときは、値が `block` に切り替わるのはアニメーションの `0%` であり、期間中ずっと表示されます。
- `display` を `block` （または他の表示可能な `display` 値）から `none` にアニメーションさせるときは、値は `none` に切り替わるのはアニメーションの `100%` です。

この動作は、例えばコンテナーを `display: none` で DOM から除去したいが、すぐに消えてしまうのではなく、 [`opacity`](/ja/docs/Web/CSS/opacity) でフェードアウトさせたい場合に、出現・消滅アニメーションを作成するのに便利です。

[CSS アニメーション](/ja/docs/Web/CSS/CSS_animations) で `display` をアニメーションさせる場合、開始する `display` の値を明示的なキーフレームで指定する必要があります（例えば `0%` や `from` を使用します）。例えば、 [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)を参照してください。

`display` を [CSS トランジション](/ja/docs/Web/CSS/CSS_transitions)でアニメーションさせる場合、 2 つの追加の機能が必要になります。

- [`@starting-style`](/ja/docs/Web/CSS/@starting-style) は、アニメーションする要素が最初に表示されたときからトランジションさせたいプロパティの開始値を提供します。これは予期しない動作を避けるために必要です。既定では、 CSS トランジションは要素の最初のスタイル更新時や、 `display` の型が `none` から他の型へ変更された時には発生しません。
- [`transition-behavior: allow-discrete`](/ja/docs/Web/CSS/transition-behavior) は、 {{cssxref("transition-property")}} 宣言（または一括指定の {{cssxref("transition")}}）で `display` のトランジションを有効にするために設定する必要があります。

`display` プロパティのトランジションの例は、 [`@starting-style`](/ja/docs/Web/CSS/@starting-style#例) と [`transition-behavior`](/ja/docs/Web/CSS/transition-behavior#例) のページを参照してください。

## アクセシビリティ

### display: none

要素の `display` の値に `none` を使用すると、その要素は[アクセシビリティツリー](/ja/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis)から削除されます。すなわち、その要素とすべての子孫要素は読み上げ技術によって読み上げられなくなります。

要素を視覚的に隠したい場合は、よりアクセシブルな代替手段として、画面から視覚的に要素を削除しますが、スクリーンリーダーのような支援技術が解析可能な状態を維持するための、[プロパティの組み合わせ](https://webaim.org/techniques/css/invisiblecontent/)が利用できます。

`display: none` はアクセシビリティツリーからコンテンツを隠しますが、隠されている要素でも、可視要素の `aria-describedby` または `aria-labelledby` 属性から参照されている場合は、支援技術に公開されます。

### display: contents

一部のブラウザーの現在の実装では、[アクセシビリティツリー](/ja/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis)から `display` の値が `contents` であるすべての要素を削除します (ただし子孫は残ります)。これにより、その要素自身は読み上げソフトでは読み上げられなくなります。これは [CSS 仕様書](https://drafts.csswg.org/css-display/#valdef-display-contents)によれば正しくありません。

- [More accessible markup with display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### 表

一部のブラウザーでは、 {{HTMLElement("table")}} 要素の `display` の値を `block`、`grid`、あるいは `flex` に変更すると、[アクセシビリティツリー](/ja/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis)での表現が変わります。これにより、表が読み上げ技術によって適切に読み上げられなくなります。

- [Short note on what CSS display properties do to table semantics — The Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Hidden content for better a11y | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN WCAG を理解する ― ガイドライン 1.3 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.3_—_さまざまな方法で提示できるコンテンツの作成)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### display 値の比較

この例では、 2 つのブロックレベルのコンテナー要素があり、それぞれに 3 つのインラインの子要素があります。その下には、コンテナーに異なる `display` の値を適用するための選択メニューがあり、異なる値が要素のレイアウトとその子要素のレイアウトにどのように影響するかを比較対照することができます。

コンテナーとその子要素には {{cssxref("padding")}} と {{cssxref("background-color")}} が含まれているので、表示値の効果がわかりやすくなっています。

#### HTML

```html
<article class="container">
  <span>1 つ目</span>
  <span>2 つ目</span>
  <span>3 つ目</span>
</article>

<article class="container">
  <span>1 つ目</span>
  <span>2 つ目</span>
  <span>3 つ目</span>
</article>

<div>
  <label for="display">display の値を選択:</label>
  <select id="display">
    <option selected>block</option>
    <option>block flow</option>
    <option>inline</option>
    <option>inline flow</option>
    <option>flow</option>
    <option>flow-root</option>
    <option>block flow-root</option>
    <option>table</option>
    <option>block table</option>
    <option>flex</option>
    <option>block flex</option>
    <option>grid</option>
    <option>block grid</option>
    <option>list-item</option>
    <option>block flow list-item</option>
    <option>inline flow list-item</option>
    <option>block flow-root list-item</option>
    <option>inline flow-root list-item</option>
    <option>contents</option>
    <option>none</option>
    <option>inline-block</option>
    <option>inline flow-root</option>
    <option>inline-table</option>
    <option>inline table</option>
    <option>inline-flex</option>
    <option>inline flex</option>
    <option>inline-grid</option>
    <option>inline grid</option>
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

article,
span {
  padding: 10px;
  border-radius: 7px;
}

article,
div {
  margin: 20px;
}
```

#### JavaScript

```js
const articles = document.querySelectorAll(".container");
const select = document.querySelector("select");

function updateDisplay() {
  articles.forEach((article) => {
    article.style.display = select.value;
  });
}

select.addEventListener("change", updateDisplay);

updateDisplay();
```

#### 結果

{{EmbedLiveSample('display_value_comparison','100%', 440)}}

なお、説明のために、以下に相当する複数キーワードの値が追加されています。

- `block` = `block flow`
- `inline` = `inline flow`
- `flow` = `block flow`
- `flow-root` = `block flow-root`
- `table` = `block table`
- `flex` = `block flex`
- `grid` = `block grid`
- `list-item` = `block flow list-item`
- `inline-block` = `inline flow-root`
- `inline-table` = `inline table`
- `inline-flex` = `inline flex`
- `inline-grid` = `inline grid`

[値のグループ](#値のグループ)以下にあるそれぞれの独立した表示型のページに、より多くの例があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通常フローでのブロックおよびインラインレイアウト](/ja/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [整形コンテキストの紹介](/ja/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
