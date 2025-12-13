---
title: reading-order
slug: Web/CSS/Reference/Properties/reading-order
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

**`reading-order`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[読みフローコンテナー](/ja/docs/Glossary/Reading_order#読みフローコンテナー)の子要素が、その要素の兄弟要素に対して相対的に読まれる順序を変更することができることを可能にします。

## 構文

```css
/* <integer> 値 */
reading-order: 1;
reading-order: -1;

/* グローバル値 */
reading-order: inherit;
reading-order: initial;
reading-order: revert;
reading-order: revert-layer;
reading-order: unset;
```

### 値

- {{cssxref("&lt;integer&gt;")}}
  - : この要素が所属する順序グループを表します。

## 解説

要素の[ブロック](/ja/docs/Glossary/Block/CSS)、[フレックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)の親コンテナーが {{cssxref("reading-flow")}} プロパティを `normal` 以外の値に設定している場合、`reading-order` プロパティを使用することができます。これにより、その要素の[読みフロー](/ja/docs/Glossary/Reading_order#読みフロー)位置を兄弟要素に対する相対位置として設定できます。

読みとナビゲーションにおいて、ブロック、フレックス、グリッドコンテナー内の要素は、`reading-order` 値の昇順でソートされます。複数の兄弟要素が同じ `reading-order` 値を持つ場合、それらの項目はコンテナーの `reading-flow` に従ってソートされます。明示的な `reading-order` 値が指定されていない兄弟要素にはデフォルト値 `0` が割り当てるされ、これにより読み取りフローコンテナーの子要素は既定で同じ順序グループに配置されます。

兄弟要素は、番号の小さい順序グループから大きい方へ並べられます。したがって、要素を兄弟要素の後にあるように発生させるには、その要素に `reading-order` 値を `1` 以上設定します。要素を兄弟要素の前にあるように発生させるには、その要素に `reading-order` 値を `-1` 以下設定します。

`reading-order` は読み順とタブ順を定義しますが、視覚的な順序には影響を与えません。

### `tabindex` との関係

通常はフォーカス不可である一連の読み取りフローコンテナの子要素が、[`tabindex="0"`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性によってフォーカス可能にされた場合、それらの読み取り順序は、`reading-flow` および `reading-order` プロパティによって期待される通りに変更されます。これは、{{htmlelement("a")}} や {{htmlelement("button")}} などの対話要素と同様の動作です。

ただし、正の `tabindex` 値を使用して読みフローコンテナーの内容のタブ順序を変更しようとしても、すべて無視されます。これは `reading-flow` および `reading-order` の効果によって上書きされるためです。そもそもこれらの値を使用するべきではありません。詳細は [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) を参照してください。`reading-flow` および `reading-order` プロパティは、必要に応じてタブ順序を変更するはるかに優れた方法を提供します。

## 公式定義

{{cssinfo}}

## 例

### グリッド行の順序

この例は、`reading-order` を使用してグリッドコンテナー内の個々のグリッドアイテムの読み取り順序を制御する方法を示しています。あるグリッドアイテムはデフォルトの `0` よりも低い `reading-order` 値が設定されているため、その兄弟要素よりも先に読み上げられます。別のアイテムにはより高い `reading-order` 値が設定されているため、ソースや表示順序に関係なく、他のアイテムよりも後に読み上げられます。

#### HTML

このマークアップには、6 つの {{htmlelement("a")}} 要素がラッパーの {{htmlelement("div")}} の中に設置されています。

```html
<div class="wrapper">
  <a href="#">アイテム 1</a>
  <a class="bottom" href="#">アイテム 2</a>
  <a href="#">アイテム 3</a>
  <a class="top" href="#">アイテム 4</a>
  <a href="#">アイテム 5</a>
  <a href="#">アイテム 6</a>
</div>
```

#### CSS

`<div>` 要素に対して、[grid-auto-flow](/ja/docs/Web/CSS/Reference/Properties/grid-auto-flow) プロパティを `dense` に設定したため、アイテムはソース順序とは異なる順序で表示されることがあります。クラス名 `top` の `<a>` 要素の `reading-order` プロパティを `-1` に設定しているため、「アイテム 4」が読み順では先頭のアイテムです。クラス名 `bottom` の `<a>` 要素では、`reading-order` プロパティを `21` に設定しているため、「アイテム 4」が読み順で最後のアイテムとなります。残りのアイテムは、`<div>` 要素の {{cssxref("reading-flow")}} プロパティが [grid-rows](/ja/docs/Web/CSS/Reference/Properties/grid-row) に設定されているため、グリッド行順序で順番に処理されます。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-auto-flow: dense;
  reading-flow: grid-rows;
}

.top {
  reading-order: -1;
}

.bottom {
  reading-order: 21;
}
```

#### 結果

このデモは次のように表示されます。

{{EmbedLiveSample('Grid row order', '100%', '100px')}}

タブキーでリンクを移動してみてください。まず「アイテム 4」にタブ移動され、最後に「アイテム 2」がタブ移動される点に注目してください。これは `reading-order` 値が変更する設定になっているためです。その間のアイテムはグリッドの行順にタブ移動されます。

### ソース順の上書き

この例では、奇数番号のアイテムに低い `reading-order` 値が設定されているため、ソースや表示順序に関係なく、グループ内の他のアイテムより先に読み上げられます。

#### HTML

このマークアップでは、5 つの `<a>` 要素がラッパーの {{htmlelement("div")}} の中に設置されています。

```html
<div class="wrapper">
  <a href="#">アイテム 1</a>
  <a href="#">アイテム 2</a>
  <a href="#">アイテム 3</a>
  <a href="#">アイテム 4</a>
  <a href="#">アイテム 5</a>
</div>
```

#### CSS

`<div>` 要素の `reading-flow` プロパティは `source-order` に設定されており、これにより `reading-order` を使用してデフォルトのソース読み順を上書きすることができます。奇数番号の `<a>` 要素は `reading-order` の値が `-1` であるため、偶数番号のアイテムよりも先に読み上げられます。

```css
.wrapper {
  reading-flow: source-order;
}

.wrapper > a {
  display: block;
}

.wrapper a:nth-child(odd) {
  reading-order: -1;
}
```

#### 結果

このデモは次のように表示されます。

{{EmbedLiveSample('Source order override', '100%', '100px')}}

タブキーでリンクを移動してみて、`reading-order` の変更により、「アイテム 1」、「アイテム 3」、「アイテム 5」に先にタブ移動する点に注意してください。その後、アイテムはソース順に移動されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("reading-flow")}}
- [CSS `reading-flow` examples](https://chrome.dev/reading-flow-examples/) via chrome.dev
