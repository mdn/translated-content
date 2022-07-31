---
title: flex-wrap
slug: Web/CSS/flex-wrap
tags:
  - CSS
  - CSS フレックスボックス
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.flex-wrap
translation_of: Web/CSS/flex-wrap
---
{{ CSSRef}}

**`flex-wrap`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フレックスアイテムを単一行に押し込むか、あるいは複数行に折り返してもよいかを指定します。折り返しを許可する場合は、行を積み重ねる方向の制御も可能です。

{{EmbedInteractiveExample("pages/css/flex-wrap.html")}}

他のプロパティや詳細情報については [CSS フレックスボックスの使用](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)をご覧ください。

## 構文

```css
flex-wrap: nowrap; /* 既定値 */
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/* グローバル値 */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: revert;
flex-wrap: unset;
```

`flex-wrap` プロパティは次の値のリストから選択した単一のキーワードで指定します。

### 値

以下の値を利用することができます。

- `nowrap`
  - : フレックスアイテムは単一行に配置され、フレックスコンテナーからあふれることもあります。 `cross-start` は、 {{cssxref("flex-direction")}} の値に応じて `start` または `before` と同一になります。
- `wrap`
  - : フレックスアイテムは複数行に分割されます。 `cross-start` は `flex-direction` の値に応じて `start` または `before` と同一になり、 `cross-end` は、指定された `cross-start` の反対側になります。
- `wrap-reverse`
  - : `wrap` と同様に動作しますが、 `cross-start` と `cross-end` が入れ替わります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_flex_container_wrap_values">フレックスコンテナーの wrap 値の設定</h3>

#### HTML

```html
<h4>This is an example for flex-wrap:wrap </h4>
<div class="content">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:nowrap </h4>
<div class="content1">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:wrap-reverse </h4>
<div class="content2">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
```

#### CSS

```css
/* Common Styles */
.content,
.content1,
.content2 {
  color: #fff;
  font: 100 24px/100px sans-serif;
  height: 150px;
  width: 897px;
  text-align: center;
}

.content div,
.content1 div,
.content2 div {
  height: 50%;
  width: 300px;
}
.red {
  background: orangered;
}
.green {
  background: yellowgreen;
}
.blue {
  background: steelblue;
}

/* Flexbox Styles */
.content {
  display: flex;
  flex-wrap: wrap;
}
.content1 {
  display: flex;
  flex-wrap: nowrap;
}
.content2 {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

#### 結果

{{ EmbedLiveSample('Setting_flex_container_wrap_values', '700px', '700px', '', 'Web/CSS/flex-wrap') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS フレックスボックスガイド: _[フレックスアイテムの折り返しのマスター](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)_
