---
title: reading-flow
slug: Web/CSS/Reference/Properties/reading-flow
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

**`reading-flow`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[ブロック](/ja/docs/Glossary/Block/CSS)、[フレックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)の各レイアウトの子要素の{{glossary("reading order", "読み順")}}を変更することができます。これは、タブ操作でリンクやボタンを順に選択するといった連続的なナビゲーションを使用されている際、音声化される順序や移動先の順序に影響を与えます。

## 構文

```css
/* キーワード値 */
reading-flow: normal;
reading-flow: flex-visual;
reading-flow: flex-flow;
reading-flow: grid-columns;
reading-flow: grid-rows;
reading-flow: grid-order;
reading-flow: source-order;

/* グローバル値 */
reading-flow: inherit;
reading-flow: initial;
reading-flow: revert;
reading-flow: revert-layer;
reading-flow: unset;
```

### 値

`reading-flow` プロパティは、値として以下のキーワードのいずれかを取ります。

- `normal`
  - : デフォルト値です。読み順は DOM 上の要素の順に従います。

- `flex-visual`
  - : {{glossary("Flex Container", "フレックスコンテナー")}}にのみ影響します。読み順は、 {{cssxref("writing-mode")}} を考慮した上で、`flex` アイテムの視覚的な順序に従います。したがって、`flex-direction: row-reverse` と `reading-flow: flex-visual` が設定された英語の文書では、読み順は左から右になります。

- `flex-flow`
  - : フレックスコンテナーにのみ影響します。読み順は {{cssxref("flex-flow")}} の方向に従います。

- `grid-columns`
  - : {{glossary("Grid Container", "グリッドコンテナー")}}にのみ影響します。読み順は、グリッドアイテムの視覚的な順序に従い、列ごとに、書字方向を考慮して進みます。

- `grid-rows`
  - : グリッドコンテナーにのみ影響します。読み順は、グリッドアイテムの視覚的な順序に従い、行ごとに、書字方向を考慮して進みます。

- `grid-order`
  - : グリッドコンテナーにのみ影響します。 {{cssxref("order")}} プロパティがコンテナーの子要素のいずれかに適用されている場合、読み取り順序は変更された項目の順序に従います。`order` プロパティがグリッドアイテムに適用されていない場合、`grid-order` は `normal` として動作します。

- `source-order`
  - : グリッド、フレックス、ブロックのコンテナーに影響します。自分自身では効果を持たず（コンテナの読み取り順序は DOM 内の要素順序に従う）、コンテナーの子要素に {{cssxref("reading-order")}} プロパティを設定することで読み取り順序を変更可能にします。

## 解説

