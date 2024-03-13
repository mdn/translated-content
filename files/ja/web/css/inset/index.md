---
title: inset
slug: Web/CSS/inset
l10n:
  sourceCommit: 9e521726ed1d605756b73a788eaa55498d540821
---

{{CSSRef}}

**`inset`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}} に対応する一括指定です。これは {{cssxref("margin")}} の一括指定における複数値の場合と同じ構文です。

{{EmbedInteractiveExample("pages/css/inset.html")}}

*CSS 論理的プロパティ*の仕様書で定義されているものですが、*論理的*なオフセットを定義するものではありません。これは*物理的*なオフセットであり、要素の書字方向やテキストの向きには関係がありません。

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- {{Cssxref("top")}}
- {{Cssxref("right")}}
- {{Cssxref("bottom")}}
- {{Cssxref("left")}}

## 構文

```css
/* <length> 値 */
inset: 10px; /* すべての辺に適用される値 */
inset: 4px 8px; /* 上/下 左/右 */
inset: 5px 15px 10px; /* 上 左/右 下 */
inset: 2.4em 3em 3em 3em; /* 上 右 下 左 */

/* 包含ブロックの幅 (左/右) または 高さ (上/下) に対する <percentage> */
inset: 10% 5% 5% 5%;

/* キーワード値 */
inset: auto;

/* グローバル値 */
inset: inherit;
inset: initial;
inset: revert;
inset: revert-layer;
inset: unset;
```

### 値

`inset` プロパティは {{cssxref("left")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 要素のオフセットの設定

#### HTML

```html
<div>
  <span class="exampleText">テキストの例</span>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 150px;
  height: 120px;
  position: relative;
}

.exampleText {
  writing-mode: sideways-rl;
  position: absolute;
  inset: 20px 40px 30px 10px;
  background-color: #c8c800;
}
```

#### 結果

{{EmbedLiveSample("要素のオフセットの設定", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 個別指定のボックスのオフセットプロパティ: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}}
- 対応する論理的プロパティの一括指定: {{cssxref("inset-block")}} および {{cssxref("inset-inline")}}
- {{cssxref("margin")}} 一括指定の複数値の構文
