---
title: flex-direction
slug: Web/CSS/flex-direction
tags:
  - CSS
  - CSS フレックスボックス
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.flex-direction
translation_of: Web/CSS/flex-direction
---
{{CSSRef}}

**`flex-direction`** は [CSS](/ja/docs/Web/CSS) のプロパティで、主軸の方向や向き (通常または逆方向) を定義することにより、フレックスコンテナー内でフレックスアイテムを配置する方法を設定します。

{{EmbedInteractiveExample("pages/css/flex-direction.html")}}

なお、 `row` および `row-reverse` の値は、フレックスコンテナーの書字方向に影響されます。 {{HTMLAttrxRef("dir")}} 属性が `ltr` である場合は、 `row` は左から右へ向かう水平軸を表し、また `row-reverse` は右から左へ向かう水平軸を表します。一方、 `dir` 属性が `rtl` である場合は、 `row` は右から左へ向かう水平軸を表し、また `row-reverse` は左から右へ向かう水平軸を表します。

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

## アクセシビリティの考慮

`flex-direction` プロパティを `row-reverse` または `column-reverse` の値で使うと、視覚上の表示と DOM の順序が一致しなくなります。これは、画面リーダーなどの支援技術を使っている視覚障害者に不利な影響を及ぼします。視覚的な (CSS の) 順序が重要である場合は、画面リーダーの利用者は正しい読み上げ順序でアクセスすることができなくなります。

- [Flexbox & the keyboard navigation disconnect — Tink](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [Source Order Matters | Adrian Roselli](https://adrianroselli.com/2015/09/source-order-matters.html)
- [MDN "WCAG を理解する ― ガイドライン 1.3 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Reversing_flex_container_columns_and_rows">フレックスコンテナーの列と行の反転</h3>

#### HTML

```html
<h4>This is a Column-Reverse</h4>
<div id="col-rev" class="content">
  <div class="box red">A</div>
  <div class="box lightblue">B</div>
  <div class="box yellow">C</div>
</div>
<h4>This is a Row-Reverse</h4>
<div id="row-rev" class="content">
  <div class="box red">A</div>
  <div class="box lightblue">B</div>
  <div class="box yellow">C</div>
</div>
```

#### CSS

```css
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

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS フレックスボックスガイド: _[フレックスアイテムの並べ替え](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_
