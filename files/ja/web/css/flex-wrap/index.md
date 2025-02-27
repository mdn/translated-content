---
title: flex-wrap
slug: Web/CSS/flex-wrap
l10n:
  sourceCommit: 1f12a4156d4aec63d8466c49a39b1ac76d8a5735
---

{{CSSRef}}

**`flex-wrap`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フレックスアイテムを単一行に押し込むか、あるいは複数行に折り返してもよいかを指定します。折り返しを許可する場合は、行を積み重ねる方向の制御も可能です。

{{EmbedInteractiveExample("pages/css/flex-wrap.html")}}

{{cssxref("flex-flow")}} プロパティは、 {{CSSXRef("flex-direction")}} と `flex-wrap` の両プロパティを一括指定することができ、それぞれフレックスコンテナーの主軸及び交差軸を定義します。

## 構文

```css
flex-wrap: nowrap; /* 既定値 */
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/* グローバル値 */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: revert;
flex-wrap: revert-layer;
flex-wrap: unset;
```

### 値

`flex-wrap` プロパティは以下の値のリストから選択した単一のキーワードで指定します。

- `nowrap`
  - : フレックスアイテムは単一行に配置され、フレックスコンテナーからはみ出すこともあります。交差軸の先頭は、 {{cssxref("flex-direction")}} の値に応じて、[インラインの先頭またはブロックの先頭](/ja/docs/Glossary/Flow_relative_values)のどちらかと等しくなります。
- `wrap`
  - : フレックスアイテムは複数行に分割されます。交差軸の先頭は、現在の[書字方向](/ja/docs/Web/CSS/CSS_writing_modes)および {{cssxref("flex-direction")}} の値に応じて、[インラインの先頭またはブロックの先頭](/ja/docs/Glossary/Flow_relative_values)のどちらかと等しくなります。
- `wrap-reverse`
  - : `wrap` と同様に動作しますが、交差軸の先頭と末尾が入れ替わります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスコンテナーの wrap 値の設定

#### HTML

```html live-sample___setting_flex_container_wrap_values
<h4>This is an example for flex-wrap:wrap</h4>
<div class="content">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:nowrap</h4>
<div class="content1">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:wrap-reverse</h4>
<div class="content2">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
```

#### CSS

```css live-sample___setting_flex_container_wrap_values
/* 共通スタイル */
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

/* フレックスボックススタイル */
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

{{ EmbedLiveSample('Setting flex container wrap values', '', '700') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSXRef("flex-direction")}}
- {{CSSXRef("flex-flow")}} 一括指定
- [フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [フレックスアイテムの折り返しをマスターする](/ja/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/CSS_flexible_box_layout)モジュール
