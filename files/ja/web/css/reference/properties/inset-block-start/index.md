---
title: inset-block-start
slug: Web/CSS/Reference/Properties/inset-block-start
original_slug: Web/CSS/inset-block-start
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`inset-block-start`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なブロック方向の先頭のオフセットを定義し、要素の書字方向やテキストの向きに従って物理的な内部位置に対応付けられます。 {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}} のいずれかのプロパティに、 {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値に従って対応します。

この{{glossary("inset properties", "インセットプロパティ")}}は、位置指定されていない要素には効果がありません。

{{InteractiveExample("CSS デモ: inset-block-start")}}

```css interactive-example-choice
writing-mode: horizontal-tb;
```

```css interactive-example-choice
writing-mode: vertical-rl;
```

```css interactive-example-choice
writing-mode: horizontal-tb;
direction: rtl;
```

```css interactive-example-choice
writing-mode: vertical-lr;
```

```html-nolint interactive-example
<section id="default-example">
  <div class="example-container" id="example-element">
    <div id="abspos">
      これは inset-block-start: 50px で絶対位置指定されています。
    </div>
    <p>
      まるで地球の表面から水が引き始めたかのように、通りは泥だらけで、ホルボーン通りを象のようなトカゲのようによちよち歩く、体長 12 メートルほどのメガロサウルスに出会っても不思議ではないでしょう。
    </p>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 0.75em solid;
  padding: 0.75em;
  position: relative;
  width: 100%;
  min-height: 200px;
  unicode-bidi: bidi-override;
}

#abspos {
  background-color: yellow;
  color: black;
  border: 3px solid red;
  position: absolute;
  inset-block-start: 50px;
  inline-size: 140px;
}
```

## 構文

```css
/* <length> 値 */
inset-block-start: 3px;
inset-block-start: 2.4em;
inset-block-start: anchor(end);
inset-block-start: calc(anchor-size(--myAnchor height, 70px) * 2);

/* 包含ブロックの幅または高さに対する <percentage> 値 */
inset-block-start: 10%;

/* キーワード値 */
inset-block-start: auto;

/* グローバル値 */
inset-block-start: inherit;
inset-block-start: initial;
inset-block-start: revert;
inset-block-start: revert-layer;
inset-block-start: unset;
```

### 値

`inset-block-start` プロパティは {{cssxref("left")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ブロック方向の先頭のオフセットの設定

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
  inset-block-start: 20px;
  background-color: #c8c800;
}
```

#### 結果

{{EmbedLiveSample("ブロック方向の先頭のオフセットの設定", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 内部位置を定義する他のプロパティ: {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, {{cssxref("inset-inline-end")}}
- 対応する物理的プロパティ: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
