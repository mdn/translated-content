---
title: inset-block
slug: Web/CSS/Reference/Properties/inset-block
original_slug: Web/CSS/inset-block
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`inset-block`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素における論理的なブロック方向の先頭および末尾からの論理的な内部位置を定義し、要素の書字方向やテキストの向きに従って物理的な内部位置に対応付けられます。 {{cssxref("top")}} と {{cssxref("bottom")}}、または {{cssxref("right")}} と {{cssxref("left")}} のいずれかのプロパティに、 {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値に従って対応します。

この{{glossary("inset properties", "インセットプロパティ")}}は、位置指定されていない要素には効果がありません。

{{InteractiveExample("CSS デモ: inset-block")}}

```css interactive-example-choice
inset-block: 10px 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inset-block: 20px 40px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
inset-block: 5% 20%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inset-block: 1rem auto;
writing-mode: vertical-lr;
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

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block-start")}}

## 構文

```css
/* <length> 値 */
inset-block: 3px 10px;
inset-block: 2.4em 3em;
inset-block: 10px; /* 値が先頭と末尾の両方に適用される */
inset-block: auto anchor(start);
inset-block: 10em anchor-size(--myAnchor height, 10%);

/* 包含ブロックの幅または高さに対する <percentage> 値 */
inset-block: 10% 5%;

/* キーワード値 */
inset-block: auto;

/* グローバル値 */
inset-block: inherit;
inset-block: initial;
inset-block: revert;
inset-block: revert-layer;
inset-block: unset;
```

### 値

`inset-block` プロパティは {{cssxref("left")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ブロック方向の先頭と末尾のオフセットの設定

#### HTML

```html
<div>
  <p class="exampleText">テキストの例</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  position: relative;
  inset-block: 20px 50px;
  background-color: #c8c800;
}
```

#### 結果

{{EmbedLiveSample("ブロック方向の先頭と末尾のオフセットの設定", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 対応する物理的プロパティ: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}}
- 対応する物理的な一括指定: {{cssxref("inset")}}
- 対応するインライン方向の一括指定: {{cssxref("inset-inline")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
