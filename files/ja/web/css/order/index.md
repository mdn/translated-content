---
title: order
slug: Web/CSS/order
---

{{CSSRef}}

**`order`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フレックスコンテナーやグリッドコンテナーの中で、アイテムを並べる順序を設定します。コンテナー内のアイテムは `order` の値の昇順に配置され、さらにソースコード内の順序で配置されます。

{{EmbedInteractiveExample("pages/css/order.html")}}

## 構文

```css
/* <integer> 値 */
order: 5;
order: -5;

/* グローバル値 */
order: inherit;
order: initial;
order: revert;
order: unset;
```

`order` は要素の*視覚上の順序*にのみ影響を与えるものであり、論理的な順序やタブオーダーには影響を与えません。`order` を [speech](/ja/docs/Web/CSS/@media#speech) など、視覚的ではないメディアで使用してはいけません。

### 値

- {{cssxref("&lt;integer&gt;")}}
  - : アイテムが割り当てられる順序グループを表します。

## アクセシビリティの考慮事項

`order` プロパティを使うと、視覚上の表示と DOM の順序が一致しなくなります。これは、スクリーンリーダーなどの支援技術を使っている視覚障害者に不利な影響を及ぼします。視覚的な (CSS の) 順序が重要である場合は、スクリーンリーダーの利用者は正しい読み上げ順序でアクセスすることができなくなります。

- [Flexbox & the keyboard navigation disconnect — Tink](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [Source Order Matters | Adrian Roselli](https://adrianroselli.com/2015/09/source-order-matters.html)
- [MDN "WCAG を理解する ― ガイドライン 1.3 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Ordering_items_in_a_flex_container">フレックスコンテナー内のアイテムの並べ替え</h3>

以下の CSS コードは伝統的な、コンテンツブロックを囲む 2 つのサイドバーによるレイアウトを生成します。 Flexible Box Layout モジュールでは、垂直方向のサイズが同じで水平方向の空間を可能な限り多く使用するブロックを、自動的に作成します。

#### HTML

```html
<header>...</header>
<main>
  <article>Article</article>
  <nav>Nav</nav>
  <aside>Aside</aside>
</main>
<footer>...</footer>
```

#### CSS

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS フレックスボックスガイド: _[フレックスアイテムの並べ替え](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_
- CSS グリッドガイド: _[CSS グリッドレイアウトとアクセシビリティ](/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)_
