---
title: flex-direction
slug: Web/CSS/flex-direction
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{CSSRef}}

**`flex-direction`** は [CSS](/ja/docs/Web/CSS) のプロパティで、主軸の方向や向き（通常または逆方向）を定義することにより、フレックスコンテナー内でフレックスアイテムを配置する方法を設定します。

{{EmbedInteractiveExample("pages/css/flex-direction.html")}}

なお、 `row` および `row-reverse` の値は、フレックスコンテナーの書字方向に影響されます。 [`dir`](/ja/docs/Web/HTML/Global_attributes/dir) 属性が `ltr` である場合は、 `row` は左から右へ向かう水平軸を表し、また `row-reverse` は右から左へ向かう水平軸を表します。一方、 `dir` 属性が `rtl` である場合は、 `row` は右から左へ向かう水平軸を表し、また `row-reverse` は左から右へ向かう水平軸を表します。

## 構文

```css
/* 行のテキストの方向に配置 */
flex-direction: row;

/* <row> と同様だが、逆向き */
flex-direction: row-reverse;

/* 積み重なるように配置する */
flex-direction: column;

/* <column> と同様だが、逆向き */
flex-direction: column-reverse;

/* グローバル値 */
flex-direction: inherit;
flex-direction: initial;
flex-direction: revert;
flex-direction: revert-layer;
flex-direction: unset;
```

### 値

以下の値を指定できます。

- `row`
  - : フレックスコンテナーの主軸は、書字方向と同じに定義されます。 **main-start** および **main-end** の位置は、コンテンツの書字方向と同様になります。
- `row-reverse`
  - : `row` と同様ですが、**main-start** および **main-end** の位置が入れ替わります。
- `column`
  - : フレックスコンテナーの主軸は、ブロック軸と同じになります。 **main-start** および **main-end** の位置は、 writing-mode における **before** および **after** の位置と同じになります。
- `column-reverse`
  - : `column` と同様ですが、 **main-start** および **main-end** の位置が入れ替わります。

## アクセシビリティ

`flex-direction` プロパティを `row-reverse` または `column-reverse` の値で使うと、視覚上の表示と DOM の順序が一致しなくなります。これは、スクリーンリーダーなどの支援技術を使っている視覚障害者に不利な影響を及ぼします。視覚的な (CSS の) 順序が重要である場合は、スクリーンリーダーの利用者は正しい読み上げ順序でアクセスすることができなくなります。

- [Flexbox & the keyboard navigation disconnect — Tink](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [Source Order Matters | Adrian Roselli](https://adrianroselli.com/2015/09/source-order-matters.html)
- [MDN "WCAG を理解する ― ガイドライン 1.3 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.3_—_さまざまな方法で提示できるコンテンツの作成)
- [Understanding Success Criterion 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスコンテナーの列と行の反転

#### HTML

```html live-sample___reversing_flex_container_columns_and_rows
<h4>これは Column-Reverse です</h4>
<div id="col-rev" class="content">
  <div class="box red">A</div>
  <div class="box lightblue">B</div>
  <div class="box yellow">C</div>
</div>
<h4>これは Row-Reverse です</h4>
<div id="row-rev" class="content">
  <div class="box red">A</div>
  <div class="box lightblue">B</div>
  <div class="box yellow">C</div>
</div>
```

#### CSS

```css live-sample___reversing_flex_container_columns_and_rows
.content {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: flex;
}

.box {
  width: 50px;
  height: 50px;
}

#col-rev {
  flex-direction: column-reverse;
}

#row-rev {
  flex-direction: row-reverse;
}

.red {
  background-color: red;
}

.lightblue {
  background-color: lightblue;
}

.yellow {
  background-color: yellow;
}
```

#### 結果

{{EmbedLiveSample('Reversing_flex_container_columns_and_rows', '', '550')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSXRef("flex-flow")}} は `flex-direction` および {{CSSXRef("flex-wrap")}} プロパティの一括指定プロパティです。
- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS フレックスボックスガイド: _[フレックスアイテムの順序](/ja/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)_
