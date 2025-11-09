---
title: order
slug: Web/CSS/Reference/Properties/order
original_slug: Web/CSS/order
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`order`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フレックスコンテナーやグリッドコンテナーの中で、アイテムを並べる順序を設定します。コンテナー内のアイテムは `order` の値の昇順に配置され、さらにソースコード内の順序で配置されます。明示的に `order` 値が指定されていないアイテムには、既定値である `0` が代入されます。

{{InteractiveExample("CSS デモ: order")}}

```css interactive-example-choice
order: 0;
```

```css interactive-example-choice
order: 3;
```

```css interactive-example-choice
order: -1;
```

```css interactive-example-choice
order: 2;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">Box 1:</div>
  <div style="order: 1">Box 2: <code>order: 1;</code></div>
  <div style="order: 2">Box 3: <code>order: 2;</code></div>
  <div style="order: 2">Box 4: <code>order: 2;</code></div>
  <div style="order: 3">Box 5: <code>order: 3;</code></div>
</section>
```

```css interactive-example
.default-example {
  max-height: 300px;
  display: flex;
  flex-flow: column;
}

.default-example > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 0.5rem;
  padding: 0.5rem;
  flex: 1;
}

#example-element {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
}

#example-element::after {
  content: attr(style);
  outline: 2px dashed;
  font-family: monospace;
}
```

上記のデモでは、左側のオプションを選択して、ピンクのボックスの `order` プロパティの値を変更してください。水色のボックスには、固定の `order` 値が指定されています。

ソースの順序による効果に注意してください。例えば、`order: 2;` を選択すると、ピンクのボックスは `order: 2;` の 2 つの青いボックスの前に配置されます。これは、ソースコードではピンクのボックスが青いボックスの前に表示されるためです。

## 構文

```css
/* <integer> 値 */
order: 5;
order: -5;

/* グローバル値 */
order: inherit;
order: initial;
order: revert;
order: revert-layer;
order: unset;
```

`order` は要素の視覚上の順序にのみ影響を与えるものであり、論理的な順序やタブオーダーには影響を与えないので、 [speech](https://drafts.csswg.org/css-speech/) など、視覚的ではないメディアで使用してはいけません。

[CSS 表示方法](/ja/docs/Web/CSS/Guides/Display)モジュールで定義されているこのプロパティは、グリッドおよびフレックスアイテムにのみ影響します。親要素の {{cssxref("display")}} プロパティがフレックスまたはグリッドコンテナーを作成していない要素に `order` を設定しても、効果はありません。

### 値

- {{cssxref("&lt;integer&gt;")}}
  - : アイテムが割り当てられる順序グループを表します。

## アクセシビリティ

`order` プロパティを指定すると、コンテンツの視覚的な表示と DOM の順序が一致しなくなります。これにより、スクリーンリーダーなどの支援技術を使用して操作を行う視覚障害のあるユーザーに悪影響が及びます。視覚的な順序が DOM の順序と異なる場合、ユーザーはコンテンツへのアクセス方法によって異なる体験をしてしまいます。

- [Flexbox & the keyboard navigation disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) (Tink, 2016)
- [Source Order Matters](https://adrianroselli.com/2015/09/source-order-matters.html) (Adrian Roselli, 2015)
- [MDN "WCAG を理解する ― ガイドライン 1.3 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.3_—_さまざまな方法で提示できるコンテンツの作成)
- [Understanding Success Criterion 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスコンテナー内のアイテムの並べ替え

この例では、2 つのサイドバーを備えた伝統的なレイアウトを作成します。

#### HTML

ヘッダー、フッター、および本文領域が含まれます。本文には、記事と 2 つのサイドバーが含まれます。その順序に注意してください。 CSS の `order` プロパティを使用して、視覚的な順序を変更します。

```html
<header>ヘッダー</header>
<main>
  <article>記事</article>
  <nav>ナビ</nav>
  <aside>余談</aside>
</main>
<footer>フッター</footer>
```

#### CSS

メイン領域は、[フレキシブルボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout) モジュールの機能を使用してスタイルを設定します。{{cssxref("display")}} を `flex` に設定すると、{{htmlelement("main")}} 要素がフレックスコンテナーになります。既定では、これにより、垂直サイズが等しいフレックスアイテムが作成されます。サイドバーにはどちらも絶対的な {{cssxref("width")}} が指定されており、 {{htmlelement("article")}} は[正の余白](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios#正と負の余白)を、 {{cssxref("flex")}} 一括指定で設定した {{cssxref("flex-grow")}} 係数に応じて消費します。

次に、フレックスコンテナーの 3 つの子要素それぞれに異なる `order` プロパティの値を設定します。これは、 CSS が HTML で宣言された順序ではなく、その要素の視覚的な順序を定義していることを意味します。

```css
main {
  display: flex;
  text-align: center;
}
main > article {
  flex: 1;
  order: 2;
}
main > nav {
  width: 200px;
  order: 1;
}
main > aside {
  width: 200px;
  order: 3;
}
```

#### 結果

{{ EmbedLiveSample('Ordering_items_in_a_flex_container') }}

`<article>` はソースの順序では最初に現れますが、視覚的には中央に表示されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [フレックスアイテムの順序](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [グリッドレイアウトとアクセシビリティ](/ja/docs/Web/CSS/Guides/Grid_layout/Accessibility)
- [CSS 表示方法](/ja/docs/Web/CSS/Guides/Display)モジュール
- {{glossary("Reading order")}}
