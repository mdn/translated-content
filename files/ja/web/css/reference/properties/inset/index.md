---
title: inset
slug: Web/CSS/Reference/Properties/inset
original_slug: Web/CSS/inset
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`inset`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}} に対応する一括指定です。これは {{cssxref("margin")}} の一括指定における複数値の場合と同じ構文です。

この{{glossary("inset properties", "インセットプロパティ")}}は、 `inset` を含め、位置指定されていない要素には効果がありません。

{{InteractiveExample("CSS デモ: inset")}}

```css interactive-example-choice
inset: 1em;
```

```css interactive-example-choice
inset: 5% 0;
```

```css interactive-example-choice
inset: 2em 50px 20px;
```

```css interactive-example-choice
inset: 10px 30% 20px 0;
```

```css interactive-example-choice
inset: 0;
```

```html-nolint interactive-example
<section id="default-example">
  <div class="example-container">
    <div id="example-element">これは絶対位置指定されています。</div>
    <p>
      まるで地球の表面から水が引き始めたかのように、通りは泥だらけで、ホルボーン通りを象のようなトカゲのようによちよち歩く、体長 12 メートルほどのメガロサウルスに出会っても不思議ではないでしょう。
    </p>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 0.75em solid #ad1457;
  padding: 0.75em;
  text-align: left;
  position: relative;
  width: 100%;
  min-height: 200px;
}

#example-element {
  background-color: #07136c;
  border: 6px solid #ffa000;
  color: white;
  position: absolute;
  inset: 0;
}
```

これは [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)の仕様書で定義されているものですが、論理的なオフセットを定義するものではありません。これは物理的なオフセットであり、要素の書字方向やテキストの向きには関係がありません。

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
inset: calc(anchor(50%) + 10px) anchor(self-start) auto auto;
inset: anchor-size(block) calc(anchor(50%) + 10px) auto
  calc(anchor-size(width) / 4);

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

- {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}}
- {{cssxref("inset-block")}} および {{cssxref("inset-inline")}}
- {{cssxref("position")}}
- [CSS 位置指定レイアウト](/ja/docs/Web/CSS/Guides/Positioned_layout)モジュール
- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)