`reading-flow` プロパティは、`normal` 以外の値に設定した場合、[ブロック](/ja/docs/Glossary/Block/CSS)、[フレックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)のコンテナーの中にある要素の{{glossary("reading order", "読み順")}}を変更します。このようなコンテナーは[読みフローコンテナー](/ja/docs/Glossary/Reading_order#読みフローコンテナー)と呼ばれます。

デフォルトでは、ウェブコンテンツは DOM ソース順に読み上げられます。一般的に、ソース順はコンテンツの合理的な読み順を表すものであり、このコンテンツレイアウトの視覚的順序も同時に反映されるべきです。しかし、視覚的順序やタブ順序がソース順と異なる場合があります。例えば、[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)を用いて異なる端末やユーザーの要件に合わせて文書に複数のフレックスボックスやグリッドレイアウトを適用する場合、ビューポートの幅に基づいてコンテンツの順序が異なることがあります。このような場合、`reading-flow` を使用して、読み順とタブ順序が視覚的な順序を反映するように実現することができます。

場合によっては、読みフローコンテナー内の読み順をさらに微調整したいことがあります。コンテナーの子要素に {{cssxref("reading-order")}} プロパティ値を適用することで、それらを序数グループに分類し、数値順に読み出させることができます。

### `tabindex` との関係

通常はフォーカス不可である一連の読みフローコンテナーの子要素が、[`tabindex="0"`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性によってフォーカス可能にされた場合、それらの読み順は、`reading-flow` および `reading-order` プロパティによって期待される通りに変更されます。これは、{{htmlelement("a")}} または {{htmlelement("button")}} などの対話要素と同様の挙動です。

ただし、正の tabindex 値を使用して読みフローコンテナの内容のタブ順序を変更しようとする試みはすべて無視されます。これは `reading-flow` および `reading-order` の効果によって上書きされるためです。そもそもこれらの値を使用すべきではありません。詳細は [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) を参照してください。`reading-flow` および `reading-order` プロパティは、必要に応じてタブ順序を変更するはるかに良い方法を提供します。

## 公式定義

{{cssinfo}}

## 例

### フレックス値の比較

この例では、フレックスアイテムが逆順に配置されたフレックスコンテナー内で、様々な `reading-flow` 値が及ぼす効果を示します。

#### HTML

このマークアップでは、{{htmlelement("select")}} 要素で様々な `reading-flow` の値を選べるようにしてあり、そしてラッパーの {{htmlelement("div")}} の中に 3 つの {{htmlelement("a")}} 要素が入っています。

```html
<form>
  <label for="reading-flow">読み順を選択:</label>
  <select id="reading-flow">
    <option>normal</option>
    <option>flex-visual</option>
    <option>flex-flow</option>
  </select>
</form>
<div class="wrapper">
  <a href="#">アイテム 1</a>
  <a href="#">アイテム 2</a>
  <a href="#">アイテム 3</a>
</div>
```

#### CSS

{{cssxref("display")}} に `flex` の値を設定することで、`<div>` をフレックスコンテナーとし、{{cssxref("flex-direction")}} の値を `row-reverse` にすることで、フレックスアイテムを行内で DOM 順とは逆に表示しています。最初、`reading-flow` を `normal` に設定していますので、アイテムの読み順やタブ順は DOM ソース順になっています。

{{cssxref("order")}} の値を `1` に設定することで、最初の `<a>` 要素はフレックスのフローの 2 番目と 3 番目のアイテムの後に表示されます。フレックスアイテムの表示順は、左から順に「アイテム 1」、「アイテム 3」、「アイテム 2」の順になりますが、 DOM 上の順序は変化しません。

```css
.wrapper {
  display: flex;
  flex-direction: row-reverse;
  reading-flow: normal;
  gap: 1em;
}

a:first-child {
  order: 1;
}
```

#### JavaScript

このスクリプトでは、`<select>` 要素とラッパーの `<div>` を捕捉し、[`change`](/ja/docs/Web/API/HTMLElement/change_event) イベントリスナーを `<select>` 要素に追加します。新しい値が選択されたとき、それをラッパーの `reading-flow` プロパティの値として設定します。

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### 結果

このデモは次のように表示されます。

{{EmbedLiveSample('Flex value comparison', '', '100px')}}

まず、 `reading-flow: normal` の設定でタブ移動をしてみてください。タブ順は「アイテム 1」、「アイテム 2」、「アイテム 3」となり、これは DOM 内での要素の順序通りです。

それでは、`reading-flow` の値を変更して、またリンクをタブ移動してみてください。

- `flex-visual` の値にすると、アイテムのタブ移動が「アイテム 1」、「アイテム 3」、「アイテム 2」の順序となり、これは適用されたフレックスボックスプロパティの視覚的な表示順序です。
- `flex-flow` の値にすると、アイテムのタブ移動が「アイテム 2」、「アイテム 3」、「アイテム 1」の順序となり、`flex-flow` の方向、この場合は `row-reverse` と一致します。ここで、タブ順は表示順とは逆になります。

### グリッド値の比較

この例では、グリッドコンテナーにおける様々な `reading-flow` 値の効果を示します。

#### HTML

このマークアップでは、{{htmlelement("select")}} 要素で様々な `reading-flow` の値を選べるようにしてあり、そしてラッパーの {{htmlelement("div")}} の中に 4 つの {{htmlelement("a")}} 要素が入っています。

```html
<form>
  <label for="reading-flow">読み順を選択:</label>
  <select id="reading-flow">
    <option>normal</option>
    <option>grid-rows</option>
    <option>grid-columns</option>
    <option>grid-order</option>
  </select>
</form>
<div class="wrapper">
  <a class="a" href="#">アイテム A</a>
  <a class="b" href="#">アイテム B</a>
  <a class="c" href="#">アイテム C</a>
  <a class="d" href="#">アイテム D</a>
</div>
```

#### CSS

{{cssxref("display")}} に `grid` の値を設定することで、`<div>` をグリッドコンテナーとし、{{cssxref("grid-template-columns")}} を使用することで、グリッドアイテムを 3 列に表示しています。{{cssxref("grid-template-areas")}} も設定することで、列内に異なる配置領域を設定し、 `<a>` 要素をこれらの領域に {{cssxref("grid-area")}} で設定します。最初、`reading-flow` を `normal` に設定していますので、アイテムの読み順やタブ順はデフォルトの DOM ソース順になっています。

最後に、{{cssxref("order")}} の値を `1` に最初の `<a>` 要素に設定します。これはグリッド領域の配置を上書きしないのでレイアウトには影響しませんが、後述するように特定の `reading-flow` 値が設定された場合には効果を発揮します。

左から右へ読み進めると、グリッドアイテムの表示順序は「アイテム D」、「アイテム B」、「アイテム C」、「アイテム A」です。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-areas:
    "d b b"
    "c c a";
  reading-flow: normal;
}

.a {
  grid-area: a;
}
.b {
  grid-area: b;
}
.c {
  grid-area: c;
}
.d {
  grid-area: d;
}

a:first-child {
  order: 1;
}
```

#### JavaScript

スクリプトでは、`<select>` 要素とラッパーとなる `<div>` 要素への参照を取得し、`<select>` 要素に [`change`](/ja/docs/Web/API/HTMLElement/change_event) イベントリスナーを追加します。新しい値が選択されると、その値がラッパーの `reading-flow` プロパティとして設定されるようにします。

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### 結果

このデモは次のように表示されます。

{{EmbedLiveSample('Grid value comparison', '', '100px')}}

まず、 `reading-flow: normal` の設定でリンク間をタブ移動をしてみてください。タブ順は「アイテム A」、「アイテム B」、「アイテム C」、「アイテム D」となり、これは DOM 内での要素の順序通りです。

それでは、`reading-flow` の値を変更して、またリンクをタブ移動してみてください。

- `grid-rows` の値にすると、アイテムのタブ移動が行単位の表示順となります。これは「アイテム D」、「アイテム B」、「アイテム C」、「アイテム A」の順序です。
- `grid-columns` の値にすると、アイテムのタブ移動が列単位の表示順となります。これは「アイテム D」、「アイテム C」、「アイテム B」、「アイテム A」の順序です。
- `grid-order` の値にすると、アイテムのタブ移動が列単位の表示順となります。これは「アイテム D」、「アイテム C」、「アイテム B」、「アイテム A」の順序です。
- `grid-order` の値は、アイテムのタブ順序を DOM の順序にしますが、`order` 値の変更は考慮します。 `order: 1;` を最初の `<a>` 要素に設定したので、タブ順は「アイテム B」、「アイテム C」、「アイテム D」、「アイテム A」の順序となります。

### ブロックコンテナーにおける読み順の調整

この例では、ブロックコンテナーに対する `reading-flow: source-order` の値の効果を示します。

#### HTML

このマークアップには、ラッパーの {{htmlelement("div")}} の中に 4 つの {{htmlelement("a")}} 要素があります。

```html
<div class="wrapper">
  <a class="a" href="#">アイテム A</a>
  <a class="b" href="#">アイテム B</a>
  <a class="c" href="#">アイテム C</a>
  <a class="d" href="#">アイテム D</a>
</div>
```

#### CSS

`reading-flow` を `source-order` に設定して、アイテムの読み順またはタブ順を DOM ソース順にしていますが、{{cssxref("reading-order")}} を介して読み順の変更はすることができるように設定します。最初の `<a>` 要素には `reading-order` 値として `1` を設定します。

```css
.wrapper {
  reading-flow: source-order;
}

a:first-child {
  reading-order: 1;
}
```

#### 結果

このデモは次のように表示されます。

{{EmbedLiveSample('Reading flow adjustment on block containers', '', '100px')}}

タブでリンクを移動してみてください。タブ順は「アイテム B」、「アイテム C」、「アイテム D」、「アイテム A」です。DOM 内の要素順序は守られますが、アイテム A は他の要素よりも高い読み順のグループ（デフォルトの `reading-order` 値は `0`）に配置されているため、最後にタブ移動されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("reading-order")}}
- [CSS `reading-flow` examples](https://chrome.dev/reading-flow-examples/) via chrome.dev
